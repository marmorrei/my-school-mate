import { NavLink } from 'react-router-dom';
import { supabase } from '../../supabase/supabase';
import { useState } from 'react';

const SignUp = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const resetData = (): void => {
    setFormData({
      name: '',
      surname: '',
      email: '',
      password: '',
    });
  };

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error != null) throw new Error();

      try {
        const { error } = await supabase
          .from('profiles')
          .insert([
            {
              user_id: data.user?.id,
              name: formData.name,
              surname: formData.surname,
            },
          ])
          .select();
        if (error != null) throw new Error();
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetData();
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <img
          className='mx-auto h-14 w-auto'
          src='/assets/images/my-school-mate-logo.svg'
          alt='My School Mate'
        />
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight'>
          <span className='text-secondary'>Create </span>
          <span className='text-info'>your new </span>
          <span className='text-accent'>account</span>
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form
          className='space-y-6'
          onSubmit={handleSubmit}
          action='#'
          method='POST'
        >
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-bold leading-6 text-accent'
            >
              Name
            </label>
            <div className='mt-2'>
              <input
                id='name'
                name='name'
                value={formData.name}
                type='text'
                onChange={handleChange}
                autoComplete='name'
                required
                className='block input w-full rounded-md border-0 py-1.5 text-primary 
                            input-primary input-sm bg-neutral/20'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='surname'
              className='block text-sm font-bold leading-6 text-accent'
            >
              Surname
            </label>
            <div className='mt-2'>
              <input
                id='surname'
                name='surname'
                value={formData.surname}
                type='text'
                onChange={handleChange}
                autoComplete='surname'
                required
                className='block input w-full rounded-md border-0 py-1.5 text-primary 
                            input-primary input-sm bg-neutral/20'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-bold leading-6 text-accent'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                value={formData.email}
                type='email'
                onChange={handleChange}
                autoComplete='email'
                required
                className='block input w-full rounded-md border-0 py-1.5 text-primary 
                            input-primary input-sm bg-neutral/20'
              />
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm font-bold leading-6 text-accent'
              >
                Password
              </label>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                value={formData.password}
                type='password'
                onChange={handleChange}
                autoComplete='current-password'
                required
                className='block input w-full rounded-md border-0 py-1.5 text-primary 
                            input-primary input-sm bg-neutral/20'
              />
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              type='submit'
              className='btn btn-sm btn-info border-2 border-primary text-primary hover:border-info 
                            hover:bg-transparent'
            >
              Register
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-primary'>
          Already registered?{' '}
          <NavLink
            to='/login'
            className='font-semibold leading-6 text-secondary hover:text-primary'
          >
            Sign in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
