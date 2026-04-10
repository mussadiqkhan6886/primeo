import {Syne, Bricolage_Grotesque, Arimo} from "next/font/google"

export const syne = Syne({
    weight: ["400", "500", "600", "700", "800"],
    style: ["normal"],
    subsets: ["latin"]
})

export const bricolage = Bricolage_Grotesque({
    weight: ["200", "300", "400", "500", '600', '700', '800'],
    style: ["normal"],
    subsets: ["latin"]
})

export const arimo = Arimo({
    weight: ["400", "500"],
    style: ["italic", "normal"],
    subsets: ["latin"]
})