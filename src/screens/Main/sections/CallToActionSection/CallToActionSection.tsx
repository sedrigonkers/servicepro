import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const statisticsData = [
  {
    icon: "/icon.svg",
    value: "40k",
    description: "Verified specialists in dozens of categories.",
    hasBorder: false,
  },
  {
    icon: "/arrow-up-right-circle.svg",
    value: "95%",
    description: "Orders find a contractor within the first few hours",
    hasBorder: true,
    hasCustomIcon: true,
  },
  {
    icon: "/frame-1000006075.svg",
    value: "4,5",
    description: "Real performers, rated by real users.",
    hasBorder: true,
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center justify-center px-0 py-[120px]">
      <div className="flex-1" />

      <div className="w-full max-w-[1464px] flex flex-col items-end gap-[60px]">
        <div className="flex items-start justify-between w-full">
          <Badge
            variant="outline"
            className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-2xl border border-solid border-[#fd264d52] bg-transparent hover:bg-transparent"
          >
            <img className="w-6 h-6" alt="Keyframe" src="/keyframe.svg" />
            <span className="font-bold text-[#fd264d] text-lg [font-family:'Poppins',Helvetica]">
              About
            </span>
          </Badge>

          <h2 className="w-[1092px] font-bold text-dark text-5xl [font-family:'Poppins',Helvetica]">
            We&#39;ve created a platform where everything works as intended —
            without random people and without wasting time.
          </h2>
        </div>

        <div className="flex w-[1092px] items-start gap-6">
          {statisticsData.map((stat, index) => (
            <Card
              key={index}
              className="flex flex-col w-[348px] items-start gap-3 pl-6 pr-0 py-0 border-0 shadow-none bg-transparent"
              style={{
                borderLeft: stat.hasBorder ? "1px solid #dce1eb" : "none",
              }}
            >
              <CardContent className="p-0 w-full flex flex-col gap-3">
                <div className="flex items-center justify-center gap-2.5 w-full">
                  {stat.hasCustomIcon ? (
                    <div className="relative w-[60px] h-[60px]">
                      <div className="absolute top-[calc(50.00%_-_19px)] left-[calc(50.00%_-_19px)] w-[38px] h-[38px] bg-dark rounded-[19px]" />
                      <img
                        className="absolute top-[18px] left-[18px] w-6 h-6"
                        alt="Arrow up right"
                        src={stat.icon}
                      />
                    </div>
                  ) : (
                    <img
                      className={`${index === 2 ? "w-[62px] h-[62px]" : "w-[60px] h-[60px]"}`}
                      alt="Icon"
                      src={stat.icon}
                    />
                  )}
                  <div className="flex-1 font-bold text-dark text-5xl [font-family:'Poppins',Helvetica]">
                    {stat.value}
                  </div>
                </div>
                <p className="font-normal text-dark text-2xl [font-family:'Poppins',Helvetica]">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="flex-1" />
    </section>
  );
};
