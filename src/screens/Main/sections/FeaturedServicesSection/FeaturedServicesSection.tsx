import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "../../../../components/ui/button"

const carouselImages = [
  {
    src: "/sculptor.jpg",
    alt: "Service image 1",
  },
  {
    src: "/fence.jpg",
    alt: "Service image 2",
  },
  {
    src: "/ladder.jpg",
    alt: "Service image 3",
  },
  {
    src: "electrical.png",
    alt: "Service image 4",
  },
]

// Position variants mapping: 0=Active, 1=Next, 2=Prev-Prev, 3=Previous
// Container: 1680px × 655px, center at (840, 327.5)
const positionVariants = {
  0: {
    // Active: centered, w-[968px] h-full
    // Centered using negative translate: -width/2, -height/2
    x: -484, // -968/2
    y: -327.5, // -655/2
    width: 968,
    height: 655,
    zIndex: 4,
  },
  1: {
    // Next: right-0 top-1/2, w-[330px] h-[354px]
    // Centered using negative translate: center position - width/2, center position - height/2
    // Element center x: 675 from container center, so x = 675 - 330/2 = 510
    // Element center y: 0 from container center, so y = 0 - 354/2 = -177
    x: 510, // 675 - 165
    y: -177, // 0 - 177
    width: 330,
    height: 354,
    zIndex: 2,
  },
  2: {
    // Prev-Prev: left-[108px] bottom-[112px], w-[244px] h-[207px]
    // Centered using negative translate: center position - width/2, center position - height/2
    // Element center x: -610 from container center, so x = -610 - 244/2 = -732
    // Element center y: 112 from container center, so y = 112 - 207/2 = 8.5
    x: -732, // -610 - 122
    y: 8.5, // 112 - 103.5
    width: 244,
    height: 207,
    zIndex: 1,
  },
  3: {
    // Previous: left-0 top-[72px], w-[332px] h-[240px]
    // Centered using negative translate: center position - width/2, center position - height/2
    // Element center x: -674 from container center, so x = -674 - 332/2 = -840
    // Element center y: -135.5 from container center, so y = -135.5 - 240/2 = -255.5
    x: -840, // -674 - 166
    y: -255.5, // -135.5 - 120
    width: 332,
    height: 240,
    zIndex: 2,
  },
}

export const FeaturedServicesSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const wheelTimeoutRef = useRef<number | null>(null)

  // Spring configuration for smooth animations
  const springConfig = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  }

  // Calculate relative position for each image
  const getRelativePosition = (imageIndex: number): number => {
    return (activeIndex - imageIndex + 4) % 4
  }

  // Handle drag end
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }) => {
    const threshold = 50
    const velocityThreshold = 500

    if (Math.abs(info.offset.x) > threshold || Math.abs(info.velocity.x) > velocityThreshold) {
      if (info.offset.x > 0 || info.velocity.x > 0) {
        // Swipe right = go to previous (backward in flow)
        setActiveIndex((prev) => (prev + 1) % 4)
      } else {
        // Swipe left = go to next (forward in flow)
        setActiveIndex((prev) => (prev - 1 + 4) % 4)
      }
    }
  }

  // Handle click on non-active images
  const handleImageClick = (imageIndex: number, relativePos: number) => {
    // Only activate if the image is not already active
    if (relativePos !== 0) {
      setActiveIndex(imageIndex)
    }
  }

  // Set up event listeners to prevent page scrolling
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Handle wheel scroll with proper event prevention
    const wheelHandler = (event: WheelEvent) => {
      // Prevent default scroll behavior and stop propagation
      event.preventDefault()
      event.stopPropagation()

      // Debounce wheel events
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }

      wheelTimeoutRef.current = setTimeout(() => {
        const deltaY = event.deltaY
        const threshold = 50

        if (Math.abs(deltaY) > threshold) {
          if (deltaY > 0) {
            // Scroll down = forward in flow (Active → Next)
            setActiveIndex((prev) => (prev - 1 + 4) % 4)
          } else {
            // Scroll up = backward in flow
            setActiveIndex((prev) => (prev + 1) % 4)
          }
        }
      }, 50)
    }

    // Handle touch events to prevent page scrolling on mobile
    const handleTouchStart = (event: TouchEvent) => {
      if (container.contains(event.target as Node)) {
        event.stopPropagation()
      }
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (container.contains(event.target as Node)) {
        event.stopPropagation()
      }
    }

    // Add non-passive wheel event listener to properly prevent default
    container.addEventListener("wheel", wheelHandler, { passive: false })

    // Add touch event listeners to prevent page scrolling on mobile
    document.addEventListener("touchstart", handleTouchStart, { passive: false })
    document.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      container.removeEventListener("wheel", wheelHandler)
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove)
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className='relative flex items-start px-0 py-[120px] w-full bg-dark'>
      <div className='absolute top-[calc(50.00%_-_406px)] left-[calc(50.00%_-_484px)] w-[968px] h-[641px] bg-[#fd264d] rounded-[484px/320.5px] blur-[100px] opacity-40 z-0' />

      <div className='w-[120px]' />

      <div className='flex-1 max-w-[1680px] mx-auto flex flex-col items-center justify-center gap-[60px]'>
        <div
          ref={containerRef}
          className='relative h-[655px] w-[1680px]'
        >
          {carouselImages.map((image, imageIndex) => {
            const relativePos = getRelativePosition(imageIndex)
            const variant = positionVariants[relativePos as keyof typeof positionVariants]

            return (
              <motion.div
                key={imageIndex}
                className={`absolute top-1/2 left-1/2 rounded-2xl overflow-hidden ${
                  relativePos === 0 ? 'border-[8px] border-white' : 'cursor-pointer'
                }`}
                drag={relativePos === 0 ? "x" : false}
                dragConstraints={() => ({ left: 0, right: 0 })}
                dragElastic={0}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                onClick={() => handleImageClick(imageIndex, relativePos)}
                animate={{
                  x: variant.x,
                  y: variant.y,
                  width: variant.width,
                  height: variant.height,
                  zIndex: variant.zIndex,
                }}
                whileDrag={{
                  x: variant.x,
                  y: variant.y,
                }}
                transition={springConfig}
                initial={false}
              >
                <img
                  className='w-full h-full object-cover'
                  src={image.src}
                  alt={image.alt}
                  draggable={false}
                />
              </motion.div>
            )
          })}
        </div>

        <div className='w-full max-w-[731px] flex flex-col items-center gap-6'>
          <h2 className="[font-family:'Poppins',Helvetica] font-normal text-[#fdfdfd] text-5xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            Discover most popular services
          </h2>

          <p className="opacity-60 [font-family:'Poppins',Helvetica] font-normal text-[#ffffff] text-2xl text-center tracking-[0] leading-[normal]">
            Browse through our diverse range of professional services and find
            exactly what you need
          </p>

          <Button className='h-[60px] px-6 py-2 bg-[#fdfdfd] rounded-2xl hover:bg-[#fdfdfd]/90'>
            <span className='font-button-large font-[number:var(--button-large-font-weight)] text-dark text-[length:var(--button-large-font-size)] tracking-[var(--button-large-letter-spacing)] leading-[var(--button-large-line-height)] [font-style:var(--button-large-font-style)]'>
              See more
            </span>
          </Button>
        </div>
      </div>

      <div className='w-[120px]' />
    </section>
  )
}
