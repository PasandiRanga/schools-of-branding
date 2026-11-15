import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./SessionTypeCard.module.css"

interface Props {
  title?: string
  description?: string
  icon?: string
  iconBgColor?: string
  iconBorder?: string
  iconShadow?: string
}

export default function SessionTypeCard({
  title,
  description,
  icon,
  iconBgColor,
  iconBorder,
  iconShadow,
}: Props) {
  return (
    <div className={styles["default"]}>
      <div className={styles["icon-bg"]}>
        <div className={styles["icon"]} />
      </div>
      <div className={styles["content"]}>
        <h5 className={cx(tokens["text-heading-5"], styles["private"])}>{"Private"}</h5>
        <p className={cx(tokens["text-body"], styles["text"])}>{"A dedicated mentor, fully personal pace. Best for catching up fast or pushing well ahead."}</p>
      </div>
    </div>
  )
}
