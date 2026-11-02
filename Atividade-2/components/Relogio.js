import { Component } from 'react';
import { 
  Image, 
  Text, 
  StyleSheet, 
  View, 
  TouchableOpacity 
} from 'react-native';

class Relogio extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Text style={styles.timer}>22:00</Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    color: '#fff',
    fontSize: 100,
    fontWeight: 'bold',
    marginTop: -0,
  },
});

export default Relogio;