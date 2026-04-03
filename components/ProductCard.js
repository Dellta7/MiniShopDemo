import { Image, StyleSheet, Text, View } from 'react-native';
import ActionButton from './ActionButton';
import PriceTag from './PriceTag';

export default function ProductCard({ product, onPressDetails }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <PriceTag value={product.price} />
        <View style={styles.actions}>
          <ActionButton
            title="Xem chi tiet"
            onPress={() => onPressDetails(product)}
            filled
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    overflow: 'hidden',
    marginBottom: 14,
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 170,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0f172a',
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
