import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { AxiosError } from 'axios'
import { Roboto } from 'next/font/google'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '@/lib/axios'

import { Container, Form, FormError, Header } from './styles'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelo menos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister({ username, name }: RegisterFormData) {
    try {
      await api.post('/users', {
        username,
        name,
      })

      await router.push('/sign-up/connect-calendar')
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.message)
      }
    }
  }

  return (
    <>
      <NextSeo title="Crie uma conta | Ignite Call" />

      <Container className={roboto.className}>
        <Header>
          <Heading as="h1">Bem-vindo ao Ignite Call!</Heading>

          <Text>
            Precisamos de algumas informações para criar seu perfil! Ah, você
            pode editar essas informações depois.
          </Text>

          <MultiStep size={4} currentStep={1} />
        </Header>

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <div>
            <Text as="label" size="sm" htmlFor="username">
              Nome de usuário
            </Text>

            <TextInput
              id="username"
              prefix="ignite.com/"
              placeholder="seu-usuario"
              {...register('username')}
            />

            {errors.username && (
              <FormError size="sm">{errors.username.message}</FormError>
            )}
          </div>

          <div>
            <Text as="label" size="sm" htmlFor="name">
              Nome completo
            </Text>

            <TextInput id="name" placeholder="Seu nome" {...register('name')} />

            {errors.name && (
              <FormError size="sm">{errors.name.message}</FormError>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo <ArrowRight />
          </Button>
        </Form>
      </Container>
    </>
  )
}
