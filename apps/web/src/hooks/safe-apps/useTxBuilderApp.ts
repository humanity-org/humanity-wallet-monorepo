import { useRouter } from 'next/router'
import type { UrlObject } from 'url'

import { AppRoutes } from '@/config/routes'

const TX_BUILDER_URL = 'https://tx-builder.safe.humanity.org'

export const useTxBuilderApp = (): { link: UrlObject } => {
  const router = useRouter()

  return {
    link: {
      pathname: AppRoutes.apps.open,
      query: { safe: router.query.safe, appUrl: TX_BUILDER_URL },
    },
  }
}
