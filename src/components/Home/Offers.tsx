import { useState } from 'react';
import { tabs } from '@/constants/Catagory';

function Offers() {
    const [showAllTabs, setShowAllTabs] = useState(false);
    const [activeTabId, setActiveTabId] = useState(tabs[0].id);
    const [rightSidebarHeight, setRightSidebarHeight] = useState(false);

    const activeTab = tabs.find((tab) => tab.id === activeTabId);
    const activeContent = activeTab?.content || [];
    const storeContent = activeTab?.storeContent || [];

    return (
        <div className="my-6 p-6 bg-[#b8c7d8] flex flex-col justify-center items-center w-full">
            <div className="flex justify-center items-center w-full space-x-2 pb-2 gap-2 flex-wrap">
                {(showAllTabs ? tabs : tabs.slice(0, 5)).map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex-shrink-0 border border-lime-500 rounded-[4px] px-4 py-3 transition ${tab.id === activeTabId
                            ? 'bg-[#E5FFF0]'
                            : 'bg-white text-gray-800 hover:bg-gray-200'
                            }`}
                        onClick={() => setActiveTabId(tab.id)}
                    >
                        <span className="flex items-center gap-2">
                            <img src={tab.icon} alt={tab.name} className="w-4 h-4" />
                            {tab.name}
                        </span>
                    </button>
                ))}
            </div>

            <div className="p-4 rounded-[8px] shadow-custom w-full">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">{activeTab?.name} Offers</h2>
                    <div
                        className="text-center text-[#248D50] cursor-pointer"
                        onClick={() => setRightSidebarHeight((prev) => !prev)}
                    >
                        {rightSidebarHeight ? 'Show Less' : 'Show More'}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {activeContent
                        .slice(0, rightSidebarHeight ? activeContent.length : 4)
                        .map((card, index) => (
                            <div
                                key={index}
                                className="w-full bg-white border rounded-[4px] p-4 shadow-custom flex flex-col items-center"
                            >
                                <img src={card.imgsrc} alt="Company Logo" className="w-[120px]" />
                                <p className="text-gray-700 mb-1 font-semibold font-[Poppins] leading-[24px] text-[16px] text-center">
                                    {card.description}
                                </p>
                                <p className="my-3 font-semibold text-[16px] leading-[24px] font-[Poppins]">
                                    {card.discount}
                                </p>
                                <button className="bg-[#248D50] font-semibold text-white py-1 px-6 rounded-sm hover:bg-green-600 text-sm">
                                    {card.buttonLabel}
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Offers;
