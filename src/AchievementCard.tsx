import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./AchievementCard.module.css"

interface Props {
  variant?: "Default" | "Phone"
  number?: string
  title?: string
  bgColor?: string
  border?: string
  shadow?: string
}

export default function AchievementCard({
  variant: variantProp,
  number = "2018",
  title = "Started with 6 learners",
  bgColor = "rgb(201, 224, 242)",
  border,
  shadow = "4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <h2 className={cx(tokens["text-heading-md"], styles["number"])}>{number}</h2>
      <div className={styles["border"]} />
      <p className={cx(tokens["text-body"], styles["title"])}>{title}</p>
    </div>
  )
}
