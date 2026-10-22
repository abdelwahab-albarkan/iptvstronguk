import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { PAGE_METADATA_CONFIG } from '@/data/metadata';
import { constructPageMetadata } from '@/lib/metadata-utils';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { StepGuide } from '@/components/sections/StepGuide';
import { CalloutBox } from '@/components/ui/CalloutBox';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { ContentImage } from '@/components/ui/ContentImage';

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.smartTv);

export default function SmartTvPage() {
  const meta = PAGE_METADATA_CONFIG.smartTv;

  const platformOverview = [
    {
      title: 'Samsung Smart TVs (Tizen OS 2017+)',
      description: 'Samsung TVs from 2017 onwards run Tizen OS with the official Samsung Apps store. Compatible player apps (such as Smart IPTV, IPTV Smarters Pro, Nanomid or IBO Player) can be installed with your Samsung remote, with no extra hardware. Availability varies by model year.'
    },
    {
      title: 'LG Smart TVs (webOS 3.0 and later)',
      description: 'LG Smart TVs run webOS with the LG Content Store. Compatible player apps can be installed without extra hardware and support either MAC-based playlist upload or a direct Xtream Codes login.'
    }
  ];

  const samsungSteps = [
    {
      number: 1,
      title: 'Open the Samsung Apps Store on Your Tizen TV',
      description: 'Press the Home button on your Samsung Smart Remote, navigate to the "Apps" icon along the Smart Hub bar, and open the official Samsung App Store.',
      tip: 'Ensure your Samsung TV firmware is updated to the latest version in Settings > Support > Software Update.'
    },
    {
      number: 2,
      title: 'Install a Compatible Player App',
      description: 'Search the UK Samsung store for a player that supports Xtream Codes or M3U (such as Smart IPTV, IPTV Smarters Pro, Nanomid or IBO Player), then install it.',
      tip: 'Some player apps offer their own short trial before you buy an app licence from the developer. That trial is for the app only and is separate from your IPTV Strong UK plan, which has no free trial.'
    },
    {
      number: 3,
      title: 'Find the MAC Address or Login Screen',
      description: 'Open the app. Depending on the player, it will either show your TV’s MAC address and device key (for web upload) or offer on-screen fields for your login details.',
      tip: 'For MAC-based upload, use only the website address shown inside the app itself.'
    },
    {
      number: 4,
      title: 'Enter Your IPTV Strong UK Login Details',
      description: 'Enter your Xtream Codes details in the app, or upload your M3U playlist link through the developer’s website. Save, then restart the app on your TV.',
      tip: 'Include the EPG URL in the designated field if your selected player requires separate schedule configuration.'
    }
  ];

  const lgSteps = [
    {
      number: 1,
      title: 'Access the LG Content Store / LG Apps on webOS',
      description: 'Press the Home button on your LG Magic Remote and select the "LG Content Store" (or "Apps" on webOS 6.0 and newer).',
      tip: 'Confirm your LG TV location is set to United Kingdom in Settings > General > Location > Broadcast Country.'
    },
    {
      number: 2,
      title: 'Download a Legitimate Media Player App',
      description: 'Search for compatible webOS media players (such as Smart IPTV, IBO Player, IPTV Smarters, or SS IPTV) and install the app to your LG dashboard.',
      tip: 'Install directly from the LG Content Store rather than from USB files or unofficial sources.'
    },
    {
      number: 3,
      title: 'Link Your Playlist via App Credentials',
      description: 'Launch the application on your LG TV. Enter your Xtream Codes login details or upload your M3U URL via the player’s official playlist upload portal.',
      tip: 'Keep a note of the Device ID and Device Key displayed on your TV screen during initial launch.'
    },
    {
      number: 4,
      title: 'Refresh Channel Categories and EPG Guide',
      description: 'Restart the player application to download the channel categories and live programme guide data for UK viewing.',
      tip: 'If channel loading feels slow, check your LG TV network connection in Settings > Network.'
    }
  ];

  const smartTvBestPractices = [
    {
      title: 'Wired Ethernet Connection (Recommended)',
      description: 'Smart TV Wi-Fi antennas are situated behind the large screen panel, which can cause Wi-Fi signal attenuation. Connecting an RJ45 Ethernet cable directly from your router to your TV ensures maximum bandwidth and minimal packet loss.'
    },
    {
      title: 'Memory & Storage Management',
      description: 'Smart TVs have limited internal flash memory. Uninstall unused default TV apps to free up internal storage and allow your streaming player to cache EPG data and channel lists smoothly.'
    },
    {
      title: 'Close the App Fully',
      description: 'Exit the player completely when you finish rather than leaving it running in standby. This frees memory and makes the app fetch fresh programme guide data on its next launch.'
    },
    {
      title: 'Understanding Third-Party Player Licenses',
      description: 'Certain Smart TV players (like Smart IPTV or IBO Player) are independent third-party software products that require a small one-time app activation fee payable directly to the app developer.'
    }
  ];

  const smartTvFaqs = [
    {
      question: 'Do I need a separate streaming stick if I already have a Samsung or LG Smart TV?',
      answer: 'Not necessarily. If a compatible player is available in your TV’s app store, you can use it without extra hardware. On older TVs, a streaming stick such as a Fire TV Stick 4K is often faster to navigate.'
    },
    {
      question: 'Why do some Smart TV player apps charge an independent activation fee?',
      answer: 'Players such as Smart IPTV and IBO Player are made by independent developers. Their one-off app licence fee is paid to the developer and is separate from your IPTV Strong UK plan.'
    },
    {
      question: 'How can I fix video stuttering on older Smart TVs?',
      answer: 'Older Smart TVs have limited RAM and processing power. You can improve performance by connecting your TV via an Ethernet cable, closing background apps, or reducing the player stream buffer in the app playback settings.'
    },
    {
      question: 'Can I use Xtream Codes API on Samsung and LG TVs?',
      answer: 'Yes. Most modern Smart TV player apps (including IPTV Smarters and IBO Player) provide dedicated Xtream Codes login forms requiring only Server URL, Username, and Password.'
    },
    {
      question: 'Why does my TV screen display a MAC address when I open the player app?',
      answer: 'Some player apps use your TV’s MAC address so you can upload your M3U playlist link from a phone or computer browser instead of typing it with the remote. Use only the website shown in the app.'
    },
    {
      question: 'When should I contact IPTV Strong UK support vs the app developer?',
      answer: 'Contact IPTV Strong UK if you need assistance with your subscription credentials, server URL, or EPG feed. Contact the app developer if you experience issues with app licensing, app purchase activation, or player interface bugs.'
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
            eyebrow="Platform Guide"
            title={meta.h1}
            subtitle="Step-by-step instructions for installing a compatible player from the Samsung or LG app store, connecting it by direct login or MAC-address upload, and keeping it running smoothly."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container container-narrow">
          {/* Short buying context before the setup steps */}
          <div className="commercial-panel">
            <h2>How Smart TV IPTV Works with IPTV Strong UK</h2>
            <p>On a Samsung or LG Smart TV, IPTV comes together in four parts:</p>
            <ol>
              <li><strong>Your Smart TV:</strong> a Samsung (Tizen) or LG (webOS) model connected to your broadband.</li>
              <li><strong>A compatible player app</strong> from the TV&apos;s own app store. Some apps use a direct login, others use MAC-address upload, and some charge their own licence fee.</li>
              <li><strong>Your subscription login details:</strong> Xtream Codes or an M3U link from IPTV Strong UK.</li>
              <li><strong>Setup:</strong> follow the Samsung or LG steps below, or ask our team for help where applicable.</li>
            </ol>
            <p>
              Which apps are available depends on your TV&apos;s model year and region. If you are considering IPTV for a Samsung TV or an LG Smart TV and are unsure which app to use, choose the setup-help option when you order. <Link href="/iptv-subscription-uk/">View subscription plans</Link> to compare the 3-month, 6-month and 1-year options.
            </p>
            <div className="commercial-panel-cta">
              <Button href="/iptv-subscription-uk/" variant="primary">
                View Subscription Plans
              </Button>
            </div>
          </div>

          <h2>Smart TV Streaming Overview</h2>
          <p>
            Samsung (Tizen) and LG (webOS) Smart TVs let you install player apps directly from their built-in app stores, so you do not need a separate streaming stick.
          </p>
          <p>
            <em>Please note:</em> which apps are available in the Samsung and LG stores depends on your TV&apos;s model year and region. Use apps from the official store only.
          </p>

          <ContentImage
            src="/images/devices/smart-tv-wall.jpg"
            alt="Slim smart TV mounted on a bright living-room wall above a white media unit"
          />

          <h2>Two Ways Smart TV Apps Connect</h2>
          <ul>
            <li>
              <strong>Direct login:</strong> the app shows fields for a server URL, username and password. Type in your Xtream Codes details with the remote.
            </li>
            <li>
              <strong>MAC-address upload:</strong> the app shows your TV&apos;s MAC address and a device key. On a phone or computer, open the website address shown in the app, enter the MAC address and key, and paste your M3U playlist link. Then restart the app on the TV. This avoids typing a long link with the remote.
            </li>
          </ul>
          <p>
            Not sure which details are which? The <Link href="/iptv-setup-uk/">M3U, Xtream Codes and EPG guide</Link> explains each format.
          </p>

          <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.25rem' }}>Supported Smart TV Operating Systems</h3>
            <div className="grid-2">
              {platformOverview.map((item, idx) => (
                <Card key={idx}>
                  <h4 style={{ color: 'var(--accent-cyan-light)', marginTop: 0 }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.925rem' }}>{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--accent-cyan-light)' }}>Samsung Smart TV (Tizen OS) Setup Walkthrough</h2>
            <p>
              Follow these steps to set up a player on Samsung Smart TVs from 2017 onwards (Tizen OS):
            </p>

            <ContentImage
              src="/images/devices/frameless-smart-tv.jpg"
              alt="Frameless smart TV showing a home screen with rows of apps in a living room"
            />
            <StepGuide steps={samsungSteps} />
          </div>

          <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
            <h2 style={{ color: 'var(--accent-secondary)' }}>LG Smart TV (webOS) Setup Walkthrough</h2>
            <p>
              Follow these steps to set up a player on LG Smart TVs running webOS 3.0 or later:
            </p>

            <ContentImage
              src="/images/devices/smart-tv-remote.jpg"
              alt="Hand holding a remote in front of a smart TV home screen with app rows"
            />
            <StepGuide steps={lgSteps} />
          </div>

          <h2>Smart TV Best Practice</h2>
          <p>
            These habits help a Smart TV player run smoothly:
          </p>

          <div className="grid-2" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            {smartTvBestPractices.map((practice, idx) => (
              <Card key={idx}>
                <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {practice.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  {practice.description}
                </p>
              </Card>
            ))}
          </div>

          <CalloutBox variant="info" title="Dedicated Streaming Stick Alternative">
            <p>
              If an older Smart TV feels slow with large channel guides, a separate streaming stick is often quicker. See the <Link href="/iptv-firestick-uk/">Fire TV Stick setup guide</Link>.
            </p>
          </CalloutBox>

          <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <CalloutBox variant="compliance" title="UK Broadcast &amp; TV Licensing Compliance">
              <p>
                Watching live TV on a Smart TV in the UK requires a TV Licence under the Communications Act 2003, whatever app or connection you use. See <Link href="/is-iptv-legal-uk/">Is IPTV legal in the UK?</Link> for the wider legal picture.
              </p>
            </CalloutBox>
          </div>

          <h2>Frequently Asked Questions About Smart TV Setup</h2>
          <FaqAccordion items={smartTvFaqs} idPrefix="smart-tv-faq" />

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Ready to Set Up Your Smart TV?</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
              IPTV Strong UK plans start at $39.99 for 3 months. See every plan, or check the general setup guide first.
            </p>
            <div className="cta-row">
              <Button href="/iptv-subscription-uk/" variant="primary" size="lg">
                See Plans &amp; Pricing
              </Button>
              <Button href="/iptv-setup-uk/" variant="secondary" size="lg">
                General Setup Guide
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
