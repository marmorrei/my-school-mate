const Comments = (): JSX.Element => {
  return (
    <div className='pt-2 border-t-2 border-primary/20'>
      <textarea
        className='textarea textarea-primary border-none bg-neutral/20 w-full'
        placeholder='Comments'
      ></textarea>
    </div>
  );
};

export default Comments;
