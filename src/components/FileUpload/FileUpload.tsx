import { useEffect, type ChangeEvent, useRef } from 'react';
import {
  useEvidenceContext,
  useSubmitContext,
} from '../../context/EvidenceCollectionProvider';
import { v4 as uuidv4 } from 'uuid';

const FileUpload = (): JSX.Element => {
  const { updateFile } = useEvidenceContext();
  const { isSubmitted } = useSubmitContext();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // RESET DATA
  useEffect(() => {
    if (!isSubmitted) {
      updateFile(undefined);

      if (fileInputRef.current != null) {
        fileInputRef.current.value = '';
      }
    }
  }, [isSubmitted]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0] != null) {
      const newFile = e.target.files[0];
      updateFile({ id: uuidv4(), file: newFile });
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
        ref={fileInputRef}
        onChange={e => {
          handleChange(e);
        }}
        className='file-input file:w-3/4 file:text-xs file:text-primary border-2 border-primary bg-neutral/20 file-input-sm w-full md:w-3/5'
      />
    </div>
  );
};

export default FileUpload;
