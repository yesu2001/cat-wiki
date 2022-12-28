import Image from 'next/image';
import React from 'react'
import styles from './layout.module.css'
import Cat from './Cat';
import Link from 'next/link';

function Banner2({data}) {
  return (
    <div className={styles.banner2}>
        <p className={styles.head}>Most Searched Breeds</p>
        <div className={styles.underline}></div>
        <p className={styles.title}>66+ Breeds For you<br/>to discover</p>
        <Link href='cats/' className={styles.seemore}>
          <p className={styles.arrow}>See more <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-right.png" alt='arrow icon'/></p>
        </Link>
        <div style={{display:"flex", justifyContent:'space-around'}}>
        {
            data.slice(0,4).map((cat,index) => <Cat key={index} cat={cat}/>)
        }
        </div>
    </div>
  )
}

export default Banner2;
