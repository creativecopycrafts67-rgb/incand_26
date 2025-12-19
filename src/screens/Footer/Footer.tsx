import React from "react";
import { Button } from "../../components/ui/button";

const socialIcons = [
  { src: "/social-icons-3.svg", alt: "Instagram" },
  { src: "/social-icons.svg", alt: "LinkedIn" },
  { src: "/social-icons-2.svg", alt: "Facebook" },
  { src: "/social-icons-1.svg", alt: "Twitter" },
];

const bottomIcons = [{ src: "/frame-10.svg", alt: "Bottom icon 1" }];

const decorativeImages = [
  {
    src: "/group.png",
    className: "absolute w-[17.99%] h-[12.44%] top-[66.93%] left-[32.78%]",
    alt: "Decorative group",
  },
  {
    src: "/group-1.png",
    className: "absolute w-[17.99%] h-[12.44%] top-[67.12%] left-[52.67%]",
    alt: "Decorative group",
  },
  {
    src: "/group-15.png",
    className: "absolute top-[767px] left-[556px] w-[217px] h-[106px]",
    alt: "Decorative group",
  },
  {
    src: "/group-16.png",
    className: "absolute top-[831px] left-[1122px] w-[217px] h-[106px]",
    alt: "Decorative group",
  },
  {
    src: "/group-2.png",
    className: "absolute w-[26.02%] h-[18.00%] top-[72.87%] left-[37.41%]",
    alt: "Decorative group",
  },
  {
    src: "/group-13.png",
    className: "absolute top-[893px] left-[1046px] w-[310px] h-[151px]",
    alt: "Decorative group",
  },
  {
    src: "/group-14.png",
    className: "absolute top-[794px] left-[608px] w-[380px] h-[185px]",
    alt: "Decorative group",
  },
  {
    src: "/group-3.png",
    className: "absolute top-[158px] left-[1166px] w-[754px] h-[922px]",
    alt: "Mountain right",
  },
  {
    src: "/group-4.png",
    className: "absolute top-[138px] left-0 w-[720px] h-[942px]",
    alt: "Mountain left",
  },
  {
    src: "/vector-9.svg",
    className: "absolute top-[624px] left-[-72px] w-[646px] h-[790px]",
    alt: "Cloud decoration",
  },
  {
    src: "/vector-12.svg",
    className: "absolute top-[727px] left-[1144px] w-[830px] h-[790px]",
    alt: "Cloud decoration",
  },
  {
    src: "/vector-11.svg",
    className: "absolute top-[706px] left-[-50px] w-[762px] h-[791px]",
    alt: "Cloud decoration",
  },
  {
    src: "/vector-13.svg",
    className: "absolute top-[870px] left-[997px] w-[939px] h-[853px]",
    alt: "Cloud decoration",
  },
  {
    src: "/vector-10.svg",
    className: "absolute top-[782px] left-[-23px] w-[511px] h-[773px]",
    alt: "Cloud decoration",
  },
  {
    src: "/group-5.png",
    className: "absolute w-[26.02%] h-[18.00%] top-[87.78%] left-[41.47%]",
    alt: "Decorative group",
  },
  {
    src: "/group-6.png",
    className: "absolute w-[26.02%] h-[18.00%] top-[85.37%] left-[72.98%]",
    alt: "Decorative group",
  },
  {
    src: "/group-7.png",
    className: "absolute w-[27.85%] h-[36.09%] top-[77.41%] left-[87.40%]",
    alt: "Decorative group",
  },
  {
    src: "/group-8.png",
    className: "absolute w-[26.02%] h-[18.00%] top-[82.50%] left-[24.39%]",
    alt: "Decorative group",
  },
  {
    src: "/group-9.png",
    className: "absolute w-[26.02%] h-[18.00%] top-[85.93%] left-0",
    alt: "Decorative group",
  },
  {
    src: "/group-10.png",
    className: "absolute w-[26.02%] h-[18.00%] top-[90.19%] left-[11.97%]",
    alt: "Decorative group",
  },
  {
    src: "/group-17.png",
    className: "absolute top-[964px] left-[1270px] w-[325px] h-[116px]",
    alt: "Decorative group",
  },
];

const smallVectors = [
  {
    src: "/vector-1.svg",
    className: "absolute w-[2.65%] h-[3.61%] top-[56.48%] left-[70.73%]",
    alt: "Star decoration",
  },
  {
    src: "/vector-5.svg",
    className: "absolute w-[3.72%] h-[5.07%] top-[51.67%] left-[75.31%]",
    alt: "Star decoration",
  },
  {
    src: "/vector.svg",
    className: "absolute w-0 h-[3.81%] top-[19.35%] left-[27.81%]",
    alt: "Bird decoration",
  },
  {
    src: "/vector-4.svg",
    className: "absolute w-0 h-0 top-[22.51%] left-[23.59%]",
    alt: "Bird decoration",
  },
  {
    src: "/vector-2.svg",
    className: "absolute w-[2.12%] h-[2.68%] top-[18.89%] left-[25.16%]",
    alt: "Bird decoration",
  },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full max-w-[1920px] h-[1080px] overflow-hidden [background:radial-gradient(50%_50%_at_50%_31%,rgba(255,255,255,1)_0%,rgba(252,209,166,1)_100%)]">
      <div className="absolute top-[calc(50.00%_-_365px)] left-[calc(50.00%_-_232px)] w-[464px] h-[464px] bg-white rounded-[1000px]" />

      <section className="absolute top-[276px] left-[calc(50.00%_-_459px)] w-[921px] h-[290px]">
        <h1 className="absolute top-[calc(50.00%_-_145px)] left-[calc(50.00%_-_460px)] [font-family:'Hitchcut-Regular',Helvetica] font-normal text-[#3c2923] text-[180.5px] tracking-[0] leading-[180.5px]">
          <span className="leading-[162.5px]">
            INCAND
            <br />
          </span>
          <span className="text-[144.4px] leading-[130.0px]">ESCENCE</span>
        </h1>

        <img
          className="absolute top-[26px] left-[755px] w-[164px] h-[253px]"
          alt="Toucan logo"
          src="/group-48096171.png"
        />
      </section>

      {decorativeImages.map((image, index) => (
        <img
          key={`decorative-${index}`}
          className={image.className}
          alt={image.alt}
          src={image.src}
        />
      ))}

      {smallVectors.map((vector, index) => (
        <img
          key={`vector-${index}`}
          className={vector.className}
          alt={vector.alt}
          src={vector.src}
        />
      ))}

      <img
        className="absolute top-[931px] left-[calc(50.00%_-_340px)] w-[680px] h-[92px]"
        alt="Bottom decoration"
        src="/frame-10.svg"
      />

      <img
        className="absolute top-[116px] left-[1255px] w-[244px] h-[167px]"
        alt="Top right decoration"
        src="/group-48096173.png"
      />

      <img
        className="absolute h-[7.41%] top-[55.37%] left-[calc(50.00%_-_294px)] w-[588px]"
        alt="Tribal tapestry text"
        src="/vector-3.svg"
      />

      <div className="absolute top-[715px] left-[calc(50.00%_-_93px)] h-[38px] flex items-center justify-center [font-family:'Hitchcut-Regular',Helvetica] font-normal text-[#482727] text-[32px] text-right tracking-[0] leading-[normal] whitespace-nowrap">
        Contact Us
      </div>

      <nav
        className="absolute top-[778px] left-[calc(50.00%_-_200px)] w-[399px] h-10 flex gap-20"
        aria-label="Social media links"
      >
        {socialIcons.map((icon, index) => (
          <a
            key={`social-${index}`}
            href="#"
            className="w-[39.83px] h-[39.83px] hover:opacity-80 transition-opacity"
            aria-label={icon.alt}
          >
            <img className="w-full h-full" alt={icon.alt} src={icon.src} />
          </a>
        ))}
      </nav>

      <div className="absolute top-[97px] left-[calc(50.00%_-_878px)] w-[354px] h-[91px]">
        <div className="absolute top-px left-[calc(50.00%_-_176px)] w-[352px] h-[89px] bg-black rounded-[62.41px] rotate-[-0.35deg]" />

        <Button
          className="absolute top-0 left-[calc(50.00%_-_178px)] w-[355px] h-[91px] bg-[#751313] rounded-[62.41px] overflow-hidden border-[2.63px] border-solid border-black rotate-[-0.35deg] hover:bg-[#8a1616] transition-colors"
          asChild
        >
          <a href="#" className="relative flex items-center justify-center">
            <span className="[font-family:'Hitchcut-Regular',Helvetica] font-normal text-[#fcdbbb] text-[38.7px] tracking-[0] leading-[normal] whitespace-nowrap">
              BROCHURE
            </span>

            <img
              className="absolute -top-0.5 left-0 w-[74px] h-[91px] rotate-[0.35deg]"
              alt="Left frame decoration"
              src="/frame-48096166.svg"
            />

            <img
              className="absolute top-0 left-[279px] w-[73px] h-[91px] rotate-[0.35deg]"
              alt="Right frame decoration"
              src="/frame-48096167.svg"
            />
          </a>
        </Button>
      </div>

      <div className="absolute top-[988px] left-[calc(50.00%_+_611px)] w-[336px] h-[119px]">
        <img
          className="absolute top-0 left-[202px] w-[132px] h-[92px] object-cover"
          alt="GDG logo"
          src="/https---lottiefiles-com-animations-gdsc-logo-dokvnu0d2f.png"
        />

        <p className="absolute top-[35px] left-0 w-[233px] h-[30px] flex items-center justify-center [font-family:'Inter',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-[15px]">
          <span className="font-semibold">MADE IN COLLABORATION WITH </span>
          <span className="font-extrabold">GDG NIT SILCHAR</span>
        </p>
      </div>
    </footer>
  );
};
