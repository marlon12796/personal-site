'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { formSchema, type formSchemaType } from '@/lib/validatons/form'

export const ContactForm = () => {
  const t = useTranslations('contact')
  const emailHint = t('emailPlaceholder')
  const messageHint = t('messagePlaceholder')

  const [contactStatus, setContactStatus] = useState<'success' | 'pending' | 'initial'>('initial')
  const [emailPlaceholder, setEmailPlaceholder] = useState('')
  const [messagePlaceholder, setMessagePlaceholder] = useState('')

  useEffect(() => {
    const cleanups: Array<() => void> = []

    const typeOnce = (value: string, setter: (text: string) => void, delay: number) => {
      const timeout = window.setTimeout(() => {
        let index = 0
        const interval = window.setInterval(() => {
          index += 1
          setter(value.slice(0, index))
          if (index >= value.length) window.clearInterval(interval)
        }, 45)

        cleanups.push(() => window.clearInterval(interval))
      }, delay)

      cleanups.push(() => window.clearTimeout(timeout))
    }

    typeOnce(emailHint, setEmailPlaceholder, 250)
    typeOnce(messageHint, setMessagePlaceholder, 1100)

    return () => cleanups.forEach((cleanup) => cleanup())
  }, [emailHint, messageHint])

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      message: ''
    }
  })

  const onSubmit = async (values: formSchemaType) => {
    try {
      setContactStatus('pending')
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })

      const data = await res.json()

      if (res.ok) {
        toast.success('¡Mensaje enviado con éxito!', {
          description: 'Gracias por ponerte en contacto. Te responderé a la brevedad.'
        })
        setContactStatus('success')
        form.reset()
        return
      }

      if (res.status === 422) {
        const errorMessages = data?.errors?.map((error: { detail: string }) => error.detail).join(', ')
        toast.error('Error de validación', {
          description: errorMessages ?? 'Revisa los campos del formulario.'
        })
        return
      }

      toast.error('Error al enviar', {
        description: data?.errors?.[0]?.detail ?? 'No se pudo enviar el mensaje. Intenta de nuevo más tarde.'
      })
    } catch (_error) {
      toast.error('Error de conexión', {
        description: 'No se pudo contactar con el servidor. Verifica tu conexión.'
      })
    } finally {
      setContactStatus((prev) => (prev === 'pending' ? 'initial' : prev))
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 pt-4 pb-6'>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel className='text-sm font-medium text-slate-300'>{t('inputEmail')}</FormLabel>
              <FormControl>
                <Input placeholder={emailPlaceholder} {...field} />
              </FormControl>
              <FormMessage className='text-red-400 text-xs' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='message'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel className='text-sm font-medium text-slate-300'>{t('inputMessage')}</FormLabel>
              <FormControl>
                <Textarea placeholder={messagePlaceholder || t('labelMessage')} className='resize-none' {...field} />
              </FormControl>
              <FormMessage className='text-red-400 text-xs' />
            </FormItem>
          )}
        />
        <div>
          <button
            type='submit'
            disabled={contactStatus === 'pending'}
            className='group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.35)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none transition-all duration-200 cursor-pointer'
          >
            {contactStatus === 'pending' ? (
              <>
                <Loader2 className='w-4 h-4 animate-spin text-slate-950' />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <span>{t('button')}</span>
                <Send className='w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform' />
              </>
            )}
          </button>
        </div>
      </form>
    </Form>
  )
}
