import { Button } from "@/components/ui/button";
import { FC } from "react";
import { BarChart, Bar, ResponsiveContainer, XAxis } from "recharts";

const BusinessDashboard: FC = () => {
  // Sample finance data for the bar chart
  const financeData = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 15 },
    { month: "Mar", value: 8 },
    { month: "Apr", value: 12 },
    { month: "May", value: 20 },
    { month: "Jun", value: 14 },
    { month: "Jul", value: 23 },
    { month: "Aug", value: 18 },
    { month: "Sep", value: 25 },
    { month: "Oct", value: 16 },
    { month: "Nov", value: 19 },
    { month: "Dec", value: 22 },
  ];
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mb-6 bg-white ">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
          <p className="mt-2 text-[#686262] font-readex">
            Today is {formattedDate}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 -mt-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Customers Card */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold font-jakarta">Customers</h2>
            <p className="text-[16px] font-normal font-jakarta">5,896</p>
          </div>

          {/* Income Card */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold font-jakarta">Income</h2>
            <p className="text-[16px] font-normal font-jakarta">$100,098</p>
          </div>

          {/* Products Sold Card */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 text-white">
            <h2 className="text-lg font-semibold font-jakarta">
              Products Sold
            </h2>
            <p className="text-[16px] font-normal font-jakarta">89,878</p>
          </div>
        </div>

        {/* Marketplace Section */}
        <h2 className="text-2xl font-semibold font-jakarta mb-4">
          Marketplace
        </h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Left Column (2/3 width) with stacked cards */}
          <div className="md:w-2/3 flex flex-col gap-4">
            {/* Data Analytics Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
              <h3 className="font-bold font-jakarta text-[16px]">
                Data Analytics Overview
              </h3>
              <p className="font-normal font-jakarta text-[#545454] text-[15px] mb-4">
                See how your account grow and how you can boost it.
              </p>
              <div className="flex justify-center items-center">
                <div className="relative h-24 w-24">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-normal font-jakarta text-[#1C1C1C] text-[15px]">
                      START
                    </span>
                  </div>
                  <svg className="h-full w-full" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#eee"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#a855f7"
                      strokeWidth="2"
                      strokeDasharray="25, 100"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Finance Flow Card - Updated layout */}
            <div className="bg-white rounded-lg shadow-lg p-4 flex-1">
              <h3 className="font-bold font-jakarta text-[#1C1C1C] text-xl mb-4">
                Finance Flow
              </h3>
              <div className="flex items-start">
                <div className="mr-4">
                  <p className="font-bold font-jakarta text-[#1C1C1C] text-[16px]">
                    $2,908
                  </p>
                  <p className="font-normal font-jakarta text-[#545454] text-[15px] ">
                    August 2023
                  </p>
                </div>
                <div className="h-24 flex-1">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={financeData}>
                      <Bar dataKey="value" fill="#000" />
                      <Bar
                        dataKey="value"
                        fill="#a855f7"
                        radius={[2, 2, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (1/3 width) with single tall card */}
          <div className="md:w-1/3">
            {/* Upgrade to PRO Card */}
            <div className="bg-white rounded-lg shadow-lg p-4 h-full flex flex-col items-center justify-center">
              <h3 className="font-bold font-jakarta text-xl text-[#9400D3] mb-6">
                Upgrade to PRO
              </h3>
              <p className="font-bold font-jakarta text-[#1C1C1C] text-[16px] mb-2">
                $29/mo
              </p>
              <p className="font-normal font-jakarta text-[#545454] text-[15px] text-center mb-8">
                100% insurance for your goods
              </p>
              <Button className="cursor-pointer bg-gradient-to-r from-[#9400D3] to-[#4B0082] text-white rounded-md py-6 px-6 w-1/2 font-semibold text-[15px] font-jakarta">
                Upgrade
              </Button>
            </div>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white rounded-lg shadow mb-4">
          <div className="p-4 flex justify-between items-center">
            <h2 className="text-2xl font-semibold font-jakarta">
              Recent Orders
            </h2>
            <button className="text-[15px] text-[#545454] font-jakarta font-medium cursor-pointer">
              SEE ALL
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-center text-sm font-normal text-[#545454] font-jakarta uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-normal text-[#545454] font-jakarta uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-normal text-[#545454] font-jakarta uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-center text-sm font-normal text-[#545454] font-jakarta uppercase tracking-wider">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-center font-normal font-jakarta whitespace-nowrap text-sm text-[#545454]">
                    #968659684
                  </td>
                  <td className="px-6 py-4 text-center font-normal font-jakarta whitespace-nowrap text-sm text-[#545454]">
                    Ipad pro 456gb
                  </td>
                  <td className="px-6 py-4 text-center font-normal font-jakarta whitespace-nowrap text-sm text-[#545454]">
                    Aug 30, 2023
                  </td>
                  <td className="px-6 py-4 text-center font-normal font-jakarta whitespace-nowrap text-sm text-[#545454]">
                    $4345
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
