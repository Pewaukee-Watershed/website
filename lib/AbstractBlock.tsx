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

export default abstract class AbstractBlock {

  getColor: Function = (i): string => !(i % 8) ? 'yellow' : !(i % 8 - 1) ? 'green' : !(i % 8 - 2) ? 'red' : !(i % 8 - 3) ? 'blue' : !(i % 8 - 4) ? 'green' : !(i % 8 - 5) ? 'yellow' : !(i % 8 - 6) ? 'blue' : 'red'


  getSide: Function = (i): string => (i & 1) ? 'right' : 'left'

  element: Function

}