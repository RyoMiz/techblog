import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'

import { TemplateWithPosts } from 'components/templates/TemplateWithPosts'
import { ArticleItem } from 'components/organisms/ArticleItem'

import styles from 'styles/pages/index.module.scss'

const arr = [...Array(3)]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <TemplateWithPosts>
        <main>
          <article>
            <h2 className={styles.articles}>Articles</h2>
            {/* 実際の記事が入るスペース */}
            <div className={styles.container}>
              {arr.map((article) => (
                <ArticleItem key={article} />
              ))}
            </div>
            {/* 後々コンポーネント化 */}
            <div className={styles.pagination}></div>
          </article>
        </main>
      </TemplateWithPosts>
    </>
  )
}

export default Home
