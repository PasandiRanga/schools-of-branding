import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./PreTitle.module.css"

interface Props {
  title?: string
  textColor?: string
  bgColor?: string
  dotColor?: string
}

export default function PreTitle({
  title = "All ages & levels - In-center & online",
  textColor = "rgb(16, 26, 38)",
  bgColor = "rgb(224, 239, 250)",
  dotColor = "rgb(251, 200, 11)",
}: Props) {
  return (
    <div className={styles["default"]}>
      <div className={styles["dot"]}>
        <div className={styles["done"]} />
      </div>
      <p className={cx(tokens["text-body"], styles["title"])}>{title}</p>
    </div>
  )
}
