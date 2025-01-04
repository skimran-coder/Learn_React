const TermsOfService = () => {
  return (
    <div className="terms-of-service-container p-4 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-center my-6">Terms of Service</h1>
      <p className="mb-4">
        Welcome to <strong>Food Store App</strong>. By accessing or using our
        platform, you agree to comply with and be bound by these Terms of
        Service. Please read them carefully before using our services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        1. Acceptance of Terms
      </h2>
      <p className="mb-4">
        By using our platform, you agree to these terms, along with our Privacy
        Policy. If you do not agree to these terms, please do not use our
        services.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. Eligibility</h2>
      <p className="mb-4">
        You must be at least 18 years old or have parental consent to use this
        platform. By using our services, you confirm that you meet this
        requirement.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        3. Account Responsibilities
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          You are responsible for maintaining the confidentiality of your
          account credentials.
        </li>
        <li>
          Any activity under your account is your responsibility. Notify us
          immediately if you suspect unauthorized access.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Use of Services</h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          Our platform allows you to browse restaurants, place orders, and make
          payments.
        </li>
        <li>
          You agree not to use our services for any illegal or unauthorized
          purposes, including fraudulent activities.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        5. Orders and Payments
      </h2>
      <ul className="list-disc pl-5 mb-4">
        <li>
          All orders placed through our platform are subject to availability and
          acceptance by the restaurant.
        </li>
        <li>
          Payment must be completed through the available payment methods. We
          are not liable for payment processing issues.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        6. Cancellations and Refunds
      </h2>
      <p className="mb-4">
        Cancellation and refund policies vary by restaurant. Please review the
        restaurant’s policies before placing an order.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        7. Intellectual Property
      </h2>
      <p className="mb-4">
        All content on this platform, including logos, text, and images, is the
        property of <strong>Food Store App</strong> or its licensors.
        Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">
        8. Limitation of Liability
      </h2>
      <p className="mb-4">
        We are not liable for any direct, indirect, incidental, or consequential
        damages arising from your use of our platform, including delays,
        inaccuracies, or errors.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">9. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your account at any time
        for violations of these terms or misuse of our platform.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">10. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms of Service from time to time. Continued use of
        our services after changes are made constitutes acceptance of the
        updated terms.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">11. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about these Terms of Service, contact us at{" "}
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

export default TermsOfService;
