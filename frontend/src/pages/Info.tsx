import logoSrc from '../assets/WhiteLogo.png';
import { AiOutlineAudit } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import axios from "axios";
import {useState} from "react";
import { useScores } from '../contexts/ScoreContext';
import { link_server, Leadrogen } from '../../someinfo';


const schema =z.object({
  nom_entreprise: z.string({required_error:"Nom est requis",invalid_type_error:"Le nom doit être une chaine de caractères"}).min(3, {message: "Le nom doit contenir au moins 3 caractères"}),

  nom_ceo: z.string({required_error:"Nom est requis",invalid_type_error:"Le nom doit être une chaine de caractères"}).min(3, {message: "Le nom doit contenir au moins 3 caractères"}),

  tel: z.string({required_error:"Numero de telephone requis"}).regex(/^(0|\+212)?([ \-_/]*)(\d[ \-_/]*){9}$/,{message:"Le numéro de téléphone doit être au format 06/07/08 et 8 chiffres"}),

  secteur: z.string({required_error:"Secteur d'activité requis"}).min(3, {message: "Le secteur d'activité doit contenir au moins 3 caractères"}),

  nombre_emp: z.preprocess((val) => Number(val), z.number({ required_error: "Nombre d'employés requis" }).min(1, { message: "Le nombre d'employés doit être supérieur à 0" })),

  site_url: z.string({required_error:"URL du site requis"}).url(),

})

type FormData = z.infer<typeof schema>;

const Info = () => {
  const { setNomEntreprise } = useScores();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const {register, handleSubmit, formState: {errors}} = useForm<FormData>({resolver: zodResolver(schema)});

  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(`${link_server}`, data);
      console.log(response.data);
      setNomEntreprise(data.nom_entreprise);
      setIsSubmitted(true);
    } catch (error) {
      console.error(error);
      alert('Erreur de création de l\'entreprise');
    }
  };

  return (
    <div>
      <div className='flex justify-center bg-[#3399ff] gap-6'>
        <a target="_blank" className='hidden sm:block pl-6 pb-0 lmd:pb-4 pt-6 lmd:pt-4 h-16 bg-[#3399ff] self-start' href={`${Leadrogen}`}>
          <img src={logoSrc} alt="" className='h-7 w-7 lmd:h-9 lmd:w-9 xxmd:h-12 active:bg-[#3399ff] xxmd:w-12 '/>
        </a>
        <p className='text-sm lmd:text-md xxmd:text-lg log:text-xl px-3 sm:px-0 py-3 font-normal bg-[#3399ff] text-white sm:self-end'>
          L’expérience digitale s’appuie sur cinq piliers: Données, reporting, site web, automatisation et messages. La qualité globale de l’expérience digitale égale le plus fragile de ces derniers.
        </p>
      </div>
      <div className='flex justify-start  gap-4 pl-8 md:pl-14 py-8 border-b border-[#3399ff]'>
      <AiOutlineAudit size={30}/>
      <h3 className='text-xl font-medium'>Réaliser une audit</h3>
      </div>
      <h2 className='text-[#3399ff] pl-8 md:pl-14 my-8'>Vos informations</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col sm:grid sm:grid-cols-2 gap-6 pb-10'>

      <div className='flex flex-col w-4/5 justify-center gap-2 mx-8 md:mx-14'>
           <label htmlFor='nom_entreprise'>Nom de l'entreprise:</label>
           <input type="text" id='nom_entreprise' placeholder='Nom de l’entreprise' className='bg-gray-100  border-2 p-3 border-gray-200' {...register("nom_entreprise")}/>
          {errors.nom_entreprise && <p className='text-red-500'>{errors.nom_entreprise.message}</p>}
         </div>

         <div className='flex flex-col w-4/5 justify-center gap-2 mx-8 md:mx-14'>
           <label htmlFor='nom_ceo'>Votre nom:</label>
           <input type="text" id='nom_ceo' placeholder='Votre nom complet' className='bg-gray-100  border-2 p-3 border-gray-200' {...register("nom_ceo")}/>
          {errors.nom_ceo && <p className='text-red-500'>{errors.nom_ceo.message}</p>}
         </div>

         <div className='flex flex-col w-4/5 justify-center gap-2 mx-8 md:mx-14'>
           <label htmlFor='tel' className=''>Numero de téléphone:</label>
           <input type="text" placeholder='06|07 XX XX XX XX' id='tel' className='bg-gray-100  border-2 p-3 border-gray-200' {...register("tel")}/>
          {errors.tel && <p className='text-red-500'>{errors.tel.message}</p>}
         </div>
          
        <div className='flex flex-col w-4/5 justify-center gap-2 mx-8 md:mx-14 '>
          <label htmlFor='secteur' >Secteur d’activité:</label>
          <input type="text" placeholder='Secteur d’activité' id='secteur' className='bg-gray-100  border-2 p-3 border-gray-200' {...register("secteur")}/>
          {errors.secteur && <p className='text-red-500'>{errors.secteur.message}</p>}
        </div>

        <div className='flex flex-col w-4/5 justify-center gap-2 mx-8 md:mx-14 '>
          <label htmlFor='nombre_emp'>Nombre d'employés:</label>
          <input type="number" placeholder="Nombre d'employés" id='nombre_emp' className='bg-gray-100  border-2 p-3 border-gray-200' {...register("nombre_emp")}/>
          {errors.nombre_emp && <p className='text-red-500'>{errors.nombre_emp.message}</p>}
        </div>
          
        <div className='flex flex-col w-4/5 justify-center gap-2 mx-8 md:mx-14'>
          <label htmlFor='site_url'>URL du site de votre entreprise:</label>
          <input type="text" placeholder="URL du site" id='site_url' className='bg-gray-100  border-2 p-3 border-gray-200' {...register("site_url")}/>
          {errors.site_url && <p className='text-red-500'>{errors.site_url.message}</p>}
        </div>  

        <div className='flex justify-start'>
        
        <button type='submit' className='flex justify-center items-center text-white mt-2 ml-8 md:ml-14 bg-[#3399ff] p-3 h-12 active:bg-white active:text-[#3399ff] active:border-2 active:border-[#3399ff]'>Confirmer</button> 
        {isSubmitted && <Link to={`/audit/`} className='flex justify-center items-center text-black mt-2 ml-5 bg-white border-2 p-3 border-black h-12 active:bg-black  active:text-white '>Passer a l'audit</Link> }    
        </div>  
      </form>
    </div>
  )
}

export default Info