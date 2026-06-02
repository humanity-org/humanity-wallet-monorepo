import ExternalLink from '@/components/common/ExternalLink'
import { Typography } from '@mui/material'
import { SAFE_UTILS_URL } from '@/config/constants.extra'

const TX_DECODER_URL = 'https://decoder.safe.humanity.org'

const DecoderLinks = () => {
  return (
    <Typography variant="body2" color="primary.light" mb={3}>
      Cross-verify your transaction data with external tools like{' '}
      {SAFE_UTILS_URL && (
        <>
          <ExternalLink href={SAFE_UTILS_URL}>Safe Utils</ExternalLink> and{' '}
        </>
      )}
      <ExternalLink href={TX_DECODER_URL}>Transaction Decoder</ExternalLink>.
    </Typography>
  )
}

export default DecoderLinks
