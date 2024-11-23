export type Achievement = {
  id: number;
  name: string;
  description: string;
  points: number;
  isUnlocked: boolean;
};

export type ProfileData = {
  nickname: string;
  level: number;
  points: number;
  achievements: {
    id: string;
    name: string;
    description: string;
    isUnlocked: boolean;
  }[];
  username: string;
  email: string;
  password: string;
};

export type ProfileProps = {
  profile: {
    nickname: string;
    level: number;
    points: number;
    achievements: {
      id: string;
      name: string;
      description: string;
      isUnlocked: boolean;
    }[];
  };
};
