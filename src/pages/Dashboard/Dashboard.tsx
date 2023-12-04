import EvidenceCollectionForm from '../../components/EvidenceCollectionForm/EvidenceCollectionForm';

const Dashboard = (): JSX.Element => {
  const handleClick = (): void => {
    alert(
      'Funtionality not available at the moment. Stay tuned for new updates!',
    );
  };
  return (
    <main className='w-auto p-4 flex flex-col space-y-3 md:flex-row md:space-x-3 md:space-y-0'>
      <div className='hidden md:block' onClick={handleClick} role='button'>
        <img
          className='opacity-30'
          src='/assets/images/today.svg'
          alt='today'
        />
      </div>
      <div className='flex flex-col space-y-3'>
        <div className='bg-[#F2F7F8] p-3 rounded-md border border-primary flex justify-evenly items-center'>
          <p className='text-lg text-accent font-bold'>New functionality</p>
          <EvidenceCollectionForm />
        </div>
        <div onClick={handleClick} role='button'>
          <img
            className='opacity-30'
            src='/assets/images/messages.svg'
            alt='messages'
          />
        </div>
        <div onClick={handleClick} role='button'>
          <img
            className='opacity-30'
            src='/assets/images/community.svg'
            alt='community'
          />
        </div>
      </div>
      <div className='space-y-3'>
        <div onClick={handleClick} role='button'>
          <img
            className='opacity-30'
            src='/assets/images/notes.svg'
            alt='notes'
          />
        </div>
        <div onClick={handleClick} role='button'>
          <img
            className='opacity-30'
            src='/assets/images/calendar.svg'
            alt='calendar'
          />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
