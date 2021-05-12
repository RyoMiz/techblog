import { ReactNode } from 'react'
import styles from 'styles/components/atoms/button/PrimaryButton.module.scss'

type Props = {
  children: ReactNode
}

export const PrimaryButton: React.VFC<Props> = (props) => {
  const { children } = props
  return <button className={styles.button}>{children}</button>
}
