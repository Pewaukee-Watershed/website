import styles from './map.module.scss'
import Head from 'next/head'
import WithSidebar from '../../components/WithSidebar'

const App = (): JSX.Element => (
  <div>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <div className={styles.content}>
        <iframe className={styles.map} src='https://www.google.com/maps/d/u/1/embed?mid=1Mgz2wvNknLv4RDp0RdcBx1qK2ymZ4Nm5' />
      </div>
    </WithSidebar>
  </div>
)

export default App
