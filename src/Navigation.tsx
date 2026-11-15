import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Navigation.module.css"
import BrandLogo from "./BrandLogo"
import Button from "./Button"

interface Props {
  variant?: "Desktop" | "Tablet - Close" | "Tablet - Open" | "Phone - Close" | "Phone - Open"
}

export default function Navigation({
  variant = "Desktop",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["container"]}>
        <div className={styles["grid-nav"]}>
          <div className={styles["left"]}>
            <BrandLogo variant="Default" />
          </div>
          <div className={styles["center"]}>
            <p className={cx(tokens["text-text-md"], styles["home"])}>{"Home"}</p>
            <p className={cx(tokens["text-text-md"], styles["about"])}>{"About"}</p>
            <p className={cx(tokens["text-text-md"], styles["program"])}>{"Program"}</p>
            <p className={cx(tokens["text-text-md"], styles["mentor"])}>{"Mentor"}</p>
            <p className={cx(tokens["text-text-md"], styles["contact"])}>{"Contact"}</p>
          </div>
          <div className={styles["right"]}>
            <Button variant="Nav" buttonText={"Get started"} link={"/contact"} newTab={false} />
            <div className={styles["menu-button"]}>
              <div className={styles["n-01"]} />
              <div className={styles["n-02"]} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["overlay"]} />
    </div>
  )
}
