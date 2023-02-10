type Theme = {
  title: 'dark' | 'light';
};
export const theme = {
  version: '1.0',
  title: 'default',
  font: {
    family: `'Roboto', sans-serif`
  },
  colors: {
    gradient: {
      primary: 'linear-gradient(180deg, #091421 0%, #0A2A4E 98.02%)'
    },
    primary: {
      p50: '#8EBEF5',
      p100: '#7FB1EB',
      p200: '#67A3E5',
      p300: '#4271A6',
      p400: '#315C8C',
      p500: '#224873',
      p600: '#163961',
      p700: '#103157',
      p800: '#0A2A4E',
      p900: '#3CBEC3'
    },
    neutral: {
      n50: '#CAD9EB',
      n100: '#F3F4F6',
      n200: '#E5E7EB',
      n300: '#D1D5DB',
      n400: '#9CA3AF',
      n500: '#6B7280',
      n600: '#4B5563',
      n700: '#212934',
      n800: '#1A202E',
      n900: '#111827'
    },
    dark: {
      d50: '#C3C4D8',
      d100: '#9799BA',
      d200: '#787A99',
      d300: '#666882',
      d400: '#5B5D75',
      d500: '#4F5166',
      d600: '#363745',
      d700: '#2B2C39',
      d800: '#272730',
      d850: '#23232B',
      d900: '#201E26',
      d950: '#1b2334'
    },
    shades: {
      white: '#ffffff',
      black: '#000000'
    },
    greenMud: {
      gm50: '#F7FCE8',
      gm100: '#EAF5C5',
      gm200: '#DDF09E',
      gm300: '#D0EA78',
      gm400: '#C6E45B',
      gm500: '#BEDF3E',
      gm600: '#B2CD37',
      gm700: '#A2B72E',
      gm800: '#93A026',
      gm900: '#7A7916'
    },
    blue: {
      b50: '#E3F1FC',
      b100: '#BCDBF9',
      b200: '#93C6F6',
      b300: '#6BAFF1',
      b400: '#4F9EEE',
      b500: '#3A8EEB',
      b600: '#3781DD',
      b700: '#326FC9',
      b800: '#2E5EB7',
      b900: '#0053A6'
    },
    orange: {
      o50: '#FDECEE',
      o100: '#FAD0D2',
      o200: '#E6A09B',
      o300: '#DA7D75',
      o400: '#E16453',
      o500: '#E45A3B',
      o600: '#D6513A',
      o700: '#C44834',
      o800: '#B7432E',
      o900: '#A73B25'
    },
    green: {
      g50: '#F0FDF4',
      g100: '#DCFCE7',
      g200: '#BBF7D0',
      g300: '#86EFAC',
      g400: '#4ADE80',
      g500: '#22C55E',
      g600: '#16A34A',
      g700: '#15803D',
      g800: '#166534',
      g900: '#14532D'
    },
    red: {
      r50: '#FEF2F2',
      r100: '#FEE2E2',
      r200: '#FECACA',
      r300: '#FCA5A5',
      r400: '#F87171',
      r500: '#EF4444',
      r600: '#DC2626',
      r700: '#B91C1C',
      r800: '#991B1B',
      r900: '#7F1D1D'
    },
    warning: {
      w50: '#FFFBEB',
      w100: '#FEF3C7',
      w200: '#FDE68A',
      w300: '#FCD34D',
      w400: '#FBBF24',
      w500: '#F59E0B',
      w600: '#D97706',
      w700: '#B45309',
      w800: '#92400E',
      w900: '#78350F'
    }
  }
};

export const dark = {
  ...theme,
  title: 'dark' as Theme['title'],
  colors: {
    ...theme.colors
  }
};

export const light = {
  ...theme,
  title: 'light' as Theme['title'],
  colors: {
    ...theme.colors
  }
};
