import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { ThemeProvider } from 'styled-components';

import { CircularButton } from 'components/atoms';

import GlobalStyle from 'styles/global';
import theme from 'styles/theme';

import { CircularButtonProps } from 'models/CircularButtonModels';

export default {
  title: 'Circular Button',
  component: CircularButton,
  argTypes: { onClick: { action: 'Open scheduling form' } },
} as Meta;

const Template: Story<CircularButtonProps> = (args) => (
  <ThemeProvider theme={theme}>
    <CircularButton {...args} />
    <GlobalStyle />
  </ThemeProvider>
);

export const AddIcon = Template.bind({});
AddIcon.args = { icon: 'add' };
