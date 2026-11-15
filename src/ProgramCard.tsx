import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./ProgramCard.module.css"

interface Props {
  variant?: "Desktop" | "Phone" | "Flip" | "Top - Bottom"
  icon?: string
  title?: string
  shortDescription?: string
  image?: string
  cardBgColor?: string
  iconBgColor?: string
  iconShadowBg?: string
  link?: string
}

export default function ProgramCard({
  variant = "Desktop",
  icon = "https://framerusercontent.com/images/a3k4SgWsuzCuaE9M7cwYgP4fZ8.svg?width=19&height=20",
  title = "Mathematics",
  shortDescription = "Build strong foundations in numbers, arithmetic, algebra, geometry, and problem solving through clear, engaging, practical lessons.",
  image = "https://framerusercontent.com/images/mqo52Fpiq1k4hI7X4ZqKWuqzMo.jpg?width=620&height=404",
  cardBgColor = "rgb(201, 224, 242)",
  iconBgColor = "rgb(201, 224, 242)",
  iconShadowBg = "rgb(27, 117, 188)",
  link = "/program/:slug",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["left"]}>
        <div className={styles["programm-icon"]}>
          <div className={styles["icon-bg"]}>
            <div className={styles["icon"]} style={icon ? { backgroundImage: `url(${icon})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
          </div>
        </div>
        <div className={styles["content"]}>
          <h4 className={cx(tokens["text-heading-4"], styles["title"])}>{title}</h4>
          <p className={cx(tokens["text-body"], styles["shortdescription"])}>{shortDescription}</p>
        </div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["image"]} style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
      </div>
    </div>
  )
}
