import { useRouter } from "next/dist/client/router"
import IntersectionSections from "src/components/LazySection"
import { ISection } from "src/interface"

const sections: ISection[] = [
	{ sectionId: 1, title: "section_1", items: Array.from(new Array(5)) },
	{ sectionId: 2, title: "section_2", items: Array.from(new Array(5)) },
	{ sectionId: 1, title: "section_3", items: Array.from(new Array(5)) },
	{ sectionId: 2, title: "section_4", items: Array.from(new Array(5)) },
]

const DetailPage = (props: any) => {
	const router = useRouter()
	return (
		<div>
			<h1>Detail {router.query.id || "unknown"}</h1>
			<IntersectionSections sections={sections} />
		</div>
	)
}

export default DetailPage
