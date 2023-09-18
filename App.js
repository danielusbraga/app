import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import MinMax from './components/MinMax';
import Cronometro from './components/Cronometro';

export default function App() {
  return (
    <View style={styles.container}>
      <Cronometro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
