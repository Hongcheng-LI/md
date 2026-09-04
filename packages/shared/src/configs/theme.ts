import type { IConfigOption } from '../types'
import type { ThemeName } from './theme-css'

export {
  baseCSSContent,
  type BuiltinThemeName,
  isBuiltinThemeName,
  themeMap,
  type ThemeName,
} from './theme-css'

export const themeOptionsMap = {
  default: {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  grace: {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  simple: {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  ink: {
    label: `墨韵`,
    value: `ink`,
    desc: `极简杂志`,
  },
  geek: {
    label: `极客`,
    value: `geek`,
    desc: `高密度`,
  },
  card: {
    label: `卡片`,
    value: `card`,
    desc: `柔和圆角`,
  },
}

export const themeOptions: IConfigOption<ThemeName>[] = [
  {
    label: `经典`,
    value: `default`,
    desc: ``,
  },
  {
    label: `优雅`,
    value: `grace`,
    desc: `@brzhang`,
  },
  {
    label: `简洁`,
    value: `simple`,
    desc: `@okooo5km`,
  },
  {
    label: `墨韵`,
    value: `ink`,
    desc: `极简杂志`,
  },
  {
    label: `极客`,
    value: `geek`,
    desc: `高密度`,
  },
  {
    label: `卡片`,
    value: `card`,
    desc: `柔和圆角`,
  },
]
