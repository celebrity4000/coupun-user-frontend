// src/components/DashboardContent/DashboardContent.tsx
import { FC, useState, useEffect, useRef } from "react";
import { X, Trash2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardContent: FC = () => {
  // State for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Get current date
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Dashboard Header - White background, no padding */}
      <div className="mb-6 bg-white">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
          <p className="mt-2 text-[#686262] font-readex">
            Today is {formattedDate}
          </p>

          {/* Add Coupon Button */}
          <Button
            onClick={openModal}
            className="mt-4 bg-[#00AC48] hover:bg-green-800 text-white px-4 py-2 rounded-md flex items-center"
          >
            <span className="font-poppins font-semibold text-sm">
              Add Coupon
            </span>
            <span className="ml-2 font-poppins font-semibold text-sm">+</span>
          </Button>
        </div>
      </div>

      {/* Data Table - White background with padding */}
      <div className="mx-6 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-white">
            <tr>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                Brand Name
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                CouponID
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                BOGO
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                Discount(%)
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                Audience
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-center text-sm font-medium text-black uppercase font-inter tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-gray-900">
                Amazon
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-black">
                09R43567
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-black"></td>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-black">
                20%OFF
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-black">
                Premium
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-black">
                24hrs
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap font-poppins font-normal text-xs text-black">
                <button className="bg-[#DD1515] text-white p-2 rounded-full">
                  <Trash2 size={16} className="text-black" />
                </button>
              </td>
            </tr>
            {/* Additional rows would go here */}
          </tbody>
        </table>
      </div>

      {/* Custom Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 font-jakarta">
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="bg-white w-full max-w-md rounded-md shadow-lg overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-[#00AC48] text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold">ADD COUPON</h3>
              <button
                onClick={closeModal}
                className="text-white hover:opacity-75 transition-opacity"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-normal text-black mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-black rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-black mb-1">
                    Coupon ID
                  </label>
                  <input
                    type="text"
                    className="w-full border border-black rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-black mb-1">
                    BOGO
                  </label>
                  <input
                    type="text"
                    className="w-full border border-black rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-black mb-1">
                    Discount
                  </label>
                  <input
                    type="text"
                    className="w-full border border-black rounded-md p-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-normal text-black mb-1">
                    Users
                  </label>
                  <div className="relative">
                    <select className="w-full border border-black rounded-md p-2 appearance-none">
                      <option>Select users</option>
                      <option>Premium</option>
                      <option>Standard</option>
                      <option>All</option>
                    </select>
                    <div className="absolute right-2 top-3 pointer-events-none">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-normal text-black mb-1">
                    Duration
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="hr"
                      className="w-full border border-black rounded-md p-2"
                    />
                    <input
                      type="number"
                      placeholder="min"
                      className="w-full border border-black rounded-md p-2"
                    />
                  </div>
                </div>
              </div>

              <Button className="w-full font-semibold bg-[#00AC48] text-white py-3 rounded-none mt-6 hover:bg-green-600 transition-colors">
                ADD
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
