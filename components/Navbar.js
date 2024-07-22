// components/Navbar.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';

const Navbar = ({ navigation }) => {
  const { state } = useContext(CartContext);
  const totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('CartSummary')}>
        <Text style={styles.navbarText}>Cart Items: {state.cartItems.length}</Text>
        <Text style={styles.navbarText}>Total: Rs{totalAmount.toFixed(2)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  navbarText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Navbar;
