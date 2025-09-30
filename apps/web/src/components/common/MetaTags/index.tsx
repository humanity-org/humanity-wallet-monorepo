import { BRAND_NAME, IS_PRODUCTION } from '@/config/constants'
import { ContentSecurityPolicy, StrictTransportSecurity } from '@/config/securityHeaders'
import lightPalette from '@/components/theme/lightPalette'
import darkPalette from '@/components/theme/darkPalette'

const descriptionText = `${BRAND_NAME} is the most trusted smart account wallet on chain.`
const titleText = BRAND_NAME

const MetaTags = ({ prefetchUrl }: { prefetchUrl: string }) => (
  <>
    <meta name="description" content={descriptionText} />
    {!IS_PRODUCTION && <meta name="robots" content="noindex" />}

    {/* Social sharing */}
    <meta name="og:image" content="https://app.safe.global/images/social-share.png" />
    <meta name="og:description" content={descriptionText} />
    <meta name="og:title" content={titleText} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@safe" />
    <meta name="twitter:title" content={titleText} />
    <meta name="twitter:description" content={descriptionText} />
    <meta name="twitter:image" content="https://app.safe.global/images/social-share.png" />

    {/* CSP */}
    <meta httpEquiv="Content-Security-Policy" content={ContentSecurityPolicy} />
    {IS_PRODUCTION && <meta httpEquiv="Strict-Transport-Security" content={StrictTransportSecurity} />}

    {/* Prefetch the backend domain */}
    <link rel="dns-prefetch" href={prefetchUrl} />
    <link rel="preconnect" href={prefetchUrl} crossOrigin="" />

    {/* Mobile tags */}
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

    {/* PWA primary color and manifest */}
    <meta name="theme-color" content={lightPalette.background.main} media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content={darkPalette.background.main} media="(prefers-color-scheme: dark)" />
    <link rel="manifest" href="/safe.webmanifest" />

    {/* Favicons */}
    <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
    <link rel="mask-icon" href="/images/favicons/safari-pinned-tabs.svg" color="#000" />
  </>
)

export default MetaTags
