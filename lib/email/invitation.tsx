interface InvitationEmailProps {
  invitation: {
    email: string;
    organizationName: string;
    inviterName: string;
    inviteLink: string;
    rejectLink?: string; // optional
  };
}

export const InvitationEmail = ({ invitation }: InvitationEmailProps) => {
  return (
    <html>
      <body
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f0f8ff", // light sky blue background
          padding: "24px",
          borderRadius: "10px",
          maxWidth: "600px",
          margin: "0 auto",
          border: "1px solid #bde0fe",
          color: "#333",
        }}
      >
        <h2 style={{ color: "skyblue", marginBottom: "16px" }}>
          You&apos;re invited to join {invitation.organizationName}!
        </h2>

        <p>
          Hi <strong>{invitation.email}</strong>,
          <br />
          <strong>{invitation.inviterName}</strong> has invited you to join{" "}
          <strong>{invitation.organizationName}</strong> on InnovareHP.
        </p>

        <p style={{ marginTop: "16px" }}>
          Click below to accept or reject this invitation:
        </p>

        <div style={{ marginTop: "16px" }}>
          <a
            href={invitation.inviteLink}
            style={{
              display: "inline-block",
              padding: "12px 24px",
              backgroundColor: "skyblue",
              color: "#ffffff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              marginRight: "12px",
            }}
          >
            Accept Invitation
          </a>

          {invitation.rejectLink && (
            <a
              href={invitation.rejectLink}
              style={{
                display: "inline-block",
                padding: "12px 24px",
                backgroundColor: "#dc2626",
                color: "#ffffff",
                textDecoration: "none",
                borderRadius: "6px",
                fontWeight: "bold",
              }}
            >
              Reject Invitation
            </a>
          )}
        </div>

        <p style={{ marginTop: "24px", fontSize: "14px", color: "#666" }}>
          If you didn&apos;t expect this invitation, you can safely ignore this
          email.
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
      </body>
    </html>
  );
};

export default InvitationEmail;
