import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Albums</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    //陰影設定
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2, // Android only
  },
  textStyle: {
    fontSize: 20,
  },
});

export default Header;