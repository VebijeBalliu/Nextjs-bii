
import Link from 'next/link';



import styles from './home.module.css';


export default function home(){
    return (
        <div className={styles.home}>
            <header className={styles.hero}>
                <h1>Welcome to the Dog Page!</h1>
                <p>Find the perfect breed for you!</p>
            </header>


        </div>
    );   
}


