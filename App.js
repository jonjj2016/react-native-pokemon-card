import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, SafeAreaView, Platform } from 'react-native'
import PokemonCard from './components/PokemonCard'
import pokemonData from './data'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Object.keys(pokemonData).map((pokemon) => {
        return <PokemonCard key={pokemon.name} {...pokemonData[pokemon]} />
      })}
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
