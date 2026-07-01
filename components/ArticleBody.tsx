export default function ArticleBody({ text }: { text: string }) {
  const paragraphs = text.split(/\n\n+/);

  return (
    <div className="prose">
      {paragraphs.map((para, i) => {
        if (para.startsWith("## ")) return <h2 key={i}>{para.replace("## ", "")}</h2>;
        if (para.startsWith("### ")) return <h3 key={i}>{para.replace("### ", "")}</h3>;
        if (para.startsWith("- ") || para.startsWith("* ")) {
          const items = para.split("\n").filter(l => l.startsWith("- ") || l.startsWith("* "));
          return <ul key={i}>{items.map((item, j) => <li key={j}>{item.replace(/^[-*] /, "")}</li>)}</ul>;
        }
        if (para.startsWith("> ")) {
          return <blockquote key={i}>{para.replace(/^> /, "")}</blockquote>;
        }
        // Bold and italic inline
        const html = para
          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.+?)\*/g, "<em>$1</em>");
        return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </div>
  );
}
