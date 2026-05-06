// Privacy Policy Component (UserPolicy)
const UserPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: 29 September 2025</p>
          <hr className="my-6 border-blue-200 w-24 mx-auto" />
        </div>

        {/* Content Section */}
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            At <strong className="text-blue-600">Drive Car Rental</strong>, your privacy is very important to us. This Privacy Policy
            explains how we collect, use, and safeguard your personal information when you access or use our
            App.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Information We Collect</h2>
            <p className="mb-2">We may collect personal information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create an account on the App</li>
              <li>Complete your profile or registration form</li>
              <li>Upload content such as images or details</li>
              <li>Contact us through phone or email</li>
            </ul>
            <p className="mt-2 mb-2">The types of personal information may include:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your name, profile photo, and email address</li>
              <li>Your current location (if enabled)</li>
              <li>Other details you choose to share with us</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide access to the App and its features</li>
              <li>For account creation, sign-up, and verification</li>
              <li>To display and update your profile information</li>
              <li>To suggest nearby cars based on your location</li>
              <li>To personalize your overall experience</li>
              <li>To respond to customer support requests</li>
              <li>To improve the performance and functionality of the App</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. Protection of Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>All sensitive data is encrypted during transmission</li>
              <li>Information is stored securely on trusted servers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">4. Sharing of Information</h2>
            <p className="mb-2">We may share your information with trusted third-party service providers, such as:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cloud hosting and storage providers</li>
              <li>Customer service and support platforms</li>
            </ul>
            <p className="mt-2">Additionally, we may disclose information if required by law or to comply with legal obligations.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You may access the personal information we hold about you</li>
              <li>You can request to deletion or Delete your Personal account and associated data</li>
            </ul>
            <p className="mt-2">
              For any privacy-related requests, please contact us at:{" "}
              <a href="mailto:automotives23@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                automotives23@gmail.com
              </a>
            </p>
            <p>
              Or write to us directly via Gmail:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&to=automotives23@gmail.com"
                className="text-blue-600 underline hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here to compose
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">6. Updates to This Policy</h2>
            <p>
              We may revise this Privacy Policy from time to time. Significant changes will be notified through
              email or a notice on the App. By continuing to use the App, you agree to the updated terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserPolicy;