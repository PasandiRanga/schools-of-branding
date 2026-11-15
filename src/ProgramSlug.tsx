import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import { CMS } from "./cms"
import styles from "./ProgramSlug.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import Button from "./Button"
import CTAProgram from "./CTAProgram"
import PreTitle from "./PreTitle"
import SectionDecor from "./SectionDecor"

interface Props {
  item?: Record<string, string>
}

export const cmsCollection = "Program"

export default function Page({
  item = CMS["Program"][0],
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
                  <div className={styles["image"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
                </div>
                <div className={styles["right"]}>
                  <div className={styles["n-01"]}>
                    <h1 className={cx(tokens["text-heading-1"], styles["mathematics"])}>{"Mathematics"}</h1>
                  </div>
                  <div className={styles["n-02"]}>
                    <Button variant="Primary" buttonText={"Try a free session"} link={"/contact"} newTab={false} />
                    <Button variant="White" buttonText={"See pricing"} link={"/pricing"} newTab={false} />
                  </div>
                  <div className={styles["n-03"]}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionDecor variant="Gray" />
        </div>
        <div className={styles["course"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content2"]}>
              <div className={styles["heading"]}>
                <h2 className={cx(tokens["text-heading-2"], styles["what-s"])}>{"What's"}</h2>
                <div className={styles["highlight"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["covered"])}>{"covered"}</h2>
                  <div className={styles["top-decor"]} />
                  <div className={styles["bottom-decor"]} />
                </div>
              </div>
              <div className={styles["content3"]}>
                <div className={styles["top2"]}>
                </div>
                <div className={styles["bottom2"]}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["mentor"]} data-reveal="">
          <div className={styles["container3"]}>
            <div className={styles["content4"]}>
              <div className={styles["left2"]}>
                <div className={styles["image2"]} style={{ backgroundImage: `url(${item["Image"]})`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div className={styles["right2"]}>
                <div className={styles["n-012"]}>
                  <div className={styles["title"]}>
                    <PreTitle textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                    <h2 className={cx(tokens["text-heading-2"], styles["mathematics2"])}>{"Mathematics"}</h2>
                  </div>
                </div>
                <div className={styles["n-022"]}>
                </div>
                <div className={styles["n-032"]}>
                  <Button variant="Primary" buttonText={"Try a free session"} link={"/contact"} newTab={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["faqs"]} data-reveal="">
          <div className={styles["container4"]}>
            <div className={styles["content5"]}>
            </div>
          </div>
        </div>
        <CTAProgram variant="Desktop" />
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
