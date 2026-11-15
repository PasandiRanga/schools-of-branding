import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./P404.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import Button from "./Button"
import SectionDecor from "./SectionDecor"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]}>
          <div className={styles["container"]} data-reveal="">
            <div className={styles["content"]}>
              <div className={styles["top"]}>
                <h2 className={cx(tokens["text-heading-404"], styles["n-4"])}>{"4"}</h2>
                <h2 className={cx(tokens["text-heading-404"], styles["n-0"])}>{"0"}</h2>
                <h2 className={cx(tokens["text-heading-404"], styles["n-42"])}>{"4"}</h2>
                <img className={styles["decor"]} src={"https://framerusercontent.com/images/XKbNUbQQv66iIbIItzcdYqmAg5s.svg"} alt={""} />
              </div>
              <div className={styles["bottom"]}>
                <div className={styles["description"]}>
                  <h3 className={cx(tokens["text-heading-3"], styles["this-page-skipped-class"])}>{"This page skipped class"}</h3>
                  <p className={cx(tokens["text-body"], styles["text"])}>{"We looked everywhere even behind the whiteboard. Let's get you somewhere that actually exists."}</p>
                </div>
                <div className={styles["button"]}>
                  <Button variant="Primary" buttonText={"Take me home"} link={"/"} newTab={false} />
                  <Button variant="White" buttonText={"Browse programs "} link={"/program"} newTab={false} />
                </div>
              </div>
            </div>
            <div className={styles["decor-image"]}>
              <img className={styles["bottom-left"]} src={"https://framerusercontent.com/images/fIdqSNtpJiODFBlM4l0vJDiTDI.png"} alt={"Decoration Image"} />
              <img className={styles["top-right"]} src={"https://framerusercontent.com/images/kwG52r8TfCBCtzlJBZJgt3arOk.png"} alt={"Decoration Image"} />
            </div>
          </div>
          <img className={styles["book-image"]} src={"https://framerusercontent.com/images/KGhIo0IIWIogqcO4d9R13nH8N8.png"} alt={"Decoration Image"} />
          <div className={styles["bottom-decor"]} data-reveal="">
            <img className={styles["image"]} src={"https://framerusercontent.com/images/IVSSsRccYeDfFBM2G9r5cicE4Fc.png"} alt={"Decoration Image"} />
            <SectionDecor variant="Green" />
          </div>
        </div>
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
