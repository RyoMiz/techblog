import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

type Props = {
  width: number
}

export const HamburgerMenu: React.VFC<Props> = (props) => {
  return (
    <Menu
      right
      {...props}
      customBurgerIcon={<img src="/image/hamburger.svg" />}
      itemListElement="div"
    >
      <Link href="/">
        <a>Lorem</a>
      </Link>
      <Link href="/">
        <a>Lipsum</a>
      </Link>
    </Menu>
  )
}
