import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from '@phosphor-icons/react'

import { ConfirmForm, FormActions, FormHeader } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling() { }

  return (
    <ConfirmForm as="form" onSubmit={handleConfirmScheduling}>
      <FormHeader>
        <Text>
          <CalendarBlank />
          22 de Setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </FormHeader>

      <div>
        <Text size="sm" as="label" htmlFor="name">
          Nome completo
        </Text>
        <TextInput id="name" placeholder="Seu nome" />
      </div>

      <div>
        <Text size="sm" as="label" htmlFor="email">
          Endereço de e-mail
        </Text>
        <TextInput id="email" type="email" placeholder="johndoe@example.com" />
      </div>

      <div>
        <Text size="sm" as="label" htmlFor="obs">
          Observações
        </Text>
        <TextArea id="obs" />
      </div>

      <FormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </FormActions>
    </ConfirmForm>
  )
}
