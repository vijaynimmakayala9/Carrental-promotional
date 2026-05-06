// Vehicle Verification Component
const OwnerVehicleVerification = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Vehicle Verification</h1>
          <p className="text-gray-500 text-sm">Last updated: May 6, 2026</p>
          <hr className="my-6 border-blue-200 w-24 mx-auto" />
        </div>

        <div className="text-gray-700 space-y-6 leading-relaxed">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
            <p className="text-green-800">
              <strong className="font-semibold">Verification Status:</strong> All vehicles go through a verification process 
              before becoming visible to customers.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">Documents Required</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Registration Certificate (RC)</li>
              <li>Insurance Policy Document</li>
              <li>Pollution Under Control (PUC) Certificate</li>
              <li>Vehicle Photos (Front, Back, Interior, Dashboard)</li>
              <li>Owner's Aadhaar Card (optional but recommended)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">Verification Process</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Submit documents through the owner dashboard</li>
              <li>Admin team reviews within 24-48 hours</li>
              <li>You'll receive notification of approval or rejection</li>
              <li>If rejected, resubmit with correct documents</li>
              <li>Once approved, vehicle appears in customer app</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-3">Common Rejection Reasons</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Blurry or unclear document photos</li>
              <li>Expired insurance or PUC certificate</li>
              <li>Missing required fields in vehicle details</li>
              <li>Low-quality vehicle images</li>
            </ul>
          </section>

          <section className="bg-blue-50 rounded-lg p-4 mt-4">
            <h2 className="text-xl font-semibold text-blue-700 mb-2">Need Help?</h2>
            <p>
              Contact verification team:{" "}
              <a href="mailto:verify@varahi.com" className="text-blue-600 underline">
                verify@varahi.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OwnerVehicleVerification;