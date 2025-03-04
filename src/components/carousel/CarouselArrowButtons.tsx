import { ButtonHTMLAttributes } from 'react'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  typeButton: 'left' | 'right'
  onClick: () => void
}
export const CarouselButtons = ({ children, onClick, typeButton, ...props }: ButtonProps) => {
  return (
    <Button
      className={cn(
        'absolute bottom-1/2 translate-y-1/2 rounded-full bg-white/60 p-0 size-8 shadow-md hidden disabled:cursor-not-allowed md:flex',
        {
          'left-1': typeButton === 'left',
          'right-1': typeButton === 'right'
        }
      )}
      onClick={onClick}
      variant='ghost'
      {...props}
    >
      {typeButton === 'left' ? (
        <ChevronLeft className='text-black/30 m-auto' />
      ) : (
        <ChevronRight className='text-black/30 m-auto' />
      )}

      {children}
    </Button>
  )
}
