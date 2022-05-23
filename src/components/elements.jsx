import React from 'react';
import styles from './index.module.scss';

const Elements = ({data}) => {
    return (  
        <>
            <div>
            Count: {data.count}
            </div>
            <div className={styles.container}>
            {
                data.count > 0 ? (
                    <ol className={styles.container__list}>
                    {
                        data.results.map( item => (
                        <li> {item.name}</li>
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