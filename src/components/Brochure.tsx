import React from "react";
import { cn } from "../lib/utils";
import brochureIcon1 from "../assets/brochure/brochure-icon-1.svg";
import brochureIcon2 from "../assets/brochure/brochure-icon-2.svg";

interface BrochureProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  // Props can be extended if needed
}

export const Brochure = React.forwardRef<HTMLAnchorElement, BrochureProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href="#"
        className={cn("group relative block w-[403px] h-[104px] cursor-pointer transition-transform duration-700 ease-in-out hover:-rotate-3", className)}
        style={style}
        {...props}
      >
        {/* Shadow Layer */}
        <div 
            className="absolute bg-black rounded-[71px] transition-all duration-300 ease-out pointer-events-none
                       top-0 left-[1px] w-[402px] h-[103px]
                       group-hover:-top-[29px] group-hover:-left-[14px] group-hover:w-[516px] group-hover:h-[169px]
                       group-hover:bg-[#A25D5D] group-hover:border-[3px] group-hover:border-black group-hover:rounded-[89px]"
        />
        
        {/* Main Layer */}
        <div 
            className="absolute bg-[#751313] border-[3px] border-black rounded-[71px] transition-all duration-300 ease-out
                       top-0 left-0 w-[402px] h-[103px]
                       group-hover:-top-[46px] group-hover:-left-[4px] group-hover:w-[515px] group-hover:h-[169px]
                       group-hover:rounded-[89px]
                       overflow-hidden z-10"
        >
             {/* Text */}
             <span 
                className="absolute font-sans transition-all duration-300 ease-out z-20 whitespace-nowrap tracking-wider
                           left-[67px] top-[24px] text-[#FCDBBB] text-[44px] leading-[1.2]
                           group-hover:left-[87px] group-hover:top-[37px] group-hover:text-white group-hover:text-[55px]"
                style={{ fontFamily: "'Russo One', sans-serif" }}
             >
               BROCHURE
             </span>

             {/* Image 1 (Left) */}
             <img 
                src={brochureIcon1} 
                alt="" 
                className="absolute transition-all duration-300 ease-out max-w-none z-30 pointer-events-none
                           -left-[49px] -top-[48px] w-[133px] h-[219px]
                           group-hover:-left-[66px] group-hover:-top-[29px] group-hover:w-[189px] group-hover:h-[288px]"
             />

             {/* Image 2 (Right) */}
             <img 
                src={brochureIcon2} 
                alt="" 
                className="absolute transition-all duration-300 ease-out max-w-none z-30 pointer-events-none
                           left-[318px] -top-[50px] w-[133px] h-[219px]
                           group-hover:left-[395px] group-hover:-top-[68px] group-hover:w-[189px] group-hover:h-[288px]"
             />
        </div>
      </a>
    );
  }
);

Brochure.displayName = "Brochure";
