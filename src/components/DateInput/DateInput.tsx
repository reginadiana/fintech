import { ComponentProps } from 'react';

type Props = ComponentProps<'input'> & { label: string };

export default function DateInput({ label, ...rest }: Props) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input id={label} name={label} type="date" {...rest} />
    </div>
  );
}
