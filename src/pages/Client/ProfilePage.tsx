// src/components/ProfilePage/ProfilePage.tsx
import { Button } from "@/components/ui/button";
import { FC } from "react";

const ProfilePage: FC = () => {
  // Get current date (using the code snippet you provided)
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-gray-100 min-h-screen pb-10">
      {/* Header section using your provided code */}
      <div className="mb-6 bg-white ">
        <div className="px-4 py-8">
          <h1 className="text-2xl font-bold font-inter">Business Dashboard</h1>
          <p className="mt-2 text-[#686262] font-readex">
            Today is {formattedDate}
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="px-4 md:px-12">
        {/* Avatar and Upload Button */}
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-[#98CBD1] mr-4"></div>
          <Button className="px-6 py-2 bg-[#434343] text-white rounded-md font-poppins text-xs font-semibold cursor-pointer">
            Upload
          </Button>
        </div>

        {/* Personal Information Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 mx-20 font-outfit font-medium">
          {/* Your Name */}
          <div className="flex justify-between items-center mb-4 pb-2 ">
            <div>
              <div className="text-sm text-[#1F1F1FB2]">Your Name</div>
              <div className="text-[16px] text-[#222222E5]">Sid</div>
            </div>
            <Button className="text-[#1F1F1FCC] text-sm bg-[#F0EFFA] rounded-full px-6 py-0">
              Edit
            </Button>
          </div>

          {/* Email */}
          <div className="flex justify-between items-center mb-4 pb-2 font-outfit font-medium">
            <div>
              <div className="text-sm text-[#1F1F1FB2]">Email</div>
              <div className="text-[16px] text-[#222222E5]">
                siddd@growthx.com
              </div>
            </div>
            <Button className="text-[#1F1F1FCC] text-sm bg-[#F0EFFA] rounded-full px-6 py-0">
              Edit
            </Button>
          </div>

          {/* Phone Number */}
          <div className="flex justify-between items-center">
            <div>
              <div className="text-sm text-[#1F1F1FB2]">Phone Number</div>
              <div className="text-[16px] text-[#222222E5]">+91 9963284732</div>
            </div>
            <Button className="text-[#1F1F1FCC] text-sm bg-[#F0EFFA] rounded-full px-6 py-0">
              Edit
            </Button>
          </div>
        </div>

        {/* About Section Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 mx-20 font-outfit">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium text-sm">
              About <span className="text-[#413B89] text-sm">Sid</span>
            </h3>
            <Button className="text-[#1F1F1FCC] text-sm bg-[#F0EFFA] rounded-full px-6 py-0 font-medium">
              Edit
            </Button>
          </div>
          <p className="text-sm text-[#49454FCC] font-normal">
            Lorem ipsum dolor sit amet consectetur. Eget tortor a adipiscing vel
            magna lectus. Leo diam orci mauris rhoncus in arcu elit ipsum dolor
            sit amet consectetur.
          </p>
        </div>

        {/* Legal Section Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 mx-20 font-outfit">
          <h3 className="font-medium mb-4 text-sm">Legal</h3>

          {/* KYC Status */}
          <div className="flex justify-between items-center mb-3">
            <div className="text-sm text-[#222222E5] font-medium">
              KYC Status
            </div>
            <div className="bg-[#99FDD2] text-[#1F1F1FCC] text-sm font-medium px-6 py-2 rounded-full">
              Verified
            </div>
          </div>

          {/* KYC Details */}
          <div className="flex justify-between items-center">
            <div className="text-sm text-[#222222E5] font-medium">
              KYC Details
            </div>
            <Button className="text-[#1F1F1FCC] text-sm font-medium bg-[#F0EFFA] rounded-full px-6 py-0">
              View
            </Button>
          </div>
        </div>

        {/* Edit Button */}
        <div className="flex justify-center font-outfit font-medium">
          <Button className="px-10 py-6 bg-[#333333] text-white rounded-md w-full max-w-3xs cursor-pointer text-lg">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
