// Privacy Policy Component for Varahi Owner App
const OwnerPrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Privacy Policy</h1>
          <p className="text-gray-500 text-sm">Effective Date: May 6, 2026</p>
          <hr className="my-6 border-blue-200 w-24 mx-auto" />
        </div>

        {/* Welcome Message */}
        <div className="text-gray-700 space-y-6 leading-relaxed">
          <p className="text-lg">
            Welcome to <strong className="text-blue-600">Varahi Owner App</strong>. Your privacy is important to us. 
            This Privacy Policy explains how we collect, use, store, and protect your information when you use our platform.
          </p>

          {/* Section 1: Information We Collect */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">1. Information We Collect</h2>
            <p className="mb-2">When you register as a car owner on our platform, we may collect the following information:</p>
            
            <div className="bg-blue-50 rounded-lg p-4 my-3">
              <h3 className="font-semibold text-blue-800 mb-2">Personal Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Full Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>Password</li>
                <li>Aadhaar Number (optional)</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 my-3">
              <h3 className="font-semibold text-blue-800 mb-2">Vehicle Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Car Name and Model</li>
                <li>Vehicle Registration Number</li>
                <li>Fuel Type</li>
                <li>Transmission Type</li>
                <li>Pricing Information</li>
                <li>Vehicle Photos</li>
                <li>Vehicle Documents (RC Book, Insurance, etc.)</li>
                <li>Branch and Location Information</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4 my-3">
              <h3 className="font-semibold text-blue-800 mb-2">Device & Usage Information</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Device type</li>
                <li>IP address</li>
                <li>App usage information</li>
                <li>Crash logs and diagnostics</li>
              </ul>
            </div>
          </section>

          {/* Section 2: How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">2. How We Use Your Information</h2>
            <p className="mb-2">We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Create and manage your owner account</li>
              <li>Verify vehicle ownership and submitted documents</li>
              <li>Allow administrators to review and approve vehicle listings</li>
              <li>Publish approved vehicles on the user booking platform</li>
              <li>Enable customers to book your vehicle</li>
              <li>Improve app performance and user experience</li>
              <li>Prevent fraud and unauthorized activity</li>
              <li>Contact you regarding account updates or support</li>
            </ul>
          </section>

          {/* Section 3: Vehicle Verification */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">3. Vehicle Verification</h2>
            <p>All submitted vehicles and documents are reviewed by our admin team before becoming visible on the customer app.</p>
            <p className="mt-2">We may reject, suspend, or remove listings that:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Contain incorrect information</li>
              <li>Violate local laws or regulations</li>
              <li>Include invalid or fake documents</li>
            </ul>
          </section>

          {/* Section 4: Data Sharing */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal information to third parties.</p>
            <p className="mt-2">However, some vehicle details may be visible to customers in the booking app, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Car name and model</li>
              <li>Vehicle photos</li>
              <li>Pricing</li>
              <li>Location/branch details</li>
            </ul>
            <p className="mt-3 text-amber-700 bg-amber-50 p-3 rounded-lg">
              <strong>Note:</strong> Sensitive documents such as Aadhaar numbers and uploaded legal documents are not publicly shared.
            </p>
          </section>

          {/* Section 5: File Uploads */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">5. File Uploads</h2>
            <p>When you upload vehicle images or documents:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Files are securely stored</li>
              <li>Documents are used only for verification purposes</li>
              <li>Uploaded files may be reviewed by authorized administrators</li>
            </ul>
          </section>

          {/* Section 6: Data Security */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">6. Data Security</h2>
            <p>We implement reasonable security measures to protect your data against:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Unauthorized access</li>
              <li>Data misuse</li>
              <li>Alteration or disclosure</li>
            </ul>
            <p className="mt-3 text-gray-500 italic">However, no internet-based platform can guarantee complete security.</p>
          </section>

          {/* Section 7: Account Responsibility */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">7. Account Responsibility</h2>
            <p>You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>Ensuring the accuracy of submitted information</li>
              <li>Updating your information when necessary</li>
            </ul>
          </section>

          {/* Section 8: Children's Privacy */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">8. Children's Privacy</h2>
            <p>Our services are not intended for individuals under 18 years of age.</p>
            <p className="mt-2">We do not knowingly collect personal information from minors.</p>
          </section>

          {/* Section 9: Changes to This Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Updated versions will be posted within the app.</p>
            <p className="mt-2">Continued use of the app after updates means you accept the revised policy.</p>
          </section>

          {/* Section 10: Contact Us */}
          <section className="bg-blue-50 rounded-lg p-6 mt-6">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">10. Contact Us</h2>
            <p>If you have any questions or concerns regarding this Privacy Policy, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a href="mailto:automotives23@gmail.com" className="text-blue-600 underline hover:text-blue-800">
                  automotives23@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Company Name:</span> Varahi Owner App
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OwnerPrivacyPolicy;