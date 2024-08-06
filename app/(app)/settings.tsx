import { Image } from 'expo-image'
import { Redirect } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Platform } from 'react-native'
import { UnistylesRuntime, useStyles } from 'react-native-unistyles'

import { Button, Column, Container, Row, Text } from '~/components'
import { useCurrentUser } from '~/hooks/use-current-user'
import { useLogOut } from '~/hooks/use-log-out'
import { accentColors, getAccentColor } from '~/theme'

const accentColorGroups = Array.from(
  { length: accentColors.length / 4 },
  (_, i) => {
    const start = i * 4
    return accentColors.slice(start, start + 4)
  },
)

function ThemeSwitcher() {
  const { theme } = useStyles()
  return accentColorGroups.map((accentColors, i) => (
    <Row key={i} gap={10} bg={theme.colors.accent5} style={{ display: 'none' }}>
      {accentColors.map(accentColor => (
        <Button
          key={accentColor}
          color={accentColor}
          onPress={() => {
            const { accent, accentA, accentDark, accentDarkA }
              = getAccentColor(accentColor)
            UnistylesRuntime.updateTheme(
              UnistylesRuntime.themeName,
              oldTheme => ({
                ...oldTheme,
                colors: {
                  ...oldTheme.colors,
                  ...accent,
                  ...accentA,
                  ...accentDark,
                  ...accentDarkA,
                },
              }),
            )
          }}
        >
          <Text color={accentColor}>{accentColor}</Text>
        </Button>
      ))}
    </Row>
  ))
}

export default function UserInfo() {
  const logout = useLogOut()
  const { user } = useCurrentUser()

  if (!user)
    return <Redirect href="/sign-in" />

  return (
    <>
      <Container>
        <Column flex={1} p={20}>
          <Column flex={1} gap={20} align="stretch" w="100%">
            <Row
              gap={24}
              align="center"
            >
              <Image
                style={{
                  width: 96,
                  height: 96,
                  borderRadius: 48,
                }}
                source={user.image}
              />
              <Column gap={8}>
                <Text weight="700">
                  {user.name}
                </Text>
                <Text>
                  {user.email}
                </Text>
              </Column>
            </Row>
            <Button
              fullWidth
              color="red"
              onPress={logout}
            >
              <Text color="red">Logout</Text>
            </Button>
          </Column>

          <ThemeSwitcher />
        </Column>
      </Container>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  )
}
