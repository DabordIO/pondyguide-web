function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ALLOWED_HREF = /^(https?:\/\/|mailto:|\/)/i;
const LINK_STYLE = 'color:#d4711a;text-decoration:underline;text-underline-offset:3px';

export default function FaqAnswer({ text, style }: { text: string; style?: React.CSSProperties }) {
  const html = escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, linkText, url) =>
      ALLOWED_HREF.test(url) ? `<a href="${url}" style="${LINK_STYLE}">${linkText}</a>` : linkText
    );
  return <p style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}
