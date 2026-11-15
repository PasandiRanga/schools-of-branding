import { useState } from "react"
import styles from "./SocialIcon.module.css"

interface Props {
  variant?: "Desktop" | "Phone"
  icon?: string
  link?: string
}

export default function SocialIcon({
  variant: variantProp,
  icon = "https://framerusercontent.com/images/nFoFt5fF1LSuiCXQniqnpZ4Xpw.svg",
  link = "https://www.facebook.com/",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Desktop")

  return (
    <div className={styles["desktop"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <img className={styles["icon"]} src={icon} alt={""} />
    </div>
  )
}
