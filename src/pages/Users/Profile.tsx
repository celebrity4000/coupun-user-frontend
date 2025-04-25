import { Button } from "@/components/ui/button"
import UserProfileCard from "@/components/UserProfile/UserProfileCard"

function Profile() {
    return (
        <div className='w-full mt-4 mb-10'>
            <div className="bg-[#1E2875] w-full h-40 ">
                <div className="flex flex-row items-center justify-between w-full text-white p-4">
                    <h1 className="text-2xl font-bold">My Profile</h1>
                    <Button variant="default" className="bg-[#61689e]" size="sm">
                        My Data
                    </Button>
                </div>

            </div>
            <div className="relative flex flex-col items-center justify-center w-full -mt-20">
                <UserProfileCard />
            </div>
        </div>
    )
}

export default Profile