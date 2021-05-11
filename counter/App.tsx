import React, { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [count, setCount] = useState<number>(0);

  const increaseCount = useCallback(() => setCount(count + 1), [count]);
  const decreaseCount = useCallback(() => setCount(count - 1), [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{count}</Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.buttonBackground} onPress={increaseCount}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonBackground} onPress={decreaseCount}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
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
  titleText: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    flexDirection: 'row',
    width: 140,
    justifyContent: 'space-between',
    marginTop: 30,
  },
  buttonBackground: {
    width: 40,
    height: 40,
    backgroundColor: '#3498db',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 5,
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});
