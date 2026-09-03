# Google Ads Campaign Strategy for CyberSec ITC India (VAPT & OWASP)

## Campaign Objective
To generate highly qualified leads for end-to-end VAPT and OWASP Top 10 assessment projects, moving beyond simple penetration testing requests.

## Target Audience
- CTOs, CISO, IT Directors, and Security Managers.
- Companies requiring compliance, certification, and robust web application security.

## Campaign Structure

We will separate search intent into specific campaigns to control budget and optimize ad copy relevance.

### Campaign 1: Web Application VAPT (High Intent, Commercial)
**Focus:** Users actively looking for web app vulnerability assessments and pen testing.

**Ad Group 1: VAPT Services**
- `[web application vapt]`
- `"vapt services"`
- `"vapt company"`
- `[vapt assessment]`

**Ad Group 2: Web App Penetration Testing**
- `[web application penetration testing]`
- `"penetration testing services"`
- `[application security assessment]`
- `"web application security testing"`

### Campaign 2: OWASP Top 10 Specific
**Focus:** Users specifically seeking OWASP compliance or testing against the top 10 vulnerabilities.

**Ad Group 1: OWASP Testing**
- `[owasp top 10 testing]`
- `"owasp top 10 assessment"`
- `[owasp compliance assessment]`
- `[owasp vulnerability assessment]`

### Campaign 3: API Security Testing
**Focus:** Organizations needing specific security testing for their APIs.

**Ad Group 1: API VAPT**
- `[api security testing]`
- `"api penetration testing"`
- `"api vulnerability assessment"`

## Ad Messaging & Copy

The messaging must emphasize the *lifecycle* (Identify → Remediate → Retest) rather than just finding flaws.

### Ad Example 1 (VAPT Focus)
**Headline 1:** Professional Web App VAPT
**Headline 2:** Identify. Remediate. Retest.
**Headline 3:** CyberSec ITC India
**Description 1:** End-to-end web application security assessment with detailed reporting & retesting.
**Description 2:** Don't just find vulnerabilities—fix them. Get a free preliminary consultation today.

### Ad Example 2 (OWASP Focus)
**Headline 1:** OWASP Top 10 Assessment
**Headline 2:** Comprehensive Risk Assessment
**Headline 3:** Request a Proposal Today
**Description 1:** Secure your web application before attackers do. Full remediation guidance provided.
**Description 2:** We provide practical recommendations, rigorous retesting, and a final compliance certificate.

### Ad Example 3 (General Application Security)
**Headline 1:** Secure Your Web Application
**Headline 2:** Expert Penetration Testing
**Headline 3:** Detailed Findings & Support
**Description 1:** Professional VAPT services tailored for your business. Let's secure your digital assets.
**Description 2:** Validated remediation, final reporting, and digital badges to prove your compliance.

## Conversion Tracking Setup

To optimize for actual qualified leads and projects, implement the following tracking using Google Tag Manager and Google Analytics 4 (GA4):

1. **Form Submission (Primary Conversion):**
   - Trigger: Firing on the successful submission of the `#vaptForm` (or view of the thank-you message/page).
   - Value: High.

2. **Phone Call / WhatsApp Clicks (Secondary Conversion):**
   - Trigger: Clicks on `tel:` or `https://wa.me/` links on the landing page.
   - Value: Medium.

3. **Offline Conversion Tracking (Advanced):**
   - Capture the Google Click ID (GCLID) in a hidden field on the lead form.
   - When a lead turns into a "Proposal Request" or "Won Project" in your CRM, upload this data back to Google Ads to train the bidding algorithm on actual revenue/sales rather than just form fills.

## Bidding Strategy
- **Start:** Maximize Conversions (to generate initial data and form fills).
- **After 30 conversions:** Switch to Target CPA (Cost Per Acquisition) to stabilize lead generation costs.

## Negative Keywords
Add these to ensure you don't pay for irrelevant clicks:
- `free`
- `cheap`
- `tutorial`
- `course`
- `pdf`
- `what is`
- `jobs`
- `salary`
- `automated` (since we are selling a professional, manual/expert-driven service)
