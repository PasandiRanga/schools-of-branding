import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./ListItem.module.css"

interface Props {
  variant?: "Default" | "BG Color"
}

export default function ListItem({
  variant: variantProp,
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "BG Color" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["icon"]}>
        <div className={styles["image"]} />
      </div>
      <p className={cx(tokens["text-body"], styles["text"])}>{"Add your list item here"}</p>
    </div>
  )
}
