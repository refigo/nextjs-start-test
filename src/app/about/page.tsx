import styles from './page.module.css';
import Link from 'next/link';

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About NYT Bestseller Explorer</h1>
      
      <div className={styles.content}>
        <p>
          This application allows you to explore the New York Times Bestseller lists, 
          providing you with information about the most popular books across different categories.
        </p>
        
        <p>
          The New York Times Bestseller list has been published since 1931 and is one of the most 
          influential and widely recognized lists of its kind. The list is updated weekly and 
          reflects sales from the United States.
        </p>
      </div>
      
      <Link href="/" className={styles.backLink}>
        &larr; Back to Home
      </Link>
    </div>
  );
}
