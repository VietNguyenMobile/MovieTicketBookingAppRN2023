import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.Black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
