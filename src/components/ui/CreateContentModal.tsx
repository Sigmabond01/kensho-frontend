import { X } from "lucide-react";
import { Button } from "./Button";
import { useRef, useState } from "react";
import { BACKEND_URL } from "../../pages/config";
import axios from "axios";
import React from "react";

//@ts-expect-error erasableSyntaxOnly
enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

interface CreateContentModal {
  open: boolean;
  onClose: () => void;
  onDelete?: (id: string) => void
}

export function CreateContentModal({ open, onClose }: CreateContentModal) {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      }
    );
    onClose();
  }

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 font-cinzelreg flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-xl p-6 relative">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title */}
            <h2 className="text-xl font-semibold text-white mb-4 text-center">
              Add New Content
            </h2>

            {/* Inputs */}
            <div className="space-y-3">
              <Input ref={titleRef} placeholder="Title" />
              <Input ref={linkRef} placeholder="Link" />
            </div>

            {/* Type selector */}
            <div className="mt-6">
              <h3 className="text-sm text-gray-300 mb-2">Type</h3>
              <div className="flex gap-3 justify-center">
                <Button
                  text="YouTube"
                  variant={type === ContentType.Youtube ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Youtube)}
                />
                <Button
                  text="Twitter"
                  variant={type === ContentType.Twitter ? "primary" : "secondary"}
                  onClick={() => setType(ContentType.Twitter)}
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-center">
              <Button onClick={addContent} variant="primary" text="Submit" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const Input = React.forwardRef<HTMLInputElement, { placeholder: string }>(
  ({ placeholder }, ref) => {
    return (
      <input
        placeholder={placeholder}
        type="text"
        ref={ref}
        className="w-full px-4 py-2 rounded-lg border border-gray-300/30 bg-white/5 text-white 
                   placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 
                   focus:border-transparent transition-all"
      />
    );
  }
);
Input.displayName = "Input";
