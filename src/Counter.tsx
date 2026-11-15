import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Counter.module.css"

interface Props {
  variant?: "Default" | "Flip"
  number?: string
  title?: string
}

export default function Counter({
  variant: variantProp,
  number = "900+",
  title = "Learners since 2018 ",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Flip" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <h2 className={cx(tokens["text-heading-lg"], styles["number"])}>{number}</h2>
      <div className={styles["info"]}>
        <p className={cx(tokens["text-body"], styles["title"])}>{title}</p>
      </div>
    </div>
  )
}
