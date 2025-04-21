import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
      <LinearGradient
          colors={['#000000', '#1DB1B7']}
          start={{x: 0.50, y: 0.5}}
          end={{x: 0.50, y: 0.00}}
          style={{ flex: 1 }}
      />
  );
};

export default Home;
