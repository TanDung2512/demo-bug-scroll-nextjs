import IntersectionList from "@researchgate/react-intersection-list"
import { useCallback } from "react"
import { ISection } from "../../interface"
import { mapSections } from "../sections"

const IntersectionSections = ({
	sections = [],
	pageSize = 1,
}: {
	sections: ISection[]
	pageSize?: number
}) => {
	const itemsRenderer = useCallback((items, ref) => {
		return <div ref={ref}>{items}</div>
	}, [])

	const renderItem = useCallback(
		(index) => {
			const sectionProps = sections[index]
			const sectionId: number = sections[index].sectionId
			const SectionComp = mapSections[sectionId]
			if (SectionComp) {
				return <SectionComp key={index} {...sectionProps} />
			}
			return <></>
		},
		[sections]
	)

	return (
		<IntersectionList
			items={sections}
			itemsRenderer={itemsRenderer}
			renderItem={renderItem}
			threshold={"300px"}
			pageSize={pageSize}
		/>
	)
}

export default IntersectionSections
