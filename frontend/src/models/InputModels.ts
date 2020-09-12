import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export interface TimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelStartTime: string;
  labelEndTime: string;
}