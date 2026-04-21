import FlowingMenu from "../showcase/FlowingMenu";

const demoItems = [
  {
    link: "#",
    text: "My work",
    image: "https://picsum.photos/600/400?random=1",
  },
  {
    link: "#",
    text: "About me",
    image: "https://picsum.photos/600/400?random=2",
  },
  {
    link: "#",
    text: "More on me",
    image: "https://picsum.photos/600/400?random=3",
  },
  {
    link: "#",
    text: "Socials",
    image: "https://picsum.photos/600/400?random=4",
  },
];

export default function Hero() {
  return (
    <div>
      <div style={{ height: "600px", position: "relative" }}>
        <FlowingMenu
          items={demoItems}
          speed={15}
          textColor="#ffffff"
          bgColor="#120F17"
          marqueeBgColor="#ffffff"
          marqueeTextColor="#120F17"
          borderColor="#ffffff"
        />
      </div>
    </div>
  );
}
