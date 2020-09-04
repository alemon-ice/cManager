import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Button } from '../src/components/atoms'
import { Header } from '../src/components/molecules'

export default {
  title: 'Header',
  component: Header
} as Meta

export const WithButton: React.SFC = () => (
  <Header>
    <Button styleButton="secondary">Secondary Button</Button>
  </Header>
)
