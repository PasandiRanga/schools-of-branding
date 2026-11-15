import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Mentor.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import Button from "./Button"
import CTAMentor from "./CTAMentor"
import FounderCard from "./FounderCard"
import PreTitle from "./PreTitle"
import TeamCard from "./TeamCard"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]} data-reveal="">
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <div className={styles["heading"]}>
                <PreTitle title={"Vetted twice · Certified educators"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                <div className={styles["heading2"]}>
                  <h1 className={cx(tokens["text-heading-1"], styles["meet"])}>{"Meet"}</h1>
                  <h1 className={cx(tokens["text-heading-1"], styles["the"])}>{"the"}</h1>
                  <h1 className={cx(tokens["text-heading-1"], styles["minds"])}>{"minds"}</h1>
                  <h1 className={cx(tokens["text-heading-1"], styles["the2"])}>{"the"}</h1>
                  <div className={styles["highlight"]}>
                    <h1 className={cx(tokens["text-heading-1"], styles["learning"])}>{"learning"}</h1>
                    <div className={styles["top-decor"]} />
                    <div className={styles["bottom-decor"]} />
                  </div>
                </div>
              </div>
              <p className={cx(tokens["text-body"], styles["text"])}>{"We rebuild confidence first, then speed. From number sense to calculus, every learner gets a plan built around their actual gaps not a generic worksheet pile."}</p>
            </div>
          </div>
        </div>
        <div className={styles["mentor"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content2"]}>
              <div className={styles["mentors"]}>
                <div className={styles["mentor2"]}>
                  <FounderCard variant="Desktop" link={"/mentor/:slug"} />
                  <TeamCard variant="Default" link={"/mentor/:slug"} />
                </div>
                <div className={styles["cta"]}>
                  <div className={styles["top"]}>
                    <div className={styles["top2"]}>
                      <h5 className={cx(tokens["text-heading-5"], styles["h5"])}>{"Share what you know. Shape what’s next."}</h5>
                      <p className={cx(tokens["text-body"], styles["text2"])}>{"Inspire students, share your expertise, and make learning more meaningful."}</p>
                    </div>
                  </div>
                  <div className={styles["bottom"]}>
                    <Button variant="Primary" buttonText={"Join our mentors"} link={"/contact"} newTab={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CTAMentor variant="Desktop" title={"your tutor"} />
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
