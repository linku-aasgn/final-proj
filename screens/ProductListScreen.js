// screens/ProductListScreen.js
import React, { useState, useContext } from 'react';
import { View, FlatList, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { CartContext } from '../context/CartContext';
import Navbar from '../components/Navbar';

const ProductListScreen = ({ navigation }) => {
  const { dispatch } = useContext(CartContext);
  const [showOnePerRow, setShowOnePerRow] = useState(false);

  const products = [
    { id: '1', name: 'Boat airdopes 141 ANC', price: 1699, image: '', description: 'Description of Product 1', reviews: [{ review: 'Great product!' }] },
    { id: '2', name: 'Product 2', price: 1099, image: 'https://via.placeholder.com/150', description: 'Description of Product 2', reviews: [{ review: 'Loved it!' }] },
    { id: '3', name: 'Product 3', price: 1999, image: 'https://via.placeholder.com/150', description: 'Description of Product 3', reviews: [{ review: 'Highly recommend!' }] },
    { id: '4', name: 'Product 4', price: 2199, image: 'https://via.placeholder.com/150', description: 'Description of Product 4', reviews: [{ review: 'Amazing quality!' }] },
  ];

  const toggleLayout = () => {
    setShowOnePerRow(!showOnePerRow);
  };

  const handleBuyNow = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
    navigation.navigate('BuyNowCartSummary');
  };

  const renderItem = ({ item }) => (
    <View style={showOnePerRow ? styles.onePerRowItem : styles.twoPerRowItem}>
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { product: item })}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text>{item.name}</Text>
        <Text>${item.price}</Text>
      </TouchableOpacity>
      <Button title="Buy Now" onPress={() => handleBuyNow(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Navbar navigation={navigation} />
      <Button title={`Toggle ${showOnePerRow ? '2' : '1'} per row`} onPress={toggleLayout} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={showOnePerRow ? 1 : 2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  onePerRowItem: {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
  },
  twoPerRowItem: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexBasis: '48%',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
});

export default ProductListScreen;
