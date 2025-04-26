import { useState } from "react";

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState("annually");
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white min-h-screen">
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
        <p className="mt-2 text-[#686262] font-readex">
          Today is {formattedDate}
        </p>
      </div>

      <div className="px-4 py-4 max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our Pricing Plans
        </h2>
        <p className="text-center text-gray-700 mb-6">
          Pick an account plan that fits your workflow
        </p>

        {/* Toggle Button */}
        <div className="flex items-center justify-center mb-8">
          <span
            className={`mr-3 ${billingCycle === "monthly" ? "font-bold" : ""}`}
          >
            Monthly
          </span>
          <button
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
            onClick={() =>
              setBillingCycle(
                billingCycle === "monthly" ? "annually" : "monthly"
              )
            }
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-green-600 transition ${
                billingCycle === "monthly" ? "translate-x-1" : "translate-x-6"
              }`}
            />
            <span className="absolute inset-0 rounded-full border border-green-600"></span>
          </button>
          <span
            className={`ml-3 ${billingCycle === "annually" ? "font-bold" : ""}`}
          >
            Annually
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-2 gap-4">
          {/* Free Plan */}
          <div className="bg-green-500 rounded-lg p-4 text-white relative overflow-hidden">
            <div className="mb-2">Starter</div>
            <div className="text-3xl font-bold mb-4">Free</div>
            <p className="text-sm mb-4">
              Free for ever when you host with Deca. Free for freelancers with
              Client Billing
            </p>

            <div className="space-y-2 mb-8">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Client Billing</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Free Staging</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>ADS</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Site password protection</span>
              </div>
            </div>

            <button className="w-full py-2 bg-white text-black rounded-md font-medium mt-auto">
              Current plan
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white border-2 border-green-500 rounded-lg p-4 relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
              Recommended
            </div>
            <div className="mb-2 text-black">Premium</div>
            <div className="text-3xl font-bold text-black mb-1">
              ${billingCycle === "monthly" ? "16" : "16"}
              <span className="text-sm font-normal">
                /{billingCycle === "monthly" ? "mo" : "year"}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Free for ever when you host with Deca. Free for freelancers with
              Client Billing
            </p>

            <div className="space-y-2 mb-8 text-gray-700">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Client Billing</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>NO ADS</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Code Export</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-1 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Site password protection</span>
              </div>
            </div>

            <button className="w-full py-2 bg-green-500 text-white rounded-md font-medium mt-auto">
              Upgrade plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
