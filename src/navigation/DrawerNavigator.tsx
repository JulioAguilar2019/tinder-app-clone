import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/Home';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
    );
}