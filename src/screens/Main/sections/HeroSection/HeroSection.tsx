import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start mb-[120px] max-w-[1464px] mx-auto justify-center gap-2.5 p-20 relative rounded-[48px] overflow-hidden [background:url(/particles.png)_repeat,url(../banner.png)_50%_50%_/_cover]">
      <div className="w-[560px] items-start gap-6 flex-[0_0_auto] flex flex-col relative z-10">
        <h1 className="self-stretch mt-[-1.00px] font-black text-[#fdfdfd] text-5xl relative [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
          Сonsideration of the request - final decision.
        </h1>

        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#fdfdfd] text-2xl tracking-[0] leading-[normal]">
          Create a request, compare offers, and choose the best one. It&#39;s
          simple, secure, and fast.
        </p>
      </div>

      <div className="absolute top-[calc(50.00%_-_252px)] right-[-720px] w-[1745px] bg-[linear-gradient(38deg,rgba(254,239,254,1)_0%,rgba(255,235,224,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] opacity-30 [font-family:'Poppins',Helvetica] font-black text-transparent text-[326.4px] tracking-[0] leading-[267.4px]">
        &nbsp;&nbsp; Discover <br />
        Services
      </div>

      <Button className="inline-flex h-[60px] items-center justify-center gap-1 px-6 py-2 absolute right-20 bottom-20 bg-[#fdfdfd] rounded-2xl hover:bg-[#fdfdfd]/90 text-dark font-button-large text-[length:var(--button-large-font-size)] tracking-[var(--button-large-letter-spacing)] leading-[var(--button-large-line-height)] [font-style:var(--button-large-font-style)] font-[number:var(--button-large-font-weight)]">
        Create request
      </Button>
    </section>
  );
};
