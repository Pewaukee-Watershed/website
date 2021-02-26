/*
 *  This file is part of the Pewaukee Watershed Official Website.
 *  Copyright (C) 2020-2021  Pewaukee Watershed
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
import WithSidebar from '../components/WithSidebar'
import ContentGrid from '../components/ContentGrid'
import styles from './index.module.scss'
import LinkBlock from '../components/LinkBlock'

const App = (props): JSX.Element => (
  <>
    <Head>
      <title>Pewaukee Watershed</title>
    </Head>
    <WithSidebar>
      <ContentGrid>
        <LinkBlock link="/data" text="Data"/>
        <LinkBlock link="/articles" text="Articles"/>
        <LinkBlock link="/map" text="Map"/>
        <LinkBlock link="/about-us" text="About Us"/>
      </ContentGrid>
    </WithSidebar>
  </>
)

export const getStaticProps = async () => {
  return {
    props: {}
  }
}

export default App
