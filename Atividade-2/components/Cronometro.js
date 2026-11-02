import { Component } from 'react';
import { 
  Image, 
  Text, 
  StyleSheet, 
  View, 
  TouchableOpacity 
} from 'react-native';

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      tempo: 0,
      txtBotao: 'COMEÇAR',
    };
    this.timer = null;
    this.comecarParar = this.comecarParar.bind(this);
    this.zerar = this.zerar.bind(this);
  }

  comecarParar() { 
    if (this.timer == null) {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 });
      }, 100);
      this.setState({txtBotao: 'PARAR'});
    } else {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({
        txtBotao: 'CONTINUAR',
        tempo: this.state.numero
      });
    }
  }

  zerar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      txtBotao: 'COMEÇAR',
      numero: 0,
      tempo: 0
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/cronometro.png')}
        />
        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity 
            style={styles.btn}
            onPress={this.comecarParar}
          >
            <Text style={styles.btnText}>{this.state.txtBotao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.zerar}>
            <Text style={styles.btnText}>ZERAR</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.timerTxt1}>Tempo registrado:</Text>
        <Text style={styles.timerTxt2}>{this.state.tempo.toFixed(1)}</Text>
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
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: -165,
  },
  btnArea: {
    backgroundColor: '#00aeef',
    flexDirection: 'row',
    height: 100,
    marginTop: 80,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 25,
  },
  btnText: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#00aeef',
  },
  timerTxt1: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 50,
  },
  timerTxt2: {
    fontSize: 40,
    color: 'yellow',
    fontWeight: 'bold',
    marginTop: 0,
  },
});

export default Cronometro;