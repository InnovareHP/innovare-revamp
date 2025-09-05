interface MagicLinkProps {
  magicLink: string;
}

export function MagicLink({ magicLink }: MagicLinkProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f8ff", // light sky blue background
        padding: "24px",
        borderRadius: "10px",
        maxWidth: "600px",
        margin: "0 auto",
        border: "1px solid #bde0fe",
        color: "#333",
        lineHeight: "1.6",
      }}
    >
      <h2 style={{ color: "skyblue", marginBottom: "16px" }}>
        Sign in to your account
      </h2>

      <p>Click the button below to securely log in using your magic link:</p>

      <div style={{ marginTop: "16px" }}>
        <a
          href={magicLink}
          style={{
            display: "inline-block",
            padding: "12px 24px",
            backgroundColor: "skyblue",
            color: "#ffffff",
            textDecoration: "none",
            borderRadius: "6px",
            fontWeight: "bold",
          }}
        >
          Sign In with Magic Link
        </a>
      </div>

      <p style={{ marginTop: "24px", fontSize: "14px", color: "#666" }}>
        If you didn’t request this link, you can safely ignore this email.
      </p>

      <hr style={{ margin: "24px 0", borderColor: "#e0f0ff" }} />

      <p style={{ fontSize: "12px", color: "#999" }}>
        InnovareHP ·{" "}
        <a
          href="https://www.innovarehp.com"
          style={{ color: "skyblue", textDecoration: "none" }}
        >
          www.innovarehp.com
        </a>
      </p>
    </div>
  );
}
