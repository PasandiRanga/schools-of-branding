import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./About.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import AchievementCard from "./AchievementCard"
import Badge from "./Badge"
import ButtonIcon from "./ButtonIcon"
import CTAAbout from "./CTAAbout"
import PreTitle from "./PreTitle"
import PrinciplesCard from "./PrinciplesCard"
import SectionDecor from "./SectionDecor"
import TeachingCard from "./TeachingCard"
import TeamCard from "./TeamCard"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]} data-reveal="">
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <div className={styles["top"]}>
                <div className={styles["tilte"]}>
                  <PreTitle title={"Since 2018"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                  <div className={styles["heading"]}>
                    <h1 className={cx(tokens["text-heading-1"], styles["we"])}>{"We"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["started"])}>{"started"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["with"])}>{"with"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["one"])}>{"one"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["stubborn"])}>{"stubborn"}</h1>
                    <div className={styles["highlight"]}>
                      <h1 className={cx(tokens["text-heading-1"], styles["belief"])}>{"belief"}</h1>
                      <div className={styles["top-decor"]} />
                      <div className={styles["bottom-decor"]} />
                    </div>
                  </div>
                </div>
                <p className={cx(tokens["text-body"], styles["text"])}>{"There's no such thing as a kid who \"just isn't good at\" math, or reading, or code. There are only explanations that haven't clicked yet. BrightPath exists to find the one that does."}</p>
              </div>
              <div className={styles["bottom"]}>
                <div className={styles["content2"]}>
                  {/* TODO: external Framer module "Video" — reimplement or swap for an npm equivalent */}
                </div>
              </div>
            </div>
          </div>
          {/* TODO: external Framer module "CurvedTextPro" — reimplement or swap for an npm equivalent */}
          <SectionDecor variant="Default" />
        </div>
        <div className={styles["counter"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content3"]}>
              <AchievementCard variant="Default" number={"2018"} title={"Started with 6 learners"} bgColor={"rgb(201, 224, 242)"} shadow={"4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))"} />
              <AchievementCard variant="Default" number={"900+"} title={"Learners taught since"} bgColor={"rgb(253, 240, 190)"} shadow={"4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))"} />
              <AchievementCard variant="Default" number={"24"} title={"Mentors on the team"} bgColor={"rgb(224, 239, 250)"} shadow={"4px 4px 0px 0px var(--token-1155d13b-37e2-47ed-93ce-c08c2cfdd816, rgb(120, 170, 215))"} />
              <AchievementCard variant="Default" number={"4.9"} title={"Rating across 300+ reviews"} bgColor={"rgb(253, 240, 190)"} shadow={"4px 4px 0px 0px var(--token-a059f435-bb0e-48c5-ac68-2aad5474e6d7, rgb(240, 180, 0))"} />
            </div>
          </div>
        </div>
        <div className={styles["teach"]} data-reveal="">
          <div className={styles["container3"]}>
            <div className={styles["heading2"]}>
              <h2 className={cx(tokens["text-heading-2"], styles["how"])}>{"How"}</h2>
              <h2 className={cx(tokens["text-heading-2"], styles["we2"])}>{"we"}</h2>
              <div className={styles["highlight2"]}>
                <h2 className={cx(tokens["text-heading-2"], styles["teach2"])}>{"teach"}</h2>
                <div className={styles["top-decor2"]} />
                <div className={styles["bottom-decor2"]} />
              </div>
            </div>
            <div className={styles["content4"]}>
              <TeachingCard variant="Desktop" stepNumber={"01"} title={"Diagnose, don't assume"} description={"We never start from the textbook page a learner \"should\" be on. We find where understanding stops."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))"} />
              <TeachingCard variant="Desktop" stepNumber={"02"} title={"Explain until it clicks"} description={"Every mentor carries five ways to explain the same idea. If the first doesn't land, we don't repeat, it louder we switch."} iconBgColor={"rgb(224, 239, 250)"} iconShadow={"4px 4px 0px 0px var(--token-1155d13b-37e2-47ed-93ce-c08c2cfdd816, rgb(120, 170, 215))"} />
              <TeachingCard variant="Desktop" stepNumber={"03"} title={"Practice, then prove it"} description={"Small wins weekly, a written report monthly. Learners see their own progress that's where the motivation comes from."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-23b59c71-bcd9-4239-8358-53b6c3cc209e, rgb(27, 117, 188))"} />
            </div>
          </div>
        </div>
        <div className={styles["online"]} data-reveal="">
          <div className={styles["container4"]}>
            <div className={styles["content5"]}>
              <div className={styles["left"]}>
                <div className={styles["image"]} />
              </div>
              <div className={styles["right"]}>
                <div className={styles["heading3"]}>
                  <div className={styles["content6"]}>
                    <PreTitle title={"In-center & online"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                    <div className={styles["heading4"]}>
                      <h2 className={cx(tokens["text-heading-2"], styles["learn"])}>{"Learn"}</h2>
                      <h2 className={cx(tokens["text-heading-2"], styles["where"])}>{"where"}</h2>
                      <h2 className={cx(tokens["text-heading-2"], styles["you"])}>{"you"}</h2>
                      <div className={styles["highlight3"]}>
                        <h2 className={cx(tokens["text-heading-2"], styles["learn-best"])}>{"learn best"}</h2>
                        <div className={styles["top-decor3"]} />
                        <div className={styles["bottom-decor3"]} />
                      </div>
                    </div>
                  </div>
                  <p className={cx(tokens["text-body"], styles["text2"])}>{"Drop in at our center, or join live from home, same mentors, same materials, same progress reports every month."}</p>
                </div>
                <div className={styles["badges"]}>
                  <Badge variant="Gray" title={"After-school slots"} textColor={"rgb(16, 26, 38)"} />
                  <Badge variant="Gray" title={"Weekend groups"} textColor={"rgb(16, 26, 38)"} />
                  <Badge variant="Gray" title={"Live online"} textColor={"rgb(16, 26, 38)"} />
                  <Badge variant="Gray" title={"Homework help"} textColor={"rgb(16, 26, 38)"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["team"]} data-reveal="">
          <div className={styles["container5"]}>
            <div className={styles["content7"]}>
              <div className={styles["heading5"]}>
                <h2 className={cx(tokens["text-heading-2"], styles["meet"])}>{"Meet"}</h2>
                <h2 className={cx(tokens["text-heading-2"], styles["the"])}>{"the"}</h2>
                <div className={styles["highlight4"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["mentors"])}>{"mentors"}</h2>
                  <div className={styles["top-decor4"]} />
                  <div className={styles["bottom-decor4"]} />
                </div>
              </div>
              <div className={styles["mentors2"]}>
                <div className={styles["mentor"]}>
                  <TeamCard variant="Default" link={"/mentor/:slug"} />
                </div>
              </div>
              <div className={styles["cta"]}>
                <h6 className={cx(tokens["text-heading-6"], styles["h6"])}>{"Want to know more about our mentors?"}</h6>
                <ButtonIcon variant="Desktop" buttonText={"Meet the team"} link={"/mentor"} newTab={false} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["principle"]} data-reveal="">
          <div className={styles["container6"]}>
            <div className={styles["content8"]}>
              <div className={styles["heading6"]}>
                <h2 className={cx(tokens["text-heading-2"], styles["start"])}>{"Start"}</h2>
                <h2 className={cx(tokens["text-heading-2"], styles["where2"])}>{"where"}</h2>
                <div className={styles["highlight5"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["you-are"])}>{"you are"}</h2>
                  <div className={styles["top-decor5"]} />
                  <div className={styles["bottom-decor5"]} />
                </div>
              </div>
              <div className={styles["content9"]}>
                <PrinciplesCard variant="Desktop" number={"01"} title={"Small stays small"} description={"Four learners per group, forever. The moment groups grow, attention shrinks."} iconBgColor={"rgb(201, 224, 242)"} iconShadow={"4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))"} />
                <PrinciplesCard variant="Desktop" number={"02"} title={"Honest reports"} description={"If progress stalls, the report says so and what we're changing about it."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))"} />
                <PrinciplesCard variant="Desktop" number={"03"} title={"Mentors, vetted twice"} description={"Subject exam plus a live teaching audition. Most applicants don't pass."} iconBgColor={"rgb(224, 239, 250)"} iconShadow={"4px 4px 0px 0px var(--token-1155d13b-37e2-47ed-93ce-c08c2cfdd816, rgb(120, 170, 215))"} />
                <PrinciplesCard variant="Desktop" number={"04"} title={"No lock-in, ever"} description={"If we're not earning your month, you shouldn't be paying for it or wasting your hard-earned money."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-a059f435-bb0e-48c5-ac68-2aad5474e6d7, rgb(240, 180, 0))"} />
              </div>
            </div>
          </div>
        </div>
        <CTAAbout variant="Desktop" />
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
