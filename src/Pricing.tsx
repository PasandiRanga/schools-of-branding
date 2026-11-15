import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Pricing.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import Button from "./Button"
import GeneralAccordion from "./GeneralAccordion"
import PreTitle from "./PreTitle"
import PricingCard from "./PricingCard"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]} data-reveal="">
          <div className={styles["container"]}>
            <div className={styles["top"]}>
              <div className={styles["heading"]}>
                <PreTitle title={"Month to month · no lock-in"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                <div className={styles["heading2"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["h2"])}>{"Simple,"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["h22"])}>{"honest,"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["transparent"])}>{"transparent"}</h2>
                  <div className={styles["highlight"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["pricing"])}>{"pricing"}</h2>
                    <div className={styles["top-decor"]} />
                    <div className={styles["bottom-decor"]} />
                  </div>
                </div>
              </div>
              <p className={cx(tokens["text-body"], styles["text"])}>{"Every plan includes the free first session, a personal learning plan, and a monthly progress report. Pause or switch anytime."}</p>
            </div>
            <div className={styles["bottom"]}>
              <PricingCard variant="Default" title={"Group"} shortDescription={"Small-group sessions, twice a week."} price={"$149"} unit={"/ month"} featureIcon={"https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg"} feature01={"Groups of max 4"} feature02={"2 sessions / week"} feature03={"Monthly progress report"} feature04={"Personalized learning support"} text={"ovNC8Ebph"} buttonText={"Choose Group"} buttonLink={"/contact"} />
              <PricingCard variant="Popular" title={"Private"} shortDescription={"A dedicated mentor, fully personal pace."} price={"$289"} unit={"/ month"} featureIcon={"https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg"} feature01={"One-on-one sessions"} feature02={"2 sessions / week"} feature03={"Custom learning plan"} feature04={"Priority scheduling"} text={"QJ8kw8szL"} buttonText={"Choose Private"} buttonLink={"/contact"} />
              <PricingCard variant="Default" title={"Intensive"} shortDescription={"Exam sprints and fast catch-up blocks."} price={"$449"} unit={"/ month"} featureIcon={"https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg"} feature01={"Private sessions"} feature02={"4 sessions / week"} feature03={"Weekly progress check-ins"} feature04={"Exam-day prep kit"} text={"ovNC8Ebph"} buttonText={"Choose Intensive"} buttonLink={"/contact"} />
            </div>
          </div>
        </div>
        <div className={styles["comparison"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content"]}>
              <div className={styles["top2"]}>
                <div className={styles["heading3"]}>
                  <h3 className={cx(tokens["text-heading-3"], styles["h3"])}>{"Comprehensive Comparison of Group, Private, and Intensive Learning Programs"}</h3>
                </div>
              </div>
              <div className={styles["bottom2"]}>
                <div className={styles["content2"]}>
                  <div className={styles["head"]}>
                    <div className={styles["n-01"]}>
                      <h5 className={cx(tokens["text-heading-5"], styles["feature"])}>{"Feature"}</h5>
                    </div>
                    <div className={styles["n-02"]}>
                      <h5 className={cx(tokens["text-heading-5"], styles["group"])}>{"Group"}</h5>
                    </div>
                    <div className={styles["n-03"]}>
                      <h5 className={cx(tokens["text-heading-5"], styles["private"])}>{"Private"}</h5>
                    </div>
                    <div className={styles["n-04"]}>
                      <h5 className={cx(tokens["text-heading-5"], styles["intensive"])}>{"Intensive"}</h5>
                    </div>
                  </div>
                  <div className={styles["compare-item"]}>
                    <div className={styles["n-012"]}>
                      <p className={cx(tokens["text-text-md"], styles["text2"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-022"]}>
                      <p className={cx(tokens["text-body"], styles["text3"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-032"]}>
                      <p className={cx(tokens["text-body"], styles["text4"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-042"]}>
                      <p className={cx(tokens["text-body"], styles["text5"])}>{"Text"}</p>
                    </div>
                  </div>
                  <div className={styles["compare-item2"]}>
                    <div className={styles["n-013"]}>
                      <p className={cx(tokens["text-text-md"], styles["text6"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-023"]}>
                      <p className={cx(tokens["text-body"], styles["text7"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-033"]}>
                      <p className={cx(tokens["text-body"], styles["text8"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-043"]}>
                      <p className={cx(tokens["text-body"], styles["text9"])}>{"Text"}</p>
                    </div>
                  </div>
                  <div className={styles["compare-item3"]}>
                    <div className={styles["n-014"]}>
                      <p className={cx(tokens["text-text-md"], styles["text10"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-024"]}>
                      <p className={cx(tokens["text-body"], styles["text11"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-034"]}>
                      <p className={cx(tokens["text-body"], styles["text12"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-044"]}>
                      <p className={cx(tokens["text-body"], styles["text13"])}>{"Text"}</p>
                    </div>
                  </div>
                  <div className={styles["compare-item4"]}>
                    <div className={styles["n-015"]}>
                      <p className={cx(tokens["text-text-md"], styles["text14"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-025"]}>
                      <p className={cx(tokens["text-body"], styles["text15"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-035"]}>
                      <p className={cx(tokens["text-body"], styles["text16"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-045"]}>
                      <p className={cx(tokens["text-body"], styles["text17"])}>{"Text"}</p>
                    </div>
                  </div>
                  <div className={styles["compare-item5"]}>
                    <div className={styles["n-016"]}>
                      <p className={cx(tokens["text-text-md"], styles["text18"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-026"]}>
                      <p className={cx(tokens["text-body"], styles["text19"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-036"]}>
                      <p className={cx(tokens["text-body"], styles["text20"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-046"]}>
                      <p className={cx(tokens["text-body"], styles["text21"])}>{"Text"}</p>
                    </div>
                  </div>
                  <div className={styles["compare-item6"]}>
                    <div className={styles["n-017"]}>
                      <p className={cx(tokens["text-text-md"], styles["text22"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-027"]}>
                      <p className={cx(tokens["text-body"], styles["text23"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-037"]}>
                      <p className={cx(tokens["text-body"], styles["text24"])}>{"Text"}</p>
                    </div>
                    <div className={styles["n-047"]}>
                      <p className={cx(tokens["text-body"], styles["text25"])}>{"Text"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["promise"]} data-reveal="">
          <div className={styles["container3"]}>
            <div className={styles["content3"]}>
              <div className={styles["heading4"]}>
                <div className={styles["heading5"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["the"])}>{"The"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["first-month"])}>{"first-month"}</h2>
                  <div className={styles["highlight2"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["promise2"])}>{"promise"}</h2>
                    <div className={styles["top-decor2"]} />
                    <div className={styles["bottom-decor2"]} />
                  </div>
                </div>
                <p className={cx(tokens["text-body"], styles["text26"])}>{"If it's not working after the first month, whether it's the wrong mentor, format, or fit, we'll re-match you for free or refund the month. Simple as that."}</p>
              </div>
              <Button variant="Default" buttonText={"Start risk-free"} link={"/contact"} newTab={false} />
            </div>
          </div>
        </div>
        <div className={styles["faqs"]} data-reveal="">
          <div className={styles["container4"]}>
            <div className={styles["content4"]}>
              <div className={styles["title"]}>
                <div className={styles["heading6"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["no"])}>{"No"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["h23"])}>{"stress,"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["no2"])}>{"no"}</h2>
                  <div className={styles["highlight3"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["surprises"])}>{"surprises"}</h2>
                    <div className={styles["top-decor3"]} />
                    <div className={styles["bottom-decor3"]} />
                  </div>
                </div>
              </div>
              <div className={styles["content5"]}>
                <GeneralAccordion variant="Desktop" n01Question={"How does the free first session work?"} n01Answer={"A 45-minute session where a mentor gets to know you, finds the right starting level, and builds a personal plan. You keep the plan whether you sign up or not."} n02Question={"One-on-one or group, which is better?"} n02Answer={"One-on-one gives you a pace and plan built entirely around you, while group sessions add peer energy at a lower cost. Your mentor will recommend the best fit after the free first session."} n03Question={"Who are the mentors?"} n03Answer={"All mentors are vetted educators with subject expertise and at least two years of teaching experience. They go through structured onboarding and receive regular feedback to keep quality high."} n04Question={"How do you track progress?"} n04Answer={"After each session your mentor logs notes and milestones reached. You'll see a clear summary in your dashboard, and your mentor will review it with you at the start of every next session."} n05Question={"Can we pause or cancel anytime?"} n05Answer={"Yes, no lock-in, no fees. You can pause for up to 30 days or cancel anytime. Just give us 24 hours' notice before your next scheduled session and we'll handle everything for you."} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
