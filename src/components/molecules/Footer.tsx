import { FooterCopyright } from 'components/atoms/FooterCopyright'
import { FooterIcons } from 'components/atoms/FooterIcons'

import styles from 'styles/components/molecules/Footer.module.scss'

export const Footer: React.VFC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.upper}>
        <FooterIcons />
      </div>
      <FooterCopyright />
    </footer>
  )
}
