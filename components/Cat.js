import React from 'react'
import Image from 'next/image'
import styles from './layout.module.css'
import Link from 'next/link'

function Cat({cat}) {
  return (
    <Link href={`cats/${cat.id}`} className={styles.cat}>
        <Image className={styles.catImg} width={200} height={200} src={cat.image.url} alt={cat.name}/>
        <span className={styles.catName}>{cat.name}</span>
    </Link>
  )
}

export default Cat