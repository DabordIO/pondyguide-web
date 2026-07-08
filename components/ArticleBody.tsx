function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const ALLOWED_HREF = /^(https?:\/\/|mailto:|\/)/i;

export default function ArticleBody({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className="prose">
      {paragraphs.map((para, i) => {
        if (para.startsWith("## ")) return <h2 key={i}>{escapeHtml(para.replace("## ", ""))}</h2>;
        if (para.startsWith("### ")) return <h3 key={i}>{escapeHtml(para.replace("### ", ""))}</h3>;
        if (para.startsWith("- ") || para.startsWith("* ")) {
          const items = para.split("\n").filter(l => l.startsWith("- ") || l.startsWith("* "));
          return <ul key={i}>{items.map((item, j) => <li key={j}>{escapeHtml(item.replace(/^[-*] /, ""))}</li>)}</ul>;
        }
        if (para.startsWith("> ")) {
          return <blockquote key={i}>{escapeHtml(para.replace(/^> /, ""))}</blockquote>;
        }
        // Bold, italic, and link inline — escape first, then apply markdown transforms
        const html = escapeHtml(para)
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>")
          .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, linkText, url) =>
            ALLOWED_HREF.test(url) ? `<a href="${url}">${linkText}</a>` : linkText
          );
        return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </div>
  );
}
