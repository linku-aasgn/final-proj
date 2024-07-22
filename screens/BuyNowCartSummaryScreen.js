// screens/BuyNowCartSummaryScreen.js
import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Button, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';

const BuyNowCartSummaryScreen = ({ navigation }) => {
  const { state, dispatch } = useContext(CartContext);

  const handleQuantityChange = (item, quantity) => {
    if (quantity < 1) return; // Prevent quantity from going below 1
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...item, quantity } });
  };

  const handleRemove = (item) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: item });
  };

  const totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>Rs{item.price.toFixed(2)}</Text>
      </View>
      <View style={styles.itemActions}>
        <TextInput
          style={styles.quantityInput}
          keyboardType="numeric"
          value={String(item.quantity)}
          onChangeText={(text) => handleQuantityChange(item, Number(text))}
        />
        <TouchableOpacity onPress={() => handleRemove(item)}>
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Buy Now</Text>
      <FlatList
        data={state.cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <Text style={styles.total}>Total Amount: Rs{totalAmount.toFixed(2)}</Text>
        <Button title="Proceed to Checkout" onPress={() => navigation.navigate('Checkout')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemDetails: {
    flexDirection: 'column',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: 'green',
  },
  itemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    width: 50,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    marginRight: 10,
  },
  removeButton: {
    color: 'red',
    fontWeight: 'bold',
  },
  footer: {
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default BuyNowCartSummaryScreen;
