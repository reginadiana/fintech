import { CSSProperties } from 'react';
import './style.css';

const style: CSSProperties = {
  border: 'var(--gap-s) solid var(--color-1)',
  borderRightColor: 'var(--color-4)',
  borderRadius: '50%',
  width: 'var(--gap)',
  height: 'var(--gap)',
  animation: 'spin 1s infinite',
};

export default function LoadingSpinner() {
  return <div style={style}></div>;
}
