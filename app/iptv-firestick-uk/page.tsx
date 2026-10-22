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

export const metadata: Metadata = constructPageMetadata(PAGE_METADATA_CONFIG.firestick);

export default function FirestickPage() {
  const meta = PAGE_METADATA_CONFIG.firestick;

  const hardwareGenerations = [
    {
      model: 'Amazon Fire TV Stick 4K Max (2nd Gen)',
      specs: '2.0 GHz Quad-Core, 2 GB RAM, 16 GB Storage, Wi-Fi 6E',
      recommendation: 'Top performance for 4K streams, rapid EPG guide rendering, and fastest UI responsiveness.'
    },
    {
      model: 'Amazon Fire TV Stick 4K (2nd Gen)',
      specs: '1.7 GHz Quad-Core, 2 GB RAM, 8 GB Storage, Wi-Fi 6',
      recommendation: 'Excellent all-round balance for HD and 4K UK television viewing.'
    },
    {
      model: 'Amazon Fire TV Stick HD / Lite',
      specs: '1.7 GHz Quad-Core, 1 GB RAM, 8 GB Storage, Wi-Fi 5',
      recommendation: 'Smooth 1080p full HD streaming. Periodically clear app cache due to 1 GB system RAM.'
    },
    {
      model: 'Amazon Fire TV Cube (3rd Gen)',
      specs: 'Octa-Core Processor, 2 GB RAM, 16 GB Storage, Ethernet Port Built-In',
      recommendation: 'Flagship streaming device with integrated Ethernet connectivity for maximum network throughput.'
    }
  ];

  const preparationChecklist = [
    {
      title: 'Dedicated Mains Power Adapter',
      description: 'Plug your Firestick into the wall using the official Amazon power adapter rather than a low-voltage TV USB port. Low voltage causes random restarts during high-bitrate video decoding.'
    },
    {
      title: '5GHz Wi-Fi Band or Ethernet',
      description: 'Connect your Fire TV Stick to your router’s 5GHz Wi-Fi network (which offers higher bandwidth and avoids interference from household appliances) or use an official Amazon Ethernet adapter.'
    },
    {
      title: 'FireOS Firmware Updates',
      description: 'Check Settings > My Fire TV > About > Check for Updates to ensure your operating system has the latest video codec improvements and security patches.'
    },
    {
      title: 'Flash Storage Clearance',
      description: 'Verify in Settings > Applications > Manage Installed Applications that your Firestick has at least 1.5 GB of free flash storage to allow player applications to cache EPG data smoothly.'
    }
  ];

  const setupSteps = [
    {
      number: 1,
      title: 'Power On and Connect to Your Home Network',
      description: 'Insert your Amazon Fire TV Stick into an available HDMI port on your television. Connect to your home Wi-Fi network (5GHz recommended) or Ethernet adapter.',
      tip: 'For optimum stability, connect your Firestick to a dedicated power outlet using the original Amazon power adapter.'
    },
    {
      number: 2,
      title: 'Install a Compatible Player App',
      description: 'Open the Amazon Appstore from your Fire TV home screen and search for a player app that supports Xtream Codes or M3U playlists (TiviMate is one example). App availability changes over time and varies by region, so check the listing on your own device.',
      tip: 'Install player apps from the Amazon Appstore only. Do not install APK files from unknown websites or turn off Fire TV security settings.'
    },
    {
      number: 3,
      title: 'Launch the Player and Select Login Method',
      description: 'Open your installed player app and select the option to add a new profile or playlist. Choose "Xtream Codes API" (recommended for faster login and automated EPG mapping) or "M3U URL" based on your preference.',
      tip: 'Xtream Codes API login automatically loads your live channel categories and EPG schedule without typing long playlist URLs.'
    },
    {
      number: 4,
      title: 'Enter Your IPTV Strong UK Login Details',
      description: 'Enter the server URL, username and password from your IPTV Strong UK login details. Check that the spelling and port number match exactly.',
      tip: 'Credential fields are case-sensitive. Carefully verify uppercase and lowercase characters using your on-screen Fire TV remote keyboard.'
    },
    {
      number: 5,
      title: 'Load the Programme Guide (EPG)',
      description: 'Let the app download your channel categories and programme guide. This can take a few minutes the first time; afterwards your channel list and TV guide are ready to use.',
      tip: 'Ensure your Firestick timezone is set to United Kingdom (London GMT/BST) in FireOS Settings > Preferences > Time Zone.'
    }
  ];

  const optimizationTips = [
    {
      title: 'Match Original Frame Rate',
      description: 'In FireOS Settings > Display & Sounds > Display, enable "Match Original Frame Rate". This prevents micro-stutters when switching between 50Hz UK broadcast streams and 60Hz content.'
    },
    {
      title: 'Select Hardware Video Decoder',
      description: 'In your media player application settings, ensure the video decoder is set to "Hardware" (or "Hardware Plus"). Hardware decoding uses the Firestick’s dedicated GPU for smooth, efficient playback.'
    },
    {
      title: 'Periodically Clear Application Cache',
      description: 'As your player downloads daily EPG updates, cached files accumulate. Periodically clear the app cache via Settings > Applications > Manage Installed Applications > [Your App] > Clear Cache.'
    },
    {
      title: 'Configure EPG Refresh Frequency',
      description: 'Set your player’s EPG update frequency to "At App Launch" or "Every 24 Hours" to ensure your on-screen guide remains accurate without wasting internal storage.'
    }
  ];

  const firestickFaqs = [
    {
      question: 'Which Amazon Firestick models work with UK streaming services?',
      answer: 'Most modern Fire TV devices work smoothly, including Fire TV Stick Lite, Fire TV Stick HD, Fire TV Stick 4K, Fire TV Stick 4K Max, and Fire TV Cube. Older 1st and 2nd generation Firesticks may experience slower menu responsiveness due to limited RAM.'
    },
    {
      question: 'Do I need to "jailbreak" or modify my Firestick?',
      answer: 'No. Legitimate streaming players and standard playlist protocols operate natively on standard FireOS without jailbreaking, modifying device firmware, or bypassing Amazon security controls.'
    },
    {
      question: 'How do I resolve buffering issues during peak evening hours?',
      answer: 'Test your broadband speed on the Firestick (for example in the Silk browser), switch to 5GHz Wi-Fi or an Ethernet adapter, restart your router and clear the player app cache in Fire OS settings.'
    },
    {
      question: 'Can I use TiviMate on my Fire TV Stick?',
      answer: 'TiviMate is a popular player on Fire TV and supports Xtream Codes and M3U logins, channel groups and XMLTV programme guides. Check that it is listed in the Amazon Appstore on your device.'
    },
    {
      question: 'What should I do if the audio is out of sync with the video?',
      answer: 'Open your media player playback settings and toggle the audio/video decoder (e.g. switch between ExoPlayer and VLC engine, or toggle Hardware/Software decoding).'
    },
    {
      question: 'When should I contact technical support?',
      answer: 'If you have checked your connection, re-entered your login details and restarted the player without success, contact support with your device model, player app name and the exact error message.'
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
            eyebrow="Device Walkthrough"
            title={meta.h1}
            subtitle="How to prepare your Amazon Fire TV Stick, install a compatible player from the Amazon Appstore and enter your login details, with Fire TV-specific fixes for common problems."
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="section">
        <div className="container container-narrow">
          {/* Short buying context before the setup steps */}
          <div className="commercial-panel">
            <h2>Using IPTV Strong UK on a Fire TV Stick</h2>
            <p>To watch IPTV Strong UK on a Fire TV Stick, you need three things:</p>
            <ul>
              <li>A Fire TV device running Fire OS, connected to your broadband.</li>
              <li>A compatible IPTV app for Firestick from the Amazon Appstore, such as TiviMate. Which apps are available varies by model and region.</li>
              <li>Your IPTV Strong UK login details (Xtream Codes or an M3U link), which you receive after ordering.</li>
            </ul>
            <p>
              Compatibility depends on your Fire TV model and the app you choose. If you are not sure which app to use, our team can help with choosing and setting one up where applicable. Plans start at $39.99 for 3 months: <Link href="/iptv-subscription-uk/">see plans and pricing</Link>. Watching on a smart TV instead? Read our <Link href="/iptv-smart-tv-uk/">Samsung and LG Smart TV guide</Link>.
            </p>
            <div className="commercial-panel-cta">
              <Button href="/iptv-subscription-uk/" variant="primary">
                See IPTV Strong UK Plans
              </Button>
            </div>
          </div>

          <h2>Amazon Fire TV Overview &amp; Hardware Comparison</h2>
          <p>
            The Amazon Fire TV Stick is a widely used streaming device in UK homes. It runs Amazon&apos;s Fire OS, decodes HD and 4K video in hardware, and installs player apps from the Amazon Appstore.
          </p>
          <p>
            <em>Before you buy a new device:</em> most Fire TV models run Fire OS, which is what this guide covers. Some newer models run Amazon&apos;s Vega OS, which has a different app catalogue, so check that your chosen player app is available for that model before buying.
          </p>

          <ContentImage
            src="/images/devices/streaming-stick-tv.jpg"
            alt="Compact streaming stick plugged into the HDMI port of a television"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            {hardwareGenerations.map((hw, idx) => (
              <Card key={idx}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--text-primary)', margin: 0 }}>
                    {hw.model}
                  </h3>
                  <span className="badge badge-cyan">{hw.specs}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.5' }}>
                  {hw.recommendation}
                </p>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: '2rem', marginBottom: '2.5rem' }}>
            <h3 style={{ marginBottom: '1.25rem' }}>Firestick Hardware Preparation Checklist</h3>
            <div className="grid-2">
              {preparationChecklist.map((item, idx) => (
                <Card key={idx}>
                  <h4 style={{ color: 'var(--accent-cyan-light)', marginTop: 0 }}>{item.title}</h4>
                  <p style={{ margin: 0, fontSize: '0.925rem' }}>{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <CalloutBox variant="info" title="What You Will Need Before Setup">
            <ul>
              <li>An active Amazon Fire TV device connected to your TV and home Wi-Fi.</li>
              <li>A stable broadband connection (as a rough guide, around 10 Mbps per HD stream and 25 Mbps for 4K).</li>
              <li>A compatible player app from the Amazon Appstore (step 2 below).</li>
              <li>Your IPTV Strong UK login details: Xtream Codes (server URL, username, password) or an M3U link. If you do not have them yet, <Link href="/iptv-subscription-uk/">view available plans</Link>.</li>
            </ul>
          </CalloutBox>

          <h2>Step-by-Step Firestick Installation Walkthrough</h2>
          <p>
            Follow this numbered procedure to configure your media player and connect to your stream playlist:
          </p>

          <StepGuide steps={setupSteps} />

          <h2>Performance Settings for Fire TV Devices</h2>
          <p>
            These Fire OS and player settings help playback and guide navigation run smoothly:
          </p>

          <div className="grid-2" style={{ marginTop: '1.5rem', marginBottom: '2.5rem' }}>
            {optimizationTips.map((tip, idx) => (
              <Card key={idx}>
                <h3 style={{ fontSize: '1.1rem', marginTop: 0, marginBottom: '0.4rem', color: 'var(--text-primary)' }}>
                  {tip.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.925rem', color: 'var(--text-secondary)' }}>
                  {tip.description}
                </p>
              </Card>
            ))}
          </div>

          <h2>Fire TV Troubleshooting</h2>
          <p>
            These fixes are specific to Fire TV devices. For login, playlist and programme guide errors that can happen on any device, see the <Link href="/iptv-setup-uk/">error table in the general setup guide</Link>.
          </p>
          <ul>
            <li>
              <strong>Firestick restarts during playback:</strong> Power it from the wall with the Amazon mains adapter rather than a TV USB port, which may not supply enough power.
            </li>
            <li>
              <strong>Guide times one hour out:</strong> Go to Fire OS Settings &gt; Preferences &gt; Time Zone and verify that your location is set to United Kingdom (London). In your player app settings, check that EPG Time Offset is set to 0.
            </li>
            <li>
              <strong>Audio out of sync with video:</strong> Go to your media player&apos;s playback settings and toggle the hardware video decoder (e.g. switch between Hardware / Software / ExoPlayer).
            </li>
            <li>
              <strong>App crashing on startup:</strong> Check that your Firestick has at least 1.5 GB of free storage, then clear the app cache in Fire OS Settings &gt; Applications &gt; Manage Installed Applications.
            </li>
          </ul>

          <div style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
            <CalloutBox variant="compliance" title="Lawful Streaming &amp; Safety Notice">
              <p>
                This guide uses player apps from the Amazon Appstore only. IPTV Strong UK does not supply or support modified APKs, jailbreaking tools or unlicensed streams. For details on UK broadcasting law and TV Licensing requirements, read our <Link href="/is-iptv-legal-uk/">UK Legality Guide</Link>.
              </p>
            </CalloutBox>
          </div>

          <h2>Frequently Asked Questions About Firestick Setup</h2>
          <FaqAccordion items={firestickFaqs} idPrefix="firestick-faq" />

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '3.5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--border-subtle)' }}>
            <h2 style={{ fontSize: '1.5rem' }}>Ready to Set Up Your Fire TV Stick?</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto 1.5rem', color: 'var(--text-secondary)' }}>
              See current pricing for a IPTV Strong UK plan, or read how M3U, Xtream Codes and EPG work before you start.
            </p>
            <div className="cta-row">
              <Button href="/iptv-subscription-uk/" variant="primary" size="lg">
                See Current Pricing
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
