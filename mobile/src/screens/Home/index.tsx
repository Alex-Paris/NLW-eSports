import { SafeAreaView, Image, FlatList } from 'react-native';

import { GAMES } from '../../utils/games';
import { Header } from '../../components/Header';
import { GameCard } from '../../components/GameCard';

import logoImg from '../../assets/logo-nlw-esports.png';

import { styles } from './styles';

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Header title="Encontre seu duo!" subtitle="Selecione o game que deseja jogar..." />

      <FlatList
        data={GAMES}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => (
          <GameCard data={item} />
        )}
      />
    </SafeAreaView>
  );
}