// いたって普通のRNコンポーネント。
// Textなどを、react-native-webではなくreact-nativeからimportしている。

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Hello worldを表示するだけ
const App = () => (
  <View style={styles.box}>
    <Text style={styles.text}>Hello, world!</Text>
  </View>
);

// ちょっとしたスタイルの指定
const styles = StyleSheet.create({
  box: { backgroundColor: '#cccccc' },
  text: { fontWeight: 'bold' }
});

export default App;