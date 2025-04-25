import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pencil, Upload } from "lucide-react";

export default function UserProfileCard() {
    return (
        <div className="p-4 max-w-md mx-auto space-y-4 border rounded-lg border-gray-300 bg-white shadow-sm">
            <div className="flex items-start justify-between">
                <div className="flex w-full flex-row items-center justify-between space-x-3">
                    <img
                        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZbXR5XmpH1OOJhigJF4nWkJIITHis1Y4dA&s"}
                        alt="User Avatar"
                        width={60}
                        height={60}
                        className="rounded-full"
                    />

                    <Button variant="outline" className="rounded-full" size="sm">
                        <Upload className="w-3 h-3 mr-1" /> Upload Photo
                    </Button>
                </div>
            </div>

            <Card className="p-3 space-y-3">
                <div className="flex flex-col items-start space-x-3">
                    <div className="flex flex-row w-full justify-between items-center">
                        <div className="flex flex-col space-x-1">
                            <p className="text-base font-semibold">Your Name</p>
                            <p className="text-xl font-bold">Sid</p>
                        </div>
                        <Button variant="ghost" size="sm">
                            <Pencil className="w-3 h-3 mr-1" /> Edit
                        </Button>
                    </div>

                    <div className="flex flex-row w-full justify-between items-center mt-2">
                        <div className="flex flex-col space-x-1">
                            <p className="text-base">Email</p>
                            <p className="font-medium text-sm">siddxd@growthx.com</p>
                        </div>
                        <Button variant="ghost" size="sm">
                            <Pencil className="w-3 h-3 mr-1" /> Edit
                        </Button>
                    </div>

                    <div className="flex flex-row w-full justify-between items-center mt-2">
                        <div className="flex flex-col space-x-1">
                            <p className="text-base">Phone Number</p>
                            <p className="font-medium text-sm">+91 49652845732</p>
                        </div>
                        <Button variant="ghost" size="sm">
                            <Pencil className="w-3 h-3 mr-1" /> Edit
                        </Button>
                    </div>
                </div>
            </Card>

            <Card className="p-3 space-y-2">
                <div className="flex justify-between items-center">
                    <p className="font-medium text-base">About <span className="text-primary">Sid</span></p>
                    <Button variant="ghost" size="sm">
                        <Pencil className="w-3 h-3 mr-1" /> Edit
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.
                </p>
            </Card>

            <Card className="p-3 space-y-1">
                <p className="font-medium text-base">Legal</p>
                <div className="flex justify-between items-center">
                    <p className="text-sm">KYC Status</p>
                    <Badge className="bg-green-200 text-green-700 text-xs">Verified</Badge>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-sm">KYC Details</p>
                    <Button variant="ghost" size="sm">View</Button>
                </div>
            </Card>

            <div className="text-center pt-3">
                <Button className="w-full py-4 text-base rounded-xl bg-black text-white hover:bg-gray-800">
                    EDIT
                </Button>
            </div>
        </div>
    );
}