/* eslint-disable react/display-name */
import { memo, ReactNode } from 'react'

import styles from 'styles/components/organisms/AsideItem.module.scss'

type Props = {
  title: string
  children: ReactNode
}

export const AsideItem: React.VFC<Props> = memo((props) => {
  const { title, children } = props
  return (
    <div>
      <h4 className={styles.h4}>{title}</h4>
      <div className={styles.wrapper}>{children}</div>
    </div>
  )
})
