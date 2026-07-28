/**
 * CSP Header notes:
 * For safe apps we have to allow img-src * and frame-src *
 * connect-src * because the RPCs are configurable (config service)
 * style-src unsafe-inline for our styled components
 * script-src unsafe-eval is required at runtime (bundled web3 libs use eval /
 *   new Function); the upstream prod default of only wasm-unsafe-eval blanks the
 *   app here, so we allow unsafe-eval in every environment
 * frame-ancestors can not be set via meta tag
 *
 * Fonts URLs are needed for WalletConnect
 * Calendly domain is needed for the scheduling integration
 */
export const ContentSecurityPolicy = `
 default-src 'self';
 connect-src 'self' *;
 script-src 'self' 'unsafe-inline' https://*.getbeamer.com https://www.googletagmanager.com https://*.ingest.sentry.io https://sentry.io https://assets.calendly.com 'unsafe-eval';
 frame-src http: https:;
 style-src 'self' 'unsafe-inline' https://*.getbeamer.com https://*.googleapis.com https://assets.calendly.com;
 font-src 'self' data: https://fonts.gstatic.com https://fonts.reown.com;
 worker-src 'self' blob:;
 img-src * data:;
`
  .replace(/\s{2,}/g, ' ')
  .trim()

export const StrictTransportSecurity = 'max-age=31536000; includeSubDomains'
