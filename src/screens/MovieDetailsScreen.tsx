import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MovieDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>MovieDetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default MovieDetailsScreen;
