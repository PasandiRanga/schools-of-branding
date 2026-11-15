import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Badge.module.css"

interface Props {
  variant?: "Default" | "Orange" | "Gray" | "White"
  title?: string
  textColor?: string
}

export default function Badge({
  variant = "Default",
  title = "After-school slots",
  textColor = "rgb(16, 26, 38)",
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <p className={cx(tokens["text-body"], styles["title"])}>{title}</p>
    </div>
  )
}
