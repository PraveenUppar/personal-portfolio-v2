import TextPressure from "../typography/TextPressure";

export default function Landing() {
  return (
    <section className="relative min-h-screen overflow-hidden text-zinc-100">
      {/* <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-black/10 to-black/60" /> */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="h-full w-full ">
          <TextPressure
            text="Praveen Uppar"
            flex
            alpha={false}
            stroke={false}
            width
            weight
            italic
            textColor="#ffffff"
            strokeColor="#5227FF"
            minFontSize={36}
          />
        </div>
      </div>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-zinc-400">
        Scroll down to explore
      </span>
    </section>
  );
}
