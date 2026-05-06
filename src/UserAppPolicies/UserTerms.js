// Terms and Conditions Component (UserTerms)
const UserTerms = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Terms and Conditions</h1>
        <p className="text-gray-500 text-sm mb-6">Last updated: 29 September 2025</p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            These Terms and Conditions (“Terms”) govern your use of the{" "}
            <strong className="text-blue-600">Drive Car Rental</strong> application (“App”). By accessing or
            using the App, you agree to comply with these Terms in full.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Acceptance of Terms</h2>
            <p>
              By creating an account or using any service within the App, you
              confirm that you have read and accepted these Terms. If you do not
              agree, please discontinue using the App immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. Eligibility</h2>
            <p>
              You must be at least 18 years old and possess a valid Driving License
              and Aadhar card to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. User Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You agree to provide accurate and complete details during registration.</li>
              <li>You are responsible for safeguarding your account credentials.</li>
              <li>You must not use the App for any unlawful or unauthorized activity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">4. Verification & Documents</h2>
            <p>
              Users are required to upload their Driving License and Aadhar for
              identity and driving eligibility verification. These documents are
              stored securely and used solely for verification purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">5. Booking & Vehicle Usage</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must handle the booked vehicle with care during the rental period.</li>
              <li>Any damage or misuse may result in additional charges under company policy.</li>
              <li>Location services may be used to suggest vehicles available nearby.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">6. Account Suspension & Termination</h2>
            <p>
              We reserve the right to suspend or permanently terminate your account
              if you violate these Terms or misuse the App. This may be done with
              or without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">7. Limitation of Liability</h2>
            <p>
              <strong className="text-blue-600">Drive Car Rental</strong> will not be liable for any indirect,
              incidental, or consequential damages arising from the use of the App
              or its services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">8. Updates to Terms</h2>
            <p>
              These Terms may be updated from time to time. Any continued use of
              the App after updates are published indicates your acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">9. Contact Us</h2>
            <p>
              If you have questions or concerns regarding these Terms, please
              contact us at:{" "}
              <a href="mailto:automotives23@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                automotives23@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserTerms;