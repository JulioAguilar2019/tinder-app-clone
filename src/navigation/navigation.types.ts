import { DrawerScreenProps } from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { IUser } from '../global/interfaces/user.interface';

export type DrawerParamList = {
  Friendship: undefined;
  Dates: undefined;
  Relationship: undefined;
};

export type RootStackParamList = {
  MainDrawer: NavigatorScreenParams<DrawerParamList>;
  Information: { user: IUser };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type DrawerScreenPropsType<T extends keyof DrawerParamList> =
  DrawerScreenProps<DrawerParamList, T>;
