import { supabase } from '../../supabase/supabase';

// GET LEARNING SITUATIONS TITLES
export const fetchLearningSituations = async (): Promise<any> => {
  try {
    const { data: learning_situations, error } = await supabase
      .from('learning_situations')
      .select('title,specific_competence,assessment_criteria');

    if (learning_situations !== null) {
      return learning_situations;
    } else {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
