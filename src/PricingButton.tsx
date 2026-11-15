import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./PricingButton.module.css"

interface Props {
  variant?: "Default" | "Gray" | "Phone" | "Phone - Gray"
  newTab?: boolean
}

export default function PricingButton({
  variant = "Default",
  newTab = false,
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <div className={styles["content"]}>
        <p className={cx(tokens["text-text-md"], styles["contact-us"])}>{"Contact us"}</p>
      </div>
    </div>
  )
}
