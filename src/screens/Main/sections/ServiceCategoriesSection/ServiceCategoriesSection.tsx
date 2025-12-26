import { ChevronRightIcon } from "lucide-react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { useTypewriter } from "../../../../hooks/useTypewriter";

const decorativeImages = [
  {
    className: "top-[418px] left-0 w-[228px] h-[228px]",
    src: "/oldman.jpg",
    alt: "oldman",
  },
  {
    className: "top-[327px] right-[108px] w-[120px] h-[108px]",
    src: "/welding.jpg",
    alt: "welding",
  },
  {
    className: "bottom-[120px] left-[1096px] w-[100px] h-[90px]",
    src: "/sewing.jpg",
    alt: "sewing",
  },
  {
    className: "bottom-0 left-[228px] w-56 h-[169px]",
    src: "/iron.jpg",
    alt: "iron",
  },
  {
    className: "bottom-[169px] right-0 w-[228px] h-[228px]",
    src: "/man.jpg",
    alt: "man",
  },
];

const placeholderTexts = [
  "Need help installing a ceiling fan in my living room...",
  "Looking for a plumber to fix a leaky faucet...",
  "Want to paint my bedroom, need professional help...",
  "Need an electrician to install new outlets...",
  "Looking for someone to clean my carpets...",
  "Need help hanging pictures and mounting TV...",
  "Want to renovate my kitchen, need a contractor...",
  "Looking for a handyman to fix my broken door...",
  "Need help with landscaping and garden design...",
  "Want to install new flooring in my home...",
];

export const ServiceCategoriesSection = (): JSX.Element => {
  const typewriterText = useTypewriter({
    texts: placeholderTexts,
    typingSpeed: 50,
    deletingSpeed: 50,
    pauseDuration: 800,
  });

  return (
    <section className="relative flex flex-col items-center justify-center self-stretch w-full h-[1080px] overflow-hidden [background:radial-gradient(94.35%_298.19%_at_100%_0%,#ffe9cb_0%,#ffeeff_61.92%,#ffffff_100%)]">
      {decorativeImages.map((image) => (
        <img
          key={image.src}
          className={`${image.className} absolute object-cover saturate-0 transition duration-300 ease-out opacity-40 hover:opacity-100 hover:saturate-100 hover:shadow-[0px_103px_41px_rgba(253,38,77,0.01),0px_58px_35px_rgba(253,38,77,0.05),0px_26px_26px_rgba(253,38,77,0.09),0px_6px_14px_rgba(253,38,77,0.1)]`}
          alt={image.alt}
          src={image.src}
        />
      ))}

      <div className="w-[992px] gap-12 flex flex-col items-center">
        <div className="inline-flex items-center gap-[13px] relative flex-[0_0_auto]">
          <Avatar className="w-12 h-12">
            <AvatarImage src="/ava.png" alt="Avatar" />
          </Avatar>

          <div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
            <div className="relative min-w-[600px] opacity-50 [font-family:'Poppins',Helvetica] font-normal text-text text-2xl text-left tracking-[0] leading-[normal]">
              <span className="inline-block">
                {typewriterText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
          </div>
        </div>

        <h1 className="relative flex items-center justify-center self-stretch [font-family:'Poppins',Helvetica] font-bold text-dark text-6xl tracking-[0] leading-[normal]">
          Find the Perfect Service Provider
        </h1>

        <p className="relative w-[790px] [font-family:'Poppins',Helvetica] font-normal text-dark text-2xl text-center tracking-[0] leading-8">
          Connect with verified professionals across multiple categories. Get
          quotes, compare offers, and hire with confidence.
        </p>

        <div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
          <Button className="h-[60px] gap-1 px-12 py-4 bg-app-primary rounded-2xl hover:bg-app-primary/90">
            <span className="font-button-large font-[number:var(--button-large-font-weight)] text-white text-[length:var(--button-large-font-size)] tracking-[var(--button-large-letter-spacing)] leading-[var(--button-large-line-height)] whitespace-nowrap [font-style:var(--button-large-font-style)]">
              Create request
            </span>
            <ChevronRightIcon className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            className="h-[60px] gap-1 px-12 py-3 bg-[#fdfdfd] rounded-2xl border border-solid border-[#dce1eb] hover:bg-[#f5f5f5]"
          >
            <span className="font-button-large font-[number:var(--button-large-font-weight)] text-dark text-[length:var(--button-large-font-size)] tracking-[var(--button-large-letter-spacing)] leading-[var(--button-large-line-height)] whitespace-nowrap [font-style:var(--button-large-font-style)]">
              Browse Providers
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
