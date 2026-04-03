import { StyleSheet, Text, View } from 'react-native';

export default function PriceTag({ value }) {
  const formattedPrice = Number(value).toLocaleString('vi-VN');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Gia</Text>
      <Text style={styles.value}>{formattedPrice} đ</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  label: {
    fontSize: 14,
    color: '#4b5563',
    marginRight: 6,
  },
  value: {
    fontSize: 16,
    color: '#dc2626',
    fontWeight: '700',
  },
});
