export enum ALIGN_TYPE {
	HORIZONTAL = "horizontal",
	VERTICAL = "vertical",
}

export interface IItem {
	title: string
	id: number
	alignItem: ALIGN_TYPE
}

export interface IList {
	items: IItem[]
	alignItem: ALIGN_TYPE
}

export interface ISection {
	sectionId: number
	title: string
	items: any[]
	alignItem?: ALIGN_TYPE
}
