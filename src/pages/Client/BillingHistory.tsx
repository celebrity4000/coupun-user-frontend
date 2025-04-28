// src/components/PaymentDashboard/PaymentDashboard.tsx
import { FC } from "react";
import { ChevronDown } from "lucide-react";
import { Bar } from "recharts";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Payment data type
interface Payment {
  name: string;
  offer: string;
  date: string;
  amount: string;
}

// Chart data for weekly payments - used for typing the chartData array
interface DayData {
  day: string;
  purple: number;
  blue: number;
  lightblue: number;
}

const BillingHistory: FC = () => {
  // Get current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // Sample payment data
  const payments: Payment[] = [
    {
      name: "MYNTRA20",
      offer: "20% or 120",
      date: "12-Jan-2021",
      amount: "Rs. 2900",
    },
    {
      name: "MYNTRA20",
      offer: "20% or 120",
      date: "21-Feb-2021",
      amount: "Rs. 4000",
    },
    {
      name: "NYKAA123",
      offer: "20% or 120",
      date: "13-Mar-2021",
      amount: "Rs. 800",
    },
    {
      name: "MYNTRA20",
      offer: "20% or 120",
      date: "24-Jun-2021",
      amount: "Rs. 1000",
    },
    {
      name: "MYNTRA20",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 4500",
    },
    {
      name: "NYKAA123",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 2455",
    },
    {
      name: "NYKAA123",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 1800",
    },
    {
      name: "amazonXERS",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 1000",
    },
    {
      name: "MYNTRA20",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 2600",
    },
    {
      name: "amazonXERS",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 3200",
    },
    {
      name: "MYNTRA20",
      offer: "20% or 120",
      date: "21-Sep-2021",
      amount: "Rs. 1900",
    },
  ];

  // Weekly payments chart data for Recharts
  const chartData: DayData[] = [
    { day: "17", purple: 30, blue: 20, lightblue: 15 },
    { day: "18", purple: 35, blue: 25, lightblue: 10 },
    { day: "19", purple: 25, blue: 15, lightblue: 20 },
    { day: "20", purple: 40, blue: 30, lightblue: 25 },
    { day: "21", purple: 20, blue: 10, lightblue: 15 },
    { day: "22", purple: 30, blue: 20, lightblue: 20 },
    { day: "23", purple: 35, blue: 25, lightblue: 15 },
    { day: "24", purple: 25, blue: 15, lightblue: 10 },
    { day: "25", purple: 30, blue: 25, lightblue: 15 },
  ];

  return (
    <div className="bg-white min-h-screen pb-10">
      {/* Header section */}
      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
        <p className="mt-2 text-gray-600">Today is {formattedDate}</p>
      </div>

      {/* Payment Details Card */}
      <div className="mx-4 md:mx-6 mb-6 bg-white rounded-lg shadow-sm overflow-hidden font-dmsans">
        <div className="p-4 pb-4">
          <h2 className="text-2xl font-bold text-[#2B3674]">Payment Details</h2>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-4 px-4 py-2 border-b text-sm text-[#A3AED0]">
          <div className="flex items-center ml-4">
            Name <ChevronDown size={16} className="ml-1" />
          </div>
          <div className="flex items-center">
            Offers <ChevronDown size={16} className="ml-1" />
          </div>
          <div className="flex items-center">
            Date <ChevronDown size={16} className="ml-1" />
          </div>
          <div></div>
        </div>

        {/* Table Rows with hidden scrollbar */}
        <div
          className="max-h-[400px] overflow-y-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
          </style>
          {payments.map((payment, index) => (
            <div key={index} className="grid grid-cols-4 px-4 py-3 text-sm">
              <div className="font-medium text-[#2B3674]">{payment.name}</div>
              <div className="text-[#2B3674]">{payment.offer}</div>
              <div className="text-[#2B3674]">{payment.date}</div>
              <div className="text-right font-medium text-[#2B3674]">
                {payment.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weekly Payments Card */}
      <div className="mx-4 md:mx-6 bg-white rounded-lg shadow-sm overflow-hidden p-4 font-dmsans">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold text-blue-900">
            Weekly Payments
          </h2>
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="w-4 h-4 bg-indigo-500 rounded-sm transform rotate-45"></div>
          </div>
        </div>

        {/* Bar Chart using Recharts */}
        <div className="h-52">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
              barSize={20}
              barGap={5}
            >
              <XAxis
                dataKey="day"
                scale="point"
                tick={{ fontSize: 12, fill: "#9CA3AF" }}
                tickLine={false}
                axisLine={false}
                padding={{ left: 10, right: 10 }}
              />
              <YAxis hide={true} />
              <CartesianGrid
                vertical={false}
                strokeDasharray="3 3"
                opacity={0.1}
              />
              <Bar
                dataKey="lightblue"
                fill="#7DD3FC"
                stackId="stack"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="blue"
                fill="#3B82F6"
                stackId="stack"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="purple"
                fill="#4F46E5"
                stackId="stack"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default BillingHistory;
