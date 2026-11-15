import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import { CMS } from "./cms"
import styles from "./Page.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import Badge from "./Badge"
import Button from "./Button"
import ButtonIcon from "./ButtonIcon"
import CTA from "./CTA"
import Counter from "./Counter"
import GeneralAccordion from "./GeneralAccordion"
import KeyBenefitsCard from "./KeyBenefitsCard"
import LevelCard from "./LevelCard"
import PreTitle from "./PreTitle"
import PricingCard from "./PricingCard"
import ProgramCard from "./ProgramCard"
import SectionDecor from "./SectionDecor"
import StepCard from "./StepCard"
import TeamCard from "./TeamCard"
import TestimonialCard from "./TestimonialCard"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]} data-reveal="">
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <div className={styles["heading"]}>
                <div className={styles["tilte"]}>
                  <PreTitle title={"All ages & levels - In-center & online"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                  <div className={styles["heading2"]}>
                    <h1 className={cx(tokens["text-heading-1"], styles["learning"])}>{"Learning"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["that"])}>{"that"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["fits"])}>{"fits"}</h1>
                    <h1 className={cx(tokens["text-heading-1"], styles["the"])}>{"the"}</h1>
                    <div className={styles["highlight"]}>
                      <h1 className={cx(tokens["text-heading-1"], styles["learner"])}>{"Learner"}</h1>
                      <div className={styles["top-decor"]} />
                      <div className={styles["bottom-decor"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["buttons"]}>
                  <Button variant="Primary" buttonText={"Try a free session"} link={"/contact"} newTab={false} />
                  <Button variant="White" buttonText={"Browse programs "} link={"/program"} newTab={false} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles["content2"]}>
            <div className={styles["content-row"]}>
              <div className={styles["left"]}>
                <img className={styles["image"]} src={"https://framerusercontent.com/images/DXRnxyyhPn9LDKJmKPngzjLAtOs.jpg"} alt={"Hero Image"} />
                <img className={styles["decor"]} src={"https://framerusercontent.com/images/aA8bUrKmf4GfJNsY0xEjF5I75gs.svg"} alt={"Decoration Image"} />
              </div>
              <div className={styles["center"]}>
                <img className={styles["image2"]} src={"https://framerusercontent.com/images/IDvbnPdgekBiLQ5t2Zb7H2CZoY.jpg"} alt={"Hero Image"} />
              </div>
              <div className={styles["right"]}>
                <div className={styles["image3"]}>
                  <img className={styles["decor2"]} src={"https://framerusercontent.com/images/AfZGN6DSouiNYotVm1vb4TQpbl8.svg"} alt={"Decoration Image"} />
                </div>
              </div>
            </div>
            <div className={styles["ticker-text"]}>
              {/* TODO: external Framer module "CurvedTextPro" — reimplement or swap for an npm equivalent */}
            </div>
          </div>
          <SectionDecor variant="Gray" />
        </div>
        <div className={styles["program"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content3"]}>
              <div className={styles["top"]}>
                <div className={styles["heading3"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["pick"])}>{"Pick"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["a"])}>{"a"}</h2>
                  <div className={styles["highlight2"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["program2"])}>{"program"}</h2>
                    <div className={styles["top-decor2"]} />
                    <div className={styles["bottom-decor2"]} />
                  </div>
                </div>
                <Button variant="Primary" buttonText={"All programs"} link={"/program"} newTab={false} />
              </div>
              <div className={styles["bottom"]}>
                <div className={styles["programs"]}>
                  <div className={styles["program3"]}>
                    {CMS["Program"].map((item, i) => (
                      <ProgramCard key={i} icon={String(item["Icon"] ?? "")} title={String(item["Title"] ?? "")} shortDescription={String(item["Info"] ?? "")} image={String(item["Thumbnail"] ?? "")} cardBgColor={"rgb(201, 224, 242)"} iconBgColor={"rgb(201, 224, 242)"} iconShadowBg={"rgb(27, 117, 188)"} link={"/program/:slug"} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["counter"]} data-reveal="">
          <div className={styles["container3"]}>
            <div className={styles["content4"]}>
              <div className={styles["top2"]}>
                <div className={styles["heading4"]}>
                  <h3 className={cx(tokens["text-heading-3"], styles["h3"])}>{"Building strong academic foundations through personalized learning experiences"}</h3>
                </div>
                <Button variant="White" buttonText={"Our story"} link={"/about"} newTab={false} />
              </div>
              <div className={styles["bottom2"]}>
                <div className={styles["left2"]}>
                  <div className={styles["content5"]}>
                    <Counter variant="Default" number={"900+"} title={"Learners since 2018 "} />
                    <Counter variant="Flip" number={"92%"} title={"Improve within one term"} />
                    <Counter variant="Default" number={"4.9/5"} title={"Rating across 300+ reviews"} />
                    <div className={styles["bottom3"]}>
                      <div className={styles["dot"]}>
                        <div className={styles["done"]} />
                      </div>
                      <p className={cx(tokens["text-body"], styles["text"])}>{"Trusted by families. Proven by student success."}</p>
                    </div>
                  </div>
                </div>
                <div className={styles["right2"]}>
                  <div className={styles["image4"]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["step"]} data-reveal="">
          <div className={styles["container4"]}>
            <div className={styles["content6"]}>
              <div className={styles["top3"]}>
                <div className={styles["left3"]}>
                  <div className={styles["content7"]}>
                    <div className={styles["top4"]}>
                      <div className={styles["heading5"]}>
                        <h2 className={cx(tokens["text-heading-2"], styles["how"])}>{"How"}</h2>
                        <h2 className={cx(tokens["text-heading-2"], styles["it"])}>{"it"}</h2>
                        <div className={styles["highlight3"]}>
                          <h2 className={cx(tokens["text-heading-2"], styles["works"])}>{"works"}</h2>
                          <div className={styles["top-decor3"]} />
                          <div className={styles["bottom-decor3"]} />
                        </div>
                      </div>
                      <p className={cx(tokens["text-body"], styles["text2"])}>{"Three steps, three weeks from first meeting to a plan you can actually see progress on."}</p>
                    </div>
                    <div className={styles["bottom4"]}>
                      <img className={styles["image5"]} src={"https://framerusercontent.com/images/boG6oa6E52k8sizhPr7VrDxo3eU.jpg"} alt={""} />
                    </div>
                  </div>
                </div>
                <div className={styles["right3"]}>
                  <div className={styles["content8"]}>
                    <StepCard variant="Default" stepNumber={"01"} title={"Meet & assess"} sessionLabel={"— session one"} description={"A free first session to get to know the learner and find exactly where the gaps are."} iconBgColor={"rgb(201, 224, 242)"} iconShadow={"4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))"} />
                    <StepCard variant="Default" stepNumber={"02"} title={"Match & plan"} sessionLabel={"— within 48 hours"} description={"We pair them with the right mentor and build a week-by-week learning plan."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))"} />
                    <StepCard variant="Default" stepNumber={"03"} title={"Learn & report"} sessionLabel={"— ongoing"} description={"Sessions in-center or online, with a plain-language progress report every month."} iconBgColor={"rgb(224, 239, 250)"} iconShadow={"4px 4px 0px 0px var(--token-1155d13b-37e2-47ed-93ce-c08c2cfdd816, rgb(120, 170, 215))"} />
                  </div>
                </div>
              </div>
              <div className={styles["bottom5"]}>
                <KeyBenefitsCard variant="Default" title={"Certified mentors"} description={"Real teachers, vetted twice, trained in our method."} icon={"https://framerusercontent.com/images/KnuAAevL4eKiiHfDiUtsXamYOls.svg"} />
                <KeyBenefitsCard variant="Default" title={"Small by design"} description={"One-on-one or groups of four, never a crowd."} icon={"https://framerusercontent.com/images/KnuAAevL4eKiiHfDiUtsXamYOls.svg"} />
                <KeyBenefitsCard variant="Default" title={"Progress you can see"} description={"A clear written report every single month."} icon={"https://framerusercontent.com/images/KnuAAevL4eKiiHfDiUtsXamYOls.svg"} />
                <KeyBenefitsCard variant="Default" title={"No lock-in"} description={"Month to month. Pause or stop whenever you need."} icon={"https://framerusercontent.com/images/KnuAAevL4eKiiHfDiUtsXamYOls.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["team"]} data-reveal="">
          <div className={styles["container5"]}>
            <div className={styles["content9"]}>
              <div className={styles["heading6"]}>
                <h2 className={cx(tokens["text-heading-2"], styles["meet"])}>{"Meet"}</h2>
                <h2 className={cx(tokens["text-heading-2"], styles["the2"])}>{"the"}</h2>
                <div className={styles["highlight4"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["mentors"])}>{"mentors"}</h2>
                  <div className={styles["top-decor4"]} />
                  <div className={styles["bottom-decor4"]} />
                </div>
              </div>
              <div className={styles["mentors2"]}>
                <div className={styles["mentor"]}>
                  {CMS["Mentor"].map((item, i) => (
                    <TeamCard key={i} image={String(item["Image"] ?? "")} name={String(item["Title"] ?? "")} jobTitle={String(item["Subject"] ?? "")} shortDescription={String(item["Info"] ?? "")} bgColor={"rgb(27, 117, 188)"} titleColor={"rgb(244, 240, 229)"} infoColor={"rgb(244, 240, 229)"} link={"/mentor/:slug"} />
                  ))}
                </div>
              </div>
              <div className={styles["cta"]}>
                <h6 className={cx(tokens["text-heading-6"], styles["h6"])}>{"Want to know more about our mentors?"}</h6>
                <ButtonIcon variant="Desktop" buttonText={"Meet the team"} link={"/mentor"} newTab={false} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["level"]} data-reveal="">
          <div className={styles["container6"]}>
            <div className={styles["content10"]}>
              <div className={styles["heading7"]}>
                <div className={styles["left4"]}>
                  <PreTitle title={"Levels"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                  <div className={styles["heading8"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["start"])}>{"Start"}</h2>
                    <h2 className={cx(tokens["text-heading-2"], styles["where"])}>{"where"}</h2>
                    <div className={styles["highlight5"]}>
                      <h2 className={cx(tokens["text-heading-2"], styles["you-are"])}>{"you are"}</h2>
                      <div className={styles["top-decor5"]} />
                      <div className={styles["bottom-decor5"]} />
                    </div>
                  </div>
                </div>
                <div className={styles["right4"]}>
                  <p className={cx(tokens["text-body"], styles["text3"])}>{"Every learner is different. In the free first session we find the right starting point then move at a pace that fits."}</p>
                </div>
              </div>
              <div className={styles["content11"]}>
                <LevelCard variant="Desktop" title={"Just starting"} description={"New to the subject, we build the basics first."} icon={"https://framerusercontent.com/images/dcraAmz3c9gUYZgYEMHuJXrFI.svg"} iconBgColor={"rgb(201, 224, 242)"} iconShadow={"4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))"} link={"/program"} linkIcon={"https://framerusercontent.com/images/CAbS9gkiotvmVlJ57grEiwkR3A.svg"} />
                <LevelCard variant="Desktop" title={"Catching up"} description={"Fill the gaps and get back on track."} icon={"https://framerusercontent.com/images/AYMHLEK5zOD5MEkUXZ081ocExpA.svg"} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))"} link={"/program"} linkIcon={"https://framerusercontent.com/images/CAbS9gkiotvmVlJ57grEiwkR3A.svg"} />
                <LevelCard variant="Desktop" title={"Keeping pace"} description={"Weekly practice and homework support."} icon={"https://framerusercontent.com/images/0aSfm0yeWmNFsGBPbqBVEis16Hk.svg"} iconBgColor={"rgb(224, 239, 250)"} iconShadow={"4px 4px 0px 0px var(--token-1155d13b-37e2-47ed-93ce-c08c2cfdd816, rgb(120, 170, 215))"} link={"/program"} linkIcon={"https://framerusercontent.com/images/CAbS9gkiotvmVlJ57grEiwkR3A.svg"} />
                <LevelCard variant="Desktop" title={"Racing ahead"} description={"Advanced learning & exam prep."} icon={"https://framerusercontent.com/images/48YajU9Z1n39ruucA21hRyoV5E.svg"} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-a059f435-bb0e-48c5-ac68-2aad5474e6d7, rgb(240, 180, 0))"} link={"/program"} linkIcon={"https://framerusercontent.com/images/CAbS9gkiotvmVlJ57grEiwkR3A.svg"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["online"]} data-reveal="">
          <div className={styles["container7"]}>
            <div className={styles["content12"]}>
              <div className={styles["left5"]}>
                <div className={styles["image6"]} />
              </div>
              <div className={styles["right5"]}>
                <div className={styles["heading9"]}>
                  <div className={styles["content13"]}>
                    <PreTitle title={"In-center & online"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                    <div className={styles["heading10"]}>
                      <h2 className={cx(tokens["text-heading-2"], styles["learn"])}>{"Learn"}</h2>
                      <h2 className={cx(tokens["text-heading-2"], styles["where2"])}>{"where"}</h2>
                      <h2 className={cx(tokens["text-heading-2"], styles["you"])}>{"you"}</h2>
                      <div className={styles["highlight6"]}>
                        <h2 className={cx(tokens["text-heading-2"], styles["learn-best"])}>{"learn best"}</h2>
                        <div className={styles["top-decor6"]} />
                        <div className={styles["bottom-decor6"]} />
                      </div>
                    </div>
                  </div>
                  <p className={cx(tokens["text-body"], styles["text4"])}>{"Drop in at our center, or join live from home same mentors, same materials, same progress reports every month."}</p>
                </div>
                <div className={styles["badge-button"]}>
                  <div className={styles["badges"]}>
                    <Badge variant="Default" title={"After-school slots"} textColor={"rgb(16, 26, 38)"} />
                    <Badge variant="Default" title={"Weekend groups"} textColor={"rgb(16, 26, 38)"} />
                    <Badge variant="Default" title={"Live online"} textColor={"rgb(16, 26, 38)"} />
                    <Badge variant="Default" title={"Homework help"} textColor={"rgb(16, 26, 38)"} />
                  </div>
                  <Button variant="Primary" buttonText={"See schedules"} link={"/contact"} newTab={false} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["testimonial"]} data-reveal="">
          <div className={styles["container8"]}>
            <div className={styles["content14"]}>
              <div className={styles["title"]}>
                <div className={styles["heading11"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["what"])}>{"What"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["families"])}>{"families"}</h2>
                  <div className={styles["highlight7"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["say"])}>{"say"}</h2>
                    <div className={styles["top-decor7"]} />
                    <div className={styles["bottom-decor7"]} />
                  </div>
                </div>
              </div>
              <div className={styles["content15"]}>
                <TestimonialCard star={"https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg"} description={"“Two terms with Maya and my son went from dreading math tests to asking for extra practice.”"} avatar={"https://framerusercontent.com/images/0sE3chb22chPj5tHJ26QFckU.jpg"} name={"Sophia Taylor"} job={"Parent · Mathematics"} bgColor={"rgb(201, 224, 242)"} />
                <TestimonialCard star={"https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg"} description={"“The monthly reports are gold. I finally know what's happening in my daughter's learning.”"} avatar={"https://framerusercontent.com/images/boQ2HevGeqRIeV60xUZOqxtlJk.jpg"} name={"Daniel Cooper"} job={"Parent · English"} bgColor={"rgb(224, 239, 250)"} />
                <TestimonialCard star={"https://framerusercontent.com/images/enQLWX9tQeInE6cPwCWPGi555o.svg"} description={"“She took the coding class \"for fun\". Now she's building her own website and exploring ideas at 13.”"} avatar={"https://framerusercontent.com/images/XlrwqDmAKOqkC79DB4REfUQvfY.jpg"} name={"Stella Adams"} job={"Parent · Coding"} bgColor={"rgb(253, 240, 190)"} />
              </div>
              <div className={styles["bottom-text"]}>
                <div className={styles["content16"]}>
                  <img className={styles["image7"]} src={"https://framerusercontent.com/images/aafGsNImwiSPjzaZXn4awk0dvI.svg"} alt={""} />
                  <p className={cx(tokens["text-text-md"], styles["text5"])}>{"4.9 / 5  Based on 200+ reviews"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["price"]} data-reveal="">
          <div className={styles["container9"]}>
            <div className={styles["content17"]}>
              <div className={styles["title2"]}>
                <div className={styles["heading12"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["simple"])}>{"Simple"}</h2>
                  <div className={styles["highlight8"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["plans"])}>{"plans"}</h2>
                    <div className={styles["top-decor8"]} />
                    <div className={styles["bottom-decor8"]} />
                  </div>
                </div>
                <p className={cx(tokens["text-body"], styles["text6"])}>{"Month to month. Pause or switch anytime."}</p>
              </div>
              <div className={styles["content18"]}>
                <PricingCard variant="Default" title={"Group"} shortDescription={"Small-group sessions, twice a week."} price={"$149"} unit={"/ month"} featureIcon={"https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg"} feature01={"Groups of max 4"} feature02={"2 sessions / week"} feature03={"Monthly progress report"} feature04={"Monthly progress report"} text={"ovNC8Ebph"} buttonText={"See what’s included"} buttonLink={"/pricing"} />
                <PricingCard variant="Popular" title={"Private"} shortDescription={"A dedicated mentor, fully personal pace."} price={"$289"} unit={"/ month"} featureIcon={"https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg"} feature01={"One-on-one sessions"} feature02={"2 sessions / week"} feature03={"Custom learning plan"} feature04={"Priority scheduling"} text={"QJ8kw8szL"} buttonText={"See what’s included"} buttonLink={"/pricing"} />
                <PricingCard variant="Default" title={"Intensive"} shortDescription={"Exam sprints and fast catch-up blocks."} price={"$449"} unit={"/ month"} featureIcon={"https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg"} feature01={"Private sessions"} feature02={"4 sessions / week"} feature03={"Weekly progress check-ins"} feature04={"Exam-day prep kit"} text={"ovNC8Ebph"} buttonText={"See what’s included"} buttonLink={"/pricing"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["faqs"]} data-reveal="">
          <div className={styles["container10"]}>
            <div className={styles["content19"]}>
              <div className={styles["title3"]}>
                <div className={styles["heading13"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["no"])}>{"No"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["h2"])}>{"stress,"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["no2"])}>{"no"}</h2>
                  <div className={styles["highlight9"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["surprises"])}>{"surprises"}</h2>
                    <div className={styles["top-decor9"]} />
                    <div className={styles["bottom-decor9"]} />
                  </div>
                </div>
              </div>
              <div className={styles["content20"]}>
                <GeneralAccordion variant="Desktop" n01Question={"How does the free first session work?"} n01Answer={"A 45-minute session where a mentor gets to know you, finds the right starting level, and builds a personal learning plan. You keep the plan whether you sign up or not."} n02Question={"One-on-one or group, which is better?"} n02Answer={"One-on-one gives you a pace and plan built entirely around you, while group sessions add peer energy at a lower cost. Your mentor will recommend the best fit after the free first session."} n03Question={"Who are the mentors?"} n03Answer={"All mentors are vetted educators with subject expertise and at least two years of teaching experience. They go through structured onboarding and receive regular feedback to keep quality high."} n04Question={"How do you track progress?"} n04Answer={"After each session your mentor logs notes and milestones reached. You'll see a clear summary in your dashboard, and your mentor will review it with you at the start of every next session."} n05Question={"Can we pause or cancel anytime?"} n05Answer={"Yes, no lock-in, no fees. You can pause for up to 30 days or cancel anytime. Just give us 24 hours' notice before your next scheduled session and we'll handle everything for you."} />
              </div>
            </div>
          </div>
        </div>
        <CTA variant="Desktop" />
      </div>
      {/* TODO: external Framer module "Smooth Scroll" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
