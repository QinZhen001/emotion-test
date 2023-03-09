import { useTheme } from '@emotion/react'

const ThemeChild = (props) => {
  const theme = useTheme()
  console.log('ThemeChild theme', theme)

  return <div css={{ color: theme.colors.primary }}>
    ThemeChild
  </div>
}



export default ThemeChild
