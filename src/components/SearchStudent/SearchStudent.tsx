import { useEffect, useState } from 'react';
import {
  useStudentContext,
  useSubmitContext,
} from '../../context/EvidenceCollectionProvider';
import { fetchStudents } from '../../utils/api/fetchStudents';

const SearchStudent = (): JSX.Element => {
  const { updateStudent } = useStudentContext();
  const [input, setInput] = useState('');
  const [results, setResults] = useState<
    | [
        {
          id: string;
          name: string;
          surname: string;
          course: string;
          cycle: number;
        },
      ]
    | undefined
  >(undefined);
  const { isSubmitted } = useSubmitContext();

  useEffect(() => {
    setInput('');
    setResults(undefined);
    updateStudent(undefined);
  }, [isSubmitted]);

  const handleChange = (value: string): void => {
    setInput(value);
    fetchStudents()
      .then(result => {
        const foundStudents = result.filter(
          (item: { name: string; surname: string }) =>
            value !== undefined &&
            item !== undefined &&
            (item.name.toLowerCase().includes(value.toLowerCase()) ||
              item.surname.toLowerCase().includes(value.toLowerCase())),
        );
        setResults(foundStudents);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const displayResults = results?.map(result => (
    <option
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
    </option>
  ));

  return (
    <div className='dropdown flex flex-col items-center w-full m-0 space-y-1.5 md:w-2/4'>
      <input
        tabIndex={0}
        type='search'
        placeholder='Search student (required)'
        value={input}
        onChange={e => {
          handleChange(e.target.value);
        }}
        className='input border-none input-primary input-sm bg-neutral/20 w-full text-primary max-w-xs'
      />
      {results !== undefined && input !== '' && (
        <div
          tabIndex={0}
          className='dropdown-content top-6 z-[1] bg-[#F2F7F8] w-full text-secondary cursor-default rounded-md overflow-y-scroll md:w-4/5 lg:w-2/3'
        >
          {displayResults}
        </div>
      )}
    </div>
  );
};

export default SearchStudent;
