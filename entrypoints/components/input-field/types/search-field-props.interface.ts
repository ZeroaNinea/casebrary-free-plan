export default interface InputFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  icon?: 'search' | 'type';
  onChange?: (value: string) => void;
}
