import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Header } from '../src/components/molecules'

export default {
  title: 'Header',
  component: Header
} as Meta

export const Primary: React.SFC = () => <Header />
