import { memo, useCallback } from "react"
import { ALIGN_TYPE, IList } from "../../interface"
import Item from "../item"
import styles from "./styles.module.scss"

const List = ({ items = [], alignItem = ALIGN_TYPE.HORIZONTAL }: IList) => {
	const renderItems = useCallback(() => {
		return items.map((item: any, index: number) => {
			return (
				<li className={styles.item} key={index}>
					<Item
						title={`ITEM ${index}th`}
						id={index}
						alignItem={alignItem}
					/>
				</li>
			)
		})
	}, [items])
	return <ul className={styles.list}>{renderItems()}</ul>
}

export default memo(List)
