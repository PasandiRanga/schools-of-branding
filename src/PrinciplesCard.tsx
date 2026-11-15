import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./PrinciplesCard.module.css"

interface Props {
  variant?: "Desktop" | "Phone"
  number?: string
  title?: string
  description?: string
  iconBgColor?: string
  iconBorder?: string
  iconShadow?: string
}

export default function PrinciplesCard({
  variant: variantProp,
  number = "01",
  title = "Small stays small",
  description = "Four learners per group, forever. The moment groups grow, attention shrinks.",
  iconBgColor = "rgb(201, 224, 242)",
  iconBorder,
  iconShadow = "4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Desktop")

  return (
    <div className={styles["desktop"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["icon"]}>
        <p className={cx(tokens["text-body"], styles["number"])}>{number}</p>
      </div>
      <div className={styles["content"]}>
        <h4 className={cx(tokens["text-heading-4"], styles["title"])}>{title}</h4>
        <p className={cx(tokens["text-body"], styles["description"])}>{description}</p>
      </div>
    </div>
  )
}
