import { ALIGN_TYPE, ISection } from "../../interface"
import List from "../list"
import styles from "./styles.module.scss"

const Section = ({
	items = [],
	title = "",
	alignItem = ALIGN_TYPE.HORIZONTAL,
}: ISection) => {
	return (
		<section className={styles["section"]}>
			<div className={styles["title-wrapper"]}>
				<h3 className={styles.title}>{title}</h3>
			</div>
			<List items={items} alignItem={alignItem} />
		</section>
	)
}

export default Section
