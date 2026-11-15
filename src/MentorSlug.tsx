import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import { CMS } from "./cms"
import styles from "./MentorSlug.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import Button from "./Button"
import CTAMentor from "./CTAMentor"
import TestimonialCard from "./TestimonialCard"

interface Props {
  item?: Record<string, string>
}

export const cmsCollection = "Mentor"

export default function Page({
  item = CMS["Mentor"][0],
}: Props) {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]} data-reveal="">
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <div className={styles["top"]}>
              </div>
              <div className={styles["bottom"]}>
                <div className={styles["left"]}>
                  <div className={styles["top2"]}>
                    <div className={styles["image"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                  </div>
                  <div className={styles["bottom2"]}>
                  </div>
                </div>
                <div className={styles["right"]}>
                  <div className={styles["n-01"]}>
                  </div>
                  <div className={styles["n-02"]}>
                    <p className={styles["expertise"]}>{String(item["Expertise"] ?? "Expertise")}</p>
                  </div>
                  <div className={styles["n-03"]}>
                  </div>
                  <div className={styles["n-04"]}>
                    <Button variant="Primary" buttonText={"Book a session"} link={"/contact"} newTab={false} />
                    <Button variant="White" buttonText={"View all program"} link={"/program"} newTab={false} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["session"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content2"]}>
              <div className={styles["heading"]}>
                <h2 className={cx(tokens["text-heading-2"], styles["how"])}>{"How"}</h2>
                <h2 className={cx(tokens["text-heading-2"], styles["runs"])}>{"runs"}</h2>
                <h2 className={cx(tokens["text-heading-2"], styles["a"])}>{"a"}</h2>
                <div className={styles["highlight"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["session2"])}>{"session"}</h2>
                  <div className={styles["top-decor"]} />
                  <div className={styles["bottom-decor"]} />
                </div>
              </div>
              <div className={styles["content3"]}>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["testimonial"]} data-reveal="">
          <div className={styles["container3"]}>
            <div className={styles["content4"]}>
              <div className={styles["top3"]}>
                <div className={styles["heading2"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["what"])}>{"What"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["families"])}>{"families"}</h2>
                  <div className={styles["highlight2"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["say"])}>{"say"}</h2>
                    <div className={styles["top-decor2"]} />
                    <div className={styles["bottom-decor2"]} />
                  </div>
                </div>
              </div>
              <div className={styles["bottom3"]}>
                <TestimonialCard star={"https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg"} description={"“Two terms with Maya and my son went from dreading math tests to asking for extra practice.”"} avatar={"https://framerusercontent.com/images/Klev8yt78H1Wrcoe4zKMkZEjAM.jpg"} name={"Sophia Taylor"} job={"Parent · Mathematics"} bgColor={"rgb(201, 224, 242)"} />
                <TestimonialCard star={"https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg"} description={"“The monthly reports are gold. I finally know what's happening in my daughter's learning and where she needs support.”"} avatar={"https://framerusercontent.com/images/Ko5GivtVSBpyA3zIXc6FF1Tg4Yg.jpg"} name={"Daniel Cooper"} job={"Parent · English"} bgColor={"rgb(224, 239, 250)"} />
                <TestimonialCard star={"https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg"} description={"“She took the coding class \"for fun\" now she's building her own website and exploring ideas at 13.”"} avatar={"https://framerusercontent.com/images/Pxt9JsGgTuWf3g2DnzVvOa0S04.jpg"} name={"Stella Adams"} job={"Parent · Coding"} bgColor={"rgb(253, 240, 190)"} />
              </div>
            </div>
          </div>
        </div>
        <CTAMentor variant="Desktop" />
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
