import { NavigatorScreenParams } from '@react-navigation/native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IUser } from '../global/interfaces/user.interface';

export type DrawerParamList = {
  Home: undefined;
};

export type RootStackParamList = {
  MainDrawer: NavigatorScreenParams<DrawerParamList>;
  Dates: undefined;
  Friendship: undefined;
  Relationship: undefined;
  Information: { user: IUser };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type DrawerScreenPropsType<T extends keyof DrawerParamList> =
  DrawerScreenProps<DrawerParamList, T>;
