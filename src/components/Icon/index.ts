import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import Icons from '../../../assets/icons/selection.json'
import expoAssetId from '../../../assets/fonts/icomoon.ttf'

export const Icon = createIconSetFromIcoMoon(
  Icons,
  'icomoon',
  expoAssetId
)
