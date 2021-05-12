import Link from 'next/link'
import { slide as Menu } from 'react-burger-menu'

import styles from 'styles/components/organisms/HamburgerMenu.module.scss'

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
      <ul className={styles.container}>
        <li>
          <Link href="/">
            <a>Lorem</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Lipsum</a>
          </Link>
        </li>
      </ul>
    </Menu>
  )
}
