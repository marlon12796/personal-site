import type { ImgHTMLAttributes } from 'react'

const PostgreSQLIcon = (props: ImgHTMLAttributes<HTMLImageElement>) => (
  <img src='https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg' alt='PostgreSQL' {...props} loading='lazy' />
)

export default PostgreSQLIcon
