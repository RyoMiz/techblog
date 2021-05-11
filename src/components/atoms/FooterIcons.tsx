import { faGithub, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from 'styles/components/atoms/FooterIcons.module.scss'

export const FooterIcons: React.VFC = () => {
  return (
    <div className={styles.container}>
      <span className={styles.firstIcon}>
        <FontAwesomeIcon icon={faTwitterSquare} color="#fff" size="2x" />
      </span>
      <FontAwesomeIcon icon={faGithub} color="#fff" size="2x" />
    </div>
  )
}
