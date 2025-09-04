interface OTPEmailProps {
  otp: string;
}

export function OTPEmail({ otp }: OTPEmailProps) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5" }}>
      <p>Your one-time password (OTP) is:</p>

      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          backgroundColor: "#f3f4f6",
          padding: "12px 24px",
          borderRadius: "6px",
          display: "inline-block",
          letterSpacing: "4px",
        }}
      >
        {otp}
      </div>

      <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
        Please enter this code to complete your login. This code will expire
        shortly.
      </p>

      <p style={{ fontSize: "12px", color: "#888" }}>
        If you didn&apos;t request this code, you can safely ignore this email.
      </p>
    </div>
  );
}
