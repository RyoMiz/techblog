/* eslint-disable react/display-name */
import { faAngleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { memo } from 'react'

import styles from 'styles/components/molecules/AsideList.module.scss'

export const AsideList: React.VFC = memo(() => {
  return (
    <ul className={styles.ul}>
      <li>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faAngleRight} size="xs" />
        </span>
        2021年5月
      </li>
      <li>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faAngleRight} size="xs" />
        </span>
        2021年6月
      </li>
      <li>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faAngleRight} size="xs" />
        </span>
        2021年7月
      </li>
      <li>
        <span className={styles.icon}>
          <FontAwesomeIcon icon={faAngleRight} size="xs" />
        </span>
        2021年8月
      </li>
    </ul>
  )
})
