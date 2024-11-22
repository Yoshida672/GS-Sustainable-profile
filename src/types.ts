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
    achievements: Achievement[];
  };
  export type ProfileProps = {
    profile: {
      nickname: string;
      level: number;
      points: number;
      achievements: Achievement[];
    };
}