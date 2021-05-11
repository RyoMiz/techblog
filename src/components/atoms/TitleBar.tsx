import styles from 'styles/components/atoms/TitleBar.module.scss'

export const TitleBar: React.VFC = () => {
  return (
    <div className={styles.container}>
      <p>Engineer Blog</p>
    </div>
  )
}
