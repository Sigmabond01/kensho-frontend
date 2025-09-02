"use client";

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "./config";

// Mock components - replace with your actual imports
function Input({ reference, placeholder, type = "text" }: { 
  reference: React.RefObject<HTMLInputElement>; 
  placeholder: string;
  type?: string;
}) {
  return (
    <input
      ref={reference}
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl 
                 text-white placeholder-white/50 focus:outline-none focus:ring-2 
                 focus:ring-amber-400/50 transition-all duration-200"
    />
  );
}

function Button({ onClick, loading, text, fullWidth }: {
  onClick: () => void;
  loading: boolean;
  text: string;
  fullWidth: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${fullWidth ? 'w-full' : ''} px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 
                  hover:from-amber-500 hover:to-orange-500 text-white font-medium rounded-xl 
                  transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2`}
    >
      {loading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
      {text}
    </button>
  );
}

export function Signup() {
    const navigate = useNavigate();
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function signup() {
        const username = usernameRef.current?.value;
        console.log(usernameRef.current)
        const password = passwordRef.current?.value;
        await axios.post(BACKEND_URL + "/api/v1/signup", {
                username,
                password
        })
        navigate("/signin")
        alert("Signed up successfully!!")
    }

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-amber-950 via-orange-900 to-red-950
                        flex justify-center items-center">
            
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl 
                            p-8 shadow-2xl w-full max-w-md mx-4">
                
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <img src="/logo.webp" className="h-22 w-22" />
                    </div>
                    <p className="text-white/70 text-sm">Begin your journey to clarity</p>
                </div>

                {/* Form */}
                <div className="space-y-4">
                    <Input
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
                    reference={usernameRef} placeholder="Username" />
                    <Input
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          //@ts-expect-error
                    reference={passwordRef} placeholder="Password" type="password" />
                    
                    <div className="pt-2">
                        <Button onClick={signup} loading={false} text="Sign Up" fullWidth={true} />
                    </div>

                    {/* Sign in link */}
                    <div className="text-center pt-4">
                        <p className="text-white/60 text-sm">
                            Already have an account?{" "}
                            <a href="/signin" className="text-amber-400 hover:text-amber-300 underline">
                                Sign in
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
