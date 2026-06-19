const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqMQG8DKfyE-jUXkPVQA8Z7VkkbdTuO3Jio-95Ysbw5oQiOHypTxDiapC6RbnDEX2X9U8wB4lh2u1cnivR0O95m9QpLBI0mESj_jHHpTRK0TzU2WzXtV70Gw1dOUSWER6KkqkIr_YxOddpDcQ3bOAzEKOwGaTLiZDn3EMIsdUFo_rETSzegPLLDRTc5UfFNqYh_AKKKj7V_3xR6VoGwXQy1KiwfdHq-nDdcsd1buXP3-We8JRH_bXrw8xbO9N4auAEnTUBn9QZgOuN";

export default function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Shayan Packages Logo"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
