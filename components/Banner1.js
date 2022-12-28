import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './layout.module.css'

function Banner1({data}) {
  const [search,setSearch] = useState('');
  const [breeds,setBreeds] = useState(data.map(cat => cat.name));
  var patterns = []
  
  useEffect(() => {
    patterns.push(breeds.filter(breed => breed.includes(search)))
  },[search])

  const handleClick = () => {
    console.log(search);
  }

  return (
    <div className={styles.banner1}>
        <Image width={200} height={100} className={styles.logo} src='/CatwikiLogo.svg' alt=""/>
        <p>Get to know more about <br/>your cat breed</p>
        <div className={styles.search}>
            <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder='Enter your breed'/>
            <img onClick={handleClick} src="https://img.icons8.com/ios-glyphs/30/null/search--v1.png"/>
        </div>
        {
          search && <ul className={styles.lists}>
            {
             patterns && patterns.map((pattern, index) => <li>{pattern}</li>) 
            }
          </ul>
        }
    </div>
  )
}

export default Banner1

