const SearchStudent = (): JSX.Element => {
  return (
    <div className='flex justify-end items-center w-full md:w-2/4 lg:w-3/5'>
      <input
        type='search'
        placeholder='Search student'
        className='input input-bordered input-primary input-sm bg-neutral/20 w-full text-primary'
      />
    </div>
  );
};

export default SearchStudent;
