export const BREAK_POINTS = {
  mobile: {
    xs: 320,
    sm: 360,
    md: 393,
    lg: 428,
    xl: 0,
    xxl: 0
  },
  tablet: {
    xs: 768,
    sm: 800,
    md: 834,
    lg: 0,
    xl: 0,
    xxl: 0
  },
  desktop: {
    xs: 1024,
    sm: 1200,
    md: 1280,
    lg: 1440,
    xl: 1680,
    xxl: 1920
  }
};

/**
 * stylesheet screen
 * @param screen 'mobile' | 'tablet' | 'desktop'
 * @param size 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
 *
 *```
 *   mobile: {
 *    xs: 320,
 *    sm: 360,
 *    md: 393,
 *    lg: 428,
 *    xl: 0,
 *    xxl: 0
 *    },
 *   tablet: {
 *    xs: 768,
 *    sm: 800,
 *    md: 834,
 *    lg: 0,
 *    xl: 0,
 *    xxl: 0
 *    },
 *   desktop: {
 *    xs: 1024,
 *    sm: 1200,
 *    md: 1280,
 *    lg: 1440,
 *    xl: 1680,
 *    xxl: 1920
 *    }
 * ```
 */
export const Device = {
  min: (screen: keyof typeof BREAK_POINTS, size: keyof typeof BREAK_POINTS.desktop) => {
    return `only screen and (min-width: ${BREAK_POINTS[screen][size]}px)`;
  },
  max: (screen: keyof typeof BREAK_POINTS, size: keyof typeof BREAK_POINTS.desktop) => {
    return `only screen and (max-width: ${BREAK_POINTS[screen][size]}px)`;
  },
  range: (min: number, max: number) => {
    return `only screen and (min-width: ${min}px) and (max-width: ${max}px)`;
  }
};
