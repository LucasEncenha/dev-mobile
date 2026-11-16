import 'react-native-gesture-handler';

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const categorias = {
  Historicos: {
    titulo: 'Pontos Históricos',
    icone: '🏛️',
    descricao: 'Conheça a história de Vila Aurora.',
    itens: [
      {
        id: 'h1',
        nome: 'Museu da Cidade',
        descricao: 'Objetos e fotografias que contam a história da cidade.',
        detalhes:
          'O museu reúne fotografias antigas, documentos e objetos dos ' +
          'primeiros moradores. A exposição apresenta a formação da cidade ' +
          'e as transformações de seus bairros.',
      },
      {
        id: 'h2',
        nome: 'Igreja da Praça',
        descricao: 'Construção histórica localizada na praça central.',
        detalhes:
          'A igreja preserva vitrais e elementos da arquitetura antiga. ' +
          'A praça ao redor é um ponto de encontro dos moradores e permite ' +
          'observar outras construções do centro histórico.',
      },
      {
        id: 'h3',
        nome: 'Antiga Estação',
        descricao: 'Estação ferroviária transformada em espaço cultural.',
        detalhes:
          'A antiga estação abriga uma exposição sobre a ferrovia. ' +
          'O espaço preserva a plataforma e apresenta a importância ' +
          'dos trens para o desenvolvimento da região.',
      },
    ],
  },

  Restaurantes: {
    titulo: 'Restaurantes Recomendados',
    icone: '🍽️',
    descricao: 'Descubra os sabores da cidade.',
    itens: [
      {
        id: 'r1',
        nome: 'Cantinho da Vila',
        descricao: 'Comida caseira em um ambiente acolhedor.',
        culinaria: 'Brasileira',
        preco: 'R$ 25 a R$ 45 por pessoa',
        detalhes:
          'Serve pratos caseiros com arroz, feijão, saladas e diferentes ' +
          'acompanhamentos. É uma opção para almoçar durante o passeio.',
      },
      {
        id: 'r2',
        nome: 'Bella Massa',
        descricao: 'Massas e pizzas preparadas artesanalmente.',
        culinaria: 'Italiana',
        preco: 'R$ 45 a R$ 80 por pessoa',
        detalhes:
          'O cardápio inclui massas com diferentes molhos e pizzas ' +
          'artesanais. O ambiente é pensado para refeições em família.',
      },
      {
        id: 'r3',
        nome: 'Sabores do Lago',
        descricao: 'Pratos de peixe com vista para o lago.',
        culinaria: 'Regional, com peixes',
        preco: 'R$ 50 a R$ 90 por pessoa',
        detalhes:
          'Oferece peixes grelhados e acompanhamentos regionais. ' +
          'As mesas próximas às janelas permitem apreciar a paisagem.',
      },
    ],
  },

  ArLivre: {
    titulo: 'Atividades ao Ar Livre',
    icone: '🌳',
    descricao: 'Aproveite a natureza e os espaços abertos.',
    itens: [
      {
        id: 'a1',
        nome: 'Parque das Flores',
        descricao: 'Área verde para caminhadas e piqueniques.',
        detalhes:
          'O parque possui caminhos arborizados, jardins e gramados ' +
          'para descansar. É uma opção para caminhar e passar a tarde.',
      },
      {
        id: 'a2',
        nome: 'Trilha do Mirante',
        descricao: 'Caminhada que termina em uma vista panorâmica.',
        detalhes:
          'A trilha passa por uma área de vegetação e termina em um ' +
          'mirante com vista para a cidade e as montanhas da região.',
      },
      {
        id: 'a3',
        nome: 'Passeio na Orla',
        descricao: 'Percurso à beira do lago para caminhar e pedalar.',
        detalhes:
          'A orla conta com espaço para caminhadas, ciclovia e bancos. ' +
          'O passeio permite observar o lago e apreciar o pôr do sol.',
      },
    ],
  },
};

function Pagina({ children }) {
  return (
    <SafeAreaView
      style={styles.pagina}
      edges={['left', 'right', 'bottom']}
    >
      <ScrollView contentContainerStyle={styles.conteudo}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

function TelaInicial({ navigation }) {
  return (
    <Pagina>
      <View style={styles.banner}>
        <Text style={styles.bannerIcone}>🧭</Text>
        <Text style={styles.bannerTitulo}>Explore Vila Aurora</Text>
        <Text style={styles.bannerTexto}>
          História, gastronomia e natureza em um só lugar.
        </Text>
      </View>

      <Text style={styles.titulo}>O que você quer conhecer?</Text>

      {Object.entries(categorias).map(([rota, categoria]) => (
        <Pressable
          key={rota}
          accessibilityRole="button"
          accessibilityLabel={`Abrir ${categoria.titulo}`}
          onPress={() => navigation.navigate(rota)}
          style={({ pressed }) => [
            styles.cartao,
            pressed && styles.pressionado,
          ]}
        >
          <Text style={styles.icone}>{categoria.icone}</Text>
          <Text style={styles.nome}>{categoria.titulo}</Text>
          <Text style={styles.texto}>{categoria.descricao}</Text>
          <Text style={styles.link}>Explorar →</Text>
        </Pressable>
      ))}

      <Text style={styles.aviso}>
        Projeto educativo. Cidade, locais e preços fictícios.
      </Text>
    </Pagina>
  );
}

function ListaCategoria({ categoriaId, navigation }) {
  const categoria = categorias[categoriaId];

  return (
    <Pagina>
      <Text style={styles.icone}>{categoria.icone}</Text>
      <Text style={styles.titulo}>{categoria.titulo}</Text>
      <Text style={styles.introducao}>{categoria.descricao}</Text>

      {categoria.itens.map((item) => (
        <Pressable
          key={item.id}
          accessibilityRole="button"
          accessibilityLabel={`Ver detalhes de ${item.nome}`}
          onPress={() =>
            navigation.navigate('Detalhes', {
              categoriaId,
              itemId: item.id,
              nome: item.nome,
            })
          }
          style={({ pressed }) => [
            styles.cartao,
            pressed && styles.pressionado,
          ]}
        >
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.texto}>{item.descricao}</Text>

          {item.culinaria && (
            <Text style={styles.informacao}>
              Culinária: {item.culinaria}
            </Text>
          )}

          {item.preco && (
            <Text style={styles.informacao}>
              Faixa de preço: {item.preco}
            </Text>
          )}

          <Text style={styles.link}>Ver detalhes →</Text>
        </Pressable>
      ))}
    </Pagina>
  );
}

function TelaHistoricos({ navigation }) {
  return (
    <ListaCategoria categoriaId="Historicos" navigation={navigation} />
  );
}

function TelaRestaurantes({ navigation }) {
  return (
    <ListaCategoria categoriaId="Restaurantes" navigation={navigation} />
  );
}

function TelaArLivre({ navigation }) {
  return (
    <ListaCategoria categoriaId="ArLivre" navigation={navigation} />
  );
}

function TelaDetalhes({ route }) {
  const { categoriaId, itemId } = route.params;
  const categoria = categorias[categoriaId];
  const item = categoria.itens.find((local) => local.id === itemId);

  return (
    <Pagina>
      <View style={styles.cartao}>
        <Text style={styles.icone}>{categoria.icone}</Text>
        <Text style={styles.titulo}>{item.nome}</Text>
        <Text style={styles.texto}>{item.detalhes}</Text>

        {item.culinaria && (
          <Text style={styles.informacao}>
            Culinária: {item.culinaria}
          </Text>
        )}

        {item.preco && (
          <Text style={styles.informacao}>
            Faixa de preço: {item.preco}
          </Text>
        )}
      </View>
    </Pagina>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={styles.raiz}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Inicio"
            screenOptions={{
              headerStyle: { backgroundColor: '#145C49' },
              headerTintColor: '#FFFFFF',
              headerTitleStyle: { fontWeight: 'bold' },
              headerBackTitle: 'Voltar',
            }}
          >
            <Stack.Screen
              name="Inicio"
              component={TelaInicial}
              options={{ title: 'Guia Turístico' }}
            />

            <Stack.Screen
              name="Historicos"
              component={TelaHistoricos}
              options={{ title: 'Pontos Históricos' }}
            />

            <Stack.Screen
              name="Restaurantes"
              component={TelaRestaurantes}
              options={{ title: 'Restaurantes Recomendados' }}
            />

            <Stack.Screen
              name="ArLivre"
              component={TelaArLivre}
              options={{ title: 'Atividades ao Ar Livre' }}
            />

            <Stack.Screen
              name="Detalhes"
              component={TelaDetalhes}
              options={({ route }) => ({
                title: route.params.nome,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  raiz: {
    flex: 1,
  },
  pagina: {
    flex: 1,
    backgroundColor: '#F2F6F3',
  },
  conteudo: {
    padding: 20,
    paddingBottom: 32,
  },
  banner: {
    backgroundColor: '#145C49',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  bannerIcone: {
    fontSize: 44,
    marginBottom: 12,
  },
  bannerTitulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  bannerTexto: {
    fontSize: 16,
    lineHeight: 24,
    color: '#E1F3EB',
  },
  titulo: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#173D32',
    marginBottom: 14,
  },
  introducao: {
    fontSize: 16,
    lineHeight: 24,
    color: '#52645C',
    marginBottom: 20,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DCE6DF',
  },
  pressionado: {
    opacity: 0.7,
  },
  icone: {
    fontSize: 36,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#173D32',
    marginBottom: 8,
  },
  texto: {
    fontSize: 16,
    lineHeight: 25,
    color: '#52645C',
  },
  informacao: {
    fontSize: 15,
    lineHeight: 23,
    color: '#173D32',
    marginTop: 10,
  },
  link: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#145C49',
    marginTop: 16,
  },
  aviso: {
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    color: '#52645C',
    marginTop: 8,
  },
});