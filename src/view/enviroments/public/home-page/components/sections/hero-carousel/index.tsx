import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import * as S from './styles';
import { carouselList } from './mapped';
import Image from 'next/image';
import { ArrowButton } from './components/arrow-button';

export const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <S.Wrapper>
      <S.Content ref={emblaRef}>
        <S.Container>
          {carouselList.map((item, index) => (
            <S.Slide key={index}>
              <Image
                src={item.src}
                fill
                alt={item.alt}
                sizes="50vw"
                style={{ objectFit: 'cover' }}
              />
            </S.Slide>
          ))}
        </S.Container>
      </S.Content>
      <S.AlignActionSlide>
        <ArrowButton onClick={scrollPrev} enabled={!prevBtnEnabled} direction="left" />
        <ArrowButton onClick={scrollNext} enabled={!nextBtnEnabled} direction="right" />
      </S.AlignActionSlide>
    </S.Wrapper>
  );
};
