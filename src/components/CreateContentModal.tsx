import { X } from "lucide-react";
import { Button } from "./Button";
import { useRef, useState } from "react";
import { BACKEND_URL } from "./config";
import axios from "axios";
import React from "react";

//@ts-expect-error erasableSyntaxOnly
enum ContentType {
    Youtube =  "youtube",
    Twitter = "twitter"
}

interface CreateContentModal {
  open: boolean;
  onClose: (() => void);
}

export function CreateContentModal({ open, onClose }: CreateContentModal) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState(ContentType.Youtube);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/content`, {
            link,
            title,
            type
        }, {
            headers: {
                "Authorization": localStorage.getItem("token") || ""
            }
        }
      );
        onClose();
    }
  return (
    <div>
      {open && (
        <div
          className="w-screen h-screen bg-slate-500 fixed top-0
          left-0 opacity-60 flex justify-center"
        >
          <div className="flex flex-col justify-center">
            <span
              className="bg-white opacity-100 p-4 rounded"
            >
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <X />
                </div>
              </div>
              <div>
                <Input ref={titleRef} placeholder="Title" />
                <Input ref={linkRef} placeholder="Link" />
              </div>
              <h1>Type</h1>
              <div className="flex gap-1 p-4">
              <Button text="Youtube" variant={ type === ContentType.Youtube ? 
                "primary" : "secondary"} onClick={() => {
                    setType(ContentType.Youtube)
                }}></Button>
              <Button text="Twitter" variant={ type === ContentType.Twitter ? 
                "primary" : "secondary"} onClick={() => {
                    setType(ContentType.Twitter)
                }}></Button>
                </div>
              <div className="flex justify-center">
                <Button onClick={addContent} variant="primary" text="Submit" />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

const Input = React.forwardRef<HTMLInputElement, { placeholder: string }>(
  ({ placeholder }, ref) => {
    return (
      <div>
        <input
          placeholder={placeholder}
          type="text"
          className="px-4 py-2 border rounded m-2"
          ref={ref}
        />
      </div>
    );
  }
);
Input.displayName = "Input";