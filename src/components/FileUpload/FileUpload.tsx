const FileUpload = (): JSX.Element => {
  return (
    <div className='file-upload flex flex-col space-y-3 lg:flex-row lg:space-x-2 lg:space-y-0'>
      <label htmlFor='my-file' className='flex items-center space-x-2'>
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
      </label>
      <input
        id='my-file'
        type='file'
        className='file-input file-input-bordered border-primary bg-neutral/20 file-input-sm w-full lg:w-3/4'
      />
    </div>
  );
};

export default FileUpload;
