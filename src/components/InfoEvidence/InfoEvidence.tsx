import { type InfoEvidenceProps } from '../../types/types';

const InfoEvidence = ({
  id,
  label,
  content,
  specificCompetence,
  assessmentCriteria,
}: InfoEvidenceProps): JSX.Element => {
  return (
    <div className='shadow-md rounded w-full md:w-2/4 p-4'>
      <div className='flex flex-col '>
        <label htmlFor={id} className='text-accent font-bold'>
          {label}
        </label>
        <div
          id={id}
          className='border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
        >
          <p>{content}</p>
        </div>
      </div>
      <div className='mt-2 pt-2 border-t-2 border-primary/20 text-xs space-y-2 flex flex-col justify-end'>
        <label htmlFor='specific-competence' className='text-accent font-bold'>
          Specific competence
        </label>
        <div
          id='specific-competence'
          className='border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
        >
          <p>{specificCompetence}</p>
        </div>
        <label htmlFor='assessment-criteria' className='text-accent font-bold'>
          Assessment criteria
        </label>
        <p
          id='assessment-criteria'
          className='border-none rounded-md px-2 py-1 bg-neutral/20 w-full text-primary'
        >
          {assessmentCriteria}
        </p>
      </div>
    </div>
  );
};

export default InfoEvidence;
