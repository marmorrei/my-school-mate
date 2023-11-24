import Comments from '../Comments/Comments';
import FileUpload from '../FileUpload/FileUpload';
import SearchStudent from '../SearchStudent/SearchStudent';
import Select from '../Select/Select';
import { useStudentContext } from '../../context/EvidenceCollectionProvider';

const EvidenceCollectionForm = (): JSX.Element => {
  const options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  const { selectedStudent } = useStudentContext();

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className='btn btn-sm btn-info border-2 border-primary text-primary hover:border-info 
        hover:bg-transparent'
        onClick={() =>
          (
            document?.getElementById('ev-collection') as HTMLFormElement
          ).showModal()
        }
      >
        Learning evidence
      </button>
      <dialog id='ev-collection' className='modal w-screen h-screen'>
        <div
          className='modal-box flex flex-col w-11/12 max-w-5xl h-auto border-none 
                      rounded-lg overscroll-auto shadow-xl'
        >
          <h3 className='font-bold text-lg'>
            <span className='text-secondary'>Learning </span>
            <span className='text-info'>evidence </span>
            <span className='text-accent'>collection</span>
          </h3>
          {/* FORM */}
          <form
            method='dialog'
            className='modal-action mt-0 space-y-4 flex-col justify-center items-center w-full'
          >
            <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
              <img
                className='h-5'
                src='/assets/images/close-bold-svgrepo-com.svg'
                alt='close-button'
              />
            </button>
            {/* STUDENT */}
            <div
              className='flex flex-col items-center w-full space-y-2 justify-evenly md:flex-row 
                          lg:justify-center p-2 shadow-md'
            >
              <div className='flex items-center'>
                <div className='avatar'>
                  <div className='h-10 w-10 rounded-full'>
                    <img
                      src='/assets/images/user-svgrepo-com.png'
                      alt='user-img'
                    />
                  </div>
                </div>
                <div className='name-course flex flex-col'>
                  <p className='text-primary text-xs font-bold'>
                    {selectedStudent !== null
                      ? `${selectedStudent.name} ${selectedStudent.surname}`
                      : 'Student´s name'}
                  </p>
                  <p className='text-primary text-xs font-bold'>
                    {selectedStudent !== null
                      ? `Primary ${selectedStudent.course}`
                      : 'and course'}
                  </p>
                </div>
              </div>
              <SearchStudent />
              <button
                className='hidden md:block btn btn-sm btn-neutral border-2 border-primary text-primary 
                        hover:border-neutral hover:bg-transparent self-end'
              >
                Save
              </button>
            </div>
            <div className='form-data flex flex-col space-y-3 w-full md:flex-row md:flex-wrap md:justify-between md:space-y-0'>
              {/* LEARNING SITUATION */}
              <div className='shadow-md rounded w-full md:w-2/4 p-4'>
                <Select
                  label='Learning situation'
                  id='learning-situation'
                  options={options}
                />
                <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
                  <Select
                    label='Specific competence'
                    id='learn-sit-specific-competence'
                    options={options}
                  />
                  <Select
                    label='Assessment criteria'
                    id='learn-sit-assessment-criteria'
                    options={options}
                  />
                </div>
              </div>
              {/* SUBJECT AREA */}
              <div className='shadow-md rounded w-full md:w-2/4 p-4'>
                <Select
                  label='Subject area'
                  id='subject-area'
                  options={options}
                />
                <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
                  <Select
                    label='Specific competence'
                    id='subject-specific-competence'
                    options={options}
                  />
                  <Select
                    label='Assessment criteria'
                    id='subject-assessment-criteria'
                    options={options}
                  />
                </div>
              </div>
              {/* KEY COMPETENCE */}
              <div className='shadow-md rounded w-full md:w-2/4 p-4'>
                <Select
                  label='Key competence'
                  id='key-competence'
                  options={options}
                />
                <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
                  <Select
                    label='Specific competence'
                    id='key-specific-competence'
                    options={options}
                  />
                  <Select
                    label='Assessment criteria'
                    id='key-assessment-criteria'
                    options={options}
                  />
                </div>
              </div>
              {/* LEARNING EVIDENCE */}
              <div className='shadow-md rounded w-full md:w-2/4 p-4 space-y-3'>
                <FileUpload />
                <Comments />
              </div>
            </div>
            <button
              className='btn btn-sm btn-neutral border-2 border-primary text-primary 
                        hover:border-neutral hover:bg-transparent self-end md:hidden'
            >
              Save
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default EvidenceCollectionForm;
