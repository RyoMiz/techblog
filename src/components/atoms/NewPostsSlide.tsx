/* eslint-disable react/display-name */
import { memo, ReactNode } from 'react'
import styles from 'styles/components/atoms/NewPostsSlide.module.scss'

type Props = {
  children: ReactNode
}
export const NewPostsSlide: React.VFC<Props> = memo((props) => {
  const { children } = props
  return <div className={styles.container}>{children}</div>
})
