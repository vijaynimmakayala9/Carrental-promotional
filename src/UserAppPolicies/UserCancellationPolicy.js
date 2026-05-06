
// Cancellation & Refund Policy Component (UserCancellationPolicy)
const UserCancellationPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Cancellation & Refund Policy</h1>
          <p className="text-gray-500 text-sm">Last updated: 29 September 2025</p>
          <hr className="my-6 border-blue-200 w-24 mx-auto" />
        </div>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p>
            At <strong className="text-blue-600">Drive Car Rental</strong>, we strive to provide a smooth and reliable car rental experience.
            This Cancellation & Refund Policy explains the terms for cancelling bookings and requesting refunds.
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Cancellation Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Bookings cancelled at least 24 hours before the scheduled pickup time are eligible for a full refund.</li>
              <li>Cancellations made within 24 hours of the pickup time will incur a 50% cancellation fee.</li>
              <li>No-shows or failure to pick up the vehicle without prior cancellation will not be refunded.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. Refund Policy</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Refunds will be processed to the original payment method within 7-10 business days.</li>
              <li>If a vehicle is unavailable due to unforeseen circumstances, a full refund will be issued.</li>
              <li>Refunds do not cover services already rendered, such as fuel charges, tolls, or fines incurred during the rental period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. How to Cancel</h2>
            <p>
              To cancel your booking, contact our customer support at{" "}
              <a href="mailto:automotives23@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                automotives23@gmail.com
              </a>{" "}
              or call +91 8466888111. Please provide your booking reference number and reason for cancellation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">4. Force Majeure</h2>
            <p>
              In the event of circumstances beyond our control—such as natural disasters, strikes, or government restrictions—we may cancel bookings without liability. In such cases, a full refund will be provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">5. Contact Us</h2>
            <p>For any questions or concerns regarding this policy, please contact us:</p>
            <p>Email: <a href="mailto:automotives23@gmail.com" className="text-blue-600 underline hover:text-blue-800">automotives23@gmail.com</a></p>
            <p>Phone: +91 8466888111</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserCancellationPolicy;