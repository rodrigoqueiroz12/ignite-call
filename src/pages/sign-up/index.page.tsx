import { Button, Heading, MultiStep, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { Roboto } from 'next/font/google'

import { Container, Form, Header } from './styles'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function SignUp() {
  return (
    <Container className={roboto.className}>
      <Header>
        <Heading as="h1">Bem-vindo ao Ignite Call!</Heading>

        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>

      <Form as="form">
        <div>
          <Text as="label" size="sm" htmlFor="username">
            Nome de usuário
          </Text>

          <TextInput
            id="username"
            prefix="ignite.com/"
            placeholder="seu-usuario"
          />
        </div>

        <div>
          <Text as="label" size="sm" htmlFor="name">
            Nome completo
          </Text>

          <TextInput id="name" placeholder="Seu nome" />
        </div>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
