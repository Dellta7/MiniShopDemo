import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ActionButton from '../components/ActionButton';
import PriceTag from '../components/PriceTag';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.image }} style={styles.image} />

        <View style={styles.infoBox}>
          <Text style={styles.name}>{product.name}</Text>
          <PriceTag value={product.price} />
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.actionRow}>
            <ActionButton
              title="Quay lai"
              filled={false}
              onPress={() => navigation.goBack()}
            />
            <ActionButton title="Mua ngay" onPress={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2ff',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  image: {
    width: '100%',
    height: 240,
  },
  infoBox: {
    marginTop: -16,
    marginHorizontal: 16,
    borderRadius: 18,
    backgroundColor: '#ffffff',
    padding: 16,
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  description: {
    marginTop: 12,
    fontSize: 15,
    color: '#374151',
    lineHeight: 22,
  },
  actionRow: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
