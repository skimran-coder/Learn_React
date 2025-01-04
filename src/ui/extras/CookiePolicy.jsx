import React from "react";

const CookiePolicy = () => {
  return (
    <div className="cookie-policy-container p-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center my-6">Cookie Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains how <strong>Food Store App</strong> uses
        cookies and similar tracking technologies on our platform. By using our
        services, you agree to the use of cookies as described in this policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files that are placed on your device when you
        visit a website. They help us recognize your device, improve your
        experience, and provide relevant features and content.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. Types of Cookies We Use
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Essential Cookies:</strong> These cookies are necessary for
          the functionality of our platform, such as maintaining your login
          session.
        </li>
        <li>
          <strong>Performance Cookies:</strong> These cookies help us understand
          how you interact with our platform, allowing us to improve user
          experience.
        </li>
        <li>
          <strong>Functional Cookies:</strong> These cookies enable features
          such as remembering your preferences and saved addresses.
        </li>
        <li>
          <strong>Advertising Cookies:</strong> These cookies are used to
          deliver personalized ads based on your interests.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. How We Use Cookies
      </h2>
      <p className="mb-4">We use cookies to:</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Enhance the functionality and performance of our platform.</li>
        <li>Remember your preferences, such as language and location.</li>
        <li>Analyze platform usage to improve our services.</li>
        <li>Deliver relevant advertisements and promotions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Managing Cookies</h2>
      <p className="mb-4">
        You can manage or disable cookies through your browser settings. Please
        note that disabling cookies may affect the functionality of our
        platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Third-Party Cookies
      </h2>
      <p className="mb-4">
        We may allow third-party services to place cookies on your device to
        provide analytics, advertising, or other services. These third parties
        are responsible for their use of cookies, and their policies may differ
        from ours.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        6. Updates to This Cookie Policy
      </h2>
      <p className="mb-4">
        We may update this Cookie Policy from time to time to reflect changes in
        technology or legal requirements. Please check this page regularly for
        updates.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about our use of cookies, contact us at{" "}
        <a href="mailto:support@foodstoreapp.com" className="text-blue-600">
          support@foodstoreapp.com
        </a>
        .
      </p>

      <p className="text-center text-gray-500 mt-10">
        Last updated: 05.01.2025
      </p>
    </div>
  );
};

export default CookiePolicy;
