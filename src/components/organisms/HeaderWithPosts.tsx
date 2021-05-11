/* eslint-disable react/display-name */
import { memo } from 'react'
import { TitleBar } from 'components/atoms/TitleBar'

import styles from 'styles/components/organisms/HeaderWithPosts.module.scss'
import { NewPosts } from 'components/molecules/NewPosts'

export const HeaderWithPosts: React.VFC = memo(() => {
  return (
    <header>
      <div className={styles.title}>
        <TitleBar />
      </div>
      <p className={styles.new_posts}>New Posts</p>
      <div className={styles.slider}>
        <NewPosts />
      </div>
    </header>
  )
})
