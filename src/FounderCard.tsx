import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./FounderCard.module.css"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone"
  link?: string
}

export default function FounderCard({
  variant = "Desktop",
  link = "/mentor/:slug",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["left"]}>
        <div className={styles["image"]} />
      </div>
      <div className={styles["right"]}>
        <div className={styles["content"]}>
          <div className={styles["top"]}>
            <div className={styles["pre-title"]}>
              <div className={styles["dot"]}>
                <div className={styles["done"]} />
              </div>
              <div className={styles["title"]}>
                <p className={cx(tokens["text-body"], styles["sbject"])}>{"Sbject"}</p>
                <p className={cx(tokens["text-body"], styles["item"])}>{"•"}</p>
                <p className={cx(tokens["text-body"], styles["role"])}>{"Role"}</p>
              </div>
            </div>
            <h3 className={cx(tokens["text-heading-3"], styles["maya-chen"])}>{"Maya Chen"}</h3>
          </div>
          <div className={styles["bottom"]}>
            <p className={cx(tokens["text-body"], styles["text"])}>{"Former school math teacher with 9 years turning \"I hate math\" into \"Wait, that's it?\""}</p>
          </div>
        </div>
        <div className={styles["button"]}>
          <div className={styles["content2"]}>
            <p className={cx(tokens["text-text-md"], styles["get-more-detail"])}>{"Get more detail"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
