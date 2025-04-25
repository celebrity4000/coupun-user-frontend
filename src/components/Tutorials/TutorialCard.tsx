import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface TutorialCardProps {
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

export function TutorialCard({
    id,
    title,
    description,
    thumbnail,
    videoLink,
    duration,
    level,
    steps
}: TutorialCardProps) {
    return (
        <Card className="w-full max-w-md rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="p-0">
                <div className="relative h-48">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
                        {duration}
                    </span>
                </div>
            </CardHeader>

            <CardContent className="flex-1 p-4 flex flex-col justify-between">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <span className={`
                        text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap
                        ${level === 'Beginner' ? 'bg-green-100 text-green-800' :
                            level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'}
                    `}>
                        {level}
                    </span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
            </CardContent>

            <CardFooter className="p-4 pt-0">
                <Button
                    asChild
                    className="w-full text-sm"
                    variant="outline"
                >
                    <Link
                        to={`/user/tutorial/${id}`}
                        state={{ id, title, description, thumbnail, videoLink, duration, level, steps }}
                        rel="noopener noreferrer"
                    >
                        Watch Tutorial
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
