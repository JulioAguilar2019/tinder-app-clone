import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Main } from './src/Main';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <Main />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

