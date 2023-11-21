import { SelectProps } from '../../types/types';

const Select = ({ label, id }: SelectProps): JSX.Element => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:space-x-2'>
      <label htmlFor={id} className='text-accent font-bold'>
        {label}
      </label>
      <select
        id={id}
        className='select select-primary select-sm m-0 bg-neutral/20 w-full md:w-2/4 lg:w-3/5 text-secondary'
      >
        <option disabled selected>
          Choose option
        </option>
        <option>Game of Thrones</option>
        <option>Lost</option>
        <option>Breaking Bad</option>
        <option>Walking Dead</option>
      </select>
    </div>
  );
};

export default Select;
