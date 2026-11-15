import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import { CMS } from "./cms"
import RichText from "./RichText"
import styles from "./LegalPagesSlug.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"

interface Props {
  item?: Record<string, string>
}

export const cmsCollection = "Legal Pages"

export default function Page({
  item = CMS["Legal Pages"][0],
}: Props) {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]} data-reveal="">
        <div className={styles["hero"]}>
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <RichText html={String(item["Content"] ?? "")} />
              <div className={styles["top"]}>
                <div className={styles["pre-title"]}>
                  <div className={styles["dot"]}>
                    <div className={styles["done"]} />
                  </div>
                  <p className={cx(tokens["text-body"], styles["last-updated"])}>{"Last Updated:"}</p>
                  <p className={cx(tokens["text-body"], styles["content2"])}>{"Content"}</p>
                </div>
                <h1 className={cx(tokens["text-heading-1"], styles["title"])}>{"Title"}</h1>
              </div>
              <div className={styles["bottom"]}>
                <p className={styles["content3"]}>{String(item["Content"] ?? "Content")}</p>
                  <RichText html={String(item["Content"] ?? "")} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
