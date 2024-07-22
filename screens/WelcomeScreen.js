import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Our App!</Text>
      <Button 
        title="Get Started" 
        onPress={() => navigation.navigate('Login')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BE90D4',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default GetStartedScreen;
