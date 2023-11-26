import { supabase } from '../../supabase/supabase';

export const fetchStudents = async (): Promise<any> => {
  try {
    const { data: students_primary, error } = await supabase
      .from('students_primary')
      .select('id,name,surname,course,cycle');
    if (students_primary !== null) {
      return students_primary;
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
