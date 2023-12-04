import { useEffect, useState } from 'react';
import {
  useStudentContext,
  useSubjectAreaContext,
  useKeyCompetenceContext,
  useLearningSituationContext,
  useEvidenceContext,
} from '../../context/EvidenceCollectionProvider';
import { type DisplayEvidenceProps } from '../../types/types';
import InfoEvidence from '../InfoEvidence/InfoEvidence';
import { supabase } from '../../supabase/supabase';

const DisplayEvidence = ({
  userId,
  filePath,
  resetData,
  setDisplayEvidence,
}: DisplayEvidenceProps): JSX.Element => {
  const { selectedStudent } = useStudentContext();
  const { selectedSubjectArea } = useSubjectAreaContext();
  const { selectedKeyCompetence } = useKeyCompetenceContext();
  const { selectedLearningSituation } = useLearningSituationContext();
  const { file, comment } = useEvidenceContext();
  const [fileUrl, setFileUrl] = useState<string | undefined>();

  useEffect(() => {
    if (filePath !== undefined) {
      void getFile();
    }
  }, [filePath]);

  const getFile = async (): Promise<void> => {
    const { data, error } = await supabase.storage
      .from('learning_evidences')
      .list(`${userId}/`, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
        search: file?.id,
      });

    if (data !== null) {
      setFileUrl(
        'https://dcqfrgkkvuxhvtjiagvy.supabase.co/storage/v1/object/public/learning_evidences/' +
          userId +
          '/' +
          data[0]?.name,
      );
    }
    if (error !== null) throw new Error();
  };

  return (
    <div className='fixed top-0 left-0 z-[1] bg-neutral-400/30 w-screen h-screen flex justify-center items-center'>
      <dialog
        className='modal-box bg-white flex flex-col w-11/12 max-w-5xl h-auto border-none 
                      rounded-lg overscroll-auto shadow-xl'
      >
        <h3 className='font-bold text-lg'>
          <span className='text-secondary'>Your </span>
          <span className='text-info'>learning </span>
          <span className='text-accent'>evidence</span>
        </h3>
        <button
          className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          onClick={() => {
            resetData();
            setDisplayEvidence(false);
          }}
        >
          <img
            className='h-5'
            src='/assets/images/close-bold-svgrepo-com.svg'
            alt='close-button'
          />
        </button>
        <div className='flex items-center'>
          <div className='avatar'>
            <div className='h-10 w-10 rounded-full'>
              <img src='/assets/images/user-svgrepo-com.png' alt='user-img' />
            </div>
          </div>
          <div className='name-course flex flex-col'>
            <p className='text-primary text-xs font-bold'>
              {selectedStudent?.name} {selectedStudent?.surname}
            </p>
            <p className='text-primary text-xs font-bold'>
              Primary {selectedStudent?.course}
            </p>
          </div>
        </div>
        <div
          className='form-data flex flex-col space-y-3 w-full md:flex-row
                            md:flex-wrap md:justify-between md:space-y-0'
        >
          {selectedLearningSituation?.title !== '' &&
            selectedLearningSituation?.title !== undefined && (
              <InfoEvidence
                id='learning-situation'
                label='Learning situation'
                content={selectedLearningSituation?.title}
                specificCompetence={
                  selectedLearningSituation?.specific_competence
                }
                assessmentCriteria={
                  selectedLearningSituation?.assessment_criteria
                }
              />
            )}
          {selectedSubjectArea?.name !== '' &&
            selectedSubjectArea?.name !== undefined && (
              <InfoEvidence
                id='subject-area'
                label='Subject area'
                content={selectedSubjectArea?.name}
                specificCompetence={selectedSubjectArea?.specificCompetence}
                assessmentCriteria={selectedSubjectArea?.assessmentCriteria}
              />
            )}
          {selectedKeyCompetence?.name !== '' &&
            selectedKeyCompetence?.name !== undefined && (
              <InfoEvidence
                id='key-competence'
                label='Key competence'
                content={selectedKeyCompetence?.name}
                specificCompetence={selectedKeyCompetence?.specificCompetence}
                assessmentCriteria={selectedKeyCompetence?.assessmentCriteria}
              />
            )}
          <div className='shadow-md rounded w-full md:w-2/4 p-4 space-y-2'>
            {comment !== '' && comment !== undefined && (
              <div>
                <div className='flex flex-col '>
                  <label htmlFor='comment' className='text-accent font-bold'>
                    Comment
                  </label>
                  <div
                    id='comment'
                    className='border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
                  >
                    <p className='text-xs'>{comment}</p>
                  </div>
                </div>
              </div>
            )}
            {file !== undefined && (
              <div>
                <div className='flex flex-col '>
                  <label htmlFor='file' className='text-accent font-bold'>
                    Evidence file
                  </label>
                  <div
                    id='comment'
                    className='flex flex-col items-center space-y-2 border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
                  >
                    <p className='text-xs'>{file.file.name}</p>
                    {file.file.type.includes('image') && (
                      <div>
                        <img src={fileUrl} alt='evidence-image' />
                      </div>
                    )}
                    {file.file.type.includes('application/pdf') && (
                      <div className='flex flex-col'>
                        <object data={fileUrl} type='application/pdf'>
                          <embed
                            src={fileUrl}
                            type='application/pdf'
                            className='w-full'
                          />
                        </object>
                      </div>
                    )}
                    {file.file.type.includes('video') && (
                      <div>
                        <video src={fileUrl} autoPlay preload='none'>
                          <track kind='captions' />
                        </video>
                      </div>
                    )}
                    {file.file.type.includes('audio') && (
                      <div>
                        <audio src={fileUrl} autoPlay preload='none'>
                          <track kind='captions' />
                        </audio>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DisplayEvidence;
