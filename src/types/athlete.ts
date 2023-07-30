export interface Report {
  act: { min: number | string; max: number | string };
  conference: string;
  division: string;
  gpa: {
    min: number;
    "25%": number;
    "50%": number;
    "75%": number;
    max: number;
  };
  ranking: number;
  sat: {
    reading: { min: number | string; max: number | string };
    math: { min: number | string; max: number | string };
  };
  school: string;
}

export interface Athlete {
  name: string;
  sport: string;
  grad_year: number;
  gpa: number;
  major: string;
  club: { name: string };
  high_school: { name: string };
  birthday: string;
  profile_image: string;
  email: string;
  report: Report[];
}
