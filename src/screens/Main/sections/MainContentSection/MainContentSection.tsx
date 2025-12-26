import { UserCheckIcon } from "lucide-react"
import { Badge } from "../../../../components/ui/badge"
import { Button } from "../../../../components/ui/button"
import { Card, CardContent } from "../../../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel"

const categories = [
  {
    title: "Electrical",
    price: "from $35/h",
    users: "568",
    backgroundImage: "bg-[url(/electrical.png)]",
    priceVariant: "white" as const,
    stars: "/--3.svg",
    starsWidth: "w-[163px]",
    tags: ["Wiring", "Installation", "Repair", "Maintenance"],
    moreTagsCount: 199,
  },
  {
    title: "Carpentry",
    price: "from $78/h",
    users: "1,5k",
    backgroundImage: "bg-[url(/carpentry.png)]",
    priceVariant: "white" as const,
    stars: "/--2.svg",
    starsWidth: "w-[431px] ml-[-32.00px]",
    tags: ["Furniture", "Custom", "Repair", "Installation"],
    moreTagsCount: 156,
  },
  {
    title: "Finishing & Painting",
    price: "from $12/h",
    users: "568",
    backgroundImage: "bg-[url(/painting.png)]",
    priceVariant: "border" as const,
    stars: "/--4.svg",
    starsWidth: "w-[431px] ml-[-32.00px]",
    tags: ["Interior", "Exterior", "Touch-up", "Full Service"],
    moreTagsCount: 243,
  },
  {
    title: "Plumbing",
    price: "from $35/h",
    users: "56",
    backgroundImage: "bg-[url(/plumbing.png)]",
    priceVariant: "white" as const,
    stars: "/--1.svg",
    starsWidth: "w-[431px] ml-[-32.00px]",
    tags: ["Leak Repair", "Installation", "Drain Cleaning"],
    moreTagsCount: 87,
  },
  {
    title: "Carpentry",
    price: "from $43/h",
    users: "2к",
    backgroundImage: "bg-[url(/carpentry.png)]",
    priceVariant: "white" as const,
    stars: "/-.svg",
    starsWidth: "w-[204px] ml-[-32.00px]",
    tags: ["Custom Work", "Restoration", "Framing"],
    moreTagsCount: 312,
  },
]

export const MainContentSection = (): JSX.Element => {
  return (
    <section className='flex flex-col items-start gap-[60px] pt-[120px] pb-0 w-full'>
      <div className='flex max-w-[1464px] mx-auto items-start justify-between w-full'>
        <div className='flex flex-col w-[719px] items-start justify-center gap-6'>
          <div className='inline-flex items-center gap-6'>
            <h2 className="[font-family:'Poppins',Helvetica] text-dark text-5xl text-center whitespace-nowrap font-bold tracking-[0] leading-[normal]">
              Service Categories
            </h2>

            <Badge
              variant='outline'
              className='inline-flex items-center justify-center gap-1.5 px-6 py-3 h-auto rounded-2xl border-[#fd264d52]'
            >
              <img className='w-6 h-6' alt='Components' src='/components.svg' />
              <span className="font-bold text-app-primary text-lg [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal]">
                86 categories
              </span>
            </Badge>
          </div>

          <p className="[font-family:'Poppins',Helvetica] font-normal text-dark text-2xl tracking-[0] leading-[normal]">
            Browse through our diverse range of professional services and find
            exactly what you need
          </p>
        </div>

        <Button className='h-[60px] px-6 py-2 bg-app-primary rounded-2xl hover:bg-app-primary/90'>
          <span className='font-button-large font-[number:var(--button-large-font-weight)] text-white text-[length:var(--button-large-font-size)] tracking-[var(--button-large-letter-spacing)] leading-[var(--button-large-line-height)] whitespace-nowrap [font-style:var(--button-large-font-style)]'>
            See more
          </span>
        </Button>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className='w-full'
      >
        <CarouselContent className='-ml-6'>
          {categories.map((category, index) => (
            <CarouselItem key={index} className='pl-6 basis-auto'>
              <Card className='group flex-shrink-0 w-[472px] h-[657px] rounded-[32px] overflow-hidden border-0'>
                <CardContent className='relative w-full overflow-hidden h-full p-8 flex flex-col justify-between'>
                  <div
                    className={`${category.backgroundImage} bg-cover bg-[50%_50%] absolute w-full h-full top-0 left-0 rounded-[32px]`}
                  >
                    <div className='absolute w-full h-full top-0 left-0 rounded-[32px] bg-[url(/red-overlay.png)] bg-cover bg-[50%_50%] opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                    <div className='h-full rounded-[32px] bg-[linear-gradient(180deg,rgba(24,21,35,0.8)_0%,rgba(24,21,35,0)_50%,rgba(24,21,35,0.9)_80%)]' />
                  </div>

                  <div className='flex items-center relative z-10'>
                    <Badge className='bg-[#ffffff] group-hover:bg-transparent group-hover:text-white border-white inline-flex items-center justify-center gap-2.5 px-4 py-3 h-auto rounded-[40px] text-neutral-800'>
                      <span className="[font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[normal]">
                        {category.price}
                      </span>
                    </Badge>
                  </div>

                  <div className='inline-flex flex-col items-start gap-6 relative z-10'>
                    <div className='inline-flex items-center gap-1'>
                      <UserCheckIcon className='w-8 h-8 text-white' />
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-lg tracking-[0] leading-[normal] text-[#ffffff]">
                        {category.users}
                      </span>
                    </div>

                    <h3 className="font-bold text-[32px] [font-family:'Poppins',Helvetica] tracking-[0] leading-[normal] text-[#ffffff]">
                      {category.title}
                    </h3>

                    <div className='flex -ml-20 overflow-x-auto justify-end gap-2.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
                      {category.tags?.slice(0, -1).map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          className='bg-transparent text-white group-hover:bg-transparent group-hover:text-white border-[#ffffff/20] inline-flex items-center justify-center gap-2.5 px-4 py-3 h-auto rounded-[40px] whitespace-nowrap flex-shrink-0'
                        >
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[normal]">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                      {category.moreTagsCount && (
                        <Badge className='bg-transparent text-white group-hover:bg-white group-hover:text-dark border-white/20 inline-flex items-center justify-center gap-2.5 px-4 py-3 h-auto rounded-[40px] whitespace-nowrap flex-shrink-0'>
                          <span className="[font-family:'Poppins',Helvetica] font-normal text-lg tracking-[0] leading-[normal] group-hover:hidden">
                            +{category.moreTagsCount}
                          </span>
                          <span className="[font-family:'Poppins',Helvetica] font-semibold text-lg tracking-[0] leading-[normal] hidden group-hover:inline">
                            See more...
                          </span>
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
