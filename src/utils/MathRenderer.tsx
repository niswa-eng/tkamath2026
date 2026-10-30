import React from 'react';
import katex from 'katex';

interface MathRendererProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export const MathRenderer: React.FC<MathRendererProps> = ({ content, className = '', inline = true }) => {
  if (!content) return null;

  // 1. Convert literal '\n' strings into actual newlines
  const processed = content.replace(/\\n/g, '\n');

  // 2. Helper to render text with markdown bold and cleaned LaTeX entities outside of math
  const renderTextSegment = (text: string, keyPrefix: string) => {
    const cleanText = text
      .replace(/\\implies/g, ' → ')
      .replace(/\\rightarrow/g, ' → ')
      .replace(/\\dots/g, '...')
      .replace(/\\times/g, ' × ')
      .replace(/\\le/g, ' ≤ ')
      .replace(/\\ge/g, ' ≥ ')
      .replace(/\\neq/g, ' ≠ ')
      .replace(/\\approx/g, ' ≈ ')
      .replace(/\\circ/g, '°');

    const lines = cleanText.split('\n');
    return lines.map((line, lineIdx) => {
      const boldParts: React.ReactNode[] = [];
      const boldRegex = /\*\*(.*?)\*\*/g;
      let lastBIdx = 0;
      let bMatch: RegExpExecArray | null;

      while ((bMatch = boldRegex.exec(line)) !== null) {
        if (bMatch.index > lastBIdx) {
          boldParts.push(line.substring(lastBIdx, bMatch.index));
        }
        boldParts.push(
          <strong key={`b-${keyPrefix}-${lineIdx}-${bMatch.index}`} className="font-bold text-slate-900">
            {bMatch[1]}
          </strong>
        );
        lastBIdx = bMatch.index + bMatch[0].length;
      }
      if (lastBIdx < line.length) {
        boldParts.push(line.substring(lastBIdx));
      }

      return (
        <React.Fragment key={`line-${keyPrefix}-${lineIdx}`}>
          {boldParts}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  // If the content is purely a raw LaTeX expression without $ delimiters (e.g. \frac{a}{b})
  const hasDollar = processed.includes('$');
  const hasLatexCommands = /\\(frac|times|le|ge|sqrt|approx|cdot|pm|degree|circ|neq|sim|cong)/.test(processed);

  if (!hasDollar && hasLatexCommands) {
    try {
      const html = katex.renderToString(processed, {
        displayMode: !inline,
        throwOnError: false,
      });
      return (
        <span
          className={className}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      // Fallback
    }
  }

  // 3. Match display math $$...$$ and inline math $...$
  const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(processed)) !== null) {
    if (match.index > lastIndex) {
      parts.push(
        <span key={`txt-${lastIndex}`}>
          {renderTextSegment(processed.substring(lastIndex, match.index), `txt-${lastIndex}`)}
        </span>
      );
    }

    const raw = match[0];
    const isDisplay = raw.startsWith('$$');
    const mathStr = isDisplay ? raw.slice(2, -2).trim() : raw.slice(1, -1).trim();

    try {
      const html = katex.renderToString(mathStr, {
        displayMode: isDisplay,
        throwOnError: false,
      });
      parts.push(
        <span
          key={`math-${match.index}`}
          className={isDisplay ? 'block my-2 text-center' : 'inline-block mx-0.5 align-middle'}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      parts.push(<span key={`fallback-${match.index}`}>{raw}</span>);
    }

    lastIndex = match.index + raw.length;
  }

  if (lastIndex < processed.length) {
    parts.push(
      <span key={`txt-${lastIndex}`}>
        {renderTextSegment(processed.substring(lastIndex), `txt-${lastIndex}`)}
      </span>
    );
  }

  return <span className={className}>{parts}</span>;
};

export default MathRenderer;
