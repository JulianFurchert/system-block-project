import { Layout } from '../composites';
import { darkTheme } from '../stitches.config';
import useDarkMode from 'use-dark-mode';
import '../styles/globals.css'

const darkModeConfig = {
  classNameDark: darkTheme.toString(),
  classNameLight: 'theme-default'
}

function MyApp({ Component, pageProps }) {
  // const darkMode = useDarkMode(false, darkModeConfig);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
