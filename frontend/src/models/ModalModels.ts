import React from 'react';

export interface ModalProps {
  title: string;
  content: React.ReactNode;
  setIsModalVisible: (value: boolean) => void;
}