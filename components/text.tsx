import type { TextProps as NativeTextProps, TextStyle } from 'react-native'
import { Text as NativeText } from 'react-native'
import { useStyles } from 'react-native-unistyles'

import type { Size } from '~/theme'

export type TextProps = NativeTextProps & {
  size?: Size
  contrast?: 'high' | 'low'
  weight?: TextStyle['fontWeight']
}

export function Text({
  size = 4,
  contrast = 'high',
  weight = 'regular',
  style,
  ...rest
}: TextProps) {
  const { theme } = useStyles()
  return (
    <NativeText
      style={{
        fontFamily: 'SN Pro',
        color: theme.colors[contrast === 'high' ? 'gray12' : 'gray11'],
        fontSize: theme.size[size],
        fontWeight: weight,
        ...(typeof style === 'object' ? style : {}),
      }}
      {...rest}
    />
  )
}
