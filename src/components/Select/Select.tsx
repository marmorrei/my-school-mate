import { SelectProps } from '../../types/types';

const Select = ({ label, id, options }: SelectProps): JSX.Element => {
  const displayedOptions = options?.map(option => (
    <option key={option}>{option}</option>
  ));
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-x-2'>
      <label htmlFor={id} className='text-accent font-bold'>
        {label}
      </label>
      <select
        id={id}
        className='select select-primary select-sm m-0 bg-neutral/20 w-full md:w-2/4 lg:w-3/5 text-secondary'
        defaultValue={'Choose option'}
      >
        <option disabled>Choose option</option>
        {displayedOptions}
      </select>
    </div>
  );
};

export default Select;
