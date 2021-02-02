/*
 *  This file is part of the Pewaukee Watershed official website.
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

import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './WithSidebar.module.scss'

interface Props {
  children: JSX.Element | JSX.Element[]
} 
const WithSidebar = (props: Props): JSX.Element => {
  const { children } = props
  return (
    <div className={styles.everything}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={ styles.maincontent }>
          { children }
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default WithSidebar
