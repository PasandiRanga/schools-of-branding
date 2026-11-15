import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./ContactFormButton.module.css"

interface Props {
  variant?: "Default" | "Loading" | "Disabled" | "Success" | "Error" | "Phone"
}

export default function ContactFormButton({
  variant = "Default",
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <div className={styles["content"]}>
        <p className={cx(tokens["text-text-md"], styles["send-request"])}>{"Send request"}</p>
      </div>
      <div className={styles["spinner"]}>
        <div className={styles["conic"]}>
          <div className={styles["rounding"]} />
        </div>
      </div>
    </div>
  )
}
