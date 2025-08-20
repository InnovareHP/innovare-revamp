interface MagicLinkProps {
  magicLink: string;
}

export function MagicLink({ magicLink }: MagicLinkProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
      <p>Click the button below to securely log in:</p>

      <a
        href={magicLink}
        style={{
          display: "inline-block",
          padding: "12px 24px",
          backgroundColor: "#4f46e5",
          color: "#ffffff",
          textDecoration: "none",
          borderRadius: "6px",
          fontWeight: "bold",
        }}
      >
        Sign In with Magic Link
      </a>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        If you didn&apos;t request this link, you can safely ignore this email.
      </p>
    </div>
  );
}
