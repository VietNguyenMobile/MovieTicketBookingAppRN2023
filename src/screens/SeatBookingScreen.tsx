import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SeatBookingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SeatBookingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SeatBookingScreen;
