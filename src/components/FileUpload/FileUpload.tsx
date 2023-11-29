import { useState, type ChangeEvent } from 'react';
import { useEvidenceContext } from '../../context/EvidenceCollectionProvider';
import { v4 as uuidv4 } from 'uuid';

const FileUpload = (): JSX.Element => {
  const { updateFile } = useEvidenceContext();
  const [selectedFile, setSelectedFile] = useState<File | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files !== null) {
      setSelectedFile(e.target.files[0]);
    }
    if (selectedFile !== undefined) {
      updateFile({ id: uuidv4(), file: selectedFile });
    }
  };

  return (
    <div className='file-upload flex flex-col md:flex-row md:justify-between md:items-center '>
      <label htmlFor='my-file' className='text-accent font-bold'>
        Learning evidence
      </label>
      <input
        id='my-file'
        type='file'
        name='file'
        onChange={e => {
          handleChange(e);
        }}
        className='file-input file:w-3/4 file:text-xs file:text-primary border-2 border-primary bg-neutral/20 file-input-sm w-full md:w-3/5'
      />
    </div>
  );
};

export default FileUpload;
