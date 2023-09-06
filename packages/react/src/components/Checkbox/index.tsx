import { Check } from 'phosphor-react'
import { CHeckboxIndicator, CheckboxContainer } from './styles'
import { ComponentProps } from 'react'

export type CheckboxProps = ComponentProps<typeof CheckboxContainer>

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CHeckboxIndicator asChild>
        <Check weight="bold" />
      </CHeckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
