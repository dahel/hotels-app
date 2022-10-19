import Rating from '@mui/material/Rating';
import Counter from '../counter/Counter';
import { Row } from './filterBox.styled';

export interface FilterBoxProps {
  onChange: (value: Omit<FilterBoxProps, 'onChange'>) => void;
  rating: number;
  adultsAmount: number;
  childrenAmount: number;
}

const FilterBox = ({ onChange, rating, adultsAmount, childrenAmount }: FilterBoxProps) => {
  const handleChange = (key: keyof Omit<FilterBoxProps, 'onChange'>, value: number) => {
    onChange({
      rating,
      adultsAmount,
      childrenAmount,
      [key]: value
    });
  };

  return (
    <Row>
      <Rating
        size="large"
        value={rating}
        onChange={(event, value: number | null) => {
          handleChange('rating', value as number);
        }}
      />
      <Counter
        label="Adults"
        value={adultsAmount}
        onChange={(value) => handleChange('adultsAmount', value)}
        minValue={1}
      ></Counter>
      <Counter
        label="Children"
        value={childrenAmount}
        onChange={(value) => handleChange('childrenAmount', value)}
      ></Counter>
    </Row>
  );
};

export default FilterBox;
