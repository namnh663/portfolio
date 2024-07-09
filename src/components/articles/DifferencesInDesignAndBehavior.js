import React from 'react';
import './Article.css';

const DifferencesInDesignAndBehavior = () => {
  return (
    <div className="article-detail">
      <h2>Specific Differences in Design and Behavior of Android and iOS</h2>

      <h3>Design Guidelines</h3>

      <p>Android (Material Design)</p>
      <ul>
        <li>
          <strong>Navigation Patterns:</strong>
          <ul>
            <li><strong>Navigation Drawer:</strong> A side menu that slides out.</li>
            <li><strong>Bottom Navigation:</strong> For quick access to top-level destinations.</li>
            <li><strong>Tabs:</strong> Organizes content at the same hierarchy level.</li>
          </ul>
        </li>
        <li>
          <strong>Buttons:</strong>
          <ul>
            <li><strong>Floating Action Button (FAB):</strong> A circular button that triggers a primary action.</li>
            <li><strong>Flat and Raised Buttons:</strong> Flat buttons for less emphasis, raised buttons for more emphasis.</li>
          </ul>
        </li>
        <li>
          <strong>Typography:</strong>
          <ul>
            <li>Uses the Roboto typeface.</li>
            <li>Emphasis on large, bold headers with smaller body text.</li>
          </ul>
        </li>
        <li>
          <strong>Colors:</strong>
          <ul>
            <li>Uses a vibrant color palette.</li>
            <li>Encourages the use of primary and accent colors to create a bold look.</li>
          </ul>
        </li>
        <li>
          <strong>Icons:</strong>
          <ul>
            <li>Material icons follow a consistent style and are generally more colorful and detailed.</li>
            <li>Iconography is typically flat and minimalistic.</li>
          </ul>
        </li>
        <li>
          <strong>UI Elements:</strong>
          <ul>
            <li><strong>Cards:</strong> Used for containing content and actions about a single subject.</li>
            <li><strong>Snackbar and Toasts:</strong> Provide brief messages about app processes.</li>
          </ul>
        </li>
      </ul>

      <p>iOS (Human Interface Guidelines)</p>
      <ul>
        <li>
          <strong>Navigation Patterns:</strong>
          <ul>
            <li><strong>Tab Bar:</strong> Typically found at the bottom for quick navigation.</li>
            <li><strong>Navigation Bar:</strong> At the top, includes back button, title, and sometimes action buttons.</li>
          </ul>
        </li>
        <li>
          <strong>Buttons:</strong>
          <ul>
            <li><strong>Simple Buttons:</strong> Tend to be more minimalistic and flat.</li>
            <li><strong>Segmented Controls:</strong> Used for switching between different views.</li>
          </ul>
        </li>
        <li>
          <strong>Typography:</strong>
          <ul>
            <li>Uses the San Francisco typeface.</li>
            <li>Focuses on readability and clarity with dynamic type sizes.</li>
          </ul>
        </li>
        <li>
          <strong>Colors:</strong>
          <ul>
            <li>Generally more subdued and monochromatic.</li>
            <li>Uses accent colors sparingly for highlights.</li>
          </ul>
        </li>
        <li>
          <strong>Icons:</strong>
          <ul>
            <li>iOS icons are usually simpler, often outlined rather than filled.</li>
            <li>Consistent use of Apple's system icons.</li>
          </ul>
        </li>
        <li>
          <strong>UI Elements:</strong>
          <ul>
            <li><strong>Modals:</strong> Often used for tasks that require user attention.</li>
            <li><strong>Alerts:</strong> For critical information that requires acknowledgment.</li>
          </ul>
        </li>
      </ul>

      <h3>Behavioral Differences</h3>

      <p>Android</p>
      <ul>
        <li><strong>Back Navigation:</strong> System-wide back button navigates through the app’s history stack.</li>
        <li>
          <strong>App Lifecycle:</strong>
          <ul>
            <li>More complex with multiple states (Created, Started, Resumed, Paused, Stopped, Destroyed).</li>
            <li>Apps can be killed to reclaim resources but should be able to restore the previous state.</li>
          </ul>
        </li>
        <li>
          <strong>Permissions:</strong>
          <ul>
            <li>Runtime permissions introduced in Android 6.0 (Marshmallow).</li>
            <li>Users are prompted for permissions at the time the app needs them.</li>
          </ul>
        </li>
        <li>
          <strong>Intents:</strong> Used for inter-app communication. Allows apps to open other apps or perform actions within them.</li>
        <li>
          <strong>Widgets:</strong> Home screen widgets provide quick access to app functions or information.</li>
      </ul>

      <p>iOS</p>
      <ul>
        <li><strong>Back Navigation:</strong> Typically managed within the app using navigation bars. Swipe gestures from the edge can also be used for navigation.</li>
        <li>
          <strong>App Lifecycle:</strong>
          <ul>
            <li>Simpler with states like Inactive, Active, Background, Suspended, and Not Running.</li>
            <li>Apps are generally expected to save their state before being suspended.</li>
          </ul>
        </li>
        <li>
          <strong>Permissions:</strong>
          <ul>
            <li>Permissions are requested the first time the app needs access to a specific feature.</li>
            <li>Clear and concise permission dialogues.</li>
          </ul>
        </li>
        <li>
          <strong>Handoff and Continuity:</strong> Allows users to continue tasks seamlessly across different Apple devices.</li>
        <li>
          <strong>Force Touch / Haptic Touch:</strong> Provides additional context or actions based on the pressure of the touch.</li>
      </ul>

      <h3>User Experience Differences</h3>

      <p>Android</p>
      <ul>
        <li>
          <strong>Customization:</strong>
          <ul>
            <li>Highly customizable with widgets, launchers, and third-party apps.</li>
            <li>Users can change almost every aspect of the home screen and app appearance.</li>
          </ul>
        </li>
        <li>
          <strong>Notifications:</strong> Rich notifications with more interactive options. Notification channels to group and manage different types of notifications.</li>
        <li>
          <strong>Multitasking:</strong> Split-screen mode for running two apps side by side. Picture-in-Picture mode for videos.</li>
      </ul>

      <p>iOS</p>
      <ul>
        <li>
          <strong>Consistency:</strong> More uniform user experience across devices. Less customization but ensures a consistent look and feel.</li>
        <li>
          <strong>Notifications:</strong> Grouped notifications by app. Interactive notifications with actions like replying to messages.</li>
        <li>
          <strong>Multitasking:</strong> App Switcher for quick app switching. Split View and Slide Over on iPads for running multiple apps.</li>
      </ul>

      <p className="important">By understanding these specific differences, testers can better tailor their testing strategies to ensure that both Android and iOS applications meet their respective platform guidelines and provide a seamless user experience.</p>
    </div>
  );
};

export default DifferencesInDesignAndBehavior;