import { useState } from "react"
import styles from "./BrandLogo.module.css"

interface Props {
  variant?: "Default" | "Light"
}

export default function BrandLogo({
  variant: variantProp,
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Light" : (variantProp ?? "Default")

  return (
    <img className={styles["default"]} src={"https://framerusercontent.com/images/avN1cce8Zki60Z66UMnTm9elu0.svg"} alt={"Brand Image"} />
  )
}
