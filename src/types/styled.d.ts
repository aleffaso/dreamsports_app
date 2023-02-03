import 'styled-components'
import { light } from "../helpers/theme";

export type Theme = typeof light;
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
