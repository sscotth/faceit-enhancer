import select from 'select-dom'
import { notifyIf } from '../libs/utils'

export default parent => {
  // Quickmatch
  let acceptButton = select(
    'button[ng-click="close()"][translate-once="ACCEPT"]:not([disabled]',
    parent
  )

  // Hubs
  if (!acceptButton) {
    acceptButton = select(
      'button[ng-click="vm.checkInMatch.checkingIn()"]',
      parent
    )
  }

  if (acceptButton) {
    acceptButton.click()

    notifyIf('notifyPartyAutoAcceptInvite', {
      title: 'Match Readied Up',
      message: 'A match has been readied up.'
    })
  }
}
