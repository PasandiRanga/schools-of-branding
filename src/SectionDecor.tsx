import styles from "./SectionDecor.module.css"

interface Props {
  variant?: "Default" | "Green" | "Gray" | "Light Green"
}

export default function SectionDecor({
  variant = "Default",
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <div className={styles["decor"]} />
    </div>
  )
}
