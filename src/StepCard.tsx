import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./StepCard.module.css"

interface Props {
  variant?: "Default" | "Phone"
  stepNumber?: string
  title?: string
  sessionLabel?: string
  description?: string
  iconBgColor?: string
  iconBorderColor?: string
  iconShadow?: string
}

export default function StepCard({
  variant: variantProp,
  stepNumber = "01",
  title = "Meet & assess",
  sessionLabel = "— session one",
  description = "A free first session to get to know the learner and find exactly where the gaps are.",
  iconBgColor = "rgb(201, 224, 242)",
  iconBorderColor,
  iconShadow = "4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["step"]}>
        <p className={cx(tokens["text-body"], styles["stepnumber"])}>{stepNumber}</p>
      </div>
      <div className={styles["content"]}>
        <div className={styles["top"]}>
          <h4 className={cx(tokens["text-heading-4"], styles["title"])}>{title}</h4>
          <p className={cx(tokens["text-text-italic"], styles["sessionlabel"])}>{sessionLabel}</p>
        </div>
        <p className={cx(tokens["text-body"], styles["description"])}>{description}</p>
      </div>
    </div>
  )
}
