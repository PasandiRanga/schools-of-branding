import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Footer.module.css"
import BrandLogo from "./BrandLogo"
import FooterSubscribeFormButton from "./FooterSubscribeFormButton"
import SectionDecor from "./SectionDecor"
import SocialIcon from "./SocialIcon"

interface Props {
  variant?: "Desktop" | "Tablet" | "Phone"
}

export default function Footer({
  variant = "Desktop",
}: Props) {
  return (
    <div className={styles["desktop"]} data-variant={variant}>
      <div className={styles["container"]}>
        <div className={styles["content"]}>
          <div className={styles["top"]}>
            <div className={styles["left"]}>
              <BrandLogo variant="Light" />
              <div className={styles["bottom"]}>
                <p className={cx(tokens["text-body"], styles["hello-yourbrand-com"])}>{"hello@yourbrand.com"}</p>
                <p className={cx(tokens["text-body"], styles["text"])}>{"Open Mon–Sat, 9:00–19:00"}</p>
                <p className={cx(tokens["text-body"], styles["text2"])}>{"In-center and online, worldwide"}</p>
              </div>
            </div>
            <div className={styles["empty-space"]} />
            <div className={styles["right"]}>
              <div className={styles["left2"]}>
                <h5 className={cx(tokens["text-heading-5"], styles["pages"])}>{"Pages"}</h5>
                <div className={styles["list"]}>
                  <div className={styles["left3"]}>
                    <p className={cx(tokens["text-body"], styles["home"])}>{"Home"}</p>
                    <p className={cx(tokens["text-body"], styles["about"])}>{"About"}</p>
                    <p className={cx(tokens["text-body"], styles["programs"])}>{"Programs"}</p>
                    <p className={cx(tokens["text-body"], styles["mentors"])}>{"Mentors"}</p>
                  </div>
                  <div className={styles["right2"]}>
                    <p className={cx(tokens["text-body"], styles["pricing"])}>{"Pricing"}</p>
                    <p className={cx(tokens["text-body"], styles["contact"])}>{"Contact"}</p>
                  </div>
                </div>
              </div>
              <div className={styles["right3"]}>
                <h5 className={cx(tokens["text-heading-5"], styles["h5"])}>{"Get the latest information on events and educational news"}</h5>
                <div className={styles["form"]}>
                  <div className={styles["wrap"]}>
                    {/* TODO: unsupported node (likely a form input) — Framer does not expose it */}
                    <FooterSubscribeFormButton variant="Default" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["bottom2"]}>
            <div className={styles["left4"]}>
              <p className={cx(tokens["text-body"], styles["text3"])}>{"Designed by Webestica, Powered by Framer"}</p>
            </div>
            <div className={styles["center"]}>
              <div className={styles["list2"]}>
                <SocialIcon variant="Desktop" icon={"https://framerusercontent.com/images/nFoFt5fF1LSuiCXQniqnpZ4Xpw.svg"} link={"https://www.facebook.com/"} />
                <SocialIcon variant="Desktop" icon={"https://framerusercontent.com/images/uj0tMMsqt6LBkEaK6L0DT6QflY.svg"} link={"https://x.com/"} />
                <SocialIcon variant="Desktop" icon={"https://framerusercontent.com/images/e90rMmyKXl9idIZ8AuF4PEjRk.svg"} link={"https://dribbble.com/"} />
                <SocialIcon variant="Desktop" icon={"https://framerusercontent.com/images/Fyn8baieiPATg4GuV3o0fzuZGJ8.svg"} link={"https://www.instagram.com/"} />
              </div>
            </div>
            <div className={styles["right4"]}>
              <p className={cx(tokens["text-body"], styles["terms"])}>{"Terms"}</p>
              <div className={styles["frame"]} />
              <p className={cx(tokens["text-body"], styles["privacy"])}>{"Privacy"}</p>
            </div>
          </div>
        </div>
      </div>
      <SectionDecor variant="Light Green" />
      <img className={styles["image"]} src={"https://framerusercontent.com/images/yXXJ5slkTpZ4OqcinCk5fumSSqU.svg"} alt={""} />
    </div>
  )
}
