"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="form-grid">
        <label className="field">
          <span className="field-label">Full Name</span>
          <input className="input" type="text" placeholder="Your name" />
        </label>
        <label className="field">
          <span className="field-label">Email Address</span>
          <input className="input" type="email" placeholder="you@email.com" />
        </label>
        <label className="field span-2">
          <span className="field-label">Subject</span>
          <input className="input" type="text" placeholder="What's this about?" />
        </label>
        <label className="field span-2">
          <span className="field-label">Message</span>
          <textarea className="input" rows={5} placeholder="Tell us more…" />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-arrow" style={{ marginTop: 40 }}>
        Send Message
      </button>
    </form>
  );
}
