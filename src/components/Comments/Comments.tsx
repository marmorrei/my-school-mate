import { useEvidenceContext } from '../../context/EvidenceCollectionProvider';

const Comments = (): JSX.Element => {
  const { comment, updateComment } = useEvidenceContext();

  const handleChange = (value: string): void => {
    updateComment(value);
  };
  return (
    <div className='pt-2 border-t-2 border-primary/20'>
      <textarea
        value={comment}
        onChange={e => {
          handleChange(e.target.value);
        }}
        className='textarea textarea-primary border-none bg-neutral/20 w-full'
        placeholder='Comments'
      ></textarea>
    </div>
  );
};

export default Comments;
