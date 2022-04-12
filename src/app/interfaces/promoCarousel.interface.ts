export interface PromoCarouselSlide {
  [key: string]: any;
  src: string;
  title: string;
  description?: string;
  route?: string;
}

export interface PromoCarouselOptions {
  [key: string]: any;
  slides: PromoCarouselSlide[];
  active: number;
  hide: number | null;
  interval: number;
  indicators: boolean;
  scrollAnchor?: string;
}
