# ScamSpotter 🛡️

**A case file for suspicious messages.**

ScamSpotter is a browser-based scam detection tool built for India and beyond. Paste any SMS, WhatsApp message, email, or link, and it flags the manipulation tactics in real time, inspects every link and sender, and optionally asks Google Gemini for a second opinion.

Built for **SETU 2026**.

---

## ✨ What It Does

- **Rule-based detection engine** that runs entirely in your browser — no message is sent to a server unless you ask for it.
- **Bilingual rule set** — detects scam patterns in **English, Hindi, and Hinglish** (the way real Indian scammers write).
- **Link inspector** that dissects every URL: raw IPs, shorteners, punycode, look-alike brand domains, risky TLDs, credentials-in-URL tricks.
- **Sender analysis** — catches brand impersonation from free mailboxes and mobile numbers.
- **Optional Gemini second opinion** — an AI sanity check that never changes the rule-based score.
- **Screenshot OCR** — drop in an image of a message and Gemini reads it for you.
- **Emergency checklist** — step-by-step recovery if you've already been scammed (call 1930, freeze cards, etc.).
- **Print / PDF investigation report** — a formal case file you can save, share, or hand to your bank.
- **Privacy-first** — history is opt-in, stored only on your device, and never sent to our servers.

---

## 🧠 How It Works

ScamSpotter uses a **two-layer** detection model:

### Layer 1: Rule Engine (runs in your browser)
A curated set of regex rules and heuristics scores the message across five weighted categories:

| Category | Max Points | What It Catches |
|---|---|---|
| **Urgency** | 25 | "Act now", "within 24 hours", threats of blocking |
| **Links** | 25 | IP addresses, shorteners, punycode, look-alike domains |
| **Financial** | 20 | Money requests, UPI tricks, fake prizes, fake jobs |
| **Secrecy** | 15 | "Don't tell anyone", off-platform redirection |
| **OTP / Credentials** | 15 | Requests for OTPs, PINs, passwords, Aadhaar, PAN |

The final score is capped at **100** and labelled:

| Score | Verdict |
|---|---|
| 0–29 | 🟢 **Low** |
| 30–59 | 🟡 **Medium** |
| 60–100 | 🔴 **High** |

Every finding shows its **severity**, **points awarded**, and a **short recommendation**.

### Layer 2: Gemini Second Opinion (optional)
When you click **"Gemini second opinion"**, the message is sent to a serverless function (`api/analyze.js`) which forwards it to Google's Gemini API. Gemini returns a verdict, a summary, red flags, recommended actions, a safe reply, and a complaint draft.

> **Important:** Gemini's opinion **never changes the rule-based score**. It's displayed separately so you can compare the two perspectives.

---

## 🌏 Language Support

The rule engine understands:

- **English** — urgency, threats, KYC pretexts, OTP requests, prize bait, and more.
- **Hindi** — तुरंत, ब्लॉक हो जाएगा, KYC अपडेट करें, OTP भेजें, किसी को मत बताओ, etc.
- **Hinglish** — the hybrid style real scammers use: `account block ho jayega`, `jaldi kyc update karo`, `otp bhejo`.

Gemini handles other languages and can explain its findings in **English, Hindi, Hinglish, Urdu, Bengali, Tamil, Telugu, or Marathi**.

---

## 🔒 Privacy & Limitations

We take privacy seriously.

- **The rule engine runs 100% in your browser.** No message text is sent to a server unless you explicitly ask for a Gemini feature.
- **Scan history is opt-in.** By default, nothing is stored. You can choose to save your last 20 scans locally on your device.
- **No account required.** We don't collect emails, phone numbers, or any personal data.
- **Gemini only sees your message when you click a Gemini button** — the second opinion, the follow-up chat, or the screenshot OCR.
- **We do not store your messages.** They are forwarded to Google's Gemini API for processing and then discarded.

### Honest Limitations
- The rule engine catches known scam patterns. **A low score is not a guarantee of safety** — it means "no known patterns found."
- **Always verify through official channels** when money, logins, or personal information are involved.
- Gemini is a second opinion, not a source of truth.

---

## 🗺️ Roadmap

We ship in priority order. Here's an honest look at what's built, what's coming, and what needs more infrastructure.

### ✅ Built (this release)
- Rule-based detection (English + Hindi + Hinglish)
- Link inspector, sender analysis, PII & attachment detection
- Gemini second opinion, isolated from the score
- Screenshot OCR
- Opt-in local history, print/PDF report, emergency checklist
- Privacy & limitations section
- Honest roadmap and "Planned" badges on unbuilt features

### 🚧 Next phase (requires backend)
- Verified community reporting with moderation
- Secure accounts with saved reports across devices
- Admin & monitoring tools (usage counts, error tracking)
- Feedback loop that feeds back into the rules
- Shared rate-limiting (Redis-backed)

### 🌐 Later
- Full interface translation (Hindi, Hinglish, Urdu, Bengali, Tamil, Telugu, Marathi)
- Institutional plan: aggregated reports, bulk analysis, branded pages
- Voice-note and QR-code scanning

> **Why the split?** Everything in "Next phase" needs a database, secure sign-in, and real infrastructure. We chose to ship the detection engine first — built properly — rather than fake features we can't secure.

---

## 🚀 Getting Started

### 1. Get a Gemini API key
Visit [aistudio.google.com/apikey](https://aistudio.google.com/apikey) and create a key.

### 2. Configure Vercel
In your Vercel project → **Settings → Environment Variables**, add:

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ Yes | Your Google AI Studio key |
| `GEMINI_MODEL` | Optional | Defaults to `gemini-2.5-flash`. Change this if the model is retired. |

### 3. Deploy
```bash
npx vercel --prod