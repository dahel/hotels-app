import Button from '@mui/material/Button';
import { Root, Amount, Label } from './counter.styled';

interface CounterProps {
  onChange: (value: number) => void,
  label: string;
  value: number,
  minValue?: number,
}

const Counter = ({ onChange, label, value, minValue = 0 }: CounterProps) => {
  const increase = () => onChange(value + 1);
  const decrease = () => {
    if (value > minValue) {
      onChange(value - 1)
    }
  }

  return (
    <Root>
      <Label>{label}</Label>
      <Button size="small" variant="contained" onClick={increase}>+</Button>
      <Amount>{value}</Amount>
      <Button size="small" variant="contained"  onClick={decrease}>-</Button>
    </Root>
  );
}

export default Counter;
