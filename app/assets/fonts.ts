import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const hollow = localFont({
    src: "../../public/LondrinaOutline.ttf"
})

export const inter = Inter({
    subsets: ["latin"]
});