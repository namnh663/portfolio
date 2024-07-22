import React from 'react';
import '../Topic.css';

const MobileDeviceTypes = () => {
  return (
    <div className="topic-detail">
      <h2>Mobile Device Types</h2>
      <p>
        Mobile devices come in various forms, each supporting different types of applications and functionalities. Key device categories include:
      </p>
      <ul>
        <li><strong>Basic Phones</strong>: These are used primarily for calls and SMS. They have minimal built-in apps and games, and they do not support app installation or internet browsing.</li>
        <li><strong>Feature Phones</strong>: These provide limited app support and internet access via a built-in browser. They may have additional hardware features such as cameras.</li>
        <li><strong>Smartphones</strong>: These devices are equipped with multiple sensors and an operating system that supports app installation, multimedia, and internet browsing. They offer a wide range of functionalities and are highly versatile.</li>
        <li><strong>Tablets</strong>: Similar to smartphones but larger, tablets are preferred for tasks requiring a bigger display. They often support longer battery life and are ideal for multimedia consumption and productivity tasks.</li>
        <li><strong>Companion Devices and IoT Appliances</strong>: These devices, including wearables, extend the functionality of smartphones and tablets. They allow for more convenient access to data and can enhance the capabilities of primary devices.</li>
      </ul>
      <h3>Specific Features and Testing Considerations</h3>
      <ul>
        <li><strong>Basic Phones</strong>: Limited to telephony and SMS; testing focuses on core functionalities without considering app installations or browsing capabilities.</li>
        <li><strong>Feature Phones</strong>: Testing includes limited app support and internet browsing. Additional hardware features like cameras may require specific tests.</li>
        <li><strong>Smartphones</strong>: Extensive testing is needed for various sensors, app installations, multimedia capabilities, and browsing functionalities.</li>
        <li><strong>Tablets</strong>: Testing should account for larger screen sizes, different use cases, and potentially longer battery life.</li>
        <li><strong>Companion Devices and Wearables</strong>: Testing focuses on their integration with smartphones or tablets and their independent functionalities. Wearables like fitness bands and smartwatches may require specific tests for health and fitness features.</li>
      </ul>
      <p>
        Understanding the distinct characteristics of each device type ensures that testing covers all relevant aspects, providing a seamless user experience across different platforms.
      </p>
    </div>
  );
};

export default MobileDeviceTypes;
