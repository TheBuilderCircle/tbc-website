"use client";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 15px",
  border: "1px solid rgba(20,33,31,0.12)",
  borderRadius: 10,
  fontSize: 15,
  color: "var(--tbc-text)",
  background: "var(--tbc-input-bg)",
};

const labelTextStyle: React.CSSProperties = {
  font: "600 13px/1 'Inter'",
  color: "var(--tbc-text)",
  display: "block",
  marginBottom: 9,
};

export default function ContactForm() {
  return (
    <div
      className="tbc-card tbc-card-padding"
      style={{ background: "var(--tbc-surface, #fff)", border: "1px solid var(--tbc-border, rgba(20,33,31,0.08))", borderRadius: 20 }}
    >
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="tbc-form-grid">
          <label style={{ display: "block" }}>
            <span style={labelTextStyle}>Full Name</span>
            <input type="text" placeholder="Your name" style={inputStyle} />
          </label>
          <label style={{ display: "block" }}>
            <span style={labelTextStyle}>Email Address</span>
            <input type="email" placeholder="you@email.com" style={inputStyle} />
          </label>
          <label className="tbc-form-span-2" style={{ display: "block", gridColumn: "span 2" }}>
            <span style={labelTextStyle}>Subject</span>
            <input type="text" placeholder="What's this about?" style={inputStyle} />
          </label>
          <label className="tbc-form-span-2" style={{ display: "block", gridColumn: "span 2" }}>
            <span style={labelTextStyle}>Message</span>
            <textarea rows={5} placeholder="Tell us more…" style={{ ...inputStyle, resize: "vertical" }} />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: 26,
            width: "100%",
            background: "#24D155",
            color: "#14211F",
            font: "700 16px/1 'Inter'",
            padding: 17,
            border: "none",
            borderRadius: 10,
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
