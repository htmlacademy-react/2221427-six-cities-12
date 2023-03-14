import MainPage from '../../pages/main-page/main-page';


type AppProps = {
  offer: number;
};

function App({offer}: AppProps): JSX.Element {
  return (
    <MainPage offer={offer}/>
  );
}

export default App;
