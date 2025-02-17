import { ImageSourcePropType } from 'react-native';

export interface IUser {
  id: number;
  name: string;
  age: number;
  city: string;
  country: string;
  image: ImageSourcePropType;
}
