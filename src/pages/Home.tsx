// import { useAppDispatch } from "@/hooks/useAppDispatch";
// import { useAppSelector } from "@/hooks/useAppSelector";
// import { login, logout } from "@/store/auth/authSlice";

import images from "@/assets/img";
import GoogleAdTest from "@/components/GoogleAds/GoogleAdTest";
import Offers from "@/components/Home/Offers";
import OfferSection from "@/components/Home/OfferSection";


const Home = () => {
    // const dispatch = useAppDispatch();
    // const { isAuthenticated, username } = useAppSelector((state) => state.auth);

    return (
        <div className="flex justify-between items-start min-h-screen">
            {/* Left Google Ad */}
            <div className="w-2/12 bg-gray-100 sticky top-0 h-screen">
                {/* Insert Google Ad script or component here */}
                <GoogleAdTest />
            </div>

            {/* Main Content */}
            <div className="flex-1">
                <div className="h-10 w-full bg-green-300"></div>
                <div className="h-auto w-full">
                    <img src={images.OfferImg} alt="Offer" className="w-full h-auto" />
                </div>
                <div className="w-full px-4">
                    <OfferSection />
                </div>
                <Offers />
            </div>

            {/* Right Google Ad */}
            <div className="w-2/12 bg-gray-100 sticky top-0 h-screen">
                {/* Insert Google Ad script or component here */}
                <GoogleAdTest />
            </div>
        </div >
    );
};

export default Home;
