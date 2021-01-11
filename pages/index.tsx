import Head from 'next/head'
import styles from './index.module.scss'

const App = (): JSX.Element => (
  <>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <h1 className={styles.myClass}>Pewaukee Watershed</h1>
  </>
)

export default App
