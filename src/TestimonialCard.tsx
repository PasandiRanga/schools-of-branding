import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./TestimonialCard.module.css"

interface Props {
  star?: string
  description?: string
  avatar?: string
  name?: string
  job?: string
  bgColor?: string
}

export default function TestimonialCard({
  star = "https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg",
  description = "“Two terms with Maya and my son went from dreading math tests to asking for extra practice.”",
  avatar = "https://framerusercontent.com/images/0sE3chb22chPj5tHJ26QFckU.jpg",
  name = "Sophia Taylor",
  job = "Parent · Mathematics",
  bgColor = "rgb(201, 224, 242)",
}: Props) {
  return (
    <div className={styles["desktop"]}>
      <img className={styles["star"]} src={star} alt={""} />
      <div className={styles["bottom"]}>
        <div className={styles["top"]}>
          <h5 className={cx(tokens["text-heading-5"], styles["description"])}>{description}</h5>
        </div>
        <div className={styles["bottom2"]}>
          <div className={styles["avatar"]}>
            <div className={styles["avatar2"]} style={avatar ? { backgroundImage: `url(${avatar})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
          </div>
          <div className={styles["name-disease"]}>
            <h6 className={cx(tokens["text-heading-6"], styles["name"])}>{name}</h6>
            <p className={cx(tokens["text-body"], styles["job"])}>{job}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
