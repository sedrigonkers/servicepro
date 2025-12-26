import { ChevronDownIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";

export const NavigationBarSection = (): JSX.Element => {
  return (
    <nav className="fixed top-0 left-0 max-w-[1464px] mx-auto mt-1.5 right-0 z-50 flex w-full items-center justify-between px-[92px] py-6 bg-[#fdfdfd] rounded-2xl">
      <div className="inline-flex items-center gap-6">
        <div className="inline-flex items-center justify-center gap-2">
          <h1 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] text-lg font-bold tracking-[0] leading-[normal]">
            <span className="text-[#1d1a26]">Service</span>
            <span className="text-[#fd264d]">PRO</span>
          </h1>
        </div>

        <Button
          variant="outline"
          className="flex w-[150px] h-10 items-center justify-center gap-1 px-6 py-3 bg-[#fdfdfd] rounded-[10px] border border-solid border-[#fd264d] hover:bg-[#fdfdfd]"
        >
          <img className="w-6 h-6" alt="Layout grid" src="/layout-grid.svg" />
          <span className="font-button-small font-[number:var(--button-small-font-weight)] text-app-primary text-[length:var(--button-small-font-size)] tracking-[var(--button-small-letter-spacing)] leading-[var(--button-small-line-height)] whitespace-nowrap [font-style:var(--button-small-font-style)]">
            Providers
          </span>
        </Button>
      </div>

      <div className="inline-flex items-center justify-end gap-4">
        <Button
          variant="outline"
          className="inline-flex h-10 items-center justify-center gap-1 p-3 bg-[#fdfdfd] rounded-[10px] border border-solid border-[#dce1eb] hover:bg-[#fdfdfd]"
        >
          <img className="w-4 h-4" alt="Lt" src="/lt.svg" />
          <ChevronDownIcon className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          className="inline-flex h-10 items-center justify-center gap-1 px-6 py-3 bg-[#fdfdfd] rounded-[10px] border border-solid border-[#dce1eb] hover:bg-[#fdfdfd]"
        >
          <span className="font-button-small font-[number:var(--button-small-font-weight)] text-dark text-[length:var(--button-small-font-size)] tracking-[var(--button-small-letter-spacing)] leading-[var(--button-small-line-height)] whitespace-nowrap [font-style:var(--button-small-font-style)]">
            Sign In
          </span>
        </Button>
      </div>
    </nav>
  );
};
