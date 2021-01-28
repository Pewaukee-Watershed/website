/*
 *  This file is part of the Pewaukee Watershed official website.
 *  Copyright (C) 2021  Pewaukee Watershed
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 * 
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import Head from 'next/head'
import WithSidebar from '../lib/with-sidebar'
import ContentGrid from '../lib/content-grid'
import Footer from '../lib/footer'
import Block from '../lib/block'
import styles from './index.module.scss'

const App = (): JSX.Element => (
  <>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <ContentGrid>
        <Block side='Left'>
          <a href='/' className={ styles.link }>Test</a>
        </Block>
        <Block side='Left'>
          <a href='/' className={ styles.link }>Test</a>
        </Block>
        <Block side='Left'>
          <a href='/' className={ styles.link }>Test</a>
        </Block>
      </ContentGrid>
    </WithSidebar>
  </>
)

export default App
