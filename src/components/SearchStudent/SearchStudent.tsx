import { useState } from 'react';
import { useStudentContext } from '../../context/EvidenceCollectionProvider';
import { fetchStudents } from '../../utils/fetchs/fetchStudents';

const SearchStudent = (): JSX.Element => {
  const { updateStudent } = useStudentContext();
  const [input, setInput] = useState('');
  const [results, setResults] = useState<
    [
      {
        id: string;
        name: string;
        surname: string;
        course: string;
        cycle: number;
      },
    ]
  >();

  const handleChange = (value: string): void => {
    setInput(value);
    fetchStudents()
      .then(result => {
        console.log('Search', result);
        const foundStudents = result.filter(
          (item: { name: string; surname: string }) =>
            value !== undefined &&
            item !== undefined &&
            (item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.surname.toLowerCase().includes(value.toLowerCase())),
        );
        setResults(foundStudents);
        console.log('foundStudents', foundStudents);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const displayResults = results?.map(result => (
    <li
      className='px-2.5 text-md md:text-sm hover:bg-neutral rounded-md'
      key={result.id}
      onClick={() => {
        updateStudent(result);
        setResults(undefined);
        setInput('');
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          updateStudent(result);
          setResults(undefined);
          setInput('');
        }
      }}
    >
      {result.name} {result.surname}
    </li>
  ));

  return (
    <div className='flex flex-col items-center w-full space-y-1.5 md:w-2/4 lg:w-3/5'>
      <input
        type='search'
        placeholder='Search student'
        value={input}
        onChange={e => {
          handleChange(e.target.value);
        }}
        className='input input-bordered input-primary input-sm bg-neutral/20 w-full text-primary'
      />
      {results !== undefined && (
        <ul className='bg-neutral/20 w-full text-secondary cursor-default rounded-md overflow-y-scroll'>
          {displayResults}
        </ul>
      )}
    </div>
  );
};

export default SearchStudent;
