import { useLocation } from "react-router-dom";

function Tutorial() {
    // const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const tutorial = location.state;

    if (!tutorial) {
        return <div className="text-white text-center mt-10">Tutorial not found.</div>;
    }

    const getLevelColor = (level: string) => {
        switch (level) {
            case "Beginner":
                return "bg-green-200 text-green-900";
            case "Intermediate":
                return "bg-yellow-200 text-yellow-900";
            case "Advanced":
                return "bg-red-200 text-red-900";
            default:
                return "bg-gray-200 text-gray-900";
        }
    };

    const getYouTubeEmbedLink = (link: string) => {
        const url = new URL(link);
        const videoId = url.searchParams.get("v");
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div className="bg-neutral-900 min-h-screen text-white p-6">
            <h1 className="text-2xl font-bold mb-4">TUTORIALS</h1>

            {/* Video Section */}
            <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg mb-6">
                <div className="w-full aspect-video">
                    <iframe
                        className="w-full h-full"
                        src={getYouTubeEmbedLink(tutorial.videoLink)}
                        title={tutorial.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            {/* Title & Info */}
            <div className="text-lg mb-6">
                <h2 className="font-semibold text-xl mb-2">{tutorial.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                    <span>⏱ {tutorial.duration}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(tutorial.level)}`}>
                        {tutorial.level}
                    </span>
                </div>
                <p className="mt-4 text-gray-300">{tutorial.description}</p>
            </div>

            {/* Dynamic Steps */}
            <div className="space-y-6 text-gray-200">
                {tutorial.steps?.map((step: any, index: number) => (
                    <div key={index}>
                        <h3 className="font-bold text-pink-400">Step {index + 1}: {step.heading}</h3>
                        <ul className="list-disc pl-5 mt-2 text-sm space-y-1">
                            {step.points.map((point: string, idx: number) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Tutorial;
