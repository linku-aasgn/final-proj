// screens/ProductDetailsScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, ScrollView } from 'react-native';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params;
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
    navigation.navigate('ProductList');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>Rs{product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text>Reviews:</Text>
      {product.reviews.map((review, index) => (
        <Text key={index}>{review.review}</Text>
      ))}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity.toString()}
        onChangeText={(text) => setQuantity(parseInt(text) || 1)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={handleAddToCart} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Buy Now" onPress={() => {
          dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
          navigation.navigate('BuyNowCartSummary');
        }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 20,
    color: 'green',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default ProductDetailsScreen;
