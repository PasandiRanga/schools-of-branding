import styles from "./TeamExpertise.module.css"
import Badge from "./Badge"

interface Props {
  title01?: string
  title02?: string
  title03?: string
  title04?: string
  title05?: string
}

export default function TeamExpertise({
  title01,
  title02,
  title03,
  title04,
  title05,
}: Props) {
  return (
    <div className={styles["desktop"]}>
      <Badge variant="White" textColor={"rgb(16, 26, 38)"} />
      <Badge variant="White" textColor={"rgb(16, 26, 38)"} />
      <Badge variant="White" textColor={"rgb(16, 26, 38)"} />
      <Badge variant="White" textColor={"rgb(16, 26, 38)"} />
      <Badge variant="White" textColor={"rgb(16, 26, 38)"} />
    </div>
  )
}
