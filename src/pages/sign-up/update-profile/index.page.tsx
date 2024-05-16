import { zodResolver } from '@hookform/resolvers/zod'
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { getServerSession } from 'next-auth'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { api } from '@/lib/axios'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const router = useRouter()
  const {
    // register,
    handleSubmit,
    // formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <form onSubmit={handleSubmit(handleUpdateProfile)}>
      <h1>{session.data?.user.name}</h1>
    </form>
  )

  // return (
  //   <>
  //     <NextSeo title="Atualize seu perfil | Ignite Call" noindex />
  //     <Container>
  //       <Header>
  //         <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
  //         <Text>
  //           Precisamos de algumas informações para criar seu perfil! Ah, você
  //           pode editar essas informações depois.
  //         </Text>
  //         <MultiStep size={4} currentStep={4} />
  //       </Header>
  //       <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
  //         <div className="label">
  //           <Text>Foto de perfil</Text>
  //           <Avatar
  //             src={session.data?.user.avatar_url}
  //             referrerPolicy="no-referrer"
  //             alt={session.data?.user.name}
  //           />
  //         </div>
  //         <div className="label">
  //           <Text size="sm" as="label" htmlFor="bio">
  //             Sobre você
  //           </Text>
  //           <TextArea id="bio" {...register('bio')} />
  //           <FormAnnotation size="sm">
  //             Fale um pouco sobre você. Isto será exibido em sua página pessoal.
  //           </FormAnnotation>
  //         </div>
  //         <Button type="submit" disabled={isSubmitting}>
  //           Finalizar
  //           <ArrowRight />
  //         </Button>
  //       </ProfileBox>
  //     </Container>
  //   </>
  // )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
