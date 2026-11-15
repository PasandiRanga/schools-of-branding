import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./LevelCard.module.css"

interface Props {
  variant?: "Desktop" | "Phone"
  title?: string
  description?: string
  icon?: string
  iconBgColor?: string
  iconBorder?: string
  iconShadow?: string
  link?: string
  linkIcon?: string
}

export default function LevelCard({
  variant: variantProp,
  title = "Just starting",
  description = "New to the subject, we build the basics first.",
  icon = "https://framerusercontent.com/images/dcraAmz3c9gUYZgYEMHuJXrFI.svg",
  iconBgColor = "rgb(201, 224, 242)",
  iconBorder,
  iconShadow = "4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))",
  link = "/program",
  linkIcon = "https://framerusercontent.com/images/CAbS9gkiotvmVlJ57grEiwkR3A.svg",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Desktop")

  return (
    <div className={styles["desktop"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["left"]}>
        <div className={styles["icon"]}>
          <div className={styles["icon2"]} style={icon ? { backgroundImage: `url(${icon})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
        </div>
        <div className={styles["content"]}>
          <h4 className={cx(tokens["text-heading-4"], styles["title"])}>{title}</h4>
          <p className={cx(tokens["text-body"], styles["description"])}>{description}</p>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["icon3"]}>
          <div className={styles["iconborder"]} style={iconBorder ? { backgroundImage: `url(${iconBorder})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
        </div>
      </div>
    </div>
  )
}
