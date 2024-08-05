import React from 'react';
import './Article.css';

const InstallabilityTesting = () => {
  return (
    <div className="article-detail">
      <h2>Installability Testing</h2>
      <p>
        Installability testing focuses on the processes of installing, updating, and de-installing an app. The following approaches are typically used:
      </p>

      <h3>Installation Methods</h3>
      <ul>
        <li><b>Application Stores:</b>
          <ul>
            <li><b>Marketplaces:</b> Users can install apps from stores like Google Play Store or Apple’s App Store.</li>
            <li><b>Enterprise Apps:</b> Installation via a link or distribution services such as HockeyApp or App Center.</li>
          </ul>
        </li>
        <li><b>Sideloading:</b> Some operating systems allow installing apps by copying them to the device and installing from the file.</li>
        <li><b>Desktop Applications:</b> Tools like Apple iTunes (for iOS) or Android App Installer allow app installation using a data cable. These applications also often support de-installation.</li>
      </ul>

      <h3>Installation Methods to Test</h3>
      <ul>
        <li><b>OTA (Over-the-Air):</b> Installation via Wi-Fi or Cellular Data.</li>
        <li><b>Data Cable:</b> Installation using a physical connection.</li>
      </ul>

      <h3>Test Conditions to Consider</h3>
      <ul>
        <li><b>Memory Locations:</b>
          <ul>
            <li>Installation, de-installation, and upgrade on both internal and external memory (if supported).</li>
          </ul>
        </li>
        <li><b>Re-installation Scenarios:</b>
          <ul>
            <li>Re-installing the app with the “retain app data” option chosen during the previous de-installation.</li>
            <li>Re-installing the app without retaining app data from the previous de-installation.</li>
          </ul>
        </li>
        <li><b>Interruption Scenarios:</b>
          <ul>
            <li>Cancelling or interrupting installation/de-installation, such as by shutting down the device or disconnecting from the internet.</li>
            <li>Resuming interrupted installation, de-installation, and upgrades after cancellation or interruption.</li>
          </ul>
        </li>
        <li><b>Permissions Testing:</b> Verifying app behavior when permissions (e.g., access to the address book) are denied. Ensure the app provides a corresponding message to the user.</li>
        <li><b>Updating:</b> Updating the app and verifying that no data is lost.</li>
      </ul>

      <h3>Special Considerations</h3>
      <ul>
        <li><b>Jailbroken/Rooted Devices:</b> Some apps require jailbroken (iOS) or rooted (Android) devices for administrative rights. These devices often are not supported by platform providers due to legal implications. Apps not requiring jailbreaking/rooting may not need to be tested on such devices.</li>
      </ul>

      <p>
        Installability testing ensures that the app installs, updates, and uninstalls correctly under various scenarios, providing a smooth and predictable user experience.
      </p>
    </div>
  );
};

export default InstallabilityTesting;
