import styles from "./FooterSubscribeFormButton.module.css"

interface Props {
  variant?: "Default" | "Loading" | "Disabled" | "Success" | "Error" | "Phone"
}

export default function FooterSubscribeFormButton({
  variant = "Default",
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <div className={styles["default-icon"]} />
      <div className={styles["hover-icon"]} />
      <div className={styles["spinner"]}>
        <div className={styles["conic"]}>
          <div className={styles["rounding"]} />
        </div>
      </div>
    </div>
  )
}
