import { type Locale, locales } from '@/i18n/config'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/routing'
import { useParams } from 'next/navigation'
export const NavbarLanguages = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const onSelectChange = (val: string) => {
    const nextLocale = val as Locale
    startTransition(() => {
      router.replace({ pathname, params }, { locale: nextLocale })
    })
  }
  return (
    <Select onValueChange={(val) => onSelectChange(val)}>
      <SelectTrigger className='w-max'>
        <SelectValue placeholder='Idiomas' />
      </SelectTrigger>
      <SelectContent className='z-[600]'>
        {locales.map((cur) => (
          <SelectItem value={cur} key={cur}>
            {cur.toUpperCase()}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
