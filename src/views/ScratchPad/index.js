import { withComponentStore } from 'ComponentStore'

import { ScratchPadStore } from './components/ScratchPadStore'
import { ScratchPadMessenger } from './components/ScratchPadMessenger'

export const ScratchPadView = withComponentStore(ScratchPadStore)(
  ScratchPadMessenger
)
