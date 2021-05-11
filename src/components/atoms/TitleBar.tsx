import styles from 'styles/components/atoms/TitleBar.module.scss'

type Props = {
  isTopPage?: boolean
}

export const TitleBar: React.VFC<Props> = (props) => {
  const { isTopPage = false } = props
  return (
    <div className={styles.container}>
      {/* トップページのみタイトルをh1タグで出力する */}
      {isTopPage ? <h1>Engineer Blog</h1> : <p>Engineer Blog</p>}
    </div>
  )
}
