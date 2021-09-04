import styles from "./styles.module.scss"
import Link from "next/link"
import cn from "classnames"
import { ALIGN_TYPE, IItem } from "../../interface"
import { memo } from "react"

const Item = ({ title, id, alignItem = ALIGN_TYPE.HORIZONTAL }: IItem) => {
	return (
		<Link scroll={true} href={"/detail/" + id}>
			<div
				className={cn(styles["media"], {
					[styles[`is-${alignItem}`]]: alignItem,
				})}
			>
				<div className={styles["media-left"]}>
					<div className={styles["media-image"]}>
						<figure className={styles["image"]}>
							<img src={"https://picsum.photos/200"} />
						</figure>
					</div>
				</div>
				<div className={styles["media-content"]}>
					<div className={styles["name"]}>
						<h4>
							{title} - Lorem ipsum dolor sit amet, consectetur
							adipiscing elit-
						</h4>
					</div>
					<div>
						Sed dapibus efficitur nulla et varius. Duis sit amet
						massa scelerisque
					</div>
				</div>
			</div>
		</Link>
	)
}

export default memo(Item)
