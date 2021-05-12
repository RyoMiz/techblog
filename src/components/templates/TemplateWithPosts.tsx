/* eslint-disable react/display-name */
import { memo, ReactNode } from 'react'
import { HeaderWithPosts } from 'components/organisms/HeaderWithPosts'
import { Footer } from 'components/molecules/Footer'
import { HamburgerMenu } from 'components/organisms/HamburgerMenu'
import { useRecoilValue } from 'recoil'
import { winWidth } from 'store/winWidth'

type Props = {
  children: ReactNode
}

export const TemplateWithPosts: React.VFC<Props> = memo((props) => {
  const { children } = props

  const windowWidth = useRecoilValue(winWidth)
  return (
    <>
      {/* 初回レンダリング時にwinWidthが取得されるため、nullの可能性はないと判断 */}
      {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
      {windowWidth! <= 1200 && <HamburgerMenu width={240} />}
      <HeaderWithPosts />
      {children}
      <Footer />
    </>
  )
})
