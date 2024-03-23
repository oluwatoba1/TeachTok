interface IOption {
  id: string;
  answer: string;
}

interface ICorrectAnswer {
  id: number;
  correct_options: IOption[];
}

interface IMCQ {
  type: 'mcq';
  id: number;
  playlist: string;
  description: string;
  image: string;
  question: string;
  options: IOption[];
  user: {
    name: string;
    avatar: string;
  };
}

interface IQuestion extends IMCQ {
  answer: ICorrectAnswer | null;
  user_choice: IOption | null;
}

interface HomeStackParamList {
  Home: undefined;
}
