import Main from './components/Main/Main'
import Header from './components/Header'
import './styles/styles.scss'
/* import song from './../src/assets/intro_pokemon.mp3'
 */
function App() {
  return (
    <div className='App'>
      {/* <iframe src={song} className='music'></iframe> */}
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
