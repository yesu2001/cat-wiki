import Image from 'next/image'
import React from 'react'
import styles from './layout.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
        <Image  className={styles.logo} width={100} height={100} src='/CatwikiLogo.svg' alt=""/>
        <p>created by <b>Yesu Padam</b> - devChallenges.io 2022</p>
    </div>
  )
}

export default Footer