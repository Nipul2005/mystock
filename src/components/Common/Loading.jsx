import React from "react";

export default function Loading() {
  return (
    <div className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-white">
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
      linear-gradient(to right,#000 1px,transparent 1px),
      linear-gradient(to bottom,#000 1px,transparent 1px)
      `,
          backgroundSize: "42px 42px",
        }}
      />

      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      {/* Card */}
      <div className="relative w-[430px] rounded-[32px] border border-slate-200/70 bg-white/70 px-12 py-14 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,.08)]">
        {/* Stack */}
        <div className="relative mx-auto h-40 w-40">
          {/* Bottom */}
          <div className="layer layer-bottom"></div>

          {/* Middle */}
          <div className="layer layer-middle"></div>

          {/* Top */}
          <div className="layer layer-top">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary shadow-xl shadow-primary/30">
              <i className="ri-shield-check-line text-2xl text-white"></i>
            </div>
          </div>
        </div>

        <h2 className="mt-12 text-center text-2xl font-bold tracking-tight text-slate-900">
          Verifying Session
        </h2>

        <p className="mx-auto mt-4 max-w-xs text-center text-[15px] leading-7 text-slate-500">
          Performing security verification, validating credentials, and
          preparing your secure workspace.
        </p>
      </div>
    </div>
  );
}
