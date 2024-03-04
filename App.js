import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from 'react-native';
import Header from "./scr/components/Header";
import AlbumList from "./scr/components/AlbumList";

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
