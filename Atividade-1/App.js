import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const frases = [
  'Acredite em milagres, mas não dependa deles.',
  'A maior barreira para o sucesso é o medo do fracasso.',
  'Siga os bons e aprenda com eles.',
  'O bom-senso vale mais do que muito conhecimento.',
  'O riso é a menor distância entre duas pessoas.',
  'Deixe de lado as preocupações e seja feliz.',
  'Realize o óbvio, pense no improvável e conquiste o impossível.',
  'Acredite em você mesmo e todo o resto virá.',
  'Grandes conquistas começam com pequenos passos.',
  'A persistência é o caminho do êxito.',
];

export default function App() {
  const [frase, setFrase] = useState('');
  const [aberto, setAberto] = useState(false);

  function quebrarBiscoito() {
    const indice = Math.floor(Math.random() * frases.length);
    setFrase(`"${frases[indice]}"`);
    setAberto(true);
  }

  return (
    <View style={styles.container}>
      <Image
        source={
          aberto
            ? require('./assets/biscoitoQuebrado.png')
            : require('./assets/biscoito.png')
        }
        style={styles.imagem}
      />

      <Text style={styles.frase}>{frase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
        <Text style={styles.textoBotao}>Quebrar Biscoito</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    width: 230,
    height: 230,
    resizeMode: 'contain',
  },
  frase: {
    fontSize: 17,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    minHeight: 50,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});