import { FacebookIcon, InstagramIcon, SendIcon } from "lucide-react";
import React from "react";
import { Separator } from "../../../../components/ui/separator";

const socialLinks = [
  { icon: FacebookIcon, alt: "Brand facebook" },
  { icon: InstagramIcon, alt: "Brand instagram" },
  { icon: null, alt: "Brand tiktok", src: "/brand-tiktok.svg" },
  { icon: SendIcon, alt: "Brand telegram" },
];

const customerLinks = ["Browse Services", "Create Request", "How it Works"];

const providerLinks = ["Join as provider", "Provider Guide"];

const companyLinks = ["About Us", "Help Center"];

const footerColumns = [
  { title: "For Customers", links: customerLinks },
  { title: "For Providers", links: providerLinks },
  { title: "Company", links: companyLinks },
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full px-0 py-[60px] bg-[#1d1a26] flex items-start justify-center relative">
      <div className="flex-col w-full max-w-[1464px] gap-12 flex items-start px-4">
        <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] flex-wrap gap-8">
          <div className="flex flex-col w-full md:w-[472px] items-start gap-6 relative">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <img
                  className="relative w-[15px] h-[22px]"
                  alt="Vector"
                  src="/vector.svg"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-lg tracking-[0] leading-[normal]">
                  ServicePRO
                </div>
              </div>
              <p className="relative self-stretch opacity-50 font-body-1 font-[number:var(--body-1-font-weight)] text-[#fdfdfd] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                Connect with verified professionals across multiple categories.
                Get quotes, compare offers, and hire with confidence.
              </p>
            </div>
            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              {socialLinks.map((social, index) =>
                social.icon ? (
                  <social.icon
                    key={index}
                    className="relative w-6 h-6 text-white"
                  />
                ) : (
                  <img
                    key={index}
                    className="relative w-6 h-6"
                    alt={social.alt}
                    src={social.src}
                  />
                ),
              )}
            </div>
          </div>

          <div className="flex w-full md:w-[720px] items-start gap-6 relative flex-wrap">
            {footerColumns.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col w-full sm:w-56 items-start gap-3 relative"
              >
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-lg tracking-[0] leading-[normal]">
                  {column.title}
                </h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href="#"
                    className="relative self-stretch opacity-50 font-body-1 font-[number:var(--body-1-font-weight)] text-[#fdfdfd] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] hover:opacity-75 transition-opacity"
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <Separator className="relative self-stretch w-full bg-white/10" />

        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] flex-wrap gap-4">
          <p className="relative w-fit mt-[-1.00px] opacity-50 font-body-1 font-[number:var(--body-1-font-weight)] text-[#fdfdfd] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
            © 2025 Service PRO. All rights reserved.
          </p>
          <div className="inline-flex items-center gap-3 relative flex-[0_0_auto] opacity-50">
            <a
              href="#"
              className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#fdfdfd] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] hover:opacity-75 transition-opacity"
            >
              Private Policy
            </a>
            <span className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#fdfdfd] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
              &amp;
            </span>
            <a
              href="#"
              className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-[#fdfdfd] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] hover:opacity-75 transition-opacity"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
