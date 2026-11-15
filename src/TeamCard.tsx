import { useState } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./TeamCard.module.css"

interface Props {
  variant?: "Default" | "Phone"
  image?: string
  name?: string
  jobTitle?: string
  shortDescription?: string
  bgColor?: string
  titleColor?: string
  infoColor?: string
  link?: string
}

export default function TeamCard({
  variant: variantProp,
  image = "https://framerusercontent.com/images/QoXhr69JES9Sz1oPnPDbV8cOVQw.jpg?width=800&height=768",
  name = "Maya Chen",
  jobTitle = "Mathematics",
  shortDescription = "Former math teacher with 9 years turning \"I hate math\" into \"That's it?\"",
  bgColor = "rgb(27, 117, 188)",
  titleColor = "rgb(244, 240, 229)",
  infoColor = "rgb(244, 240, 229)",
  link = "/mentor/:slug",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Default")

  return (
    <div className={styles["default"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <div className={styles["top"]}>
        <div className={styles["top2"]}>
          <h5 className={cx(tokens["text-heading-5"], styles["name"])}>{name}</h5>
          <p className={cx(tokens["text-body"], styles["jobtitle"])}>{jobTitle}</p>
        </div>
        <div className={styles["bottom"]}>
          <img className={styles["image"]} src={image} alt={""} />
        </div>
      </div>
      <div className={styles["bottom2"]}>
        <p className={cx(tokens["text-body"], styles["shortdescription"])}>{shortDescription}</p>
      </div>
    </div>
  )
}
