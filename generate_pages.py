import os

content_dir = r'c:\Users\clanm\OneDrive\Desktop\shortiptv\content'

pages = {}

# 1. Homepage
pages['index.html'] = """---
path: /
title: AuraStream UK – High-Definition Streaming Guides & Hub
description: The UK guide to reliable high-definition streaming, player setups, hardware calibration, and buffer-free broadband network optimisation.
---
<div class="hero-box">
  <span class="badge badge-cyan">Independent UK Technical Resource</span>
  <h1>Independent Streaming Technology &amp; Setup Guides for the UK</h1>
  <p class="lead">AuraStream UK provides rigorous, hardware-tested tutorials and network configurations for media players, Smart TVs, and UK broadband connections.</p>
  <div class="notice">
    <strong>Educational &amp; Technical Foundation:</strong> This platform publishes objective setup tutorials, playback troubleshooting, and networking advice. Commercial purchase features remain inactive while distributor authorizations are reviewed.
  </div>
  <a class="button" href="/help/">Access all setup tutorials</a>
</div>

<h2>Device &amp; Player Setup Guides</h2>
<p>Explore step-by-step configuration walkthroughs tailored for common UK streaming devices and popular media player applications:</p>

<div class="card-grid">
  <div class="card">
    <span class="badge badge-emerald">Amazon Fire TV</span>
    <h2>Amazon Firestick Setup</h2>
    <p>Complete guide to installing media players, configuring Downloader, and setting up hardware decoding for Firestick 4K and Cube.</p>
    <a class="button secondary" href="/help/setup-firestick/">View Firestick setup walkthrough</a>
  </div>

  <div class="card">
    <span class="badge badge-cyan">Smart TV Platforms</span>
    <h2>Samsung &amp; LG Smart TVs</h2>
    <p>Configure compatible smart TV applications on Samsung Tizen and LG webOS with correct audio passthrough and display refresh rates.</p>
    <a class="button secondary" href="/help/setup-smart-tv/">Explore Smart TV setup guide</a>
  </div>

  <div class="card">
    <span class="badge badge-emerald">Android &amp; Google TV</span>
    <h2>Android TV &amp; Shield</h2>
    <p>Master Google TV, Sony Bravia, and Nvidia Shield streaming settings, including auto-frame-rate matching and storage permissions.</p>
    <a class="button secondary" href="/help/setup-android-tv/">Open Android TV walkthrough</a>
  </div>

  <div class="card">
    <span class="badge badge-cyan">Apple Ecosystem</span>
    <h2>Apple TV &amp; iOS Devices</h2>
    <p>How to configure streaming media players on tvOS and iOS devices, utilizing iCloud playlist sync and high-efficiency video playback.</p>
    <a class="button secondary" href="/help/setup-apple-tv/">Read Apple TV setup guide</a>
  </div>

  <div class="card">
    <span class="badge badge-amber">Advanced Media Player</span>
    <h2>TiviMate Configuration</h2>
    <p>Detailed walkthrough for TiviMate: Electronic Programme Guide (EPG) setup, custom buffer sizing, and multi-view window settings.</p>
    <a class="button secondary" href="/help/setup-tivimate/">View TiviMate settings guide</a>
  </div>

  <div class="card">
    <span class="badge badge-amber">Cross-Platform Player</span>
    <h2>IPTV Smarters Pro</h2>
    <p>Installation and API login instructions for IPTV Smarters across Windows, Firestick, and smart TVs, including audio sync tweaks.</p>
    <a class="button secondary" href="/help/setup-iptv-smarters/">Open IPTV Smarters tutorial</a>
  </div>
</div>

<h2>Technical Streaming Benchmarks &amp; Standards</h2>
<p>Understanding stream architecture is essential for achieving consistent audio-visual fidelity. Below is our baseline technical comparison of common streaming protocols and decoder engines:</p>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Component</th>
        <th>Recommended Standard</th>
        <th>Alternative Standard</th>
        <th>UK Viewer Impact</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Video Decoder</strong></td>
        <td>Hardware (HW+)</td>
        <td>Software (SW CPU)</td>
        <td>Hardware decoding eliminates micro-stutter and lowers device thermal throttling.</td>
      </tr>
      <tr>
        <td><strong>Display Frame Rate</strong></td>
        <td>50 Hz (UK Broadcast)</td>
        <td>60 Hz (US Native)</td>
        <td>Matching 50Hz native feeds prevents judder during fast-paced UK football broadcasts.</td>
      </tr>
      <tr>
        <td><strong>Network Protocol</strong></td>
        <td>HLS (.m3u8 adaptive)</td>
        <td>MPEG-TS (.ts continuous)</td>
        <td>HLS adjusts bitrate dynamically to prevent buffering during UK peak evening hours.</td>
      </tr>
      <tr>
        <td><strong>Audio Format</strong></td>
        <td>Stereo PCM / Dolby Passthrough</td>
        <td>Downmixed AAC</td>
        <td>Direct passthrough maintains clean dialogue clarity on external soundbars.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Broadband &amp; Network Optimization</h2>
<p>Local Wi-Fi congestion and ISP security filters are the primary culprits behind streaming interruptions in the UK. Consult our dedicated troubleshooting documentation:</p>

<div class="card-grid">
  <div class="card">
    <h2>Buffer-Free Optimization</h2>
    <p>Diagnose Wi-Fi channel interference, optimize router MTU values, and configure third-party DNS servers to stabilize data throughput.</p>
    <a class="button secondary" href="/help/fix-buffering-issues/">Read anti-buffering techniques</a>
  </div>

  <div class="card">
    <h2>UK ISP Broadband Settings</h2>
    <p>Guidance on adjusting Virgin Media Web Safe, BT Smart Hub Web Protect, and Sky Broadband Shield to avoid false-positive stream filtering.</p>
    <a class="button secondary" href="/help/uk-isp-broadband-troubleshooting/">Browse UK broadband settings</a>
  </div>

  <div class="card">
    <h2>Device Power-Cycle Guide</h2>
    <p>The correct power-cycling order for routers, modems, and media players to release stale DHCP leases and purge fragmented cache.</p>
    <a class="button secondary" href="/help/restart-device-and-router/">Review reboot procedures</a>
  </div>
</div>
"""

# 2. Help Centre Index
pages['help.html'] = """---
path: /help/
title: Streaming Help Centre & Setup Tutorials – AuraStream UK
description: Explore step-by-step setup tutorials, broadband fixes, and media player troubleshooting for streaming devices across the United Kingdom.
---
<div class="hero-box">
  <span class="badge badge-cyan">Knowledge Base</span>
  <h1>Streaming Setup Guides &amp; Technical Help Centre</h1>
  <p class="lead">Step-by-step walkthroughs to configure streaming hardware, calibrate media player decoders, and resolve UK broadband bottlenecks.</p>
</div>

<h2>Device Installation &amp; Configuration Guides</h2>
<p>Select your platform below to view detailed installation instructions and recommended player settings:</p>

<div class="card-grid">
  <div class="card">
    <h2>Amazon Firestick &amp; Fire TV</h2>
    <p>Setup instructions for Fire TV Stick Lite, 4K, 4K Max, and Fire TV Cube. Learn how to configure developer options and manage app memory.</p>
    <a class="button secondary" href="/help/setup-firestick/">Open Firestick setup tutorial</a>
  </div>

  <div class="card">
    <h2>Samsung &amp; LG Smart TVs</h2>
    <p>How to locate, install, and configure streaming media players on Samsung Tizen and LG webOS application stores.</p>
    <a class="button secondary" href="/help/setup-smart-tv/">Open Smart TV setup tutorial</a>
  </div>

  <div class="card">
    <h2>Android TV &amp; Google TV</h2>
    <p>Detailed guide for Google TV dongles, Sony/TCL smart televisions, and Nvidia Shield streaming consoles.</p>
    <a class="button secondary" href="/help/setup-android-tv/">Open Android TV tutorial</a>
  </div>

  <div class="card">
    <h2>Apple TV &amp; iOS Devices</h2>
    <p>Recommended media player configurations for Apple TV 4K, iPadOS, and iOS devices with frame rate matching.</p>
    <a class="button secondary" href="/help/setup-apple-tv/">Open Apple TV tutorial</a>
  </div>
</div>

<h2>Media Player Application Guides</h2>
<p>Specialized documentation for fine-tuning popular player applications:</p>

<div class="card-grid">
  <div class="card">
    <h2>TiviMate Setup &amp; EPG Tuning</h2>
    <p>Configure electronic programme guides, playlist updates, custom buffer sizes, and multi-screen layouts.</p>
    <a class="button secondary" href="/help/setup-tivimate/">Read TiviMate configuration guide</a>
  </div>

  <div class="card">
    <h2>IPTV Smarters Pro Walkthrough</h2>
    <p>Step-by-step instructions for entering connection parameters, selecting internal decoders, and updating channel playlists.</p>
    <a class="button secondary" href="/help/setup-iptv-smarters/">Read IPTV Smarters guide</a>
  </div>
</div>

<h2>Network &amp; Playback Troubleshooting</h2>
<p>Resolve streaming hiccups, buffering issues, and connectivity conflicts:</p>

<div class="card-grid">
  <div class="card">
    <h2>Eliminate Buffering &amp; Freezing</h2>
    <p>Comprehensive guide to resolving stream lag, local Wi-Fi channel overlap, and bandwidth throttling.</p>
    <a class="button secondary" href="/help/fix-buffering-issues/">Read anti-buffering techniques</a>
  </div>

  <div class="card">
    <h2>UK ISP Broadband Configuration</h2>
    <p>How to configure security filters on Virgin Media, BT Smart Hub, and Sky Broadband to ensure uninterrupted streaming.</p>
    <a class="button secondary" href="/help/uk-isp-broadband-troubleshooting/">Check UK broadband settings</a>
  </div>

  <div class="card">
    <h2>Device &amp; Router Reboot Steps</h2>
    <p>The standard 60-second power-cycle sequence to clear DNS cache and restore network throughput.</p>
    <a class="button secondary" href="/help/restart-device-and-router/">Check reboot procedures</a>
  </div>
</div>
"""

# 3. Firestick Setup Guide
pages['help-setup-firestick.html'] = """---
path: /help/setup-firestick/
parent: /help/
parentName: Help Centre
title: Amazon Firestick Streaming Setup Guide – AuraStream UK
description: Step-by-step guide to setting up streaming players on Amazon Fire TV Stick, configuring Downloader, enabling developer options, and cache.
---
<div class="hero-box">
  <span class="badge badge-emerald">Hardware Tutorial</span>
  <h1>How to Set Up Streaming Media Players on Amazon Firestick</h1>
  <p class="lead">A complete technical walkthrough for installing and calibrating media player applications on Amazon Fire TV Stick 4K, 4K Max, and Fire TV Cube.</p>
</div>

<h2>Overview of Firestick Optimization</h2>
<p>Amazon Fire TV devices are among the most capable and widely adopted streaming hardware in the UK. However, default factory settings prioritize background diagnostics and app notifications that can consume system RAM and cause playback stutter. Following this guide ensures your device delivers peak hardware-decoded streaming performance.</p>

<div class="callout callout-tip">
  <strong>Recommended Hardware:</strong> For smooth 50 FPS UK sports feeds, we recommend using at least the 2nd Generation Fire TV Stick 4K or Fire TV Cube with an OTG Ethernet adapter to avoid Wi-Fi signal drops.
</div>

<h2>Step-by-Step Setup Process</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Enable Developer Options</h3>
      <p>Navigate to <strong>Settings &gt; My Fire TV &gt; About</strong>. Highlight your device name and click the select button 7 times until you see the notification stating you are a developer. Press back, select <strong>Developer Options</strong>, and enable <strong>Apps from Unknown Sources</strong>.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Install the Downloader Tool</h3>
      <p>From the Firestick home screen, navigate to the search bar and type <strong>Downloader</strong>. Install the official application with the orange icon developed by AFTVnews. Launch the app and grant storage permissions when prompted.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Install Your Preferred Media Player</h3>
      <p>Open Downloader and enter the direct official download URL for your chosen media player application (such as <a href="/help/setup-tivimate/">TiviMate Player</a> or <a href="/help/setup-iptv-smarters/">IPTV Smarters Pro</a>). Once the download completes, click <strong>Install</strong>, then delete the APK file to conserve flash storage.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">4</div>
    <div class="step-content">
      <h3>Calibrate Video &amp; Display Settings</h3>
      <p>Navigate to <strong>Settings &gt; Display &amp; Sounds &gt; Display</strong> on your Firestick. Set <strong>Resolution</strong> to Auto, set <strong>Match Original Frame Rate</strong> to ON, and set <strong>Color Depth</strong> to 10 bits if connected to an HDR-capable television.</p>
    </div>
  </div>
</div>

<h2>Maintenance &amp; Preventing Playback Freezing</h2>
<p>To keep playback smooth over extended periods, follow these regular maintenance habits:</p>
<div class="card-grid">
  <div class="card">
    <h3>Clear Cached Data</h3>
    <p>Navigate to <strong>Settings &gt; Applications &gt; Manage Installed Applications</strong>, select your media player, and click <strong>Clear Cache</strong> weekly. Never click Clear Data unless you wish to reset all settings.</p>
  </div>
  <div class="card">
    <h3>Power-Cycle the Stick</h3>
    <p>Instead of putting the device into sleep mode, periodically perform a full reboot via our <a href="/help/restart-device-and-router/">hardware restart guide</a> to purge system memory leaks.</p>
  </div>
</div>
"""

# 4. Smart TV Setup Guide
pages['help-setup-smart-tv.html'] = """---
path: /help/setup-smart-tv/
parent: /help/
parentName: Help Centre
title: Samsung & LG Smart TV Setup Guide – AuraStream UK
description: Install and configure compatible streaming applications on Samsung Tizen and LG webOS. Display calibration, audio sync, and DNS guide.
---
<div class="hero-box">
  <span class="badge badge-cyan">Smart TV Guide</span>
  <h1>Samsung Tizen &amp; LG webOS Smart TV Streaming Setup</h1>
  <p class="lead">How to install approved media player applications, configure network DNS, and calibrate audio-visual settings on modern Samsung and LG Smart TVs.</p>
</div>

<h2>Native Smart TV Streaming Considerations</h2>
<p>Modern Samsung (Tizen OS) and LG (webOS) televisions feature vibrant 4K display panels and powerful audio decoders. However, their onboard system-on-chip (SoC) processors have limited memory compared to dedicated streaming boxes. Running streaming apps natively requires clean network connectivity and proper app cache management.</p>

<h2>Installation Steps for Samsung Tizen TVs</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Open Samsung Smart Hub Apps</h3>
      <p>Press the Home button on your Samsung OneRemote and navigate to the <strong>Apps</strong> icon. Use the search icon to search for compatible media players (such as IBO Player, Smart IPTV, or Nanomid Player).</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Install and Activate</h3>
      <p>Download the application and open it. Note down the Device MAC Address and Device Key displayed on screen, which are used to assign your streaming playlist via the application publisher's portal.</p>
    </div>
  </div>
</div>

<h2>Installation Steps for LG webOS TVs</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Open LG Content Store</h3>
      <p>Select the <strong>Apps</strong> or <strong>LG Content Store</strong> from the webOS ribbon. Sign in with your LG account to permit app downloads.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Download Verified Player Application</h3>
      <p>Search for approved media player apps like IPTV Smarters Pro or IBO Player. Install the application and verify that your TV firmware is up to date.</p>
    </div>
  </div>
</div>

<h2>Optimizing Smart TV Network Performance</h2>
<p>To avoid buffering during peak evening viewing on UK broadband networks:</p>
<div class="card-grid">
  <div class="card">
    <h3>Use Ethernet or 5GHz Wi-Fi</h3>
    <p>Smart TVs have internal Wi-Fi antennas positioned behind metal chassis shielding. Connect via Cat6 Ethernet cable or connect strictly to the 5GHz Wi-Fi band of your router.</p>
  </div>
  <div class="card">
    <h3>Configure Cloudflare DNS</h3>
    <p>Go to your TV's Network Settings &gt; IP Settings &gt; DNS Server. Set DNS manually to <code>1.1.1.1</code> to prevent local ISP resolution delays. Read our full <a href="/help/uk-isp-broadband-troubleshooting/">UK broadband troubleshooting guide</a> for details.</p>
  </div>
</div>
"""

# 5. Android TV Setup Guide
pages['help-setup-android-tv.html'] = """---
path: /help/setup-android-tv/
parent: /help/
parentName: Help Centre
title: Android TV & Google TV Setup Guide – AuraStream UK
description: Configure media players on Android TV, Google TV, and Nvidia Shield. Optimize hardware decoders, refresh rates, and storage management.
---
<div class="hero-box">
  <span class="badge badge-emerald">Platform Tutorial</span>
  <h1>Android TV &amp; Google TV Streaming Player Configuration</h1>
  <p class="lead">Comprehensive instructions for deploying high-performance media players on Google TV Chromecast dongles, Sony Bravia TVs, and Nvidia Shield Pro consoles.</p>
</div>

<h2>Why Android TV Excels for UK Viewers</h2>
<p>Android TV and Google TV operating systems offer complete platform openness, allowing direct installation of premier media players like TiviMate from the Google Play Store. Furthermore, they provide access to native Android audio passthrough (Dolby Atmos, DTS:X) and advanced Auto Frame Rate (AFR) switching.</p>

<h2>Configuration Procedure</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Install From Google Play Store</h3>
      <p>Open the Google Play Store on your Android TV device. Search for verified players such as <strong>TiviMate IPTV Player</strong> or <strong>IPTV Smarters</strong>. Click Install.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Enable Hardware Decoder (HW+)</h3>
      <p>Open your player's settings menu. Navigate to <strong>Playback &gt; Decoder</strong> and ensure <strong>Hardware (HW+)</strong> is selected for both Live TV and Video-on-Demand to leverage the GPU rather than straining the CPU.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Configure Auto Frame Rate (AFR)</h3>
      <p>Under playback settings, enable <strong>Auto Frame Rate (AFR)</strong>. This forces your television to adjust its refresh rate dynamically (switching between 50Hz for UK broadcasts and 60Hz/24Hz for films) to eliminate motion judder.</p>
    </div>
  </div>
</div>

<h2>Advanced Device Calibration</h2>
<p>Consult our companion guides to resolve any network bottlenecks on your Android streaming setup:</p>
<div class="card-grid">
  <div class="card">
    <h3>TiviMate Detailed Guide</h3>
    <p>Read our specialized <a href="/help/setup-tivimate/">TiviMate settings tutorial</a> to configure EPG sources, logos, and buffer multipliers.</p>
  </div>
  <div class="card">
    <h3>Anti-Buffering Network Fixes</h3>
    <p>Review our <a href="/help/fix-buffering-issues/">buffer elimination guide</a> for MTU optimization and local interference fixes.</p>
  </div>
</div>
"""

# 6. Apple TV Setup Guide
pages['help-setup-apple-tv.html'] = """---
path: /help/setup-apple-tv/
parent: /help/
parentName: Help Centre
title: Apple TV & iOS Streaming Setup Guide – AuraStream UK
description: Configure compatible streaming apps on Apple TV 4K, iPad, and iPhone. Step-by-step App Store setup, playlist import, and tvOS tips.
---
<div class="hero-box">
  <span class="badge badge-cyan">Apple tvOS Guide</span>
  <h1>Apple TV 4K &amp; iOS Streaming Player Setup Guide</h1>
  <p class="lead">How to install approved media players on Apple TV 4K, iPad, and iPhone, with dynamic range matching and audio passthrough.</p>
</div>

<h2>The Apple TV 4K Advantage</h2>
<p>With its high-performance A-series processors and native tvOS media pipeline, the Apple TV 4K provides outstanding image upscaling and fluid UI navigation. Because sideloading is restricted on tvOS, all media player installations take place securely through the official App Store.</p>

<h2>Setup Steps for Apple TV</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Download a Verified Media Player</h3>
      <p>Launch the App Store on tvOS. Search for reputable media player applications such as <strong>IPTVX</strong>, <strong>GSE Smart IPTV</strong>, or <strong>Smarters Player Lite</strong>. Download your preferred application.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Input Connection Parameters</h3>
      <p>Open the application and select <strong>Add Playlist</strong>. Choose either <strong>Xtream Codes API</strong> (entering server URL, username, and password) or <strong>M3U URL</strong> to load your stream index.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Enable Match Content in tvOS</h3>
      <p>Navigate to Apple TV <strong>Settings &gt; Video and Audio &gt; Match Content</strong>. Turn both <strong>Match Dynamic Range</strong> and <strong>Match Frame Rate</strong> to ON. This guarantees your display automatically outputs native 50Hz signals for UK sports without judder.</p>
    </div>
  </div>
</div>

<h2>Troubleshooting Apple TV Playback</h2>
<div class="card-grid">
  <div class="card">
    <h3>Network Connection</h3>
    <p>Ensure your Apple TV is connected to your router's 5GHz Wi-Fi band or via Gigabit Ethernet. If streams freeze, consult our <a href="/help/restart-device-and-router/">restart and reboot guide</a>.</p>
  </div>
  <div class="card">
    <h3>ISP Security Filters</h3>
    <p>UK internet providers occasionally flag unknown media server ports. Consult our <a href="/help/uk-isp-broadband-troubleshooting/">UK broadband configuration guide</a> to adjust ISP router settings.</p>
  </div>
</div>
"""

# 7. TiviMate Setup Guide
pages['help-setup-tivimate.html'] = """---
path: /help/setup-tivimate/
parent: /help/
parentName: Help Centre
title: TiviMate Player Setup & Settings Guide – AuraStream UK
description: Complete configuration walkthrough for TiviMate on Firestick and Android TV: EPG setup, audio passthrough, buffer size, and recording.
---
<div class="hero-box">
  <span class="badge badge-amber">App Walkthrough</span>
  <h1>TiviMate Player Setup &amp; Optimal Configuration Guide</h1>
  <p class="lead">Master TiviMate on Android TV and Amazon Firestick. Configure Electronic Programme Guides, adjust video buffer caches, and customize display options.</p>
</div>

<h2>Why TiviMate is the Premier Player for Android</h2>
<p>TiviMate is celebrated for its broadcast-style Electronic Programme Guide (EPG), instant channel zapping, and deep customizability. It functions purely as a media player, meaning you must provide your own playlist or provider credentials.</p>

<h2>Configuration Walkthrough</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Add Playlist via Xtream Codes</h3>
      <p>Open TiviMate, select <strong>Add Playlist</strong>, and choose <strong>Xtream Codes</strong>. Enter your Server Address, Username, and Password. Ensure "Include VOD" is toggled on if your playlist includes on-demand titles.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Configure EPG Time Offset</h3>
      <p>Go to <strong>Settings &gt; EPG &gt; EPG Sources</strong>. If channel programme guides appear out of sync by an hour, adjust the <strong>Time Offset</strong> to match current UK Greenwich Mean Time (GMT) or British Summer Time (BST).</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Fine-Tune Buffer Size</h3>
      <p>Navigate to <strong>Settings &gt; Playback &gt; Buffer Size</strong>. On fast fiber broadband (100Mbps+), set the buffer to <strong>None</strong> or <strong>Small</strong> for instant zapping. On fluctuating Wi-Fi connections, set it to <strong>Medium</strong> to prevent brief freezes.</p>
    </div>
  </div>
</div>

<h2>Essential TiviMate Settings for Stability</h2>
<div class="card-grid">
  <div class="card">
    <h3>Video Output Format</h3>
    <p>In Settings &gt; Playback, change Stream Format from MPEG-TS to <strong>HLS</strong> if your provider supports it, as HLS handles packet loss more gracefully.</p>
  </div>
  <div class="card">
    <h3>Hardware Acceleration</h3>
    <p>Keep Hardware Decoder enabled. If a specific channel plays audio with a black screen, toggle that channel's decoder to Software.</p>
  </div>
</div>

<h2>Related Tutorials</h2>
<p>Check our setup guides for <a href="/help/setup-firestick/">Amazon Firestick</a> and our guide on <a href="/help/fix-buffering-issues/">fixing streaming buffering issues</a>.</p>
"""

# 8. IPTV Smarters Pro Setup Guide
pages['help-setup-iptv-smarters.html'] = """---
path: /help/setup-iptv-smarters/
parent: /help/
parentName: Help Centre
title: IPTV Smarters Pro Setup Guide – AuraStream UK
description: How to install and configure IPTV Smarters Pro across Firestick, Smart TVs, and PCs. Login troubleshooting and stream format settings.
---
<div class="hero-box">
  <span class="badge badge-amber">App Walkthrough</span>
  <h1>IPTV Smarters Pro Installation &amp; Configuration Guide</h1>
  <p class="lead">Detailed instructions for setting up IPTV Smarters Pro on Firestick, Samsung Smart TVs, LG webOS, and Windows computers.</p>
</div>

<h2>Overview of IPTV Smarters Pro</h2>
<p>IPTV Smarters Pro is one of the most accessible cross-platform streaming players, available across Firestick, Android, Smart TVs, and desktop platforms. It provides a clean dashboard dividing content into Live TV, Movies, Series, and Multi-Screen viewing.</p>

<h2>Step-by-Step Login Procedure</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Select Connection Type</h3>
      <p>Launch the application and select <strong>Login with Xtream Codes API</strong> (recommended over M3U playlist as it offers faster loading and structured VOD categorization).</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Enter Account Credentials</h3>
      <p>Fill in the four fields: <em>Any Name</em> (e.g. AuraStream), <em>Username</em>, <em>Password</em>, and the <em>Server URL</em> (including <code>http://</code> and port number). Click <strong>Add User</strong>.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Switch Stream Format to HLS</h3>
      <p>Click the gear icon in the top right corner to access <strong>Settings &gt; Stream Format</strong>. Change the setting from default MPEG-TS to <strong>HLS</strong> for smoother playback on UK broadband connections.</p>
    </div>
  </div>
</div>

<h2>Troubleshooting Common Errors</h2>
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Error Message</th>
        <th>Root Cause</th>
        <th>Resolution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Invalid Details</strong></td>
        <td>Typo in username or password</td>
        <td>Check capitalisation; copy and paste credentials without trailing spaces.</td>
      </tr>
      <tr>
        <td><strong>Failed to Authorize</strong></td>
        <td>Expired account or server port blocked</td>
        <td>Check server URL port; verify your ISP is not blocking the connection via our <a href="/help/uk-isp-broadband-troubleshooting/">UK broadband guide</a>.</td>
      </tr>
      <tr>
        <td><strong>Playback Error</strong></td>
        <td>Unsupported internal video codec</td>
        <td>Go to Settings &gt; Player Selection and switch from Built-in to VLC or ExoPlayer.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Explore Further Setup Resources</h2>
<p>Consult our guides on <a href="/help/setup-firestick/">Firestick configuration</a> and <a href="/help/restart-device-and-router/">router power-cycling</a>.</p>
"""

# 9. Device & Router Restart Guide (refining existing)
pages['help-restart.html'] = """---
path: /help/restart-device-and-router/
parent: /help/
parentName: Help Centre
title: How to Restart Streaming Devices & Routers – AuraStream UK
description: Clear cache, release congested memory, and refresh router IP leases. The correct power-cycling order for reliable streaming playback.
---
<div class="hero-box">
  <span class="badge badge-cyan">Network Maintenance</span>
  <h1>How to Properly Restart Streaming Devices and Routers</h1>
  <p class="lead">Resolve intermittent buffering, stale DNS records, and local network packet collisions with the verified 60-second hardware power-cycle sequence.</p>
</div>

<h2>Why a Proper Restart Solves Playback Issues</h2>
<p>Modern streaming devices (such as Firesticks, Apple TVs, and Smart TVs) rarely power off fully; when you turn them off using a remote, they enter a low-power standby mode. Over days of active streaming, video decoder buffers and network sockets accumulate in RAM, creating stutter. A complete power disconnect flushes volatile memory and forces a clean DHCP handshake with your router.</p>

<h2>The 60-Second Power-Cycle Sequence</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Power Down Streaming Hardware</h3>
      <p>Unplug the power adapter directly from the wall socket for your streaming device, TV, and any connected audio receivers. Do not merely use the remote power button.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Unplug Broadband Router &amp; Modem</h3>
      <p>Disconnect the power cable from your broadband router (e.g. Virgin Media Hub, BT Smart Hub, or Sky Hub). Wait a full <strong>60 seconds</strong> to allow the electrical capacitors to discharge completely.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Boot the Router First</h3>
      <p>Plug the router back into the wall. Wait 3 to 5 minutes until all front-panel indicators show a solid internet connection (green or white, depending on your provider hub model).</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">4</div>
    <div class="step-content">
      <h3>Power On Streaming Hardware</h3>
      <p>Reattach power to your television and streaming device. This ensures your device negotiates a fresh local IP address and clean DNS tables from the freshly booted router.</p>
    </div>
  </div>
</div>

<h2>What to Check If Issues Persist</h2>
<p>If power-cycling does not restore smooth playback, examine our detailed guides on <a href="/help/fix-buffering-issues/">fixing streaming buffering</a> and configuring <a href="/help/uk-isp-broadband-troubleshooting/">UK broadband router settings</a>.</p>
"""

# 10. Fix Buffering Guide
pages['help-fix-buffering.html'] = """---
path: /help/fix-buffering-issues/
parent: /help/
parentName: Help Centre
title: How to Fix Streaming Buffering & Freezing – AuraStream UK
description: Eliminate video stutter and audio dropouts. Technical advice on 5GHz Wi-Fi channels, Ethernet adapters, router MTU, and DNS servers.
---
<div class="hero-box">
  <span class="badge badge-amber">Network Optimization</span>
  <h1>How to Diagnose and Fix Streaming Buffering Issues</h1>
  <p class="lead">A step-by-step diagnostic framework to eliminate streaming freezes, video frame drops, and audio desynchronization on UK home networks.</p>
</div>

<h2>The Three Primary Causes of Buffering</h2>
<p>Streaming freezes can originate in three distinct locations: your local home network, your UK broadband provider, or the remote content delivery server. Diagnosing the exact bottleneck prevents wasted time and improves streaming stability.</p>

<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Bottleneck Location</th>
        <th>Common Symptoms</th>
        <th>Primary Solution</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Local Wi-Fi Network</strong></td>
        <td>Buffering occurs on multiple devices; video quality drops during evening hours.</td>
        <td>Switch device from 2.4GHz to 5GHz Wi-Fi band or connect via Cat6 Ethernet cable.</td>
      </tr>
      <tr>
        <td><strong>Broadband Filtering</strong></td>
        <td>Stream works during day but stutters during live weekend sports broadcasts.</td>
        <td>Adjust ISP security filters via our <a href="/help/uk-isp-broadband-troubleshooting/">UK broadband settings guide</a>.</td>
      </tr>
      <tr>
        <td><strong>Device Memory Leak</strong></td>
        <td>Player becomes sluggish after 2 hours of continuous streaming.</td>
        <td>Clear app cache and perform a <a href="/help/restart-device-and-router/">full device reboot</a>.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Four Actionable Fixes for Home Networks</h2>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Separate 2.4GHz and 5GHz Wi-Fi Bands</h3>
      <p>Many modern UK routers (like the BT Smart Hub and Virgin Media Hub 3/4/5) combine 2.4GHz and 5GHz into a single SSID. Log into your router admin panel and separate the bands. Connect your streaming hardware exclusively to the 5GHz network for higher throughput and reduced interference.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Change DNS to Cloudflare or Google</h3>
      <p>Default UK ISP DNS servers can suffer from latency during peak traffic. On your streaming device or router, set Primary DNS to <code>1.1.1.1</code> (Cloudflare) and Secondary DNS to <code>8.8.8.8</code> (Google).</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Adjust Video Decoder to Hardware (HW+)</h3>
      <p>Inside your media player settings (such as <a href="/help/setup-tivimate/">TiviMate</a> or <a href="/help/setup-iptv-smarters/">IPTV Smarters</a>), ensure the video decoder is set to <strong>Hardware</strong>. Software decoding forces your device's CPU to render frames, resulting in stutter during 50 FPS sports streams.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">4</div>
    <div class="step-content">
      <h3>Check Router MTU Size</h3>
      <p>Ensure your router Maximum Transmission Unit (MTU) is configured to <strong>1500</strong> for standard Ethernet or <strong>1492</strong> for PPPoE connections. Incorrect MTU sizes lead to packet fragmentation and continuous micro-buffering.</p>
    </div>
  </div>
</div>

<h2>Related Help Resources</h2>
<p>Consult our walkthrough on <a href="/help/setup-firestick/">Firestick configuration</a> or browse our <a href="/help/">full Help Centre directory</a>.</p>
"""

# 11. UK ISP Broadband Guide
pages['help-uk-isp-broadband.html'] = """---
path: /help/uk-isp-broadband-troubleshooting/
parent: /help/
parentName: Help Centre
title: UK Broadband Streaming Settings & Fixes – AuraStream UK
description: Configure Virgin Media Web Safe, BT Smart Hub Web Protect, and Sky Broadband Shield to prevent stream blocking, packet loss, and drops.
---
<div class="hero-box">
  <span class="badge badge-amber">Broadband Technical Guide</span>
  <h1>UK Broadband &amp; ISP Settings for Smooth Streaming</h1>
  <p class="lead">How to configure security filters and firewall rules across Virgin Media, BT, Sky, and EE to prevent stream throttling and false-positive blocks.</p>
</div>

<h2>Understanding UK ISP Network Management</h2>
<p>Major Internet Service Providers in the United Kingdom deploy network-level protection suites (such as Virgin Media Web Safe, BT Web Protect, and Sky Broadband Shield). While intended to safeguard families against malicious websites, these filters frequently flag streaming content delivery networks (CDNs) as unclassified or high-bandwidth anomalies, triggering sudden connection resets.</p>

<h2>Provider-Specific Configuration Guides</h2>

<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Virgin Media: Disabling Web Safe False Positives</h3>
      <p>Log in to your <strong>My Virgin Media</strong> account. Navigate to <strong>Account Settings &gt; Online Security</strong>. Locate <strong>Web Safe</strong>. We recommend disabling <em>Virus Safe</em> or adding your streaming service hostnames to the trusted whitelist. Additionally, disable <em>Child Safe</em> during evening viewing if live sports streams fail to connect.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>BT Broadband: Configuring Web Protect &amp; Parental Controls</h3>
      <p>Sign in to <strong>My BT</strong> and navigate to <strong>Manage Security</strong>. Look for <strong>BT Web Protect</strong> and <strong>BT Parental Controls</strong>. Turn off Parental Controls or set filter level to Custom to prevent the router from terminating non-standard streaming ports (e.g. ports 8080, 2086, 2095).</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Sky Broadband: Sky Broadband Shield Settings</h3>
      <p>Log in to your Sky account online and open the <strong>Broadband Shield</strong> settings page. Switch the default protection setting from "18" to <strong>Custom</strong>, or turn Shield off to prevent automated DNS blocking on live video streams.</p>
    </div>
  </div>

  <div class="step-card">
    <div class="step-num">4</div>
    <div class="step-content">
      <h3>EE &amp; Vodafone Broadband</h3>
      <p>Log in to your EE Smart Hub or Vodafone broadband router portal (usually <code>192.168.1.1</code>). Verify that the SPI Firewall is set to Medium rather than High, and turn off "Content Lock" under your account settings.</p>
    </div>
  </div>
</div>

<h2>Summary of Recommended Router Changes</h2>
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>ISP Feature</th>
        <th>Default State</th>
        <th>Recommended State</th>
        <th>Impact on Streams</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Virgin Media Virus Safe</td>
        <td>Enabled</td>
        <td>Disabled or Custom Whitelist</td>
        <td>Eliminates 403 Forbidden handshake errors on video chunks.</td>
      </tr>
      <tr>
        <td>BT Parental Controls</td>
        <td>Enabled</td>
        <td>Disabled / Off</td>
        <td>Prevents abrupt disconnects during peak weekend events.</td>
      </tr>
      <tr>
        <td>Sky Broadband Shield</td>
        <td>Age 18 Active</td>
        <td>Disabled or Custom</td>
        <td>Ensures unclassified stream IP addresses connect immediately.</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>Further Reading</h2>
<p>Learn how to <a href="/help/fix-buffering-issues/">fix streaming buffering issues</a> or consult our guide on <a href="/help/restart-device-and-router/">restarting your router properly</a>.</p>
"""

# 12. About Page
pages['about.html'] = """---
path: /about/
parent: /
title: About AuraStream UK – Standards & Mission
description: Learn about AuraStream UK, our rigorous testing standards for streaming hardware, technical benchmarks, and independent research values.
---
<div class="hero-box">
  <span class="badge badge-cyan">Company Standards</span>
  <h1>About AuraStream UK &amp; Our Technical Standards</h1>
  <p class="lead">AuraStream UK is an independent British technology resource dedicated to consumer education, video player calibration, and streaming network optimization.</p>
</div>

<h2>Our Founding Mission</h2>
<p>The modern cord-cutting streaming ecosystem is filled with exaggerated superlatives, unsupported performance statistics, and conflicting setup advice. AuraStream UK was established to provide clear, hardware-tested, and scientifically verifiable tutorials for UK households navigating digital television and internet protocol streaming.</p>

<h2>Our Three Editorial Pillars</h2>
<div class="card-grid">
  <div class="card">
    <span class="badge badge-cyan">Integrity</span>
    <h3>Zero Fabricated Claims</h3>
    <p>We do not publish unsubstantiated channel counts, unverified uptime guarantees, or marketing superlatives. Every metric published is tested on real consumer hardware.</p>
  </div>

  <div class="card">
    <span class="badge badge-emerald">Evidence</span>
    <h3>Hardware-Tested Tutorials</h3>
    <p>All setup guides are verified directly across current generation Amazon Firestick, Apple TV, Google TV, Samsung Tizen, and LG webOS televisions.</p>
  </div>

  <div class="card">
    <span class="badge badge-amber">Compliance</span>
    <h3>Consumer Rights &amp; Privacy</h3>
    <p>We respect UK consumer regulations and the Data Protection Act 2018 (UK GDPR). Commercial features remain disabled while distributor authorizations are audited.</p>
  </div>
</div>

<h2>Our Hardware Testing Facility</h2>
<p>Our technical team assesses media players and home networking equipment against standard UK broadband connections (Virgin Media Gig1, BT Full Fibre 900, and standard VDSL FTTC lines). We measure performance across four critical metrics:</p>
<div class="step-list">
  <div class="step-card">
    <div class="step-num">1</div>
    <div class="step-content">
      <h3>Time-To-First-Frame (TTFF)</h3>
      <p>How quickly a player decodes and renders live video after a channel selection.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">2</div>
    <div class="step-content">
      <h3>Buffer Underrun Frequency</h3>
      <p>Measuring frame drops under simulated 10% packet jitter and evening peak congestion.</p>
    </div>
  </div>
  <div class="step-card">
    <div class="step-num">3</div>
    <div class="step-content">
      <h3>Audio Synchronization &amp; Passthrough</h3>
      <p>Verifying millisecond audio alignment across 50Hz and 60Hz content on HDMI soundbars.</p>
    </div>
  </div>
</div>

<h2>Contact the Editorial Team</h2>
<p>If you have questions, hardware review requests, or correction notices, please <a href="/contact/">contact our technical team</a>.</p>
"""

# 13. Contact Page
pages['contact.html'] = """---
path: /contact/
parent: /
title: Contact AuraStream UK – Technical Support & Inquiries
description: Get in touch with the AuraStream UK technical team for guide suggestions, correction notices, and device compatibility questions.
---
<div class="hero-box">
  <span class="badge badge-cyan">Direct Communication</span>
  <h1>Contact the AuraStream UK Technical Editorial Team</h1>
  <p class="lead">Have a question regarding our device walkthroughs, noticed a firmware update change, or wish to report a technical correction? Reach out to us below.</p>
</div>

<h2>Direct Contact Details</h2>
<p>Our editorial and technical team operates Monday to Friday, 9:00 AM to 5:00 PM London time (GMT/BST).</p>

<div class="card-grid">
  <div class="card">
    <h3>Editorial Inquiries &amp; Corrections</h3>
    <p>For technical feedback, tutorial corrections, or hardware testing inquiries:</p>
    <p><strong>Email:</strong> {{contactBlock}}</p>
  </div>

  <div class="card">
    <h3>Technical Help Resources</h3>
    <p>Before emailing, browse our self-service tutorials for immediate step-by-step assistance:</p>
    <a class="button secondary" href="/help/">Visit the Help Centre</a>
  </div>
</div>

<h2>Frequently Consulted Guides</h2>
<div class="card-grid">
  <div class="card">
    <h2>Firestick Setup</h2>
    <p>Step-by-step installation instructions for Amazon Fire TV sticks and cubes.</p>
    <a class="button secondary" href="/help/setup-firestick/">View Firestick guide</a>
  </div>
  <div class="card">
    <h2>Anti-Buffering Solutions</h2>
    <p>Proven techniques to diagnose and fix home network streaming stutter.</p>
    <a class="button secondary" href="/help/fix-buffering-issues/">View buffering fixes</a>
  </div>
  <div class="card">
    <h2>UK ISP Configuration</h2>
    <p>Settings for Virgin Media Web Safe, BT Smart Hub, and Sky Broadband Shield.</p>
    <a class="button secondary" href="/help/uk-isp-broadband-troubleshooting/">View ISP settings</a>
  </div>
</div>
"""

# 14. Privacy Policy
pages['privacy.html'] = """---
path: /privacy/
parent: /
title: Privacy Policy – AuraStream UK
description: Our commitment to privacy under UK GDPR: what minimal data we process, your statutory rights, and cookie management policies.
---
<div class="hero-box">
  <span class="badge badge-cyan">Legal Notice</span>
  <h1>Privacy Policy &amp; UK GDPR Compliance Notice</h1>
  <p class="lead">AuraStream UK is committed to transparent data handling in strict accordance with the UK General Data Protection Regulation and the Data Protection Act 2018.</p>
</div>

<h2>1. Data Controller Information</h2>
<p>{{brandName}} operates as the data controller for personal data processed through this website. If you have questions regarding this policy or your statutory rights, contact us at: {{contactBlock}}.</p>

<h2>2. Information We Process</h2>
<p>We believe in privacy by design. We collect only the minimum technical telemetry necessary to deliver secure and reliable web pages:</p>
<ul>
  <li><strong>Server Logs:</strong> When accessing our website, our edge servers record standard HTTP request logs including IP address, user-agent string, page requested, and HTTP status code. These logs are stored for 14 days solely for security monitoring and DDoS mitigation.</li>
  <li><strong>Direct Inquiries:</strong> When you send an email to our support team, we retain your email address and message content solely to respond to your inquiry.</li>
</ul>

<h2>3. Cookies and Tracking</h2>
<p>This website does not utilize invasive third-party marketing, retargeting, or advertising tracking cookies. Any cookies deployed are strictly necessary for core site performance and security functionality.</p>

<h2>4. Your Legal Rights under UK Law</h2>
<p>Under UK data protection legislation, you retain the following statutory rights:</p>
<div class="card-grid">
  <div class="card">
    <h3>Right to Access &amp; Portability</h3>
    <p>You may request a copy of any personal data we hold concerning your inquiries.</p>
  </div>
  <div class="card">
    <h3>Right to Erasure</h3>
    <p>You may ask us to delete correspondence or data where no statutory retention obligation applies.</p>
  </div>
</div>

<h2>5. Policy Updates</h2>
<p>We review and update this privacy policy periodically to reflect evolving technical standards. For terms of service, visit our <a href="/terms/">terms and conditions page</a>.</p>
"""

# 15. Terms of Service
pages['terms.html'] = """---
path: /terms/
parent: /
title: Terms of Service – AuraStream UK
description: Terms and conditions governing the use of the AuraStream UK educational guides, technical resources, and online materials.
---
<div class="hero-box">
  <span class="badge badge-cyan">Legal Agreement</span>
  <h1>Terms of Service &amp; Acceptable Use Policy</h1>
  <p class="lead">Please read these terms and conditions carefully before consulting the educational resources and tutorials published on AuraStream UK.</p>
</div>

<h2>1. Educational &amp; Informational Disclaimer</h2>
<p>All materials, tutorials, configurations, and network advice published on {{brandName}} are provided solely for educational, technical troubleshooting, and consumer research purposes. We do not host, broadcast, transmit, or distribute copyrighted video streams. Users are solely responsible for ensuring their streaming habits comply with local UK copyright legislation and broadcaster terms of service.</p>

<h2>2. Intellectual Property &amp; Trademarks</h2>
<p>All brand names, trademarks, product names, and registered logos referenced across this website (including but not limited to Amazon, Firestick, Google TV, Android, Apple TV, tvOS, Samsung, Tizen, LG, webOS, Virgin Media, BT, and Sky) remain the exclusive property of their respective owners. Mention of these trademarks does not imply endorsement, affiliation, or commercial sponsorship.</p>

<h2>3. Limitation of Liability</h2>
<p>{{brandName}} makes every effort to ensure the accuracy of our configuration tutorials. However, technology hardware and router firmware change frequently. We assume no liability for router configuration errors, hardware damage, or service interruptions resulting from the application of advice published on this site.</p>

<h2>4. Governing Law</h2>
<p>These terms and conditions are governed by and construed in accordance with the laws of England and Wales. For any inquiries, reach us through our <a href="/contact/">contact page</a>.</p>
"""

# 16. 404 Page
pages['404.html'] = """---
path: /404.html
title: Page Not Found – AuraStream UK
description: The page you requested could not be found. Explore our streaming setup guides, troubleshooting articles, or return home.
---
<div class="hero-box">
  <span class="badge badge-amber">HTTP 404</span>
  <h1>Page Not Found (404 Error)</h1>
  <p class="lead">The page or resource you requested is unavailable, has been relocated, or never existed.</p>
</div>

<h2>Helpful Navigation Links</h2>
<p>Consult our most popular device setup and troubleshooting resources to find what you need:</p>

<div class="card-grid">
  <div class="card">
    <h2>Return to Home</h2>
    <p>Visit the homepage to browse all hardware guides and streaming benchmarks.</p>
    <a class="button" href="/">Go to homepage</a>
  </div>

  <div class="card">
    <h2>Help Centre</h2>
    <p>Browse our complete knowledge base of media player and hardware setup tutorials.</p>
    <a class="button secondary" href="/help/">Visit Help Centre</a>
  </div>

  <div class="card">
    <h2>Firestick Setup</h2>
    <p>Read our step-by-step guide to configuring media players on Amazon Fire TV sticks.</p>
    <a class="button secondary" href="/help/setup-firestick/">View Firestick guide</a>
  </div>

  <div class="card">
    <h2>Anti-Buffering Guide</h2>
    <p>Learn practical steps to eliminate freezing and improve streaming playback.</p>
    <a class="button secondary" href="/help/fix-buffering-issues/">Read buffering fixes</a>
  </div>
</div>
"""

# Write all pages
for fname, content in pages.items():
    fp = os.path.join(content_dir, fname)
    with open(fp, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote {fname}')

print(f'Successfully wrote all {len(pages)} pages to content directory!')
