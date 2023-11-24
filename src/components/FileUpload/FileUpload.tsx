const FileUpload = (): JSX.Element => {
  return (
    <div className='file-upload flex flex-col md:flex-row md:justify-between md:items-center '>
      {/* <label
        htmlFor='my-file'
        className='flex items-center justify-center space-x-2'
      >
        <img
          className='h-5 w-5'
          src='/assets/images/audio-svgrepo-com.png'
          alt='audio'
        />
        <img
          className='h-5 w-5'
          src='/assets/images/video-frame-play-horizontal-svgrepo-com.png'
          alt='video'
        />
        <img
          className='h-5 w-5'
          src='/assets/images/picture-o-svgrepo-com.png'
          alt='picture'
        />
        <img
          className='h-5 w-5'
          src='/assets/images/file-search-alt-1-svgrepo-com.png'
          alt='document'
        />
      </label> */}
      <label htmlFor='my-file' className='text-accent font-bold'>
        Learning evidence
      </label>
      <input
        id='my-file'
        type='file'
        className='file-input file:w-3/4 file:text-xs file:text-primary border-2 border-primary bg-neutral/20 file-input-sm w-full md:w-3/5'
      />
    </div>
  );
};

export default FileUpload;
