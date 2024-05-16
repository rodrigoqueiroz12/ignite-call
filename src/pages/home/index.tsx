import { Heading, Text } from '@ignite-ui/react'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import { NextSeo } from 'next-seo'

import preview from '@/assets/preview.png'
import heroBackground from '@/assets/squares-background.png'

import { ClaimUsernameForm } from './components/claim-username-form'
import { Container, Hero, Preview } from './styles'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] })

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />

      <main className={roboto.className}>
        <Container>
          <Hero>
            <Image
              id="hero-background"
              src={heroBackground}
              height={400}
              alt=""
            />

            <Heading as="h1" size="4xl">
              Agendamento descomplicado
            </Heading>

            <Text size="xl">
              Conecte seu calendário e permita que as pessoas marquem
              agendamentos no seu tempo livre.
            </Text>

            <ClaimUsernameForm />
          </Hero>

          <Preview>
            <Image src={preview} alt="" height={400} quality={100} priority />
          </Preview>
        </Container>
      </main>
    </>
  )
}
