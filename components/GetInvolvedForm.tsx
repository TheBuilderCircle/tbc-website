"use client";

import { INTEREST_OPTIONS } from "@/data/getInvolvedOptions";

export default function GetInvolvedForm() {
  return (
    <div className="split">
      <div>
        <h2 className="h2" style={{ marginBottom: 18 }}>
          Join TBC Ghana
        </h2>
        <p className="lede">Tell us a little about you and where you&rsquo;d like to plug in.</p>
      </div>
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
          <label className="field">
            <span className="field-label">City</span>
            <input className="input" type="text" placeholder="e.g. Accra" />
          </label>
          <label className="field">
            <span className="field-label">Most interested in</span>
            <select className="input" defaultValue={INTEREST_OPTIONS[0]}>
              {INTEREST_OPTIONS.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="field span-2">
            <span className="field-label">How did you hear about TBC Ghana?</span>
            <input className="input" type="text" placeholder="X, a friend, an event…" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block btn-arrow" style={{ marginTop: 40 }}>
          Submit
        </button>
      </form>
    </div>
  );
}
