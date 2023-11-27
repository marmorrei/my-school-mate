import { SelectProps } from '../../types/types';

const Select = ({
  label,
  id,
  options,
  name,
  setSelections,
}: SelectProps): JSX.Element => {
  const displayedOptions = options?.map(option => (
    <option key={option} name={name}>
      {option}
    </option>
  ));

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const selected = e.target.value;
    console.log('select', selected);
    setSelections(prevSelections => {
      return {
        ...prevSelections,
        [e.target.name]: selected,
      };
    });
  };
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-x-2'>
      <label htmlFor={id} className='text-accent font-bold'>
        {label}
      </label>
      <select
        id={id}
        className='select select-primary select-sm border-none m-0 bg-neutral/20 w-full md:w-2/4 lg:w-3/5 text-secondary'
        defaultValue={'Choose option'}
        onChange={e => handleSelect(e)}
      >
        <option disabled>Choose option</option>
        {displayedOptions}
      </select>
    </div>
  );
};

export default Select;
