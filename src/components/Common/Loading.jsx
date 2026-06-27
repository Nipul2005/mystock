import React from "react";

export default function LoadingScreen() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white p-8">
      {/* Background Grid */}
      {/* <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `
            linear-gradient(to right,#E2E8F0 1px,transparent 1px),
            linear-gradient(to bottom,#E2E8F0 1px,transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "radial-gradient(circle at center, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 30%, transparent 95%)",
        }}
      /> */}

      {/* Glow */}
      <div className="absolute h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative flex flex-col items-center">
        <div className="triangle-loader">
          <span className="dot dot-1 bg-primary"></span>
          <span className="dot dot-2 bg-accent"></span>
          <span className="dot dot-3 bg-primary"></span>
        </div>

        <p className="text-center text-text-primary/60 mt-10 ">
          Performing security verification, validating credentials, and
          preparing your secure workspace.
        </p>
      </div>
    </div>
  );
}
