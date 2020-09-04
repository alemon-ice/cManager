import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { Button } from '../src/components/atoms'

import { ButtonProps } from '../src/models/ButtonModels'

export default {
  title: 'Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = { children: 'Primary Button' }

export const Secondary = Template.bind({})
Secondary.args = { styleButton: 'secondary', children: 'Secondary Button' }

export const Tertiary = Template.bind({})
Tertiary.args = { styleButton: 'tertiary', children: 'Tertiary Button' }

export const Danger = Template.bind({})
Danger.args = { styleButton: 'danger', children: 'Danger Button' }
