export function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full">
      {/* Scanlines */}
      <div 
        className="absolute inset-0 z-50 h-full w-full opacity-10" 
        style={{
          backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          backgroundSize: "100% 4px, 6px 100%"
        }}
      />
      {/* Moving scanline */}
      <div className="absolute inset-0 z-50 h-[10%] w-full animate-scanline opacity-[0.05]" 
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(110, 231, 168, 1), transparent)"
        }}
      />
      {/* Vignette */}
      <div 
        className="absolute inset-0 z-50 h-full w-full opacity-60"
        style={{
          background: "radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.4) 100%)"
        }}
      />
    </div>
  );
}
