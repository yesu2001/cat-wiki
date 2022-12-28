import Header from '../components/Header'
import Banner1 from '../components/Banner1'
import styles from '../styles/Home.module.css'
import Banner2 from '../components/Banner2'
import Footer from '../components/Footer'
import ReadMore from '../components/ReadMore'
import {getCats} from '../lib/cats'
import { useEffect, useState } from 'react'


export const fetchData = async() => {
  const res = await fetch('/api/hello');
  const result = await res.json();
  return result.data
}

export default function Home({data}) {

  return (
    <div className={styles.Home}>
      <Header/>
      <Banner1 data={data}/>
      <Banner2 data={data}/>
      <ReadMore/>
      <Footer/>
    </div>
  )
}


export async function getStaticProps() {
  const data = await getCats();
  return {
      props: {data},
  }
}




