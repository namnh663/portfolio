import React from 'react';
import './Article.css';

const StressTesting = () => {
  return (
    <div className="article-detail">
      <h2>Stress Testing</h2>
      <p>
        Stress testing aims to determine the performance efficiency of an application under conditions exceeding normal load, specifically targeting the mobile device. The following test conditions are considered for stress testing:
      </p>

      <h3>Test Conditions</h3>
      <ul>
        <li><b>High CPU Usage:</b> Simulating scenarios where the CPU is under significant strain.</li>
        <li><b>Out-of-Memory:</b> Testing how the app handles scenarios where the device runs out of memory.</li>
        <li><b>Low Disk Space:</b> Ensuring the app functions correctly when the device has minimal available storage.</li>
        <li><b>Battery Stress:</b> Evaluating app performance under low battery conditions or high battery consumption.</li>
        <li><b>Failures:</b> Introducing potential failures to observe the app's resilience and recovery capabilities.</li>
        <li><b>Poor Bandwidth:</b> Testing the app's performance and functionality with limited or unstable network connections.</li>
        <li><b>High Number of User Interactions:</b> Simulating real-world conditions with a very high frequency of user interactions.</li>
      </ul>

      <h3>Tools and Methods</h3>
      <ul>
        <li><b>Automated Tools:</b> Tools like Monkey can be used to create these stressful conditions. Monkey is a command line tool that runs over the ADB shell command line, generating pseudo-random streams of user events.</li>
        <li><b>Manual Methods:</b> Stressful conditions can also be created manually, such as by using large files or running other high CPU-usage or memory-consuming applications concurrently.</li>
      </ul>

      <p>
        Stress testing ensures that the application can handle extreme conditions without failing, providing insights into its robustness, stability, and performance limitations under stress.
      </p>
    </div>
  );
};

export default StressTesting;
