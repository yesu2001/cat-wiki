import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './layout.module.css';

function CatDescription({cat}) {
    return (
        <Link href={`cats/${cat.id}/`} className={styles.catDesc}>
            <Image className={styles.catImg} width={170} height={170} src={cat.image?.url} alt={cat.name}/>
            <p className={styles.catPara}>
                <p className={styles.paratitle}>{cat.name}</p>
                <p className={styles.paradesc}>{cat.description}</p>
            </p> 
        </Link>
    )
}

export default CatDescription