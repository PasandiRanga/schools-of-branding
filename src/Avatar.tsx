import styles from "./Avatar.module.css"

interface Props {
  image?: string
}

export default function Avatar({
  image = "https://framerusercontent.com/images/MZbjDzkYEkjQHtcFRrwOJqnUP0.jpg",
}: Props) {
  return (
    <div className={styles["default"]}>
      <div className={styles["image"]} style={image ? { backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center" } : undefined} />
    </div>
  )
}
