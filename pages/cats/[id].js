import Image from "next/image";
import Header from "../../components/Header";
import { apiKey,getCats,url } from "../../lib/cats";
import { getCatsInfo} from "../../lib/cats";
import styles from '../../styles/Home.module.css';

export default function CatInfo({result}) {
    return (
        <div className={styles.catInfo}>
            <Header/>
            <div className={styles.catData}>
                <Image width={300} height={300} src={result.data[0].image?.url} alt='' style={{borderRadius:"24px"}}/>
                <div className={styles.catDesc}>
                    <h2 style={{fontSize:'36px',fontWeight:'600',marginBottom:'10px'}}>{result.data[0].name}</h2>
                    <p style={{fontSize:'18px',lineHeight:'22px',margin:'20px 0'}}>{result.data[0].description}</p>
                    <p className={styles.features}><b>Temperament: </b>{result.data[0].temperament}</p>
                    <p className={styles.features}><b>Origin: </b>{result.data[0].origin}</p>
                    <p className={styles.features}><b>Life Span: </b>{result.data[0].life_span}</p>
                    <p className={styles.features}><b>Adaptability: </b>{result.data[0].adaptability}</p>
                    <p className={styles.features}><b>Affection Level: </b>{result.data[0].affection_level}</p>
                    <p className={styles.features}><b>Child Friendly: </b>{result.data[0].child_friendly}</p>
                    <p className={styles.features}><b>Grooming: </b>{result.data[0].grooming}</p>
                    <p className={styles.features}><b>Intelligence: </b>{result.data[0].intelligence}</p>
                    <p className={styles.features}><b>Health Issues: </b>{result.data[0].health_issues}</p>
                    <p className={styles.features}><b>Social Needs: </b>{result.data[0].social_needs}</p>
                    <p className={styles.features}><b>Stranger friendly: </b>{result.data[0].stranger_friendly}</p>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const data = await getCats();
    const allPaths = data.map(item => {
        return {
            params: {
                id: item.id,
            },
        };
    });

    return {
        paths : allPaths,
        fallback:false,
    }
}

export async function getStaticProps({params}) {
    const id = params.id;
    const result = await getCatsInfo(id);
    return {
        props: {result},
    }
}