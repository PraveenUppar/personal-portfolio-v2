// import ScrollFloat from "../typography/ScrollFloat";
// import CurvedLoop from "../typography/CurvedLoop";
// import ScrollReveal from "../typography/ScrollReveal";
import BlurText from "../typography/BlurText";
// import PixelTransition from "../showcase/PixelTransition";
// import Image from "next/image";

export default function Greeting() {
  return (
    <section className="relative min-h-screen overflow-hidden text-zinc-100">
      {/* <div className="absolute inset-0 z-0 bg-linear-to-b from-black/30 via-black/10 to-black/60" /> */}
      {/* <PixelTransition
        firstContent={
          <Image
            src="/beluga-cat-meme.gif"
            alt="default pixel transition content, a cat!"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            fill
          />
        }
        secondContent={
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "grid",
              placeItems: "center",
              backgroundColor: "#111",
            }}
          >
            <p style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}>
              Hello!
            </p>
          </div>
        }
        gridSize={8}
        pixelColor="#ffffff"
        once={false}
        animationStepDuration={0.4}
        className="custom-pixel-card"
      /> */}
      {/* <CurvedLoop
        marqueeText="Welcome ✦"
        speed={1}
        direction="right"
        interactive
        className="custom-text-style"
      /> */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        {/* <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
          containerClassName="my-0"
          textClassName="text-[clamp(4rem,16vw,12rem)] leading-none font-semibold tracking-[0.05em]"
        >
          Namaste,
        </ScrollFloat> */}
        {/* <ScrollReveal
          baseOpacity={0.6}
          enableBlur
          baseRotation={10}
          blurStrength={7}
        >
          Namaste, I am Praveen Uppar, a third year computer science
          undergraduate. Learning, building and sharing my experience to the
          changing world.
        </ScrollReveal> */}
        <BlurText
          text="Namaste 🙏🏻, I am Praveen Uppar, a third year computer science
          undergrad trying to figure out my way in the world of tech. Learning, building and sharing my experience to the ever changing world."
          delay={90}
          animateBy="words"
          direction="top"
          // onAnimationComplete={handleAnimationComplete}
          className="text-6xl "
        />
      </div>
    </section>
  );
}
