import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./TeachingCard.module.css"

interface Props {
  variant?: "Desktop" | "Phone"
  stepNumber?: string
  title?: string
  description?: string
  iconBgColor?: string
  iconBorderColor?: string
  iconShadow?: string
}

export default function TeachingCard({
  variant: variantProp,
  stepNumber = "01",
  title = "Diagnose, don't assume",
  description = "We never start from the textbook page a learner \"should\" be on. We find where understanding stops.",
  iconBgColor = "rgb(253, 240, 190)",
  iconBorderColor,
  iconShadow = "4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Desktop")

  return (
    <div className={styles["desktop"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["step"]}>
        <p className={cx(tokens["text-body"], styles["stepnumber"])}>{stepNumber}</p>
      </div>
      <div className={styles["content"]}>
        <h5 className={cx(tokens["text-heading-5"], styles["title"])}>{title}</h5>
        <div className={styles["info"]}>
          <p className={cx(tokens["text-body"], styles["description"])}>{description}</p>
        </div>
      </div>
    </div>
  )
}
