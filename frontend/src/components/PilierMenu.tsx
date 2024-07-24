import { NavLink } from 'react-router-dom'
interface Props{
  onPilierClick: (pilier: string) => void;
}

const PilierMenu = ({onPilierClick}: Props) => {
  const Piliers=["Données", "Reporting", "SiteWeb", "Automatisation", "Messages"];
  return (
    <ul className="menu lg:menu-vertical menu-horizontal w-full rounded-none bg-white p-0 m-0 h-10 sm:h-16 flex justify-evenly ">
      <li key={1}className="bg-white text-black hover:bg-[#3399ff] hover:text-white  border border-[#3399ff] text-sm sm:text-xl  w-1/4 xs:w-1/5 break-all" onClick={() => onPilierClick(Piliers[0])}>
        <NavLink to={`/audit/${Piliers[0]}/entreprises`} className="justify-center rounded-none h-10 sm:h-16 flex items-center ]">Données</NavLink>
      </li>
      <li key={2} className="bg-white text-black hover:bg-[rgb(51,153,255)] hover:text-white  border border-[#3399ff] text-sm sm:text-xl  w-1/4 xs:w-1/5 break-all" onClick={() => onPilierClick(Piliers[1])}>
        <NavLink  to={`/audit/${Piliers[1]}/entreprises`} className="justify-center rounded-none h-10 sm:h-16 flex items-center">Reporting</NavLink>
      </li>
      <li key={3}className="bg-white text-black hover:bg-[#3399ff] hover:text-white  border border-[#3399ff] text-sm sm:text-xl  w-1/4 xs:w-1/5 break-all" onClick={() => onPilierClick(Piliers[2])}>
        <NavLink  to={`/audit/${Piliers[2]}/entreprises`} className="justify-center rounded-none h-10 sm:h-16 flex items-center">Site Web</NavLink>
      </li>
      <li key={4} className="bg-white text-black hover:bg-[#3399ff] hover:text-white  border border-[#3399ff] text-xs xxs:text-sm break-all sm:text-md md:text-lg bmd:text-xl  w-1/4 xs:w-1/5" onClick={() => onPilierClick(Piliers[3])}>
        <NavLink  to={`/audit/${Piliers[3]}/entreprises`} className="justify-center rounded-none h-10 sm:h-16 flex items-center ">Automatisation</NavLink>
      </li>
      <li key={5} className="bg-white text-black hover:bg-[#3399ff] hover:text-white  border border-[#3399ff] text-sm sm:text-xl  w-full xs:w-1/5 break-all" onClick={() => onPilierClick(Piliers[4])}>
        <NavLink  to={`/audit/${Piliers[4]}/entreprises`} className="justify-center rounded-none h-10 sm:h-16 flex items-center">Messages</NavLink>
      </li>
    </ul>
  );
};

export default PilierMenu;
