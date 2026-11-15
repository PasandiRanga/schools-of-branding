import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./KeyBenefitsCard.module.css"

interface Props {
  variant?: "Default" | "Phone"
  title?: string
  description?: string
  icon?: string
}

export default function KeyBenefitsCard({
  variant: variantProp,
  title = "Certified mentors",
  description = "Real teachers, vetted twice, trained in our method.",
  icon = "https://framerusercontent.com/images/KnuAAevL4eKiiHfDiUtsXamYOls.svg",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["icon"]}>
        <div className={styles["icon2"]} style={icon ? { backgroundImage: `url(${icon})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
      </div>
      <div className={styles["content"]}>
        <h6 className={cx(tokens["text-heading-6"], styles["title"])}>{title}</h6>
        <p className={cx(tokens["text-body"], styles["description"])}>{description}</p>
      </div>
    </div>
  )
}
