import React from 'react';
import '../Topic.css';

const MobileAppArchitecture = () => {
  return (
    <div className="topic-detail">
      <h2>Mobile Application Architecture</h2>
      <p>
        Designing a mobile application involves multiple architectural decisions, influenced by factors such as the target audience, type of application, platform support, connectivity, data storage needs, and connections to other devices, including IoT appliances.
      </p>
      <h3>Key Considerations</h3>
      <ul>
        <li><strong>Target Audience</strong>: Understanding user demographics and behaviors to tailor the app's features.</li>
        <li><strong>Type of Application</strong>: Determining whether the app will be a native, web, or hybrid application.</li>
        <li><strong>Platform Support</strong>: Ensuring compatibility across various mobile and non-mobile platforms.</li>
        <li><strong>Connectivity Needs</strong>: Deciding on the required network connections (e.g., Wi-Fi, cellular data, NFC, Bluetooth).</li>
        <li><strong>Data Storage Needs</strong>: Planning for local vs. remote data storage.</li>
        <li><strong>Connections to Other Devices</strong>: Integrating with IoT appliances and other devices.</li>
      </ul>
      <h3>Architectural Decisions</h3>
      <p>Client-side Architecture</p>
      <ul>
        <li><strong>Thin Client</strong>: Minimal device-specific code; relies on a web browser and JavaScript for client-side logic.</li>
        <li><strong>Thick/Fat Client</strong>: Contains substantial application code, uses mobile OS features, and typically applies to native or hybrid apps.</li>
      </ul>
      <p>Server-side Architecture</p>
      <ul>
        <li><strong>Single-tier</strong>: Monolithic, with all servers on one machine; less scalable and harder to secure.</li>
        <li><strong>Multi-tier</strong>: Distributes server-side components across multiple units.
          <ul>
            <li><strong>Two-tier</strong>: Separate web and database servers.</li>
            <li><strong>Three-tier</strong>: Includes web, application, and database servers.</li>
          </ul>
        </li>
        <li><strong>Advantages</strong>: Flexibility, scalability, and security.</li>
        <li><strong>Disadvantages</strong>: Higher development, management, and hosting costs.</li>
      </ul>
      <h3>Connection Types</h3>
      <ul>
        <li><strong>Wi-Fi</strong>: Common for stable and high-speed connections.</li>
        <li><strong>Cellular Data</strong>: Includes 2G, 3G, 4G, and 5G for mobile connectivity.</li>
        <li><strong>NFC and Bluetooth</strong>: Used for short-range communication.</li>
      </ul>
      <h3>Application Connectivity Modes</h3>
      <ul>
        <li><strong>Never-connected Apps</strong>: Operate entirely offline (e.g., calculators).</li>
        <li><strong>Always-connected Apps</strong>: Require a constant network connection (e.g., mobile web apps).</li>
        <li><strong>Partially-connected Apps</strong>: Operate offline for extended periods but connect for specific tasks like data transfer.</li>
      </ul>
      <h3>Data Synchronization Methods</h3>
      <ul>
        <li><strong>Continuous Mode</strong>: Transfers data as soon as it's submitted.</li>
        <li><strong>Store-and-forward Mode</strong>: Stores data locally before transferring, useful when connectivity is intermittent.</li>
      </ul>
      <h3>Data Transfer Approaches</h3>
      <ul>
        <li><strong>Synchronous Data Transfer</strong>: The calling function waits for the called function to complete before returning.</li>
        <li><strong>Asynchronous Data Transfer</strong>: The called server function processes data in the background and returns control immediately, calling back the client function once the task is complete. This increases user control but also adds complexity due to the need for a handshake mechanism to ensure client and network availability.</li>
      </ul>
      <p>
        Understanding these architectural considerations and decisions helps in designing mobile applications that are robust, scalable, and aligned with business and user needs.
      </p>
    </div>
  );
};

export default MobileAppArchitecture;
