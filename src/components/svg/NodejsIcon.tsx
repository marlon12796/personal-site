import type { ImgHTMLAttributes } from 'react'

const NodejsIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src='https://nodejs.org/static/logos/nodejsHex.svg' alt='Node.js' {...props} loading='lazy' />
)

export default NodejsIcon
