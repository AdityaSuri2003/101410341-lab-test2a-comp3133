export interface Character {
  name: string;
  house?: string;
  image?: string;
  species?: string;
  ancestry?: string;
  wizard?: boolean;
  actor?: string;
  wand?: {
    wood?: string;
    core?: string;
    length?: number;
  };
}
