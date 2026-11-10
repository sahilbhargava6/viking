# Website enquiries → Google Sheet + email

Every form on the website (Contact, Request Part Quote, Engineering Consultation,
RFQ basket, Used Parts Alerts) sends the enquiry to the site's `/api/lead`
endpoint. That endpoint forwards it to a small Google Apps Script attached to a
Google Sheet you own, which:

- adds the enquiry as a new row in the **Leads** tab, and
- emails it to **schumi.india@gmail.com** (reply-to is set to the customer's email
  when they gave one, plus a one-click WhatsApp reply link).

Until this is set up, forms still work: they tell the visitor the enquiry
could not be sent online and offer WhatsApp (pre-filled) or email instead, so
no enquiry is silently lost.

Setup takes about 10 minutes and is done once.

---

## 1. Create the Google Sheet and script

1. Sign in to Google as **schumi.india@gmail.com** (or the account that should own the leads).
2. Go to <https://sheets.new> to create a new spreadsheet. Name it e.g. **Viking Website Leads**.
3. In the sheet menu choose **Extensions → Apps Script**.
4. Delete everything in the editor, then paste the whole contents of
   [`docs/lead-capture/Code.gs`](lead-capture/Code.gs).
5. On the line `const SECRET = "PASTE_YOUR_SECRET_HERE";` replace
   `PASTE_YOUR_SECRET_HERE` with your secret: the value of `LEAD_WEBHOOK_SECRET`
   in the `.env.local` file in the project folder. Keep the quotes.
6. Click **Save** (disk icon).

## 2. Test it and grant permission

1. In the toolbar function list choose **testSetup**, then click **Run**.
2. Google asks for permission: **Review permissions → choose your account →
   Advanced → Go to (project name) → Allow**. (It needs access to this sheet and
   to send email as you.)
3. Check that a **Leads** tab with orange headers appeared in the sheet, and
   that a "Setup test" email arrived.

## 3. Publish the script as a web app

1. Click **Deploy → New deployment**.
2. Click the gear next to "Select type" and choose **Web app**.
3. Set:
   - **Description:** Website leads
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy** and copy the **Web app URL** (it ends in `/exec`).

"Anyone" only means the website can reach the script; it rejects any request
that doesn't carry your secret, and the sheet itself stays private.

## 4. Give the website the URL and secret

The website needs two settings (environment variables):

| Name | Value |
| --- | --- |
| `LEAD_WEBHOOK_URL` | the Web app URL from step 3 |
| `LEAD_WEBHOOK_SECRET` | the same secret you pasted into the script |

- **Live site:** add both in your hosting provider's environment-variable
  settings. On Vercel: *Project → Settings → Environment Variables*, add both
  for **Production**, then **redeploy** (Deployments → ⋯ → Redeploy).
- **On this computer:** paste the URL after `LEAD_WEBHOOK_URL=` in `.env.local`
  and restart `npm run dev`.

Never commit `.env.local` or put the secret in the code; Git already ignores it.

## 5. Check it end to end

Submit the Contact form on the live site with your own phone number. Within a
few seconds you should see a new row in the sheet and an email.

---

## Good to know

- **Changing the script later:** after editing, use **Deploy → Manage
  deployments → ✏️ → Version: New version → Deploy**. The URL stays the same.
- **Email limit:** free Gmail accounts can send about 100 script emails a day.
  If that is ever reached, rows are still saved in the sheet.
- **Status column:** each row starts as "New"; change it to Called / Quoted /
  Won / Lost to track follow-up.
- **Spam:** forms include a hidden field bots fill in (those are dropped) and
  the endpoint limits repeated submissions from the same address.
- **Privacy:** the sheet holds customers' names and phone numbers. Share it only
  with staff who need it.
