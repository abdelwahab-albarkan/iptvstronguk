import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContentImage } from '@/components/ui/ContentImage';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.setup);

// Placeholder examples only: example.com is reserved for documentation (RFC 2606).
const M3U_FILE_EXAMPLE = `#EXTM3U
#EXTINF:-1 tvg-id="channel.example" tvg-name="Channel Name" group-title="Category",Channel Name
http://example.com:8080/path/to/stream`;

export default function SetupPage() {
  const meta = PAGE_METADATA_CONFIG.setup;

  const formatSummary = [
    {
      format: 'Xtream Codes',
      whatItIs: 'A login format. The player signs in to the provider’s server and downloads the channel list itself.',
      whenToUse: 'Most TV apps (Firestick, Android TV, Apple TV, many Smart TV players). Quickest to type with a remote.',
      youNeed: 'Server URL (with port), username, password'
    },
    {
      format: 'M3U / M3U Plus',
      whatItIs: 'A playlist link. A web address that returns a text file listing each channel and where to stream it from.',
      whenToUse: 'Players without an Xtream login (such as VLC), TV apps that use MAC-address upload, or as a backup.',
      youNeed: 'One M3U playlist URL'
    },
    {
      format: 'EPG (XMLTV)',
      whatItIs: 'Programme guide data. An XML file listing what is on each channel and when.',
      whenToUse: 'Alongside either format. Most players load it automatically with Xtream; with M3U you may need to add it.',
      youNeed: 'An EPG URL, only if your player does not load the guide automatically'
    }
  ];

  const protocolVsMatrix = [
    {
      feature: 'What you enter',
      xtream: 'Server URL + username + password',
      m3u: 'One long playlist URL'
    },
    {
      feature: 'Programme guide',
      xtream: 'Usually loaded automatically',
      m3u: 'Embedded in M3U Plus, or added as a separate EPG URL'
    },
    {
      feature: 'Channel categories',
      xtream: 'Loaded directly from the server',
      m3u: 'Read from the group-title tags in the playlist'
    },
    {
      feature: 'Typing with a TV remote',
      xtream: 'Short fields, quick to enter',
      m3u: 'Long URL, easier to paste or upload from a phone or PC'
    },
    {
      feature: 'Typical use',
      xtream: 'Firestick, Smart TV apps, Android TV, Apple TV',
      m3u: 'VLC, MAC-upload TV apps, backup connection'
    }
  ];

  const commonErrorsDetailed = [
    {
      error: 'Invalid credentials / 401 Unauthorized',
      cause: 'A typo in the username or password, a capital letter in the wrong place, or a space copied at the end.',
      fix: 'Re-enter both fields character by character. When copying from an email on a phone, check for a trailing space.'
    },
    {
      error: 'Cannot connect / server timeout',
      cause: 'The server URL is missing http:// or https://, has the wrong port (for example :8080), or includes extra text.',
      fix: 'Enter the server URL exactly as issued: protocol, address and port only. Do not paste the full M3U link into the server field.'
    },
    {
      error: 'Playlist loads but shows no channels',
      cause: 'The wrong link was pasted (for example an EPG URL in the playlist field), or the plan has expired.',
      fix: 'Check you used the M3U playlist URL, not the EPG URL. Confirm your plan dates, then reload the playlist.'
    },
    {
      error: 'Programme guide blank or "No information"',
      cause: 'The player has not downloaded the guide yet, or no EPG source is assigned to the playlist.',
      fix: 'Run "Update EPG" in the player settings, add the EPG URL if you use M3U, check the device is set to UK time, then restart the app.'
    },
    {
      error: 'Guide shows the wrong programmes for a channel',
      cause: 'The channel’s tvg-id in the playlist does not match an entry in the EPG file, or the guide is out of date.',
      fix: 'Refresh both the playlist and the EPG. Many players also let you match a channel to the correct guide entry by hand.'
    },
    {
      error: 'Guide times are one hour out',
      cause: 'The device timezone is wrong, or the player applies an extra time shift.',
      fix: 'Set the device timezone to London (UK), then set the player’s EPG time shift to 0. Adjust by one hour only if the offset remains.'
    },
    {
      error: 'SSL or certificate error',
      cause: 'The device date and time are wrong, or an older player cannot handle the server’s security certificate.',
      fix: 'Correct the device date and time. If the error continues, ask support whether an http:// address is available for your player.'
    },
    {
      error: 'Freezing or constant buffering',
      cause: 'Weak Wi-Fi, a busy home network, peak-time congestion or a very small player buffer.',
      fix: 'Use 5GHz Wi-Fi or Ethernet, restart the router, and increase the player’s buffer to around 3–5 seconds.'
    }
  ];

  const troubleshootingOrder = [
    'Restart the player app, then the device itself.',
    'Check the internet connection works in another app on the same device.',
    'Re-enter your login details exactly as issued.',
    'Check the device date, time and timezone (London, UK).',
    'Refresh the playlist and the programme guide in the player settings.',
    'If one format fails, try the other (Xtream Codes instead of M3U, or the reverse).',
    'Still stuck? Contact support with your device model, player app name and the exact error message.'
  ];

  const setupFaqs = [
    {
      question: 'What is the difference between M3U and Xtream Codes?',
      answer: 'They are two ways of loading the same channels. M3U is a single link to a playlist file; Xtream Codes is a login (server URL, username and password) that lets the player fetch the channel list and, usually, the programme guide itself.'
    },
    {
      question: 'Which one should I use?',
      answer: 'Use Xtream Codes if your player offers it: the fields are short and the guide usually loads automatically. Use M3U if your player has no Xtream option, or if your TV app asks you to upload a playlist from a phone or computer.'
    },
    {
      question: 'Do I need a separate EPG URL with Xtream Codes?',
      answer: 'Usually not. Most players load the programme guide automatically after an Xtream Codes login. You normally only add an EPG URL by hand when using an M3U playlist.'
    },
    {
      question: 'How do I get the programme guide to show UK time?',
      answer: 'Set your device timezone to London (UK) so it follows GMT in winter and BST in summer, then set the player’s EPG time shift to 0. Only adjust it by one hour if times are still out after a guide refresh.'
    },
    {
      question: 'Is it safe to share my M3U link?',
      answer: 'No. An M3U link usually contains your username and password, so treat it like a password and do not post it online or share it outside your household.'
    },
    {
      question: 'Can I hide or reorder channel groups?',
      answer: 'In most players, yes. Apps such as TiviMate, IPTV Smarters and IBO Player let you hide categories, reorder groups and build a favourites list.'
    }
  ];

  return (
    <>
      <BreadcrumbSchema items={meta.breadcrumbs} />

      {/* Hero Section */}
      <section className="section-hero">
        <div className="container">
          <Breadcrumbs items={meta.breadcrumbs} />
          <SectionHeading
            isH1
            eyebrow="Formats & Troubleshooting"
            title={meta.h1}
            subtitle="What M3U, Xtream Codes and EPG are, when to use each, which details each one needs, and how to fix the most common setup errors on any compatible player."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container container-narrow">
          <h2>The Three Things You Configure</h2>
          <p>
            <strong>M3U</strong> and <strong>Xtream Codes</strong> are two alternative ways to load the same channel list into a player app; you normally use one or the other. The <strong>EPG</strong> is separate programme guide data that works alongside either. Once you know which is which, the setup screens for your <Link href="/iptv-subscription-uk/">IPTV Strong UK subscription</Link> are easier to follow in most players.
          </p>

          <ContentImage
            src="/images/devices/tv-tablet-phone.jpg"
            alt="Television, tablet and smartphone showing the same app screen on a white media unit"
          />

          <div className="table-wrapper">
            <table className="data-table">
              <caption className="sr-only">Summary of M3U, Xtream Codes and EPG formats</caption>
              <thead>
                <tr>
                  <th scope="col">Format</th>
                  <th scope="col">What it is</th>
                  <th scope="col">When to use it</th>
                  <th scope="col">What you need</th>
                </tr>
              </thead>
              <tbody>
                {formatSummary.map((row) => (
                  <tr key={row.format}>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap' }}>{row.format}</td>
                    <td>{row.whatItIs}</td>
                    <td>{row.whenToUse}</td>
                    <td className="text-cyan">{row.youNeed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>Xtream Codes: What to Enter</h2>
          <p>
            In your player, choose the option called something like <strong>&quot;Login with Xtream Codes API&quot;</strong> and fill in these fields:
          </p>

          <div className="code-panel">
            <ul style={{ margin: 0, paddingLeft: '1.25rem' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Name:</strong> any label you like (for example <code>IPTV Strong UK Living Room</code>).
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Server URL:</strong> the address and port from your login details, in the form <code>http://example.com:8080</code>. Enter only the base address, not a full playlist link.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong>Username:</strong> your subscriber username (case-sensitive).
              </li>
              <li style={{ marginBottom: 0 }}>
                <strong>Password:</strong> your subscriber password (case-sensitive).
              </li>
            </ul>
          </div>

          <h2>M3U Playlist: What to Enter</h2>
          <p>
            Choose <strong>&quot;Add playlist&quot;</strong> or <strong>&quot;M3U URL&quot;</strong> in your player, give it a name and paste the playlist URL from your login details. Some Smart TV apps instead show a MAC address and ask you to upload the link through the app developer&apos;s website; the <Link href="/iptv-smart-tv-uk/">Samsung and LG guide</Link> covers that method.
          </p>
          <p>
            An M3U playlist is a plain-text file. Each channel has an information line followed by its stream address. The example below uses placeholders only:
          </p>
          <pre className="code-block"><code>{M3U_FILE_EXAMPLE}</code></pre>
          <p>
            The <code>tvg-id</code> tag links the channel to its programme guide entry, and <code>group-title</code> sets the category it appears under. M3U Plus is the same format with these extra tags included.
          </p>

          <CalloutBox variant="warning" title="Keep your playlist link private">
            <p>
              An M3U link usually contains your username and password. Treat it like a password: do not post it online or share it outside your household.
            </p>
          </CalloutBox>

          <h2>EPG: How the Programme Guide Works</h2>
          <p>
            The Electronic Programme Guide (EPG) fills your player&apos;s TV guide grid with programme titles, times and descriptions. It is delivered in <strong>XMLTV</strong>, a widely used XML format for TV listings.
          </p>
          <ul>
            <li>
              <strong>How it is loaded:</strong> with Xtream Codes, most players fetch the guide automatically. With M3U, the guide may be embedded in an M3U Plus playlist, or you may need to paste a separate EPG URL into the player&apos;s EPG settings.
            </li>
            <li>
              <strong>How channels are matched:</strong> the player links each channel to its listings using the <code>tvg-id</code>. If a guide entry is missing or on the wrong channel, the IDs usually do not match.
            </li>
            <li>
              <strong>Time zones:</strong> XMLTV programme times include a timezone offset, and the player converts them to your device&apos;s local time. Set your device to London (UK) so the guide follows GMT and BST automatically.
            </li>
            <li>
              <strong>Refreshing:</strong> set the player to update the guide at launch or at least once every 24 hours.
            </li>
          </ul>

          <h2>Xtream Codes vs M3U at a Glance</h2>
          <div className="table-wrapper">
            <table className="data-table">
              <caption className="sr-only">Comparison of Xtream Codes and M3U playlist connections</caption>
              <thead>
                <tr>
                  <th scope="col">Aspect</th>
                  <th scope="col">Xtream Codes</th>
                  <th scope="col">M3U / M3U Plus</th>
                </tr>
              </thead>
              <tbody>
                {protocolVsMatrix.map((row, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{row.feature}</td>
                    <td className="text-cyan">{row.xtream}</td>
                    <td>{row.m3u}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <CalloutBox variant="info" title="Device-specific walkthroughs">
            <p>
              For remote-by-remote instructions, see the <Link href="/iptv-firestick-uk/">Fire TV Stick setup guide</Link> or the <Link href="/iptv-smart-tv-uk/">Samsung and LG Smart TV guide</Link>.
            </p>
          </CalloutBox>

          <h2>Common Configuration Errors</h2>
          <p>
            If your player shows an error while logging in or loading the guide, find it below:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            {commonErrorsDetailed.map((item, idx) => (
              <div key={idx} className="callout callout-warning" style={{ margin: 0 }}>
                <h3 className="callout-title" style={{ fontSize: '1rem', marginTop: 0 }}>
                  {item.error}
                </h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                  <strong>Likely cause:</strong> {item.cause}
                </p>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-primary)' }}>
                  <strong>Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>

          <h2>Basic Troubleshooting Order</h2>
          <p>
            If you are not sure what is wrong, work through these steps in order. Most problems are solved by the first four.
          </p>
          <ol>
            {troubleshootingOrder.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '0.5rem' }}>{item}</li>
            ))}
          </ol>

          <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <CalloutBox variant="compliance" title="Formats are neutral; content licensing is not">
              <p>
                M3U, Xtream Codes and XMLTV are neutral technical formats. Whether a service is lawful depends on whether its content is licensed, and anyone watching live TV in the UK needs to be covered by a TV Licence. Read <Link href="/is-iptv-legal-uk/">Is IPTV legal in the UK?</Link> for the details.
              </p>
            </CalloutBox>
          </div>

          <h2>Frequently Asked Questions</h2>
          <FaqAccordion items={setupFaqs} idPrefix="setup-faq" />

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Ready to Set Up?</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
              See the available plans, or follow the step-by-step guide for your device.
            </p>
            <div className="cta-row">
              <Button href="/iptv-subscription-uk/" variant="primary" size="lg">
                View Available Plans
              </Button>
              <Button href="/iptv-firestick-uk/" variant="secondary" size="lg">
                Firestick Guide
              </Button>
              <Button href="/iptv-smart-tv-uk/" variant="outline" size="lg">
                Smart TV Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
