import cx from "./cx"
import tokens from "./tokens.module.css"
import styles from "./PricingCard.module.css"
import Badge from "./Badge"
import ListItem from "./ListItem"
import PricingButton from "./PricingButton"

interface Props {
  variant?: "Default" | "Popular" | "Phone" | "Phone - Popular"
  title?: string
  shortDescription?: string
  price?: string
  unit?: string
  featureIcon?: string
  feature01?: string
  feature02?: string
  feature03?: string
  feature04?: string
  text?: string
  buttonText?: string
  buttonLink?: string
}

export default function PricingCard({
  variant = "Default",
  title = "Group",
  shortDescription = "Small-group sessions, twice a week.",
  price = "$149",
  unit = "/ month",
  featureIcon = "https://framerusercontent.com/images/IMCc1IKcAGwVpb4GHFpE0frpE.svg",
  feature01 = "Groups of max 4",
  feature02 = "2 sessions / week",
  feature03 = "Monthly progress report",
  feature04 = "Monthly progress report",
  text = "ovNC8Ebph",
  buttonText = "See what’s included",
  buttonLink = "/pricing",
}: Props) {
  return (
    <div className={styles["default"]} data-variant={variant}>
      <div className={styles["top"]}>
        <div className={styles["pricing-header"]}>
          <div className={styles["title"]}>
            <Badge variant="Orange" title={"Popular"} textColor={"rgb(244, 240, 229)"} />
            <h6 className={cx(tokens["text-heading-6"], styles["title2"])}>{title}</h6>
          </div>
          <div className={styles["price"]}>
            <h2 className={cx(tokens["text-heading-md"], styles["shortdescription"])}>{shortDescription}</h2>
            <div className={styles["unit"]}>
              <p className={cx(tokens["text-body"], styles["price2"])}>{price}</p>
            </div>
          </div>
          <div className={styles["price-decription"]}>
            <div className={styles["description"]}>
              <p className={cx(tokens["text-body"], styles["unit2"])}>{unit}</p>
            </div>
          </div>
        </div>
        <div className={styles["border"]} />
        <div className={styles["pricing-features"]}>
          <ListItem variant="Default" />
          <ListItem variant="Default" />
          <ListItem variant="Default" />
          <ListItem variant="Default" />
        </div>
      </div>
      <div className={styles["bottom"]}>
        <PricingButton newTab={false} />
      </div>
    </div>
  )
}
