import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { ThemeProvider } from 'styled-components'

import { Button } from '../src/components/atoms'

import GlobalStyle from '../src/styles/global'
import theme from '../src/styles/theme'

import { ButtonProps } from '../src/models/ButtonModels'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'background', value: '#F0F0F0' },
        { name: 'header', value: '#00C2CB' }
      ]
    }
  }
} as Meta

const Template: Story<ButtonProps> = args => (
  <ThemeProvider theme={theme}>
    <Button {...args} />
    <GlobalStyle />
  </ThemeProvider>
)

export const Primary = Template.bind({})
Primary.args = { children: 'Primary Button' }

export const Secondary = Template.bind({})
Secondary.args = { styleButton: 'secondary', children: 'Secondary Button' }

export const Tertiary = Template.bind({})
Tertiary.args = { styleButton: 'tertiary', children: 'Tertiary Button' }

export const Danger = Template.bind({})
Danger.args = { styleButton: 'danger', children: 'Danger Button' }
