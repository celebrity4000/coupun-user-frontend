import { useState } from "react";
import { TutorialCard } from "@/components/Tutorials/TutorialCard";

interface Tutorial {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    videoLink: string;
    duration: string;
    level: "Beginner" | "Advanced" | "Intermediate";
    steps: {
        heading: string;
        points: string[];
    }[];
}

const tutorialsData: Tutorial[] = [
    {
        id: 1,
        title: "How to Buy a Coupon",
        videoLink: "https://www.youtube.com/watch?v=5WfTEZJnv_8",
        duration: "3 min",
        level: "Beginner",
        description: "Learn how to purchase and use a coupon step by step.",
        thumbnail: "https://i.imgur.com/1N4zK4T.jpg",  // Updated thumbnail URL
        steps: [
            {
                heading: "Browse & Choose Your Coupon",
                points: [
                    "Go to the Coupons page",
                    "Select your favorite brand",
                    "Click 'Buy Now'"
                ]
            },
            {
                heading: "Login or Create an Account",
                points: [
                    "Sign in with email or Google",
                    "Use referral code if available"
                ]
            },
            {
                heading: "Make Payment",
                points: [
                    "Choose payment method",
                    "Complete transaction securely"
                ]
            }
        ]
    },
    {
        id: 2,
        title: "Using Wallet & Cashback",
        videoLink: "https://www.youtube.com/watch?v=rN6nlNC9WQA",
        duration: "4 min",
        level: "Beginner",
        description: "Understand how to use your wallet balance and earn cashback.",
        thumbnail: "https://i.imgur.com/2N4zK4T.jpg",  // Updated thumbnail URL
        steps: [
            {
                heading: "Access Your Wallet",
                points: [
                    "Go to 'My Account'",
                    "Click on 'Wallet' tab"
                ]
            },
            {
                heading: "Use Wallet at Checkout",
                points: [
                    "Apply wallet balance during payment",
                    "Check cashback eligibility"
                ]
            },
            {
                heading: "Track Your Rewards",
                points: [
                    "View past transactions",
                    "Monitor cashback status"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "How to Share Coupons with Friends",
        videoLink: "https://www.youtube.com/watch?v=qz0aGYrrlhU",
        duration: "5 min",
        level: "Intermediate",
        description: "Learn how to refer friends and share your favorite deals.",
        thumbnail: "https://i.imgur.com/3N4zK4T.jpg",  // Updated thumbnail URL
        steps: [
            {
                heading: "Find Your Referral Code",
                points: [
                    "Go to 'Refer & Earn'",
                    "Copy your unique code"
                ]
            },
            {
                heading: "Invite Friends",
                points: [
                    "Share via WhatsApp or email",
                    "Post to social media"
                ]
            },
            {
                heading: "Earn Rewards",
                points: [
                    "Get bonus when friends sign up",
                    "Track referral status"
                ]
            }
        ]
    },
    {
        id: 4,
        title: "Troubleshooting Coupon Issues",
        videoLink: "https://www.youtube.com/watch?v=H14bBuluwB8",
        duration: "6 min",
        level: "Beginner",
        description: "Fix common issues with coupon redemption and usage.",
        thumbnail: "https://i.imgur.com/4N4zK4T.jpg",  // Updated thumbnail URL
        steps: [
            {
                heading: "Coupon Not Applying",
                points: [
                    "Check expiration date",
                    "Verify minimum purchase",
                    "Ensure brand compatibility"
                ]
            },
            {
                heading: "Contact Support",
                points: [
                    "Use live chat or email",
                    "Include order ID and screenshot"
                ]
            },
            {
                heading: "Wait for Resolution",
                points: [
                    "Support will respond within 24-48 hours",
                    "Track issue under 'My Complaints'"
                ]
            }
        ]
    }
];


export default function Tutorials() {
    const [selectedLevel, setSelectedLevel] = useState<"All" | "Beginner" | "Intermediate" | "Advanced">("All");

    const handleFilterClick = (level: "All" | "Beginner" | "Intermediate" | "Advanced") => {
        setSelectedLevel(level);
    };

    const filteredTutorials = selectedLevel === "All"
        ? tutorialsData
        : tutorialsData.filter(tutorial => tutorial.level === selectedLevel);

    const buttonClasses = (level: string) =>
        `px-4 py-2 rounded text-sm transition font-medium ${selectedLevel === level
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-600 hover:bg-green-50"
        }`;

    return (
        <div className="bg-white min-h-screen px-4 py-10">
            {/* Header */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-green-600 mb-3">How to Use Our App</h1>
                <p className="text-md text-gray-700 max-w-2xl mx-auto">
                    Learn how to make the most of our Coupon App. These step-by-step tutorials will help you discover deals, save money, and earn rewards like a pro!
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Easy to Follow</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Real App Walkthrough</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">For All Users</span>
                </div>
            </div>

            {/* Filter bar */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                <div className="text-gray-800 font-semibold text-lg">
                    Total Tutorials: <span className="text-green-600">{filteredTutorials.length}</span>
                </div>

                <div className="flex gap-3 flex-wrap">
                    <button onClick={() => handleFilterClick("All")} className={buttonClasses("All")}>
                        All Levels
                    </button>
                    <button onClick={() => handleFilterClick("Beginner")} className={buttonClasses("Beginner")}>
                        Beginner
                    </button>
                    <button onClick={() => handleFilterClick("Intermediate")} className={buttonClasses("Intermediate")}>
                        Intermediate
                    </button>
                    <button onClick={() => handleFilterClick("Advanced")} className={buttonClasses("Advanced")}>
                        Advanced
                    </button>
                </div>
            </div>

            {/* Tutorials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTutorials.map((tutorial) => (
                    <TutorialCard key={tutorial.id} {...tutorial} />
                ))}
            </div>
        </div>
    );
}
