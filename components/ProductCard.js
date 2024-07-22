import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => {
  const handleBuyNow = () => {
    // Handle buy now action
    console.log(`Buying ${product.title}`);
  };

  const handleAddToCart = () => {
    // Handle add to cart action
    console.log(`Adding ${product.title} to cart`);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>Price: Rs{product.price}</Text>
        <Text style={styles.mrp}>MRP: Rs{product.mrp}</Text>
        <Text style={styles.discount}>{product.discount}% off</Text>
        <View style={styles.buttonContainer}>
          <Button title="Buy Now" style={styles.button} onPress={handleBuyNow} />
          <Button title="Add to Cart" style={styles.button} onPress={handleAddToCart} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginBottom: 5,
  },
  mrp: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
    marginBottom: 5,
  },
  discount: {
    fontSize: 14,
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    width:20,
    height:10
  }
});

export default ProductCard;
