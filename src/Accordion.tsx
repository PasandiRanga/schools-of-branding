import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Accordion.module.css"

interface Props {
  variant?: "Close - Desktop" | "Open - Desktop" | "Close - Phone" | "Open - Phone"
}

export default function Accordion({
  variant = "Close - Desktop",
}: Props) {
  return (
    <div className={styles["close-desktop"]} data-variant={variant}>
      <div className={styles["question"]}>
        <h5 className={cx(tokens["text-heading-5"], styles["h5"])}>{"How do I choose the right plan for me?"}</h5>
        <div className={styles["icon"]}>
          <div className={styles["divider"]} />
          <div className={styles["divider2"]} />
        </div>
      </div>
      <div className={styles["bottom"]}>
        <div className={styles["answer"]}>
          <p className={cx(tokens["text-body"], styles["text"])}>{"We recommend starting with a consultation to discuss your fitness goals and preferences. This way, we can tailor a plan that suits your individual needs."}</p>
        </div>
      </div>
    </div>
  )
}
