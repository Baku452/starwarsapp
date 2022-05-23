import React, { useState } from 'react';
import styles from './index.module.scss';

const Elements = ({data}) => {
    const [moreData, setMoreData] = useState(false)
    return (  
        <>
            <div className={styles.count}>
                Count: {data.count}
            </div>
            <button onClick={()=> setMoreData(!moreData)}>More Data</button>
            <div className={styles.container}>
            {
                data.count > 0 ? (
                    <ol className={styles.container__list}>
                    {
                        data.results.map( item => (
                        <li key={item.name}> 
                        {item.name}
                            {
                                moreData ? (
                            Object.entries(item).map(([key, val]) => (
                                key !== 'name'? (

                                    <p key={key}>{key}: {val}</p>
                                ) : null
                            )
                            ) ) : null}
                        </li>
                        ))
                    }
                </ol>
            ) : <p>There is no results</p>
            }
            </div>
        </>
    );
}
 
export default Elements;