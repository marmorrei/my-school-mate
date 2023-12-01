import Comments from '../Comments/Comments';
import FileUpload from '../FileUpload/FileUpload';
import SearchStudent from '../SearchStudent/SearchStudent';
import {
  useEvidenceContext,
  useKeyCompetenceContext,
  useLearningSituationContext,
  useStudentContext,
  useSubjectAreaContext,
  useSubmitContext,
} from '../../context/EvidenceCollectionProvider';
import SubjectArea from '../SubjectAreaSelect/SubjectArea';
import KeyCompetence from '../KeyCompetenceSelect/KeyCompetence';
import LearningSituationSelect from '../LearningSituationSelect/LearningSituationSelect';
import { supabase } from '../../supabase/supabase';
import { useEffect, useState } from 'react';

const EvidenceCollectionForm = (): JSX.Element => {
  const { selectedStudent, updateStudent } = useStudentContext();
  const { selectedSubjectArea, updateSubjectArea } = useSubjectAreaContext();
  const { selectedKeyCompetence, updateKeyCompetence } =
    useKeyCompetenceContext();
  const { selectedLearningSituation, updateLearningSituation } =
    useLearningSituationContext();
  const { file, updateFile, comment, updateComment } = useEvidenceContext();
  const { setIsSubmitted } = useSubmitContext();
  const [userId, setUserId] = useState('');

  useEffect(() => {
    void getUser();
  }, [userId]);

  // OBTAIN USER ID
  const getUser = async (): Promise<void> => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user !== null) {
        setUserId(user.id);
      } else {
        setUserId('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  // RESET DATA
  const resetData = (): void => {
    updateStudent(undefined);
    updateSubjectArea(undefined);
    updateLearningSituation(undefined);
    updateKeyCompetence(undefined);
    updateFile(undefined);
    updateComment(undefined);
    setIsSubmitted(true);
  };

  // SUBMIT FORM
  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    // FINAL DATA CHECKS BEFORE SUBMIT
    const student =
      selectedStudent?.id !== undefined ? selectedStudent.id : null;

    const learning_situation =
      selectedLearningSituation?.id !== ''
        ? selectedLearningSituation?.id
        : null;

    const subject_area =
      selectedSubjectArea?.name !== '' ? selectedSubjectArea : null;

    const key_competence =
      selectedKeyCompetence?.name !== '' ? selectedKeyCompetence : null;

    const learning_evidence = file?.id !== undefined ? file.id : null;

    // submit form
    try {
      const { error } = await supabase
        .from('learning_evidence_collection')
        .insert([
          {
            student,
            learning_situation,
            subject_area,
            key_competence,
            learning_evidence,
            made_by: userId,
            comment,
          },
        ])
        .select();

      if (error != null) {
        throw new Error(
          `Error submitting learning evidence form: ${error.message}`,
        );
      } else {
        if (file !== undefined) {
          // if no errors submitting, submit file
          try {
            const { error } = await supabase.storage
              .from('learning_evidences')
              .upload(userId + '/' + file.id, file.file);
            if (error != null)
              throw new Error(`Error uploading file: ${error.message}`);
          } catch (error) {
            console.log(error);
          }
        }
        alert('Your learning evidence was successfully saved!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetData();
      const modal = document.getElementById(
        'ev-collection',
      ) as HTMLDialogElement;
      modal.close();
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className='btn btn-sm btn-info border-2 border-primary text-primary hover:border-info 
        hover:bg-transparent'
        onClick={() => {
          (
            document?.getElementById('ev-collection') as HTMLFormElement
          ).showModal();
          setIsSubmitted(false);
        }}
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
          <button
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
            onClick={() => {
              resetData();
              const modal = document.getElementById(
                'ev-collection',
              ) as HTMLDialogElement;
              modal.close();
            }}
          >
            <img
              className='h-5'
              src='/assets/images/close-bold-svgrepo-com.svg'
              alt='close-button'
            />
          </button>
          {/* FORM */}
          <form
            method='dialog'
            className='modal-action mt-0 space-y-4 flex-col justify-center items-center w-full'
            onSubmit={handleSubmit}
          >
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
                type='submit'
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
              type='submit'
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
