// components/blog/BlogContent.tsx
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownComponents } from "../content-markdown/content-markdown";

const BlogContent = ({ content }: { content: string }) => {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={MarkdownComponents}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default BlogContent;
