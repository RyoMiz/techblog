import styles from 'styles/components/atoms/FooterCopyright.module.scss'

export const FooterCopyright: React.VFC = () => {
  return (
    <div className={styles.container}>
      <small className={styles.copyright}>console.log(&copy;2021 Ryosuke Mizuno)</small>
    </div>
  )
}
