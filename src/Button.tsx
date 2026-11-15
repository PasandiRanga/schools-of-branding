import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Button.module.css"

interface Props {
  variant?: "Default" | "Primary" | "White" | "Nav" | "Nav - Phone" | "Primary - Phone" | "White - Phone" | "Phone"
  buttonText?: string
  link?: string
  newTab?: boolean
}

export default function Button({
  variant = "Default",
  buttonText = "Try a free session",
  link = "/contact",
  newTab = false,
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <div className={styles["content"]}>
        <p className={cx(tokens["text-text-md"], styles["buttontext"])}>{buttonText}</p>
      </div>
    </div>
  )
}
