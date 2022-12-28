import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './layout.module.css'

function Banner1({data}) {
  const [search,setSearch] = useState('');

  return (
    <div className={styles.banner1}>
        <Image width={200} height={100} className={styles.logo} src='/CatwikiLogo.svg' alt=""/>
        <p>Get to know more about <br/>your cat breed</p>
        <div className={styles.search}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Enter your breed'/>
            <img src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png" alt="search icon"/>
        </div>
        {
          search && <ul className={styles.lists}>
            {
             patterns && patterns.map((pattern, index) => <li key={index}>{pattern}</li>) 
            }
          </ul>
        }
    </div>
  )
}

export default Banner1

