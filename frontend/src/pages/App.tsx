import '../App.css';
import { useState } from 'react';
import PilierMenu from '../components/PilierMenu';
import logoSrc from '../assets/WhiteLogo.png';
import { Outlet } from 'react-router-dom';
import { useScores } from '../contexts/ScoreContext';
import { Leadrogen } from '../../someinfo';



function App() {
  const { nomEntreprise } = useScores();
  const [selectedPilier, setSelectedPilier] = useState(""); 
  const handlePilierClick = (pilier: string) => {
    setSelectedPilier(pilier);
  };
  console.log(nomEntreprise);

  

  
  return (
    <div className="flex flex-col  justify-center">
      <div className='flex items-center bg-[#3399ff] gap-6'>
        <a target="_blank" className='hidden sm:block pl-6 pb-0 lmd:pb-4 pt-6 lmd:pt-4 h-16 bg-[#3399ff] self-start' href={Leadrogen}>
          <img src={logoSrc} alt="" className='h-7 w-7 lmd:h-9 lmd:w-9 xxmd:h-12 xxmd:w-12 '/>
        </a>
        <p className='text-sm lmd:text-md xxmd:text-lg log:text-xl px-3 sm:px-0 py-3 font-normal bg-[#3399ff] text-white sm:self-end'>
          L’expérience digitale s’appuie sur cinq piliers: Données, reporting, site web, automatisation et messages. La qualité globale de l’expérience digitale égale le plus fragile de ces derniers.
        </p>
      </div>
      <PilierMenu onPilierClick={handlePilierClick} />  
      <Outlet />
    </div>
  );
}

export default App;
