import { useEffect, useState } from 'react';
import { useSubmitContext } from '../../context/EvidenceCollectionProvider';
import { type SelectProps } from '../../types/types';

const Select = ({
  label,
  id,
  options,
  name,
  setSelection,
}: SelectProps): JSX.Element => {
  const { isSubmitted } = useSubmitContext();
  const [selectedValue, setSelectedValue] = useState('Choose option');

  useEffect(() => {
    isSubmitted && setSelectedValue('Choose option');
  }, [isSubmitted]);

  const displayedOptions = options?.map((option, index) => (
    <option key={index} value={option}>
      {option}
    </option>
  ));

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selected = e.target.value;
    setSelectedValue(selected);
    selected !== 'Choose option' ? setSelection(selected) : setSelection('');
  };

  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-x-2'>
      <label htmlFor={id} className='text-accent font-bold'>
        {label}
      </label>
      <select
        id={id}
        name={name}
        className='select select-primary select-sm border-none m-0 bg-neutral/20 w-full md:w-2/4 lg:w-3/5 text-secondary'
        value={selectedValue}
        onChange={e => {
          handleSelect(e);
        }}
      >
        <option value='Choose option'>Choose option</option>
        {displayedOptions}
      </select>
    </div>
  );
};

export default Select;
