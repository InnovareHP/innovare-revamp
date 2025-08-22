// components/blog/MarkdownComponents.tsx
import type { Components } from "react-markdown";

export const MarkdownComponents: Components = {
  // Headings
  h1: ({ children, ...props }) => (
    <h1
      className="text-4xl font-bold text-gray-900 mb-6 mt-8 leading-tight border-b border-gray-200 pb-4"
      {...props}
    >
      {children}
    </h1>
  ),

  h2: ({ children, ...props }) => {
    const id = String(children ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
    return (
      <h2
        id={id}
        className="text-3xl font-bold text-gray-900 mb-4 mt-12 leading-tight scroll-mt-20"
        {...props}
      >
        <a
          href={`#${id}`}
          className="group hover:text-blue-600 transition-colors"
        >
          {children}
          <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-500">
            #
          </span>
        </a>
      </h2>
    );
  },

  h3: ({ children, ...props }) => {
    const id = String(children ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-");
    return (
      <h3
        id={id}
        className="text-2xl font-semibold text-gray-800 mb-3 mt-8 leading-tight scroll-mt-20"
        {...props}
      >
        <a
          href={`#${id}`}
          className="group hover:text-blue-600 transition-colors"
        >
          {children}
          <span className="opacity-0 group-hover:opacity-100 ml-2 text-blue-500">
            #
          </span>
        </a>
      </h3>
    );
  },

  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-semibold text-gray-800 mb-3 mt-6" {...props}>
      {children}
    </h4>
  ),

  // Paragraphs
  p: ({ children, ...props }) => (
    <p className="text-gray-700 leading-relaxed mb-6 text-lg" {...props}>
      {children}
    </p>
  ),

  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-none space-y-2 mb-6 ml-4" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol
      className="list-decimal list-inside space-y-2 mb-6 ml-4 text-gray-700"
      {...props}
    >
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="relative pl-6 text-gray-700" {...props}>
      <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rounded-full" />
      {children}
    </li>
  ),

  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-blue-500 bg-blue-50 p-6 my-8 rounded-r-lg relative"
      {...props}
    >
      <div className="absolute top-4 left-4 text-blue-500 text-4xl font-serif"></div>
      <div className="ml-8 text-gray-700 italic text-lg leading-relaxed">
        {children}
      </div>
    </blockquote>
  ),

  // Code (inline + block)
  code: ({ children, className, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <div className="bg-gray-900 rounded-lg p-6 my-8 overflow-x-auto">
        <code
          className="text-green-400 font-mono text-sm leading-relaxed"
          {...props}
        >
          {children}
        </code>
      </div>
    );
  },

  // Tables
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-8">
      <table
        className="min-w-full border border-gray-200 rounded-lg overflow-hidden"
        {...props}
      >
        {children}
      </table>
    </div>
  ),

  thead: ({ children, ...props }) => (
    <thead className="bg-gray-50" {...props}>
      {children}
    </thead>
  ),

  th: ({ children, ...props }) => (
    <th
      className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b border-gray-200"
      {...props}
    >
      {children}
    </th>
  ),

  td: ({ children, ...props }) => (
    <td
      className="px-6 py-4 text-sm text-gray-700 border-b border-gray-200"
      {...props}
    >
      {children}
    </td>
  ),

  // Links
  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-2 transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),

  // Special boxes via HTML in markdown (e.g., <div class="key-takeaway">...</div>)
  div: ({ children, className, ...props }) => {
    if (className?.includes("medical-alert")) {
      return (
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-red-500 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800 mb-2">
                Medical Alert
              </h3>
              <div className="text-sm text-red-700">{children}</div>
            </div>
          </div>
        </div>
      );
    }

    if (className?.includes("key-takeaway")) {
      return (
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg
                className="w-5 h-5 text-green-500 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800 mb-2">
                Key Takeaway
              </h3>
              <div className="text-sm text-green-700">{children}</div>
            </div>
          </div>
        </div>
      );
    }

    if (className?.includes("stats-box")) {
      return (
        <div className="bg-blue-50 border border-blue-200 p-6 my-8 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            By the Numbers
          </h3>
          <div className="text-blue-800">{children}</div>
        </div>
      );
    }

    return (
      <div className={className} {...props}>
        {children}
      </div>
    );
  },
};
