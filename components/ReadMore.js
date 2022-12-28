import Image from 'next/image';
import React from 'react'
import styles from './layout.module.css';

function ReadMore() {
  return (
    <div className={styles.readmore}>
        <div className={styles.desc}>
            <div className={styles.underline}></div>
            <p className={styles.title}>Why Should you <br/>have a cat?</p>
            <p className={styles.para}>
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
            </p>
            <p className={styles.arrow}>READ MORE <img src="https://img.icons8.com/ios-glyphs/30/null/long-arrow-right.png"/></p>
        </div>
        <div className={styles.images}>
            <Image width={100} alt="" className={styles.image2} height={100} src='/image 2.png'/>
            <Image width={100} alt="" className={styles.image1} height={100} src='/image 1.png'/>
            <Image width={100} alt="" className={styles.image3} height={100} src='/image 3.png'/>
        </div>
    </div>
  )
}

export default ReadMore