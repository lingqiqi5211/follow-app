import { memo } from 'react'
import type { SvgProps } from 'react-native-svg'
import Svg, { Path } from 'react-native-svg'

function SvgGridCuteRe(props: SvgProps) {
  return <Svg width={24} height={24} fill="none" {...props}><Path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M20.5 6.75c0-.697 0-1.046-.07-1.334a2.5 2.5 0 0 0-1.846-1.847c-.288-.069-.637-.069-1.334-.069-.697 0-1.046 0-1.334.07a2.5 2.5 0 0 0-1.847 1.846C14 5.704 14 6.053 14 6.75c0 .697 0 1.046.07 1.334a2.5 2.5 0 0 0 1.846 1.847c.288.069.637.069 1.334.069.697 0 1.046 0 1.334-.07a2.5 2.5 0 0 0 1.847-1.846c.069-.288.069-.637.069-1.334zM10 6.75c0-.697 0-1.046-.07-1.334A2.5 2.5 0 0 0 8.085 3.57C7.796 3.5 7.447 3.5 6.75 3.5c-.697 0-1.046 0-1.334.07A2.5 2.5 0 0 0 3.57 5.415C3.5 5.704 3.5 6.053 3.5 6.75c0 .697 0 1.046.07 1.334A2.5 2.5 0 0 0 5.415 9.93C5.704 10 6.053 10 6.75 10c.697 0 1.046 0 1.334-.07A2.5 2.5 0 0 0 9.93 8.085C10 7.796 10 7.447 10 6.75zM20.5 17.25c0-.697 0-1.046-.07-1.334a2.5 2.5 0 0 0-1.846-1.847C18.296 14 17.947 14 17.25 14c-.697 0-1.046 0-1.334.07a2.5 2.5 0 0 0-1.847 1.846C14 16.204 14 16.553 14 17.25c0 .697 0 1.046.07 1.334a2.5 2.5 0 0 0 1.846 1.847c.288.069.637.069 1.334.069.697 0 1.046 0 1.334-.07a2.5 2.5 0 0 0 1.847-1.846c.069-.288.069-.637.069-1.334zM10 17.25c0-.697 0-1.046-.07-1.334a2.5 2.5 0 0 0-1.846-1.847C7.796 14 7.447 14 6.75 14c-.697 0-1.046 0-1.334.07a2.5 2.5 0 0 0-1.847 1.846c-.069.288-.069.637-.069 1.334 0 .697 0 1.046.07 1.334a2.5 2.5 0 0 0 1.846 1.847c.288.069.637.069 1.334.069.697 0 1.046 0 1.334-.07a2.5 2.5 0 0 0 1.847-1.846c.069-.288.069-.637.069-1.334z" /></Svg>
}
const Memo = memo(SvgGridCuteRe)
export default Memo
