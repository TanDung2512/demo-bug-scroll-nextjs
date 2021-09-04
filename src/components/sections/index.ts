import { FC } from "react"
import { ISection } from "../../interface"
import SectionHorizontal from "./SectionHorizontal"
import SectionVertical from "./SectionVertical"

export const mapSections: Record<number, FC<ISection>> = {
	1: SectionHorizontal,
	2: SectionVertical,
}
