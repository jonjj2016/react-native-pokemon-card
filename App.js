import { StatusBar } from 'expo-status-bar'
import { StyleSheet, ScrollView, SafeAreaView, Platform } from 'react-native'
import PokemonCard from './components/PokemonCard'
import pokemonData from './data'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {Object.keys(pokemonData).map((pokemon, index) => {
          return (
            <PokemonCard
              key={pokemon.name + pokemon.hd + '-' + index}
              {...pokemonData[pokemon]}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android?' ? 25 : 0,
  },
})
