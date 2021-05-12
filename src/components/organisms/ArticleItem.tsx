/* eslint-disable react/display-name */
import { memo } from 'react'
import Image from 'next/image'

import { PrimaryButton } from 'components/atoms/button/PrimaryButton'

import styles from 'styles/components/organisms/ArticleItem.module.scss'

export const ArticleItem: React.VFC = memo(() => {
  return (
    <div className={styles.container}>
      <h3 className={styles.h3}>useState, useEffectの正しい使い方</h3>
      <div className={styles.image}>
        <Image src="/image/pc.jpg" width={400} height={225} />
      </div>
      <div className={styles.category}>
        <p>JavaScript</p>
        <p>TypeScript</p>
      </div>
      <p>
        吾輩は猫である。名前はまだ無い。
        <br />
        どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
        <br />
        吾輩はここで始めて人間というものを見た。しかもあとで聞くとそれは書生という人間中で一番獰悪どうあくな種族であったそうだ。
      </p>
      <div className={styles.button}>
        <PrimaryButton>続きを読む</PrimaryButton>
      </div>
      <time className={styles.time}>2021-06-15</time>
    </div>
  )
})
