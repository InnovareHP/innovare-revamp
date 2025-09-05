interface OTPEmailProps {
  otp: string;
}

export function OTPEmail({ otp }: OTPEmailProps) {
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
        Your One-Time Password (OTP)
      </h2>

      <p style={{ marginBottom: "12px" }}>
        Please use the OTP code below to complete your login:
      </p>

      <div
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          backgroundColor: "#ffffff",
          padding: "16px 32px",
          borderRadius: "8px",
          display: "inline-block",
          letterSpacing: "6px",
          color: "#1e40af",
          border: "2px dashed #bde0fe",
        }}
      >
        {otp}
      </div>

      <p style={{ marginTop: "24px", fontSize: "14px", color: "#666" }}>
        This code is valid only for a short time. If it expires, please request
        a new one.
      </p>

      <p style={{ fontSize: "12px", color: "#999" }}>
        If you didn&apos;t request this code, you can safely ignore this email.
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
