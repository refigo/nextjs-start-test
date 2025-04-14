import { getListByName } from '@/services/api';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default async function ListDetail({ params }: { params: { id: string } }) {
  const listName = params.id;
  const listDetail = await getListByName(listName);
  
  if (!listDetail) {
    return <div>List not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{listDetail.display_name}</h1>
        <Link href="/" className={styles.backLink}>
          &larr; Back to all lists
        </Link>
      </div>
      <p className={styles.updated}>
        Updated: {new Date(listDetail.updated).toLocaleDateString()}
      </p>

      <div className={styles.booksGrid}>
        {listDetail.books.map((book) => (
          <div key={book.primary_isbn13} className={styles.bookCard}>
            <div className={styles.bookImageContainer}>
              {book.book_image && (
                <Image
                  src={book.book_image}
                  alt={book.title}
                  width={book.book_image_width || 200}
                  height={book.book_image_height || 300}
                  className={styles.bookImage}
                />
              )}
              <div className={styles.rank}>#{book.rank}</div>
            </div>
            <div className={styles.bookInfo}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.bookAuthor}>by {book.author}</p>
              <p className={styles.bookDescription}>{book.description}</p>
              <div className={styles.bookMeta}>
                <span>Weeks on list: {book.weeks_on_list}</span>
                {book.rank_last_week > 0 && (
                  <span>Last week: #{book.rank_last_week}</span>
                )}
              </div>
              <a 
                href={book.amazon_product_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.buyButton}
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
