import '../../public/styling/root/index.css'
import '../../public/styling/modules/index.css'
import '../../src/index.css';
import { Version, InfoBar } from '../../src/App';
import MainAboutPage from './components/main';



function App() {
  return (
    <>
      <InfoBar active={"About"}/>
      <MainAboutPage />
      <div className="popup-container-dnd"></div>
      <Version />
    </>
  )
}

export default App
