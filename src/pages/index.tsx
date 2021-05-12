/* eslint-disable react/display-name */
import React, { memo, useEffect } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { TemplateWithPosts } from 'components/templates/TemplateWithPosts'
import { ArticleItem } from 'components/organisms/ArticleItem'

import styles from 'styles/pages/index.module.scss'
import { useRecoilState } from 'recoil'
import { winWidth } from 'store/winWidth'
import { AsideItem } from 'components/organisms/AsideItem'
import { AsideList } from 'components/molecules/AsideList'

const arr = ['Profile', 'Category', 'Archives']

const Home: NextPage = memo(() => {
  const [windowWidth, setWindowWidth] = useRecoilState(winWidth)

  useEffect(() => {
    // レンダリング後の画面幅を取得し、stateに保存するHook
    const currentWindowWidth = window.innerWidth
    setWindowWidth(currentWindowWidth)
  }, [setWindowWidth, windowWidth])
  return (
    <>
      <Head>
        <title>Engineer Blog</title>
      </Head>
      <TemplateWithPosts>
        <main className={styles.main}>
          <article className={styles.article}>
            <h2 className={styles.h2}>Articles</h2>
            {/* 実際の記事が入るスペース */}
            <div className={styles.container}>
              {arr.map((article) => (
                <ArticleItem key={article} />
              ))}
            </div>
            {/* 後々コンポーネント化 */}
            <div className={styles.pagination}></div>
          </article>
          {/* 初回レンダリング時にwindowWidthが取得されるため、nullの可能性はないと判断 */}
          {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
          {windowWidth! > 1200 && (
            <aside className={styles.aside}>
              {arr.map((item) => (
                <AsideItem key={item} title={item}>
                  <AsideList />
                </AsideItem>
              ))}
            </aside>
          )}
        </main>
      </TemplateWithPosts>
    </>
  )
})

export default Home
