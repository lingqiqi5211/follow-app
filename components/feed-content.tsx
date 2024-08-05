import * as WebBrowser from 'expo-web-browser'
import { useState } from 'react'
import type { DimensionValue } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { useStyles } from 'react-native-unistyles'
import WebView from 'react-native-webview'

import { simpleCSS } from '~/consts/css'

export function FeedContent({ html }: { html: string }) {
  const [height, setHeight] = useState<DimensionValue>('auto')
  const { theme } = useStyles()

  if (!html) {
    return <ActivityIndicator />
  }

  return (
    <>
      {!height && <ActivityIndicator />}
      <WebView
        scrollEnabled={false}
        style={{
          height,
          display: height ? 'flex' : 'none',
        }}
        originWhitelist={['*']}
        injectedJavaScript={`
            // prevent links from opening in the webview
            document.addEventListener('click', function(e) {
              if (e.target.tagName === 'A') {
                e.preventDefault()
                window.ReactNativeWebView.postMessage(JSON.stringify({ external_url_open: e.target.href }))
              }
            })
  
            const postHeight = () => {
              window.ReactNativeWebView.postMessage(JSON.stringify({ height: document.body.scrollHeight + 10 }))
            }
            const interval = setInterval(() => {
              postHeight()
              if (document.readyState === 'complete') {
                clearInterval(interval)
              }
            }, 1000)
          `}
        onMessage={(e) => {
          let message: any = e.nativeEvent.data
          try {
            message = JSON.parse(message)
          }
          catch {
            return
          }
          if ('object' == typeof message && message.external_url_open) {
            WebBrowser.openBrowserAsync(message.external_url_open)
              .catch(console.error)
          }
          else if ('object' == typeof message && message.height) {
            setHeight(message.height)
          }
        }}
        source={{
          baseUrl: '',
          html: `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        ${simpleCSS({
          accent: theme.colors.accent9,
          accentHover: theme.colors.accent10,
        })}
      </style>
  </head>
  <body>
    <div>${html}</div>
  </body>
  </html>
          `,
        }}
      />
    </>
  )
}
