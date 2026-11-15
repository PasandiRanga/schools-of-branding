import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Program.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import CTAProgram from "./CTAProgram"
import PreTitle from "./PreTitle"
import ProgramCard from "./ProgramCard"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]} data-reveal="">
        <div className={styles["hero"]}>
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <div className={styles["top"]}>
                <div className={styles["heading"]}>
                  <PreTitle title={"Vetted twice · Certified educators"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                  <div className={styles["heading2"]}>
                    <h1 className={cx(tokens["text-heading-1"], styles["where"])}>{"Where"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["hard"])}>{"hard"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["subjects"])}>{"subjects"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["get"])}>{"get"}</h1>
                    <div className={styles["highlight"]}>
                      <h1 className={cx(tokens["text-heading-1"], styles["easier"])}>{"easier"}</h1>
                      <div className={styles["top-decor"]} />
                      <div className={styles["bottom-decor"]} />
                    </div>
                  </div>
                </div>
                <p className={cx(tokens["text-body"], styles["text"])}>{"We rebuild confidence first, then speed. From number sense to calculus, every learner gets a plan built around their actual gaps not a generic worksheet pile."}</p>
              </div>
              <div className={styles["bottom"]}>
                <div className={styles["programs"]}>
                  <div className={styles["program"]}>
                    <ProgramCard variant="Flip" link={"/program/:slug"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CTAProgram variant="Desktop" />
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
