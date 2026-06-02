export const LIFI_WIDGET_URL = process.env.NEXT_PUBLIC_LIFI_WIDGET_URL

export const SAFE_UTILS_URL = 'https://safeutils.protofire.io'

// TODO: move to types
export interface TemplateConfig {
  EIP155: boolean
  SUPPORTED_VERSIONS: string[]
  ALLOWANCE_MODULE_OVERRIDE?: {
    '0.1.0': string
    '0.1.1': string
  }
  SAFE_UTILS_SUPPORTED?: boolean
  EXTRA_FOOTER_LINKS?: {
    label: string
    link: string
  }[]
  LOGO_DIMENSIONS?: {
    WELCOME?: {
      W?: string
      H?: string
    }
    HEADER?: {
      W?: string
      H?: string
    }
  }
  WELCOME_PALETTE?: string
  IS_LICENSED?: boolean
}
