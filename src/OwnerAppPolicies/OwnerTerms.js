// Terms & Conditions Component for Varahi Owner App
const OwnerTermsConditions = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Terms & Conditions</h1>
        <p className="text-gray-500 text-sm mb-6">Effective Date: May 6, 2026</p>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            Welcome to <strong className="text-blue-600">Varahi Owner App</strong>. By registering as a car owner on our platform, 
            you agree to comply with these Terms & Conditions.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Eligibility</h2>
            <p>To register as an owner, you must:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Be at least 18 years of age</li>
              <li>Own a valid vehicle with proper documentation</li>
              <li>Provide accurate and truthful information</li>
              <li>Have the legal right to rent out the vehicle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. Vehicle Listing Approval</h2>
            <p>All vehicle listings are subject to admin review and approval. We reserve the right to reject or remove any listing that:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Contains false or misleading information</li>
              <li>Violates local transportation laws</li>
              <li>Includes inappropriate or offensive content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. Owner Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintain vehicle in good working condition</li>
              <li>Ensure valid insurance coverage at all times</li>
              <li>Honor confirmed bookings from customers</li>
              <li>Provide accurate availability status</li>
              <li>Respond to customer inquiries promptly</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">4. Commission & Payments</h2>
            <p>Varahi charges a commission on each successful booking. The current commission rate will be displayed in your dashboard. Payments are processed according to the schedule outlined in the app.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">5. Account Suspension</h2>
            <p>We may suspend or terminate your account for violations including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Repeated customer complaints</li>
              <li>Providing false documentation</li>
              <li>Fraudulent activities</li>
              <li>Misuse of the platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">6. Limitation of Liability</h2>
            <p>Varahi acts as an intermediary platform. We are not responsible for disputes between owners and customers beyond facilitating resolution efforts.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">7. Contact Us</h2>
            <p>
              For questions regarding these Terms, contact us at:{" "}
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

export default OwnerTermsConditions;