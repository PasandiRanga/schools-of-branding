import { useEffect } from "react"
import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./Contact.module.css"
import "./theme.css"
import "./reveal.css"
import { initReveal } from "./reveal"
import ContactFormButton from "./ContactFormButton"
import GeneralAccordion from "./GeneralAccordion"
import PreTitle from "./PreTitle"
import SectionDecor from "./SectionDecor"
import StepCard from "./StepCard"

export default function Page() {
  useEffect(() => initReveal(), [])

  return (
    <div className={styles["desktop"]}>
      <div className={styles["main"]}>
        <div className={styles["hero"]} data-reveal="">
          <div className={styles["container"]}>
            <div className={styles["content"]}>
              <div className={styles["left"]}>
                <div className={styles["top"]}>
                  <div className={styles["tilte"]}>
                    <PreTitle title={"Replies within one working day"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                    <div className={styles["heading"]}>
                      <h1 className={cx(tokens["text-heading-1"], styles["let-s"])}>{"Let's"}</h1>
                      <h1 className={cx(tokens["text-heading-1"], styles["find"])}>{"find"}</h1>
                      <h1 className={cx(tokens["text-heading-1"], styles["the"])}>{"the"}</h1>
                      <h1 className={cx(tokens["text-heading-1"], styles["right"])}>{"right"}</h1>
                      <div className={styles["highlight"]}>
                        <h1 className={cx(tokens["text-heading-1"], styles["fit"])}>{"fit"}</h1>
                        <div className={styles["top-decor"]} />
                        <div className={styles["bottom-decor"]} />
                      </div>
                    </div>
                  </div>
                  <p className={cx(tokens["text-body"], styles["text"])}>{"Tell us a little about the learner and we'll come back with a suggested program, level and a free first session slot."}</p>
                </div>
                <div className={styles["bottom"]}>
                  <div className={styles["email"]}>
                    <div className={styles["icon"]}>
                      <div className={styles["image"]} />
                    </div>
                    <div className={styles["content2"]}>
                      <p className={cx(tokens["text-body"], styles["email2"])}>{"Email"}</p>
                      <h6 className={cx(tokens["text-heading-6"], styles["hello-yourbrand-com"])}>{"hello@yourbrand.com"}</h6>
                    </div>
                  </div>
                  <div className={styles["time"]}>
                    <div className={styles["icon2"]}>
                      <div className={styles["image2"]} />
                    </div>
                    <div className={styles["content3"]}>
                      <p className={cx(tokens["text-body"], styles["hours"])}>{"Hours"}</p>
                      <h6 className={cx(tokens["text-heading-6"], styles["h6"])}>{"Mon–Sat, 9:00–19:00"}</h6>
                    </div>
                  </div>
                  <div className={styles["location"]}>
                    <div className={styles["icon3"]}>
                      <div className={styles["image3"]} />
                    </div>
                    <div className={styles["content4"]}>
                      <p className={cx(tokens["text-body"], styles["where"])}>{"Where"}</p>
                      <h6 className={cx(tokens["text-heading-6"], styles["h62"])}>{"In-center and live online"}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles["right2"]}>
                <div className={styles["content5"]}>
                  <div className={styles["heading2"]}>
                    <h4 className={cx(tokens["text-heading-4"], styles["book-the-free-session"])}>{"Book the free session"}</h4>
                  </div>
                  <div className={styles["form"]}>
                    <div className={styles["top2"]}>
                      <div className={styles["name"]}>
                        <p className={cx(tokens["text-text-md"], styles["your-name"])}>{"Your name*"}</p>
                        <input className={styles["form-input"]} type="text" name="your-name-" aria-label={"Your name*"} />
                      </div>
                      <div className={styles["email-address"]}>
                        <p className={cx(tokens["text-text-md"], styles["email-address2"])}>{"Email address*"}</p>
                        <input className={styles["form-input"]} type="email" name="email-address-" aria-label={"Email address*"} />
                      </div>
                      <div className={styles["program-type"]}>
                        <p className={cx(tokens["text-text-md"], styles["program"])}>{"Program*"}</p>
                        <div className={styles["list"]}>
                          <div className={styles["mathematics"]}>
                            {/* TODO: unsupported node (likely a form input) — Framer does not expose it */}
                            <p className={cx(tokens["text-body"], styles["mathematics2"])}>{"Mathematics"}</p>
                          </div>
                          <div className={styles["science"]}>
                            {/* TODO: unsupported node (likely a form input) — Framer does not expose it */}
                            <p className={cx(tokens["text-body"], styles["science2"])}>{"Science"}</p>
                          </div>
                          <div className={styles["english"]}>
                            {/* TODO: unsupported node (likely a form input) — Framer does not expose it */}
                            <p className={cx(tokens["text-body"], styles["english2"])}>{"English"}</p>
                          </div>
                          <div className={styles["coding"]}>
                            {/* TODO: unsupported node (likely a form input) — Framer does not expose it */}
                            <p className={cx(tokens["text-body"], styles["coding2"])}>{"Coding"}</p>
                          </div>
                          <div className={styles["not-sure-yet"]}>
                            {/* TODO: unsupported node (likely a form input) — Framer does not expose it */}
                            <p className={cx(tokens["text-body"], styles["not-sure-yet2"])}>{"Not sure yet"}</p>
                          </div>
                        </div>
                      </div>
                      <div className={styles["message"]}>
                        <p className={cx(tokens["text-text-md"], styles["text2"])}>{"Tell us about the learner"}</p>
                        <textarea className={styles["form-input"]} name="tell-us-about-the-learner" rows={5} aria-label={"Tell us about the learner"} />
                      </div>
                    </div>
                    <div className={styles["bottom2"]}>
                      <ContactFormButton variant="Default" />
                      <p className={cx(tokens["text-body"], styles["text3"])}>{"No commitment, the first session is free either way."}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <SectionDecor variant="Gray" />
        </div>
        <div className={styles["process"]} data-reveal="">
          <div className={styles["container2"]}>
            <div className={styles["content6"]}>
              <div className={styles["top3"]}>
                <div className={styles["heading3"]}>
                  <PreTitle title={"No surprises"} textColor={"rgb(16, 26, 38)"} bgColor={"rgb(224, 239, 250)"} dotColor={"rgb(251, 200, 11)"} />
                  <div className={styles["heading4"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["what"])}>{"What"}</h2>
                    <h2 className={cx(tokens["text-heading-2"], styles["happens"])}>{"happens"}</h2>
                    <h2 className={cx(tokens["text-heading-2"], styles["after"])}>{"after"}</h2>
                    <h2 className={cx(tokens["text-heading-2"], styles["you"])}>{"you"}</h2>
                    <div className={styles["highlight2"]}>
                      <h2 className={cx(tokens["text-heading-2"], styles["send-it"])}>{"send it"}</h2>
                      <div className={styles["top-decor2"]} />
                      <div className={styles["bottom-decor2"]} />
                    </div>
                  </div>
                </div>
                <p className={cx(tokens["text-body"], styles["text4"])}>{"Every learner is different. In the free first session we find the right starting point then move at a pace that fits."}</p>
              </div>
              <div className={styles["bottom3"]}>
                <StepCard variant="Default" stepNumber={"01"} title={"We read it "} sessionLabel={"— same working day"} description={"A real mentor looks at what you wrote not a form router."} iconBgColor={"rgb(201, 224, 242)"} iconShadow={"4px 4px 0px 0px var(--token-d46389a1-c11a-499f-a8d1-1f5543960045, rgb(27, 117, 188))"} />
                <StepCard variant="Default" stepNumber={"02"} title={"Match a mentor"} sessionLabel={"— within 1 working day"} description={"Picked for the learner's level and the program you chose."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-5bafd284-4248-4179-8fdd-7a454d5f3ef0, rgb(240, 180, 0))"} />
                <StepCard variant="Default" stepNumber={"03"} title={"You get times"} sessionLabel={"— by email"} description={"A short email with two or three slots for the free session."} iconBgColor={"rgb(224, 239, 250)"} iconShadow={"4px 4px 0px 0px var(--token-1155d13b-37e2-47ed-93ce-c08c2cfdd816, rgb(120, 170, 215))"} />
                <StepCard variant="Default" stepNumber={"04"} title={"You meet, free"} sessionLabel={"— no commitment"} description={"No card on file. Decide afterward if you'd like to continue."} iconBgColor={"rgb(253, 240, 190)"} iconShadow={"4px 4px 0px 0px var(--token-23b59c71-bcd9-4239-8358-53b6c3cc209e, rgb(27, 117, 188))"} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["faqs"]} data-reveal="">
          <div className={styles["container3"]}>
            <div className={styles["content7"]}>
              <div className={styles["title"]}>
                <div className={styles["heading5"]}>
                  <h2 className={cx(tokens["text-heading-2"], styles["no"])}>{"No"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["h2"])}>{"stress,"}</h2>
                  <h2 className={cx(tokens["text-heading-2"], styles["no2"])}>{"no"}</h2>
                  <div className={styles["highlight3"]}>
                    <h2 className={cx(tokens["text-heading-2"], styles["surprises"])}>{"surprises"}</h2>
                    <div className={styles["top-decor3"]} />
                    <div className={styles["bottom-decor3"]} />
                  </div>
                </div>
              </div>
              <div className={styles["content8"]}>
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
