import { MountainVector } from "../../components/MountainVector";
import { Brochure } from "../../components/Brochure";

// Social Icons
import socialIcon3 from "../../assets/images/social-icons-3.svg";
import socialIcon from "../../assets/images/social-icons.svg";
import socialIcon2 from "../../assets/images/social-icons-2.svg";
import socialIcon1 from "../../assets/images/social-icons-1.svg";

// Decorative Groups
import group from "../../assets/images/group.png";
import group1 from "../../assets/images/group-1.png";
import group15 from "../../assets/images/group-15.png";
import group16 from "../../assets/images/group-16.png";
import group2 from "../../assets/images/group-2.png";
import group13 from "../../assets/images/group-13.png";
import group14 from "../../assets/images/group-14.png";
import group5 from "../../assets/images/group-5.png";
import group6 from "../../assets/images/group-6.png";
import group7 from "../../assets/images/group-7.png";
import group8 from "../../assets/images/group-8.png";
import group9 from "../../assets/images/group-9.png";
import group10 from "../../assets/images/group-10.png";
import group17 from "../../assets/images/group-17.png";

// Vectors and Logos
import vector1 from "../../assets/images/vector-1.svg";
import vector5 from "../../assets/images/vector-5.svg";
import vector from "../../assets/images/vector.svg";
import vector4 from "../../assets/images/vector-4.svg";
import vector2 from "../../assets/images/vector-2.svg";
import vector3 from "../../assets/images/vector-3.svg";
import frame10 from "../../assets/images/frame-10.svg";
import incandText from "../../assets/images/incand-text.svg";
import toucanLogo from "../../assets/images/toucan-logo.svg";
import group48096173 from "../../assets/images/group-48096173.png";
import group48096170 from "../../assets/images/group-48096170.svg";

const socialIcons = [
  { src: socialIcon3, alt: "Instagram" },
  { src: socialIcon, alt: "LinkedIn" },
  { src: socialIcon2, alt: "Facebook" },
  { src: socialIcon1, alt: "Twitter" },
];

const decorativeImages = [
  {
    src: group,
    className: "absolute w-[17.99%] h-[12.44%] top-[66.93%] left-[32.78%]",
    alt: "Decorative group",
  },
  {
    src: group1,
    className: "absolute w-[17.99%] h-[12.44%] top-[67.12%] left-[52.67%]",
    alt: "Decorative group",
  },
  {
    src: group15,
    className: "absolute top-[39.948vw] left-[28.958vw] w-[11.302vw] h-[5.521vw]",
    alt: "Decorative group",
  },
  {
    src: group16,
    className: "absolute top-[43.281vw] left-[58.438vw] w-[11.302vw] h-[5.521vw]",
    alt: "Decorative group",
  },
  {
    src: group2,
    className: "absolute w-[26.02%] h-[18.00%] top-[72.87%] left-[37.41%]",
    alt: "Decorative group",
  },
  {
    src: group13,
    className: "absolute top-[46.51vw] left-[54.479vw] w-[16.146vw] h-[7.865vw]",
    alt: "Decorative group",
  },
  {
    src: group14,
    className: "absolute top-[41.354vw] left-[31.667vw] w-[19.792vw] h-[9.635vw]",
    alt: "Decorative group",
  },
  // Mountain Right (Group 3) Individual Vectors
  {
    src: "/mountain-right-vector-5.svg",
    className: "absolute w-[23.65vw] h-[41.56vw]",
    style: { top: "9.06vw", left: "68.28vw" }, // 158+16, 1166+145
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-4.svg",
    className: "absolute w-[35.78vw] h-[43.12vw]",
    style: { top: "15.18vw", left: "60.78vw" }, // 158+133.5, 1166+1
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-1.svg",
    className: "absolute w-[26.67vw] h-[42.55vw]",
    style: { top: "19.38vw", left: "60.73vw" }, // 158+214, 1166+0
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-8.svg",
    className: "absolute w-[26.2vw] h-[42.19vw]",
    style: { top: "8.23vw", left: "81.72vw" }, // 158+0, 1166+373
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-2.svg",
    className: "absolute w-[26.2vw] h-[42.19vw]",
    style: { top: "26.67vw", left: "66.35vw" }, // 158+354, 1166+108
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-7.svg",
    className: "absolute w-[26.2vw] h-[34.19vw]",
    style: { top: "15.47vw", left: "84.17vw" }, // 158+139, 1166+450
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-6.svg",
    className: "absolute w-[26.67vw] h-[42.55vw]",
    style: { top: "26.90vw", left: "75.31vw" }, // 158+358.5, 1166+280
    alt: "Mountain Element",
    group: "right",
  },
  {
    src: "/mountain-right-vector-3.svg",
    className: "absolute w-[26.67vw] h-[42.55vw]",
    style: { top: "30.16vw", left: "75.94vw" }, // 158+421, 1166+292
    alt: "Mountain Element",
    group: "right",
  },

  // Mountain Left (Group 4) Individual Vectors
  {
    src: "/mountain-left-vector-5.svg",
    className: "absolute w-[23.65vw] h-[41.56vw]",
    style: { top: "8.02vw", left: "3.75vw" }, // 138+16, -241+313
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-4.svg",
    className: "absolute w-[35.78vw] h-[43.12vw]",
    style: { top: "14.14vw", left: "-1.77vw" }, // 138+133.5, -241+207
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-1.svg",
    className: "absolute w-[26.67vw] h-[42.55vw]",
    style: { top: "18.33vw", left: "8.44vw" }, // 138+214, -241+403
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-8.svg",
    className: "absolute w-[26.2vw] h-[42.19vw]",
    style: { top: "7.19vw", left: "-8.13vw" }, // 138+0, -241+85
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-2.svg",
    className: "absolute w-[26.2vw] h-[42.19vw]",
    style: { top: "25.63vw", left: "5.68vw" }, // 138+354, -241+350
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-7.svg",
    className: "absolute w-[26.2vw] h-[34.19vw]",
    style: { top: "14.43vw", left: "-12.55vw" }, // 138+139, -241+0
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-6.svg",
    className: "absolute w-[26.67vw] h-[42.55vw]",
    style: { top: "25.86vw", left: "-6.15vw" }, // 138+358.5, -241+123
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/mountain-left-vector-3.svg",
    className: "absolute w-[26.67vw] h-[42.55vw]",
    style: { top: "29.11vw", left: "-6.77vw" }, // 138+421, -241+111
    alt: "Mountain Element",
    group: "left",
  },
  {
    src: "/vector-9.svg",
    className: "absolute top-[32.5vw] left-[-3.75vw] w-[33.646vw] h-[41.146vw]",
    alt: "Foreground Mountain",
  },
  {
    src: "/vector-12.svg",
    className: "absolute top-[37.865vw] left-[59.583vw] w-[43.229vw] h-[41.146vw]",
    alt: "Foreground Mountain",
  },
  {
    src: "/vector-11.svg",
    className: "absolute top-[36.771vw] left-[-2.604vw] w-[39.688vw] h-[41.198vw]",
    alt: "Foreground Mountain",
  },
  {
    src: "/vector-13.svg",
    className: "absolute top-[45.313vw] left-[51.927vw] w-[48.906vw] h-[44.427vw]",
    alt: "Foreground Mountain",
  },
  {
    src: "/vector-10.svg",
    className: "absolute top-[40.729vw] left-[-1.198vw] w-[26.615vw] h-[40.26vw]",
    alt: "Foreground Mountain",
  },
  {
    src: group5,
    className: "absolute w-[26.02%] h-[18.00%] top-[87.78%] left-[41.47%]",
    alt: "White cloud decoration",
  },
  {
    src: group6,
    className: "absolute w-[26.02%] h-[18.00%] top-[85.37%] left-[72.98%]",
    alt: "White cloud decoration",
  },
  {
    src: group7,
    className: "absolute w-[27.85%] h-[36.09%] top-[77.41%] left-[87.40%]",
    alt: "White cloud decoration",
  },
  {
    src: group8,
    className: "absolute w-[26.02%] h-[18.00%] top-[82.50%] left-[24.39%]",
    alt: "White cloud decoration",
  },
  {
    src: group9,
    className: "absolute w-[26.02%] h-[18.00%] top-[85.93%] left-0",
    alt: "White cloud decoration",
  },
  {
    src: group10,
    className: "absolute w-[26.02%] h-[18.00%] top-[90.19%] left-[11.97%]",
    alt: "White cloud decoration",
  },
  {
    src: group17,
    className: "absolute top-[50.208vw] left-[66.146vw] w-[16.927vw] h-[6.042vw]",
    alt: "Decorative group",
  },
];

const smallVectors = [
  {
    src: vector1,
    className: "absolute w-[2.65%] h-[3.61%] top-[56.48%] left-[70.73%]",
    alt: "Star decoration",
  },
  {
    src: vector5,
    className: "absolute w-[3.72%] h-[5.07%] top-[51.67%] left-[75.31%]",
    alt: "Star decoration",
  },
  {
    src: vector,
    className: "absolute w-0 h-[3.81%] top-[19.35%] left-[27.81%]",
    alt: "Bird decoration",
  },
  {
    src: vector4,
    className: "absolute w-0 h-0 top-[22.51%] left-[23.59%]",
    alt: "Bird decoration",
  },
  {
    src: vector2,
    className: "absolute w-[2.12%] h-[2.68%] top-[18.89%] left-[25.16%]",
    alt: "Bird decoration",
  },
];

const getCloudAnimation = (index: number) => {
  const animations = [
    "animate-float",
    "animate-float-slow",
    "animate-float-fast",
    "animate-float-reverse",
    "animate-float-large",
    "animate-float-large-reverse",
    "animate-float-horizontal",
  ];
  // Use a pseudo-random selection based on index to keep it consistent
  return animations[index % animations.length];
};

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-screen h-screen overflow-hidden select-none [background:radial-gradient(50%_50%_at_50%_31%,rgba(255,255,255,1)_0%,rgba(252,209,166,1)_100%)]">
      <div className="absolute bottom-0 left-0 w-full h-[56.25vw]">
      <div className="absolute top-[calc(50.00%_-_19.01vw)] left-[calc(50.00%_-_12.083vw)] w-[24.167vw] h-[24.167vw] bg-white rounded-[52.083vw]" />

      <section className="absolute top-[14.356vw] left-[26.094vw] w-[47.86vw] h-[15.104vw]">
        <img
          className="absolute top-0 left-0 w-[38.49vw] h-[15.104vw] select-none"
          alt="INCANDESCENCE"
          draggable={false}
          src={incandText}
        />

        <img
          className="absolute top-[1.363vw] left-[39.31vw] w-[8.55vw] h-[13.162vw] select-none"
          alt="Toucan logo"
          draggable={false}
          src={toucanLogo}
        />
      </section>

      {decorativeImages.map((image, index) => {
        if (image.alt === "Mountain Element" || image.alt === "Foreground Mountain") {
          return (
            <MountainVector
              key={`decorative-${index}`}
              className={`${image.className} transition-transform duration-500 ease-out hover:scale-[1.03] hover:-translate-y-2 select-none`}
              style={image.style}
              alt={image.alt}
              src={image.src}
            />
          );
        }

        return (
          <img
            key={`decorative-${index}`}
            draggable={false}
            className={`${image.className} select-none ${
              image.alt === "Cloud decoration" ||
              image.alt === "White cloud decoration" ||
              image.alt === "Decorative group"
                ? getCloudAnimation(index)
                : ""
            }`}
            style={image.style}
            alt={image.alt}
            src={image.src}
          />
        );
      })}

      {smallVectors.map((vector, index) => (
        <img
          key={`vector-${index}`}
          className={`${vector.className} select-none`}
          draggable={false}
          alt={vector.alt}
          src={vector.src}
        />
      ))}

      <img
        className="absolute top-[48.49vw] left-[calc(50.00%_-_17.708vw)] w-[35.417vw] h-[4.792vw] select-none"
        alt="Bottom decoration"
        draggable={false}
        src={frame10}
      />

      <img
        className="absolute top-[6.042vw] left-[65.365vw] w-[12.708vw] h-[8.698vw] select-none"
        alt="Top right decoration"
        draggable={false}
        src={group48096173}
      />

      <img
        className="absolute h-[7.41%] top-[55.37%] left-[calc(50.00%_-_15.313vw)] w-[30.625vw] select-none"
        alt="Tribal tapestry text"
        draggable={false}
        src={vector3}
      />

      <div className="absolute top-[37.24vw] left-[calc(50.00%_-_4.844vw)] h-[1.979vw] flex items-center justify-center font-normal text-[#482727] text-[1.667vw] text-right tracking-[0] leading-[normal] whitespace-nowrap select-none" style={{ fontFamily: "'Russo One', sans-serif" }}>
        Contact Us
      </div>

      <nav
        className="absolute top-[40.521vw] left-[calc(50.00%_-_10.417vw)] w-[20.781vw] h-[2.08vw] flex gap-[4.17vw]"
        aria-label="Social media links"
      >
        {socialIcons.map((icon, index) => (
          <a
            key={`social-${index}`}
            href="#"
            className="w-[2.074vw] h-[2.074vw] hover:opacity-80 transition-opacity"
            aria-label={icon.alt}
          >
            <img className="w-full h-full select-none" draggable={false} alt={icon.alt} src={icon.src} />
          </a>
        ))}
      </nav>

      <div className="absolute top-[5.052vw] left-[calc(50.00%_-_45.729vw)]">
        <Brochure className="origin-top-left scale-[0.8] 2xl:scale-100" />
      </div>

      <div className="absolute top-[51.458vw] left-[calc(50.00%_+_31.823vw)] w-[17.5vw] h-[6.198vw]">
        <img
          className="absolute top-0 left-0 w-[17.40vw] h-[6.20vw] select-none"
          alt="Made in collaboration with GDG NIT Silchar"
          draggable={false}
          src={group48096170}
        />
      </div>
      </div>
    </footer>
  );
};
