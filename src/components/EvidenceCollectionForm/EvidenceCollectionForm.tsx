import Comments from '../Comments/Comments';
import FileUpload from '../FileUpload/FileUpload';
import SearchStudent from '../SearchStudent/SearchStudent';
import Select from '../Select/Select';

const EvidenceCollectionForm = (): JSX.Element => {
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
      <dialog id='ev-collection' className='modal w-screen'>
        <div className='modal-box w-11/12 max-w-5xl max-h-screen border-2 border-primary'>
          <h3 className='font-bold text-lg'>
            <span className='text-secondary'>Learning </span>
            <span className='text-info'>evidence </span>
            <span className='text-accent'>collection</span>
          </h3>
          <div className='modal-action justify-center'>
            {/* FORM */}
            <form method='dialog' className='w-max'>
              <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                <img
                  className='h-5'
                  src='/assets/images/close-bold-svgrepo-com.svg'
                  alt='close-button'
                />
              </button>
              <div className='form-data flex flex-col space-y-3 md:flex-row md:space-x-4 md:space-y-0'>
                <div className='form-data-info flex flex-col space-y-3 md:w-2/4'>
                  {/* STUDENT */}
                  <div className='flex flex-col items-center md:flex-row md:justify-between'>
                    <div className='student flex items-center space-x-2'>
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
                          Henry Williams
                        </p>
                        <p className='text-primary text-xs font-bold'>
                          Primary 3A
                        </p>
                      </div>
                    </div>
                    <SearchStudent />
                  </div>
                  {/* SUBJECT AREA */}
                  <Select label='Subject area' id='subject-area' />
                  {/* LEARNING SITUATION */}
                  <Select label='Learning situation' id='learning-situation' />
                  {/* KEY COMPETENCE */}
                  <Select label='Key competence' id='key-competence' />
                  {/* SPECIFIC COMPETENCE */}
                  <Select
                    label='Specific competence'
                    id='specific-competence'
                  />
                  {/* ASSESSMENT CRITERIA */}
                  <Select
                    label='Assessment criteria'
                    id='assessment-criteria'
                  />
                </div>
                <div className='form-data-collection flex flex-col space-y-3 md:w-2/4'>
                  <p className='text-accent font-bold'>Learning evidence</p>
                  {/* FILE UPLOADS */}
                  <FileUpload />
                  {/* COMMENTS AREA */}
                  <Comments />
                  <button
                    className='btn btn-sm btn-neutral border-2 border-primary text-primary 
                    hover:border-neutral hover:bg-transparent self-end'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default EvidenceCollectionForm;
