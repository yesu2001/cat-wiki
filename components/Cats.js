import React, { useState } from 'react'
import styles from './layout.module.css';
import Header from './Header';
import CatDescription from './CatDescription';

export default function Cats({data}) {
    return (
        <div className={styles.allCats}>
            <Header/>
            <p className={styles.Cattitle}>Top 10 most Searched breeds</p>
            {
                data.map((cat,index) => <CatDescription key={index} cat={cat}/>)
            }

        </div>
    )
}

