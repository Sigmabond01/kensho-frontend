import { motion } from "framer-motion";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { Github } from "lucide-react";

function SidebarItem({ text, icon, active = false }: { 
  text: string; 
  icon: React.ReactNode; 
  active?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 mb-2
                 ${active 
                   ? 'bg-white/20 text-white border border-white/30' 
                   : 'text-white/80 hover:text-white hover:bg-white/10'
                 }`}
    >
      <div className="text-current">{icon}</div>
      <span className="font-medium">{text}</span>
    </motion.div>
  );
}

export function Sidebar() {
    return (
        <div
            className="h-screen bg-gradient-to-b from-amber-900/90 via-amber-800/90 to-orange-900/90 
                       backdrop-blur-xl font-cinzelreg fixed border-r border-amber-600/30 w-72 
                       left-0 top-0 shadow-2xl z-40"
        >
            {/* Header */}
            <div
                className="pt-8 px-6 pb-6 border-b border-white/10"
            >
                    <div className="relative">
                        <img src="/logo.webp" className="h-22 w-22 items-center" />
                    </div>
            </div>
            
            {/* Navigation */}
            <div
                className="pt-6 px-6"
            >
                <div className="mb-6">
                    <h2 className="text-white/50 text-xs uppercase tracking-wider mb-3 font-medium">
                        Content Sources
                    </h2>
                    <div className="space-y-1">
                        <SidebarItem text="Twitter" icon={<TwitterIcon />} active={true} />
                        <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
                    </div>
                </div>
            </div>

            {/* Bottom section */}
            <div
                className="absolute bottom-6 left-6 right-6"
            >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                        <a href="https://Sigmabond01/Kensho" target="_blank">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            <Github />
                        </div>
                        <div>
                            <div className="text-white text-sm font-medium">Star on Github!</div>
                            <div className="text-white/60 text-xs">@Sigmabond01</div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}