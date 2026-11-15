import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./CTAProgram.module.css"
import Avatar from "./Avatar"
import Button from "./Button"
import PreTitle from "./PreTitle"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone"
}

export default function CTAProgram({
  variant = "Desktop",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["top"]}>
            <div className={styles["heading"]}>
              <PreTitle title={"Better tomorrow. No commitment."} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
              <div className={styles["heading2"]}>
                <h2 className={cx(tokens["text-heading-xl"], styles["turn"])}>{"Turn"}</h2>
                <h2 className={cx(tokens["text-heading-xl"], styles["learning"])}>{"learning"}</h2>
                <h2 className={cx(tokens["text-heading-xl"], styles["into"])}>{"Into"}</h2>
                <h2 className={cx(tokens["text-heading-xl"], styles["deeper"])}>{"deeper"}</h2>
                <div className={styles["highlight"]}>
                  <h2 className={cx(tokens["text-heading-xl"], styles["understanding"])}>{"understanding"}</h2>
                  <div className={styles["top-decor"]} />
                  <div className={styles["bottom-decor"]} />
                </div>
              </div>
            </div>
            <div className={styles["description"]}>
              <p className={cx(tokens["text-body"], styles["text"])}>{"Start with a free session, meet your tutor, find the right level, and get a plan."}</p>
              <div className={styles["button"]}>
                <Button variant="Primary" buttonText={"Claim your free session"} newTab={false} />
                <Button variant="White" buttonText={"Talk to an advisor"} newTab={false} />
              </div>
            </div>
          </div>
          <div className={styles["bottom"]}>
            <div className={styles["left"]}>
              <div className={styles["left2"]}>
                <div className={styles["avatar"]}>
                  <Avatar image={"https://framerusercontent.com/images/MZbjDzkYEkjQHtcFRrwOJqnUP0.jpg"} />
                  <Avatar image={"https://framerusercontent.com/images/mcLwa1ywPDytQ0narayW4zXoDJM.jpg"} />
                  <Avatar image={"https://framerusercontent.com/images/eLnEvMXSYqKmT1zCrYJN58AOz8.jpg"} />
                </div>
              </div>
              <div className={styles["right"]}>
                <img className={styles["image"]} src={"https://framerusercontent.com/images/aafGsNImwiSPjzaZXn4awk0dvI.svg"} alt={""} />
                <p className={cx(tokens["text-body"], styles["text2"])}>{"4.9 / 5 Based on 200+ reviews"}</p>
              </div>
            </div>
            <div className={styles["line"]} />
            <div className={styles["right2"]}>
              <Button variant="Primary" buttonText={"Book your spot"} link={"/contact"} newTab={false} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["bg-decor"]}>
        <div className={styles["left3"]}>
          <img className={styles["bg-shap-image"]} src={"https://framerusercontent.com/images/XDA48ZBlyMaqovRVgRqqtE0wsE.png"} alt={""} />
        </div>
        <div className={styles["right3"]}>
          <img className={styles["top-image"]} src={"https://framerusercontent.com/images/SqMZa81JdD5ujRG60aNVeT9whro.png"} alt={""} />
          <img className={styles["bottom-image"]} src={"https://framerusercontent.com/images/WIi0h4VBtEtbQNYaatXFHT8TzDg.png"} alt={""} />
        </div>
      </div>
      <div className={styles["bg-color-bottom"]} />
    </div>
  )
}
