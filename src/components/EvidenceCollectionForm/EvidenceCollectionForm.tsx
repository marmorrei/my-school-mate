import Comments from '../Comments/Comments';
import FileUpload from '../FileUpload/FileUpload';
import SearchStudent from '../SearchStudent/SearchStudent';
import {
  useKeyCompetenceContext,
  useLearningSituationContext,
  useStudentContext,
  useSubjectAreaContext,
} from '../../context/EvidenceCollectionProvider';
import SubjectArea from '../SubjectAreaSelect/SubjectArea';
import KeyCompetence from '../KeyCompetenceSelect/KeyCompetence';
import LearningSituationSelect from '../LearningSituationSelect/LearningSituationSelect';

const EvidenceCollectionForm = (): JSX.Element => {
  const { selectedStudent, updateStudent } = useStudentContext();
  const { updateSubjectArea } = useSubjectAreaContext();
  const { updateKeyCompetence } = useKeyCompetenceContext();
  const { updateLearningSituation } = useLearningSituationContext();

  const resetData = (): void => {
    updateStudent(undefined);
    updateSubjectArea(undefined);
    updateKeyCompetence(undefined);
    updateLearningSituation(undefined);
  };

  // NEXT STEP: SUBSELECTIONS, UPLOAD FILE+COMMENTS, HANDLE SUBMIT
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
            <button
              className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              onClick={resetData}
            >
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
                    {selectedStudent !== undefined
                      ? `${selectedStudent.name} ${selectedStudent.surname}`
                      : ''}
                  </p>
                  <p className='text-primary text-xs font-bold'>
                    {selectedStudent !== undefined
                      ? `Primary ${selectedStudent.course}`
                      : ''}
                  </p>
                </div>
              </div>
              <SearchStudent />
              {/* SUBMIT BUTTON DESKTOP */}
              <button
                className='hidden md:block btn btn-sm btn-neutral border-2 border-primary text-primary 
                        hover:border-neutral hover:bg-transparent self-end'
              >
                Save
              </button>
            </div>
            <div className='form-data flex flex-col space-y-3 w-full md:flex-row md:flex-wrap md:justify-between md:space-y-0'>
              {/* LEARNING SITUATION */}
              <LearningSituationSelect />
              {/* SUBJECT AREA */}
              <SubjectArea />
              {/* KEY COMPETENCE */}
              <KeyCompetence />
              {/* LEARNING EVIDENCE */}
              <div className='shadow-md rounded w-full md:w-2/4 p-4 space-y-3'>
                <FileUpload />
                <Comments />
              </div>
            </div>
            {/* SUBMIT BUTTON MOBILE */}
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
