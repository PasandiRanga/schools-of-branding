import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./CTAAbout.module.css"
import Button from "./Button"
import PreTitle from "./PreTitle"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone"
}

export default function CTAAbout({
  variant = "Desktop",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["top"]}>
            <PreTitle title={"Better tomorrow. No commitment."} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(255, 255, 255)"} dotColor={"rgb(251, 200, 11)"} />
            <div className={styles["heading"]}>
              <h2 className={cx(tokens["text-heading-xl"], styles["turn"])}>{"Turn"}</h2>
              <h2 className={cx(tokens["text-heading-xl"], styles["learning"])}>{"learning"}</h2>
              <h2 className={cx(tokens["text-heading-xl"], styles["into"])}>{"into"}</h2>
              <h2 className={cx(tokens["text-heading-xl"], styles["lasting"])}>{"lasting"}</h2>
              <div className={styles["highlight"]}>
                <h2 className={cx(tokens["text-heading-xl"], styles["success"])}>{"success"}</h2>
                <div className={styles["top-decor"]} />
                <div className={styles["bottom-decor"]} />
              </div>
            </div>
          </div>
          <div className={styles["bottom"]}>
            <p className={cx(tokens["text-body"], styles["text"])}>{"Meet a mentor, find your level, and get a personal learning plan, no commitment, no card required."}</p>
            <div className={styles["button"]}>
              <Button variant="Primary" buttonText={"Meet a mentor"} link={"/mentor"} newTab={false} />
              <Button variant="White" buttonText={"Browse programs"} link={"/program"} newTab={false} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["bg-decor"]}>
        <div className={styles["left"]}>
          <img className={styles["bg-shap-image"]} src={"https://framerusercontent.com/images/yJN4KT0Zi7MeLjgjwXSbtNMRtJA.png"} alt={""} />
        </div>
        <div className={styles["right"]}>
          <img className={styles["top-image"]} src={"https://framerusercontent.com/images/ncpktVM6nB0cJxEePNXWJxAAKps.png"} alt={""} />
          <img className={styles["bottom-image"]} src={"https://framerusercontent.com/images/WIi0h4VBtEtbQNYaatXFHT8TzDg.png"} alt={""} />
        </div>
      </div>
      <div className={styles["bg-color-bottom"]} />
    </div>
  )
}
