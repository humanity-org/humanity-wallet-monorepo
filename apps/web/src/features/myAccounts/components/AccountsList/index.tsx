import FilteredSafes from '../FilteredSafes'
import PinnedSafes from '../PinnedSafes'
import AllSafes from '../AllSafes'
import CurrentSafe from '../CurrentSafe'
import ConnectWalletPrompt from '../ConnectWalletPrompt'
import { type AllSafeItems, type AllSafeItemsGrouped, getComparator } from '@/hooks/safes'
import SafeSelectionModal from '../SafeSelectionModal'
import MigrationPrompt from '../MigrationPrompt'
import { useAppSelector } from '@/store'
import { selectOrderByPreference } from '@/store/orderByPreferenceSlice'
import useSafeSelectionModal from '../../hooks/useSafeSelectionModal'
import useMigrationPrompt from '../../hooks/useMigrationPrompt'
import useWallet from '@/hooks/wallets/useWallet'
import { useMemo, useCallback } from 'react'

const AccountsList = ({
  searchQuery,
  safes,
  onLinkClick,
  isSidebar = false,
}: {
  searchQuery: string
  safes: AllSafeItemsGrouped
  onLinkClick?: () => void
  isSidebar?: boolean
}) => {
  const wallet = useWallet()
  const isConnected = Boolean(wallet)

  const { orderBy } = useAppSelector(selectOrderByPreference)
  const sortComparator = getComparator(orderBy)

  // Safe selection modal hook
  const modal = useSafeSelectionModal()

  // Migration prompt hook
  const migration = useMigrationPrompt()

  const allSafes = useMemo<AllSafeItems>(
    () => [...(safes.allMultiChainSafes ?? []), ...(safes.allSingleSafes ?? [])].sort(sortComparator),
    [safes.allMultiChainSafes, safes.allSingleSafes, sortComparator],
  )

  // Handle migration flow - opens modal (user must explicitly select safes)
  const handleMigrationProceed = useCallback(() => {
    modal.open()
  }, [modal])

  if (searchQuery) {
    return <FilteredSafes searchQuery={searchQuery} allSafes={allSafes} onLinkClick={onLinkClick} />
  }

  // Show connect wallet prompt only when not connected AND no pinned safes
  // If user has pinned safes in local storage, show them regardless of wallet connection
  if (!isConnected && !migration.hasPinnedSafes) {
    return <ConnectWalletPrompt />
  }

  return (
    <>
      {/* Security check prompt for users with safes but none pinned */}
      {migration.shouldShowPrompt && <MigrationPrompt onProceed={handleMigrationProceed} />}

      <CurrentSafe allSafes={allSafes} onLinkClick={onLinkClick} />
      <PinnedSafes allSafes={allSafes} onLinkClick={onLinkClick} onOpenSelectionModal={modal.open} />

      {/* Owned Safes are listed here so a wallet's Safes are visible without
          first pinning them (the trusted-list-only view left owned Safes
          hidden, e.g. right after creation before the pin step). */}
      <AllSafes allSafes={allSafes} onLinkClick={onLinkClick} isSidebar={isSidebar} />

      {/* Safe selection modal - manage the pinned/trusted list */}
      <SafeSelectionModal modal={modal} />
    </>
  )
}

export default AccountsList
