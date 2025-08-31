import { Logo } from "../icons/logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar() {
    return <div className="h-screen bg-white fixed border-2 border-r w-72
    position-fixed left-0 top-0 pl-6">
        <h1 className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-purple-900">
            <Logo />
            </div>
            KENSHO
            </h1>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
        </div>
    </div>
}