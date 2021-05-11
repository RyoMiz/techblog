/* eslint-disable react/display-name */
import { memo, ReactNode } from 'react'
import { HeaderWithPosts } from 'components/organisms/HeaderWithPosts'
import { Footer } from 'components/molecules/Footer'
import { HamburgerMenu } from 'components/organisms/HamburgerMenu'

type Props = {
  children: ReactNode
}

export const TemplateWithPosts: React.VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <>
      <HamburgerMenu width={240} />
      <HeaderWithPosts />
      {children}
      <Footer />
    </>
  )
})
