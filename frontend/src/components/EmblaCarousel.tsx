"use client";
import React, { useCallback } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import Autoplay, { AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import Image, { StaticImageData } from 'next/image';

type PropType = {
    slides: StaticImageData[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi?.plugins()?.autoplay as AutoplayType
        if (!autoplay) return

        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
        emblaApi,
        onNavButtonClick
    )

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((image, index) => (
                        <div className="embla__slide" key={index}>
                            <Image
                            src={image}
                            key={index}
                            alt={`Family ${index + 1}`}
                            height={200}
                            objectFit="cover"
                            className='rounded-lg'
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
