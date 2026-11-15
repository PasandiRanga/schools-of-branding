import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./InfoCard.module.css"

interface Props {
  variant?: "Default" | "Phone"
  bgColor?: string
  border?: string
  shadow?: string
  info?: string
}

export default function InfoCard({
  variant: variantProp,
  bgColor = "rgb(201, 224, 242)",
  border,
  shadow = "3px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))",
  info = "Teaching",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <h4 className={cx(tokens["text-heading-4"], styles["shadow"])}>{shadow}</h4>
      <p className={cx(tokens["text-body"], styles["info"])}>{info}</p>
    </div>
  )
}
