import { useState } from 'react';
import styles from './Loading.module.scss'

const LoadingDots = () => {
    const [loading, _] = useState(true);

    return (
        <div className={styles.dots}>
            {loading ?(
                <>
                    <div className={styles.spinner}>
                        <div className={styles.dot1}> </div>
                        <div className={styles.dot2}> </div>
                        <div className={styles.dot3}> </div>
                    </div>
                    <p>LOADING</p>
                </>
            ) : null}
        </div>
    );
}

export default LoadingDots;
