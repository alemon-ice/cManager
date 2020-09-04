import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'

import { CircularButton } from '../src/components/atoms'

import { CircularButtonProps } from '../src/models/CircularButtonModels'

export default {
  title: 'Circular Button',
  component: CircularButton
} as Meta

const Template: Story<CircularButtonProps> = args => (
  <CircularButton {...args} />
)

export const AddIcon = Template.bind({})
AddIcon.args = { icon: 'add' }
