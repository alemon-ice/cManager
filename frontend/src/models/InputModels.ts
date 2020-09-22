import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

export interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  valueInputDay: string;
  valueInputMonth: string;
  valueInputYear: string;
  onChangeDay: (e: any) => void;
  onChangeMonth: (e: any) => void;
  onChangeYear: (e: any) => void;
}

export interface TimeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  labelStartTime: string;
  labelEndTime: string;
  valueInputStartTime: string;
  valueInputEndTime: string;
  onChangeStartTime: (e: any) => void;
  onChangeEndTime: (e: any) => void;
}

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  valueIsImportant: boolean;
  setIsImportant: (e: any) => void;
}
