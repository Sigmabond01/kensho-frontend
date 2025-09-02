import type { ReactElement } from "react";

export function SidebarItem({text, icon}: {
    text: string;
    icon: ReactElement;
}) {
    return <div className="flex py-2 text-gray-700 font-cinzelreg cursor-pointer
    hover:bg-gray-200 transition-all duration-200 rounded items-center max-w-48 pl-4">
        <div className="pr-2">
        {icon}
        </div>
        <div className="p-2">
         {text}
         </div>
    </div>
}