import { useState } from "react"
import styles from "./GeneralAccordion.module.css"
import Accordion from "./Accordion"

interface Props {
  variant?: "Desktop" | "Phone"
  n01Question?: string
  n01Answer?: string
  n02Question?: string
  n02Answer?: string
  n03Question?: string
  n03Answer?: string
  n04Question?: string
  n04Answer?: string
  n05Question?: string
  n05Answer?: string
}

export default function GeneralAccordion({
  variant: variantProp,
  n01Question = "How does the free first session work?",
  n01Answer = "A 45-minute session where a mentor gets to know you, finds the right starting level, and builds a personal learning plan. You keep the plan whether you sign up or not.",
  n02Question = "One-on-one or group, which is better?",
  n02Answer = "One-on-one gives you a pace and plan built entirely around you, while group sessions add peer energy at a lower cost. Your mentor will recommend the best fit after the free first session.",
  n03Question = "Who are the mentors?",
  n03Answer = "All mentors are vetted educators with subject expertise and at least two years of teaching experience. They go through structured onboarding and receive regular feedback to keep quality high.",
  n04Question = "How do you track progress?",
  n04Answer = "After each session your mentor logs notes and milestones reached. You'll see a clear summary in your dashboard, and your mentor will review it with you at the start of every next session.",
  n05Question = "Can we pause or cancel anytime?",
  n05Answer = "Yes, no lock-in, no fees. You can pause for up to 30 days or cancel anytime. Just give us 24 hours' notice before your next scheduled session and we'll handle everything for you.",
}: Props) {
  const [toggled, setToggled] = useState(false)
  const variant = toggled ? "Phone" : (variantProp ?? "Desktop")

  return (
    <div className={styles["desktop"]} data-variant={variant} onClick={() => setToggled(t => !t)} style={{ cursor: "pointer" }}>
      <Accordion variant="Open - Desktop" />
      <Accordion variant="Close - Desktop" />
      <Accordion variant="Close - Desktop" />
      <Accordion variant="Close - Desktop" />
      <Accordion variant="Close - Desktop" />
      {/* TODO: external Framer module "Layout Jump Preventer" — reimplement or swap for an npm equivalent */}
    </div>
  )
}
