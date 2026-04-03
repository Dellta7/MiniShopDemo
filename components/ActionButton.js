import { Pressable, StyleSheet, Text } from 'react-native';

export default function ActionButton({ title, onPress, filled = true }) {
  return (
    <Pressable
      style={[styles.button, filled ? styles.filled : styles.outline]}
      onPress={onPress}
    >
      <Text style={[styles.text, filled ? styles.filledText : styles.outlineText]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    minWidth: 110,
    alignItems: 'center',
  },
  filled: {
    backgroundColor: '#1d4ed8',
  },
  outline: {
    borderWidth: 1,
    borderColor: '#1d4ed8',
    backgroundColor: '#eff6ff',
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },
  filledText: {
    color: '#ffffff',
  },
  outlineText: {
    color: '#1d4ed8',
  },
});
