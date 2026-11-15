import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./SessionCard.module.css"

interface Props {
  time?: string
  title?: string
  info?: string
  topicBgColor?: string
  topicBorder?: string
  topicShadow?: string
}

export default function SessionCard({
  time,
  title,
  info,
  topicBgColor,
  topicBorder,
  topicShadow,
}: Props) {
  return (
    <div className={styles["desktop"]}>
      <div className={styles["title"]}>
        <p className={cx(tokens["text-body"], styles["foundations"])}>{"Foundations"}</p>
      </div>
      <div className={styles["content"]}>
        <h5 className={cx(tokens["text-heading-5"], styles["number-sense"])}>{"Number sense"}</h5>
        <div className={styles["list"]}>
          <p className={cx(tokens["text-body"], styles["text"])}>{"Every session opens with something the learner can already do momentum first, new material second."}</p>
        </div>
      </div>
    </div>
  )
}
