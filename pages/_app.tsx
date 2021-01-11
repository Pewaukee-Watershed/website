import './global.scss'
import { AppProps } from 'next'

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <Component {...pageProps} />
)

export default App
