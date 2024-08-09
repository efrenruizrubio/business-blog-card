import styles from './card.module.css'

export default function Card() {
  return (
    <article className={styles.card}>
      <div className={styles.image_wrapper}>
        <img
          src='./assets/hero-image-business-card.png'
          alt='Two persons in a table making a toast with cups'
          width={416}
          className={styles.image}
        />
        <img
          src='./assets/white-overlay.svg'
          alt='Two persons in a table making a toast with cups'
          width={416}
          className={styles.overlay}
        />
      </div>
      <section className={styles.content}>
        <h1 className={styles.title}>Perfect solution for small business</h1>
        <p className={styles.info}>
          Small businesses need to generate leads to grow. You can use tools
          like Ringy.
        </p>
      </section>
      <div className={styles.separator} />
      <section className={styles.contact}>
        <div className={styles.avatar}>
          <img
            src='./assets/avatar-image-business-card.png'
            alt='Avatar of Amy Burgess'
            className={styles.avatar_image}
            width={40}
            height={40}
          />
        </div>
        <div className={styles.contact_info}>
          <strong>Amy Burgess</strong>
          <span>Customer Manger, Solution Oy</span>
        </div>
      </section>
    </article>
  )
}
