import { getAllLists } from '@/services/api';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  const lists = await getAllLists();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New York Times Bestseller Lists</h1>
      <p className={styles.description}>
        Explore the current New York Times bestseller lists
      </p>
      
      <div className={styles.grid}>
        {lists.map((list) => (
          <Link 
            href={`/list/${list.list_name_encoded}`} 
            key={list.list_name_encoded}
            className={styles.card}
          >
            <h2>{list.display_name}</h2>
            <p>Updated: {new Date(list.updated).toLocaleDateString()}</p>
            <span className={styles.viewMore}>View books &rarr;</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
