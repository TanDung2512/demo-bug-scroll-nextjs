import IntersectionSections from "../../components/LazySection"
import { ISection } from "../../interface"

const sections: ISection[] = [
	{ sectionId: 1, title: "section_1", items: Array.from(new Array(5)) },
	{ sectionId: 2, title: "section_2", items: Array.from(new Array(5)) },
	{ sectionId: 1, title: "section_3", items: Array.from(new Array(5)) },
	{ sectionId: 2, title: "section_4", items: Array.from(new Array(5)) },
	{ sectionId: 1, title: "section_5", items: Array.from(new Array(5)) },
	{ sectionId: 2, title: "section_6", items: Array.from(new Array(5)) },
	{ sectionId: 1, title: "section_7", items: Array.from(new Array(5)) },
]
const HomePage = () => {
	return (
		<div>
			<IntersectionSections sections={sections} />
		</div>
	)
}

export default HomePage
