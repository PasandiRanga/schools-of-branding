import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./CTA.module.css"
import Button from "./Button"
import PreTitle from "./PreTitle"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone"
}

export default function CTA({
  variant = "Desktop",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["top"]}>
            <PreTitle title={"Free intro Session"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(255, 255, 255)"} dotColor={"rgb(251, 200, 11)"} />
            <div className={styles["heading"]}>
              <h2 className={cx(tokens["text-heading-xl"], styles["start"])}>{"Start"}</h2>
              <h2 className={cx(tokens["text-heading-xl"], styles["learning"])}>{"learning"}</h2>
              <h2 className={cx(tokens["text-heading-xl"], styles["with"])}>{"with"}</h2>
              <div className={styles["highlight"]}>
                <h2 className={cx(tokens["text-heading-xl"], styles["confidence"])}>{"confidence"}</h2>
                <div className={styles["top-decor"]} />
                <div className={styles["bottom-decor"]} />
              </div>
            </div>
          </div>
          <div className={styles["bottom"]}>
            <p className={cx(tokens["text-body"], styles["text"])}>{"Meet a mentor, find your level, and get a personal learning plan no commitment, no card required."}</p>
            <div className={styles["button"]}>
              <Button variant="Primary" buttonText={"Claim your free session"} link={"/contact"} newTab={false} />
              <Button variant="White" buttonText={"Talk to an advisor"} link={"/contact"} newTab={false} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["bg-decor"]}>
        <div className={styles["left"]}>
          <img className={styles["bg-shap-image"]} src={"https://framerusercontent.com/images/KITCFqoLDqQXdqMCCYX4dCTzRNo.png"} alt={""} />
          <div className={styles["book"]}>
            <img className={styles["bg-shap-image2"]} src={"https://framerusercontent.com/images/TaQDPRou3O8FfksTubx83Mb4U.svg"} alt={""} />
            <img className={styles["image"]} src={"https://framerusercontent.com/images/Smqr3uMDSR2PzjB3DBAfhHFKBaQ.png"} alt={""} />
          </div>
        </div>
        <div className={styles["right"]}>
          <img className={styles["bg-shap-image3"]} src={"https://framerusercontent.com/images/ANM2K8tN9rhRoCqmvsMpUwpl1c.png"} alt={""} />
        </div>
      </div>
    </div>
  )
}
