import { ShareIcon } from "../icons/ShareIcon";

interface CardProps {
    title: string;
    link: string;
    type: "twitter" | "youtube";
}
export function Card({title, link, type}: CardProps) {
    return <div className="bg-white min-h-48 min-w-72 p-4 max-w-72 border border-gray-200 rounded-md">
        <div className="flex justify-between">
            <div className="flex items-center">
                <div className="text-gray-500 pr-2">
                <ShareIcon />
                </div>
                {title}
            </div>
            <div className="flex items-center">
                <div className="pr-2 text-gray-500">
                    <a href={link} target="_blank">
                    <ShareIcon />
                    </a>
                </div>
                <div className="text-gray-500">
                    <ShareIcon />
                </div>
            </div>
        </div>
        <div className="pt-4">
          {type === "youtube" && <iframe className="w-full" src=
          {link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameborder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
            web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> }
            
            { type === "twitter" && <blockquote className="twitter-tweet">
                <a href={link.replace("x.com", "twitter.com")}>
                </a>
            </blockquote>}
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>
    </div>
}