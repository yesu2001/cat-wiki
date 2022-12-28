import React from 'react'
import Cats from '../../components/Cats';
import { getCats } from '../../lib/cats';

export default function CatsInfo({data}) {
    return (
        <>
            <Cats data={data}/>
        </>
    )
}

export async function getServerSideProps() {
    const data = await getCats();
    return {
        props: {data},
    }
}
