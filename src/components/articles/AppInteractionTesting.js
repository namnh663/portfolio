import React from 'react';
import './Article.css';

const AppInteractionTesting = () => {
  return (
    <div className="article-detail">
      <h2>Testing for App Interactions with Device Software</h2>

      <h3>Testing for Notifications</h3>
      <p>
        The operating system uses various mechanisms to display notifications, which can sometimes be delayed or not displayed to optimize power consumption. Key test conditions include:
      </p>
      <ul>
        <li>Correct handling of notifications when the app is in the foreground or background, especially under low battery conditions.</li>
        <li>Ensuring user interactions with notifications (e.g., responding to a notification) are accessible within the app later.</li>
        <li>If notifications contain deep links, the corresponding page should open instead of the home screen.</li>
      </ul>

      <h3>Testing for Quick-access Links</h3>
      <p>
        Quick-access links (e.g., app shortcuts in Android, Force-touch or 3D-touch for iOS) allow users to perform certain app functions without launching the app. Key test conditions include:
      </p>
      <ul>
        <li>Ensuring the app behaves correctly on operating system versions that offer or do not offer these features.</li>
        <li>Verifying that actions performed via quick-access links are correctly reflected in the app when opened.</li>
      </ul>

      <h3>Testing for User Preferences Provided by the Operating System</h3>
      <p>
        Testing must ensure the app respects user preferences set through the operating system. Key test conditions include:
      </p>
      <ul>
        <li>Users can amend typical preferences such as sound, brightness, network, power save mode, date and time, time zone, languages, access type, and notifications.</li>
        <li>The app adheres to these preferences, behaving accordingly (e.g., not playing sounds if the device is set to mute).</li>
      </ul>

      <h3>Testing for Different Types of Apps</h3>
      <p>
        Tests vary depending on the type of mobile app (native, hybrid, or web). Key test conditions include:
      </p>
      <ul>
        <li><strong>Native Apps:</strong> Ensure device compatibility and proper utilization of device features.</li>
        <li><strong>Hybrid Apps:</strong> Check interaction with device native features, performance issues due to the abstraction layer, and usability compared to native apps.</li>
        <li><strong>Web Apps:</strong> Test cross-browser compatibility, ensure functionality across different JavaScript engines, proper utilization of OS features, and usability compared to native apps.</li>
      </ul>

      <h3>Testing for Interoperability with Multiple Platforms and Operating System Versions</h3>
      <p>
        Testing must ensure the app functions correctly across multiple operating systems and versions. Key test conditions include:
      </p>
      <ul>
        <li>Handling of interrupts, notifications, and optimizations for energy saving.</li>
        <li>Correct functionality for multi-platform applications, especially those created using cross-platform development frameworks.</li>
        <li>Testing for backward compatibility and ensuring the app works with both older and newer platform versions.</li>
        <li>Testing new or changed features introduced in different platform versions (e.g., Android's Doze framework).</li>
      </ul>

      <h3>Testing for Interoperability and Co-existence with other Apps on the Device</h3>
      <p>
        Apps often interact with each other when installed on a device. Key test conditions include:
      </p>
      <ul>
        <li>Ensuring correct data transfer between the app and utilized apps.</li>
        <li>No harm to user data stored within utilized apps.</li>
        <li>Addressing conflicting behaviors (e.g., one app turning off GPS to save energy while another turns it on automatically).</li>
      </ul>
      <p>
        Given the vast number of apps available, it's not feasible to test co-existence with all of them, but potential issues should be considered and tested based on their risk.
      </p>
    </div>
  );
};

export default AppInteractionTesting;
