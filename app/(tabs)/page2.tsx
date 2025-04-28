import { View, Text, StyleSheet } from 'react-native';

export default function PageTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        สวัสดีครับ{'\n'}
        ทดสอบหน้า 2{'\n'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', 
  },
});
