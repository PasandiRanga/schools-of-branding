import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./SubjectCard.module.css"
import ListItem from "./ListItem"

interface Props {
  icon?: string
  topic?: string
  subject?: string
  listItem01?: string
  listItem02?: string
  listItem03?: string
  listItem04?: string
  listItem05?: string
  topicBgColor?: string
  topicBorder?: string
  topicShadow?: string
}

export default function SubjectCard({
  icon,
  topic,
  subject,
  listItem01,
  listItem02,
  listItem03,
  listItem04,
  listItem05,
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
          <ListItem variant="Default" />
          <ListItem variant="Default" />
          <ListItem variant="Default" />
          <ListItem variant="Default" />
          <ListItem variant="Default" />
        </div>
      </div>
    </div>
  )
}
