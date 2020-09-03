import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import Button, { ButtonProps } from '../src/components/atoms/Button'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Primary: React.SFC<ButtonProps> = () => (
  <Button>Primary Button</Button>
)

export const Secondary: React.SFC<ButtonProps> = () => (
  <Button styleButton="secondary">Secondary Button</Button>
)

export const Tertiary: React.SFC<ButtonProps> = () => (
  <Button styleButton="tertiary">Tertiary Button</Button>
)

export const Danger: React.SFC<ButtonProps> = () => (
  <Button styleButton="danger">Danger Button</Button>
)

export const Circle: React.SFC<ButtonProps> = () => (
  <Button styleButton="circle" />
)
