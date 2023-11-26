import { supabase } from '../../supabase/supabase';

// GET USER PROFILE FILTERED BY ID
export const fetchUserProfile = async (user_id: string): Promise<any> => {
  try {
    const { data: profiles, error } = await supabase
      .from('profiles')
      .select('user_id, name, surname')
      .eq('user_id', user_id);

    if (profiles !== null) {
      return profiles;
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
