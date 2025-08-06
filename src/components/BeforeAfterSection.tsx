import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
} from '@/components/ui/carousel';

export default function BeforeAfterSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Carousel */}
        <div className="hidden md:block relative w-full px-4">
          <Carousel>
            <CarouselContent className="-ml-4">
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  1
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  2
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  3
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  4
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  5
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  6
                </div>
              </CarouselItem>
              <CarouselItem className="basis-1/3 pl-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  7
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNavigation
              className="absolute -bottom-20 left-auto top-auto w-full justify-end gap-2"
              classNameButton="bg-zinc-800 *:stroke-zinc-50 dark:bg-zinc-200 dark:*:stroke-zinc-800"
              alwaysShow
            />
          </Carousel>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative w-full max-w-xs mx-auto">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="p-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  1
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  2
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  3
                </div>
              </CarouselItem>
              <CarouselItem className="p-4">
                <div className="flex aspect-[4/5] items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl">
                  4
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNavigation alwaysShow />
            <CarouselIndicator />
          </Carousel>
        </div>
      </div>
    </section>
  );
} 