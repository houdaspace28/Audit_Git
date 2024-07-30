import { Link } from 'react-router-dom'
import White from '../assets/White.svg'

const First = () => {
  return (
    <div className="overflow-hidden bg-black relative ">
        <img src={White}  alt="grid" />
        <div className="text-white font-thin absolute top-1/3 left-1/4 flex flex-col items-center justify-center gap-5 mt-5">
            <div className="text-2xl text-center">
            BIENVENU SUR <span className='text-[#3399ff] font-medium'>LEADROGEN</span> AUDIT<br/>
            PRET POUR L'EXPERIENCE ?<br/>
            DECOUVREZ LE POTENTIEL DIGITAL DE VOTRE ENTREPRISE...
            </div>
            <Link to="/help" className=" text-black font-medium bg-white p-3 ">
                Commencer
            </Link>
        </div>
        
    </div>
  )
}

export default First