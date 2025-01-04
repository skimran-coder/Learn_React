const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container p-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center my-6">Privacy Policy</h1>
      <p className="mb-4">
        At <strong>Food Store App</strong>, we value your privacy and are
        committed to protecting your personal information. This Privacy Policy
        outlines how we collect, use, and safeguard your data when you use our
        platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        1. Information We Collect
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          <strong>Personal Information:</strong> Name, email address, phone
          number, and other contact details provided during account creation or
          order placement.
        </li>
        <li>
          <strong>Location Data:</strong> To recommend nearby restaurants and
          improve delivery accuracy, we collect your location data with your
          consent.
        </li>
        <li>
          <strong>Order History:</strong> Details of the orders you place,
          including items ordered, restaurant details, and payment history.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li>To process your orders and manage your account.</li>
        <li>
          To improve user experience and provide personalized recommendations.
        </li>
        <li>To notify you of updates, offers, or promotions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell your personal information. However, we may share your
        data with:
      </p>
      <ul className="list-disc pl-5 mb-4">
        <li>Delivery partners to ensure timely delivery of your orders.</li>
        <li>
          Third-party service providers assisting in payment processing,
          analytics, and customer support.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard measures to protect your data from
        unauthorized access, loss, or misuse. However, no method of transmission
        over the internet or electronic storage is completely secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Cookies</h2>
      <p className="mb-4">
        Our platform uses cookies to enhance your browsing experience. You can
        manage your cookie preferences through your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">6. Your Rights</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>Access, update, or delete your personal information.</li>
        <li>Opt-out of marketing communications.</li>
        <li>Restrict data processing or withdraw consent where applicable.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        7. Changes to this Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the updated date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">8. Contact Us</h2>
      <p className="mb-4">
        If you have questions or concerns about our Privacy Policy, contact us
        at{" "}
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

export default PrivacyPolicy;
