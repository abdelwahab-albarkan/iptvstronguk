import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { SITE_CONFIG } from '@/data/site';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CookieSettingsButton } from '@/components/layout/CookieSettingsButton';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.privacy);

// Update this date whenever the policy text changes.
const LAST_UPDATED = '25 September 2026';

export default function PrivacyPolicyPage() {
  const meta = PAGE_METADATA_CONFIG.privacy;
  const email = SITE_CONFIG.contact.supportEmail;
  const mailto = <a href={`mailto:${email}`}>{email}</a>;
  const paymentList = SITE_CONFIG.paymentMethods.join(', ').replace(/, ([^,]*)$/, ' and $1');

  return (
    <>
      <BreadcrumbSchema items={meta.breadcrumbs} />

      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={meta.breadcrumbs} />
          <SectionHeading
            isH1
            eyebrow="Your Privacy"
            title={meta.h1}
            subtitle="How IPTV Strong UK handles information when you use this website, contact us or place an order enquiry."
          />
          <p className="policy-updated">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section">
        <div className="container container-narrow policy-content">
          <h2 style={{ marginTop: 0 }}>1. Who we are</h2>
          <p>
            This website is operated by {SITE_CONFIG.name} (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). We are responsible for the personal information described in this policy. If you have any questions about it, contact us at {mailto}.
          </p>

          <h2>2. Information we collect</h2>
          <h3>Information you send us</h3>
          <p>We only receive personal information that you choose to send us, for example when you:</p>
          <ul>
            <li><strong>Contact us by email:</strong> your email address, your name if you include it, and the content of your message and any attachments.</li>
            <li><strong>Contact us on WhatsApp:</strong> your phone number, your WhatsApp profile name and the content of your messages.</li>
            <li><strong>Send an order enquiry:</strong> the plan, application/setup preference and preferred payment method you selected, plus anything else you include in your message.</li>
            <li><strong>Ask for setup help:</strong> details about your device, player app and the issue you are having, and, where needed to help you, the login details for your subscription.</li>
          </ul>

          <h3>The order form on this website</h3>
          <p>
            The order form on our <Link href="/order/">order page</Link> does not ask for your name, contact details or payment details, and your selections are not sent to or stored on our website. They are only used to prepare a WhatsApp message on your device. We receive them only if you choose to send that message.
          </p>

          <h3>Technical information</h3>
          <p>
            Like most websites, the service that hosts this site may automatically process standard technical information when you visit, such as your IP address, browser type, device type and the pages requested. This is used to deliver the website and keep it secure.
          </p>

          <h2>3. Payment information</h2>
          <p>
            This website does not collect, process or store payment card details, bank details or other payment credentials. On the order form you only select a <em>preferred</em> payment method ({paymentList}). Payment instructions are sent to you after you contact us.
          </p>
          <p>
            When you pay, the payment is handled by the payment provider you use, under that provider&apos;s own terms and privacy policy. We may receive limited information from it, such as your name, the amount paid, the date and a transaction reference, so that we can match the payment to your order.
          </p>

          <h2>4. WhatsApp</h2>
          <p>
            Contacting us through WhatsApp is optional; you can email us instead. If you use WhatsApp, the service is provided by WhatsApp (part of Meta), and information you share through it is also processed by WhatsApp under its own terms and privacy policy. We do not control how WhatsApp processes data. We handle the messages and information we receive from you in line with this policy.
          </p>

          <h2 id="cookies">5. Cookies and similar technologies</h2>
          <p>
            We use a small amount of browser storage that is necessary for the website to work. At present this is limited to remembering your cookie choice, which is saved in your browser&apos;s local storage on your device and contains no personal information.
          </p>
          <p>
            We do not currently use analytics, advertising or marketing cookies, and no third-party tracking scripts are loaded on this website. If we introduce any non-essential cookies in future, we will ask for your consent first and update this policy.
          </p>
          <p>
            You can review or change your choice at any time: <CookieSettingsButton>Open cookie settings</CookieSettingsButton>. You can also clear stored data through your browser settings.
          </p>

          <h2>6. How we use your information</h2>
          <ul>
            <li>To reply to your questions and support requests.</li>
            <li>To handle your order enquiry, arrange payment and provide your subscription.</li>
            <li>To help with activation and setup where applicable.</li>
            <li>To communicate with you about your subscription.</li>
            <li>To keep records of orders and communications, including for accounting purposes.</li>
            <li>To operate and secure this website.</li>
            <li>To comply with our legal obligations.</li>
          </ul>

          <h2>7. Our legal bases</h2>
          <p>Under UK data protection law (the UK GDPR and the Data Protection Act 2018), we rely on the following legal bases, as applicable:</p>
          <ul>
            <li><strong>Contract:</strong> where processing is needed to take steps at your request before an order, or to provide the subscription you have ordered.</li>
            <li><strong>Legitimate interests:</strong> to respond to general enquiries, keep business records and run and secure our website, where these interests are not overridden by your rights.</li>
            <li><strong>Legal obligation:</strong> where we must keep or disclose information to comply with the law, for example accounting and tax requirements.</li>
            <li><strong>Consent:</strong> for any non-essential cookies, if we introduce them. You can withdraw consent at any time.</li>
          </ul>

          <h2>8. How long we keep information</h2>
          <p>
            We keep personal information only for as long as we need it for the purposes described above, including to meet legal, accounting or reporting requirements. After that we delete it or anonymise it. Your cookie choice stays in your browser until you change it or clear your browser storage.
          </p>

          <h2>9. Who we share information with</h2>
          <p>We do not sell your personal information. We share it only where needed, with:</p>
          <ul>
            <li>service providers that help us run the website and our communications, such as website hosting and email providers;</li>
            <li>WhatsApp (Meta), if you choose to contact us that way;</li>
            <li>the payment provider you use to pay;</li>
            <li>professional advisers, where necessary; and</li>
            <li>law enforcement, regulators or other authorities, where we are required by law to do so.</li>
          </ul>

          <h2>10. International transfers</h2>
          <p>
            Some of the services mentioned above, such as WhatsApp and payment providers, may process information outside the UK. Where we transfer personal information outside the UK, we will make sure appropriate safeguards are in place where required by UK data protection law, such as UK adequacy regulations or approved contractual clauses.
          </p>

          <h2>11. Security</h2>
          <p>
            We take appropriate technical and organisational measures to protect personal information against loss, misuse and unauthorised access. However, no method of transmitting information over the internet is completely secure. Please do not send payment card details to us by email or message.
          </p>

          <h2>12. Your rights</h2>
          <p>Under UK data protection law you have the right, where applicable, to:</p>
          <ul>
            <li>access the personal information we hold about you;</li>
            <li>ask us to correct inaccurate or incomplete information;</li>
            <li>ask us to delete your information;</li>
            <li>ask us to restrict how we use your information;</li>
            <li>object to our use of your information where we rely on legitimate interests;</li>
            <li>receive your information in a portable format; and</li>
            <li>withdraw consent at any time, where we rely on consent.</li>
          </ul>
          <p>
            To exercise any of these rights, email {mailto}. We will respond without undue delay and within one month, as required by law. We may need to confirm your identity before acting on a request.
          </p>

          <h2>13. Complaints</h2>
          <p>
            If you have a concern about how we handle your information, please contact us first at {mailto} so we can try to resolve it. You also have the right to complain to the Information Commissioner&apos;s Office (ICO), the UK data protection regulator:
          </p>
          <ul>
            <li>Website: <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noopener noreferrer">ico.org.uk/make-a-complaint</a></li>
            <li>Helpline: 0303 123 1113</li>
          </ul>

          <h2>14. Changes to this policy</h2>
          <p>
            We may update this policy from time to time, for example if our services or the law change. The latest version will always be on this page, with the date it was last updated shown at the top.
          </p>

          <h2>15. Contact us</h2>
          <p>
            For any question about this policy or your personal information, email {mailto}.
          </p>
        </div>
      </section>
    </>
  );
}
