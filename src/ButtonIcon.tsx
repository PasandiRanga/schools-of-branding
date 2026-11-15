import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./ButtonIcon.module.css"

interface Props {
  variant?: "Desktop" | "Phone"
  buttonText?: string
  link?: string
  newTab?: boolean
}

export default function ButtonIcon({
  variant: variantProp,
  buttonText = "Meet the team",
  link = "/mentor",
  newTab = false,
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Desktop")

  return (
    <div className={styles["desktop"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["content"]}>
        <div className={styles["text"]}>
          <h6 className={cx(tokens["text-heading-6"], styles["buttontext"])}>{buttonText}</h6>
          <div className={styles["bottom-line"]} />
        </div>
        <div className={styles["right"]}>
          <div className={styles["icon"]} />
        </div>
      </div>
    </div>
  )
}
