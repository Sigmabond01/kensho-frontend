import { Delete, ExternalLink } from "lucide-react";
import axios from "axios";
import { BACKEND_URL } from "../../pages/config";

interface CardProps {
  id: string; // Backend needs an id to delete
  title: string;
  link: string;
  type: "twitter" | "youtube";
  onDelete?: (id: string) => void; // Parent can refresh state
}

export function Card({ id, title, link, type, onDelete }: CardProps) {
  const getYouTubeEmbed = (url: string) => {
    const videoIdMatch = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : url;
  };

  async function handleDelete() {
    try {
      await axios.delete(`${BACKEND_URL}/api/v1/content/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      });
      if (onDelete) onDelete(id);
    } catch (err) {
      console.error("Delete failed:", err);
    }
  }

  return (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-gray-200 
                    font-cinzelreg shadow-sm hover:shadow-md transition-all duration-200 
                    min-h-48 min-w-72 max-w-80">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <span className="truncate">{title}</span>
        </div>
        <div className="flex items-center gap-3">
          {/* External link */}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          {/* Delete */}
          <button
            onClick={handleDelete}
            className="text-gray-500 hover:text-red-500 transition-colors"
          >
            <Delete className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="pt-4">
        {type === "youtube" && (
          <iframe
            className="w-full aspect-video rounded-lg"
            src={getYouTubeEmbed(link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}

        {type === "twitter" && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com", "twitter.com")} />
          </blockquote>
        )}
        <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
      </div>
    </div>
  );
}
