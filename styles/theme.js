import React from 'react';
import { theme as chakraTheme } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 800,
  },
})
// const theme = {
//   ...chakraTheme,
//   fonts: {
//     ...chakraTheme.fonts,
//     body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
//   },
//   fontWeights: {
//     normal: 400,
//     medium: 600,
//     bold: 800,
//   },
// }

export default theme
