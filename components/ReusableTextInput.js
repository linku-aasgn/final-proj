
import React from 'react';
import { TextInput, View, StyleSheet, Text ,Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ReusableTextInput = ({
  placeholder,
  value,
  onChangeText,
  inputStyle,
  icon,
  iconColor,
  label,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        {icon && <FontAwesome name={icon} size={20} color={iconColor || "black"} style={styles.icon} />}
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical:  10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    color: 'black',
  },
  icon: {
    marginRight: 10,
  },
  label: {
    marginBottom: 5,
    marginLeft: 5,
    color: 'gray',
  },
  button: {
    backgroundColor: 'aliceBlue',
    padding: 50,
    
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 20,
    borderRadius:20,
  }
});

export default ReusableTextInput;
