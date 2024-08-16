import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgStarCuteFi(props: SvgProps) {
  return <Svg width={24} height={24} fill="none" {...props}><Path fill="currentColor" fillRule="evenodd" d="M9.941 3.128c.564-.525 1.217-.938 2.059-.938.841 0 1.494.413 2.058.938.532.496 1.109 1.212 1.788 2.055.248.308.476.7.795.931.32.232.763.328 1.132.468 1.012.386 1.871.713 2.507 1.066.673.374 1.267.868 1.527 1.668.26.8.07 1.549-.255 2.247-.307.66-.81 1.43-1.402 2.336-.216.331-.518.669-.64 1.044-.122.376-.076.826-.096 1.22-.054 1.082-.1 2-.239 2.715-.147.756-.433 1.473-1.114 1.968-.68.494-1.451.544-2.216.451-.722-.088-1.61-.328-2.655-.611-.381-.103-.795-.286-1.19-.286-.395 0-.81.183-1.19.286-1.046.283-1.934.523-2.656.611-.765.093-1.535.043-2.216-.451-.68-.495-.966-1.212-1.114-1.968-.14-.714-.185-1.633-.239-2.714-.02-.395.026-.845-.096-1.22-.122-.376-.424-.714-.64-1.045-.592-.906-1.095-1.676-1.401-2.336-.326-.698-.516-1.447-.256-2.247.26-.8.854-1.294 1.528-1.668.635-.353 1.495-.68 2.507-1.066.369-.14.811-.236 1.131-.468.32-.232.547-.623.795-.931.68-.843 1.256-1.56 1.788-2.055" clipRule="evenodd" /></Svg>
}
const Memo = memo(SvgStarCuteFi)
export default Memo
