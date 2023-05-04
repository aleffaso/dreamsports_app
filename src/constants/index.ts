export const KEYS = {
  STORAGE: {
    USER: {
      DATA: '@DREAMSPORTS-STORAGE-USER-DATA',
      TOKEN: '@DREAMSPORTS-STORAGE-USER-TOKEN',
      REFRESH_TOKEN: '@DREAMSPORTS-STORAGE-USER-REFRESH-TOKEN'
    },
    CUSTOMER: {
      DATA: '@DREAMSPORTS-STORAGE-CUSTOMER-DATA',
      TOKEN: '@DREAMSPORTS-STORAGE-CUSTOMER-TOKEN',
      REFRESH_TOKEN: '@DREAMSPORTS-STORAGE-CUSTOMER-REFRESH-TOKEN'
    }
  },
  HOST: {
    API_URL: (process.env.NEXT_PUBLIC_API_URL || '') as string
  }
};
