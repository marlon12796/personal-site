import type { Dispatch, SetStateAction } from 'react'

export const kebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

export const kebabArray = (arr: string[]) => arr.map(kebabCase)

export const randomNumberText = (finalNum: string, setNumber: Dispatch<SetStateAction<string>>) => {
  let count = 0
  const interval = setInterval(() => {
    count++
    const newNum = Array.from({ length: finalNum.length }, () => Math.floor(Math.random() * 10)).join('')
    setNumber(newNum)
    if (count === 20) {
      clearInterval(interval)
      setNumber('404')
    }
  }, 80)
}
export const urlGeneretePreview = () => {
  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#333" offset="20%" />
        <stop stop-color="#222" offset="50%" />
        <stop stop-color="#333" offset="70%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#333" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

  const toBase64 = (str: string) => (typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str))

  const dataUrl = `data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`
  return dataUrl
}
