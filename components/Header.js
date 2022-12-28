import Image from 'next/image';
import React from 'react';
import styles from './layout.module.css'


function Header() {
  return (
    <header>
        <Image width={150} height={70} src='/CatwikiLogo.svg' alt=""/>
    </header>
  )
}

export default Header