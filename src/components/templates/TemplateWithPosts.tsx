/* eslint-disable react/display-name */
import { memo, ReactNode } from 'react'
import { HeaderWithPosts } from 'components/organisms/HeaderWithPosts'
import { Footer } from 'components/molecules/Footer'

type Props = {
  children: ReactNode
}

export const TemplateWithPosts: React.VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <HeaderWithPosts />
      {children}
      <Footer />
    </>
  )
})
