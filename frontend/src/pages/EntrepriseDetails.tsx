import { useEffect, useState } from "react";
import { link_server } from "../../someinfo";
import { useScores } from "../contexts/ScoreContext";

type qst = {
    id: Number,
    qst_content:string,
    answer: Number | string,
}


interface EntrepriseData {
    nom_entreprise: string,
    nom_ceo: string,
    tel: string,
    secteur: string,
    nombre_emp: number,
    site_url: string,
    scores: {
      [key: string]: number,
    },
    feedbacks: {
      [key: string]: string,
    },
    open_qsts_1: qst[],
    open_qsts_2: qst[], 
    open_qsts_3: qst[] ,
    open_qsts_4: qst[], 
    open_qsts_5: qst[] ,
    choice_qsts_1: qst[] ,
    choice_qsts_2: qst[], 
    choice_qsts_3: qst[], 
    choice_qsts_4: qst[] ,
    choice_qsts_5: qst[] 
}

const EntrepriseDetails = () => {
  const { nomEntreprise } = useScores();
  const [entreprise_data, setEntrepriseData] = useState<EntrepriseData>();
  useEffect(() => {
   const fetchEntrepriseData = async (nom_entreprise:string) =>{
      const response = await fetch(`${link_server}details/${nom_entreprise}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const data = await response.json();
      setEntrepriseData(data);
    };
    fetchEntrepriseData(nomEntreprise);
   }
  ,[nomEntreprise]);
  return (

    <div className="bg-white">
        <header className="bg-[#ffcc33] text-white text-lg py-4 text-center mb-10">Details de l'audit de {nomEntreprise}</header>
        <div className="ml-10 bg-white">
        <p>Deux classes de questions sont proposees par pilier: Questions d'evaluation et questions ouvertes.<br/> 5 est </p>
        <h1 className="text-[#ffcc33] text-2xl mb-2">Pilier 1: Données</h1>
        
         <PilierTable qsts={entreprise_data?.choice_qsts_1} score={entreprise_data?.scores["Données"]}/>
         <PilierTable qsts={entreprise_data?.open_qsts_1} />
         <h1 className="text-[#ffcc33] text-2xl mb-2">Pilier 2: Reporting</h1>
         <PilierTable qsts={entreprise_data?.choice_qsts_2} score={entreprise_data?.scores["Reporting"]}/>
         <PilierTable qsts={entreprise_data?.open_qsts_2} />
         <h1 className="text-[#ffcc33] text-2xl mb-2">Pilier 3: Site web</h1>
         <PilierTable qsts={entreprise_data?.choice_qsts_3} score={entreprise_data?.scores["SiteWeb"]}/>
         <PilierTable qsts={entreprise_data?.open_qsts_3} />
         <h1 className="text-[#ffcc33] text-2xl mb-2">Pilier 4: Automatisation</h1>
         <PilierTable qsts={entreprise_data?.choice_qsts_4} score={entreprise_data?.scores["Automatisation"]}/>
         <PilierTable qsts={entreprise_data?.open_qsts_4} />
         <h1 className="text-[#ffcc33] text-2xl mb-2">Pilier 5: Messages</h1>
         <PilierTable qsts={entreprise_data?.choice_qsts_5} score={entreprise_data?.scores["Messages"]}/>
         <PilierTable qsts={entreprise_data?.open_qsts_5} />

        </div>
        
    </div>
  )
}
interface TableProps{
    qsts: qst[] | undefined,
    score?:number,
}

const PilierTable = ({qsts, score}: TableProps) => {
    return (
        <div className="bg-white">
            <table className="table-auto  border border-black my-10">
                <thead>
                    <tr>
                        <th className="p-3">Question</th>
                        <th className="p-3">Réponse</th>
                    </tr>
                </thead>
                <tbody>
                    {qsts?.map((qst, index) => (
                        <tr key={index}>
                            <td className="p-3">{qst.qst_content}</td>
                            <td className="text-center">{qst.answer.toString()}</td>
                        </tr>
                    ))}
                </tbody>
                {score && <tfoot>
                    <tr>
                        <td className="p-3">Score</td>
                        <td className="text-center">{score}</td>
                    </tr>
                    </tfoot>}
                
            </table>
        </div>
    )
}



export default EntrepriseDetails