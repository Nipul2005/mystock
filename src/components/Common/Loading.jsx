import React from "react";

export default function Loading() {
  return (
    <div className="w-full min-h-dvh flex items-center justify-center bg-bg px-4">
      <div className="bg-white/70 backdrop-blur-xl border border-border rounded-4xl px-10 py-8 shadow-card flex flex-col items-center">
        <div className="relative">
          <span className="w-16 h-16 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin block"></span>

          <div className="absolute inset-0 flex items-center justify-center">
            <i className="ri-shield-check-line text-primary text-xl"></i>
          </div>
        </div>

        <h2 className="mt-6 text-xl font-bold text-text-primary">
          Verifying Session
        </h2>

        <p className="mt-2 text-text-secondary text-sm text-center">
          Running security checks and preparing your workspace...
        </p>

        <div className="flex gap-1 mt-5">
          <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
          <span
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="w-2 h-2 rounded-full bg-primary animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}

