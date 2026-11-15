import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./CTAMentor.module.css"
import Button from "./Button"
import PreTitle from "./PreTitle"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone"
  title?: string
}

export default function CTAMentor({
  variant = "Desktop",
  title = "your tutor",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["top"]}>
            <div className={styles["heading"]}>
              <PreTitle title={"Free intro session"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
              <div className={styles["heading2"]}>
                <h2 className={cx(tokens["text-heading-xl"], styles["title"])}>{title}</h2>
                <h2 className={cx(tokens["text-heading-xl"], styles["maya"])}>{"Maya"}</h2>
                <h2 className={cx(tokens["text-heading-xl"], styles["for"])}>{"for"}</h2>
                <div className={styles["highlight"]}>
                  <h2 className={cx(tokens["text-heading-xl"], styles["free"])}>{"free"}</h2>
                  <div className={styles["top-decor"]} />
                  <div className={styles["bottom-decor"]} />
                </div>
                <h2 className={cx(tokens["text-heading-xl"], styles["anytime"])}>{"anytime"}</h2>
              </div>
            </div>
            <div className={styles["description"]}>
              <p className={cx(tokens["text-body"], styles["text"])}>{"Your first session is completely free, No hidden fees, no pressure, no strings attached. Walk away with a personalised learning plan built around your child's goals and learning style."}</p>
            </div>
          </div>
          <div className={styles["bottom"]}>
            <div className={styles["left"]}>
              <div className={styles["left2"]}>
                <div className={styles["icon"]}>
                  <div className={styles["image"]} />
                </div>
              </div>
              <div className={styles["right"]}>
                <h4 className={cx(tokens["text-heading-4"], styles["h4"])}>{"Book your free intro session"}</h4>
                <div className={styles["info"]}>
                  <p className={cx(tokens["text-body"], styles["n-15-30-min"])}>{"15-30 min"}</p>
                  <div className={styles["frame"]} />
                  <p className={cx(tokens["text-body"], styles["one-on-one"])}>{"One-on-one"}</p>
                </div>
              </div>
            </div>
            <div className={styles["line"]} />
            <div className={styles["right2"]}>
              <Button variant="Primary" buttonText={"Book the intro session"} link={"/contact"} newTab={false} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles["bg-decor"]}>
        <div className={styles["left3"]}>
          <img className={styles["image2"]} src={"https://framerusercontent.com/images/KITCFqoLDqQXdqMCCYX4dCTzRNo.png"} alt={""} />
        </div>
        <div className={styles["right3"]}>
          <img className={styles["image3"]} src={"https://framerusercontent.com/images/3fIhq7ij32qpJo01OGJstWOA3M.png"} alt={""} />
        </div>
      </div>
    </div>
  )
}
