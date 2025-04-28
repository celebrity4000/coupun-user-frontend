import { Button } from "@/components/ui/button";
import { useState } from "react";

// Define a type for the billing cycle options
type BillingCycle = "monthly" | "annually";

export default function Subscription() {
  // Specify the type of the state to be BillingCycle
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("annually");

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Define pricing with explicit type
  const pricing: Record<BillingCycle, { amount: string; period: string }> = {
    monthly: {
      amount: "$2",
      period: "/month",
    },
    annually: {
      amount: "$16",
      period: "/year",
    },
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Dashboard Header */}
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
        <p className="mt-2 text-[#686262] font-readex">
          Today is {formattedDate}
        </p>
      </div>

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[54px] font-bold text-center mb-2 font-poppins">
            Our Pricing Plans
          </h2>
          <p className="text-center text-[#151515] mb-6 font-poppins text-2xl font-light">
            Pick an account plan that fits your workflow
          </p>

          {/* Toggle Button - Redesigned to match image */}
          <div className="flex items-center justify-center mb-8 font-tomorrow text-xl">
            <span
              className={`mr-3 ${
                billingCycle === "monthly" ? "font-bold" : ""
              }`}
            >
              Monthly
            </span>
            <div className="relative w-14 h-7">
              <div className="w-14 h-7 bg-black rounded-full"></div>
              <div
                className={`absolute top-0 left-0 w-14 h-7 flex ${
                  billingCycle === "monthly" ? "justify-start" : "justify-end"
                }`}
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "annually" : "monthly"
                  )
                }
              >
                <div className="w-7 h-7 bg-[#99FDD2] rounded-full flex items-center justify-center cursor-pointer shadow-md">
                  <div className="bg-black w-4 h-4 rounded-full"></div>
                </div>
              </div>
            </div>
            <span
              className={`ml-3 ${
                billingCycle === "annually" ? "font-bold" : ""
              }`}
            >
              Annually
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-2 gap-4 font-poppins">
            {/* Free Plan */}
            <div className="bg-green-600 rounded-lg p-6 text-white relative overflow-hidden shadow-md">
              <div className="text-2xl font-medium mb-1">Starter</div>
              <div className="text-5xl font-bold mb-2">Free</div>
              <p className="text-lg font-light mb-8">
                Free for ever when you host with Debal, free for freelancers
                with Client Billing
              </p>

              <div className="space-y-2 mb-24 text-lg font-semibold">
                <div>Free Staging</div>
                <div>ADS</div>
                <div>Site password protection</div>
              </div>

              <Button className="w-full py-6 bg-white text-black rounded-full font-medium text-lg hover:text-white hover:cursor-pointer">
                Current plan
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-lg p-6 relative overflow-hidden shadow-md font-poppins">
              <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                (Recommended)
              </div>
              <div className="text-green-500 text-5xl font-bold mb-3">
                {pricing[billingCycle].amount}
                <span className="text-sm font-bold">
                  {pricing[billingCycle].period}
                </span>
              </div>
              <p className="text-lg font-light text-gray-600 mb-8">
                Free for ever when you host with Debal, free for freelancers
                with Client Billing
              </p>

              <div className="space-y-2 mb-24 text-lg font-semibold text-gray-700">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-1 text-black"
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
                    className="w-5 h-5 mr-1 text-black"
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
                    className="w-5 h-5 mr-1 text-black"
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
                    className="w-5 h-5 mr-1 text-black"
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

              <Button className="w-full py-6 bg-green-600 text-white rounded-full text-lg font-medium hover:cursor-pointer">
                Upgrade plan
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
