// Support Component
const OwnerSupport = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">Support Center</h1>
          <p className="text-gray-500 text-sm">We're here to help 24/7</p>
          <hr className="my-6 border-blue-200 w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-4xl mb-3">📧</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Email Support</h2>
            <p className="text-gray-600 mb-3">For queries, document issues, or account help</p>
            <a href="mailto:automotives23@gmail.com" className="text-blue-600 font-semibold hover:underline">
              automotives23@gmail.com
            </a>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-4xl mb-3">📞</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Phone Support</h2>
            <p className="text-gray-600 mb-3">Monday to Saturday, 9 AM - 7 PM</p>
            <p className="text-blue-600 font-semibold">+91 8466888111</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-4xl mb-3">💬</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">Live Chat</h2>
            <p className="text-gray-600 mb-3">Available within the app</p>
            <p className="text-gray-500">Tap the chat icon in bottom right corner</p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6">
            <div className="text-4xl mb-3">📚</div>
            <h2 className="text-xl font-semibold text-blue-800 mb-2">FAQs</h2>
            <p className="text-gray-600 mb-3">Common questions answered</p>
            <button className="text-blue-600 font-semibold hover:underline">
              View FAQ Section →
            </button>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Response time: Within 24 hours for emails | Immediate for chat during business hours</p>
        </div>
      </div>
    </div>
  );
};

export default OwnerSupport;