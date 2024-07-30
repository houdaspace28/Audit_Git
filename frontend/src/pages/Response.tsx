import Feedback from '../components/Feedback';
import { useScores } from '../contexts/ScoreContext';
import { VscOutput } from "react-icons/vsc";
import { getCorrectFeedback } from '../functions/getfeedback';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import axios from "axios";
import { link_server } from '../../someinfo';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Response = () => {
  const { scores, nomEntreprise } = useScores();
  const piliers = ["Données", "Reporting", "SiteWeb", "Automatisation", "Messages"];
  const feedbacks: Record<string, string> = {};
  const data= [
    {
      "pilier": "Données",
      "A" : scores["Données"] || 0,
      "fullMark": 25,
    },
    {
      "pilier": "Reporting",
      "A": scores["Reporting"] || 0,
      "fullMark": 25,
    },
    {
      "pilier": "SiteWeb",
      "A": scores["SiteWeb"] || 0,
      "fullMark": 25,
    },
    {
      "pilier": "Automatisation",
      "A": scores["Automatisation"] || 0,
      "fullMark": 25,
    },
    {
      "pilier": "Messages",
      "A": scores["Messages"] || 0,
      "fullMark": 25,
    },
  ];

  piliers.forEach(pilier => {
    feedbacks[pilier] = getCorrectFeedback(scores[pilier], pilier);
  });
  
  useEffect(() => {
    const postFeedbacks = async () => {
      try {
        await axios.put(`${link_server}entreprises/${nomEntreprise}/feedbacks`, { feedbacks });
      } catch (error) {
        console.error("Error posting feedbacks:", error);
      }
    };

    postFeedbacks();
    console.log("Feedbacks posted");
  }, [feedbacks, nomEntreprise]);

  const handleDownload = async () => {
    try {
      const response = await axios.get(`${link_server}download/${nomEntreprise}`, {
        responseType: 'blob' 
      });

      
      const url = window.URL.createObjectURL(new Blob([response.data]));

      
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${nomEntreprise}_audit.pdf`);
      document.body.appendChild(link);
      link.click();

     
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading the report", error);
    }
  };



  return (
    <div className="pb-10">
      <header className='flex justify-between items-center gap-3 py-7 mb-10 bg-[#ffcc33] px-10'>
        <div className='flex justify-center items-center gap-3'>
        <VscOutput size={35} color='white'/>
        <h2 className="font-medium text-3xl text-white">Vos Résultats</h2>
        </div>
        <Link to={`/entreprises/details/${nomEntreprise}`}>
            <button className='border-2 border-white text-white font-medium hover:text-[#ffcc33] hover:bg-white' >Details de votre audit</button>
        </Link>
        <button className='border-2 border-white text-white font-medium hover:text-[#ffcc33] hover:bg-white' onClick={handleDownload}>Télécharger le rapport</button>
      </header>
      <div className="flex flex-col items-center justify-center gap-10 ">
      {piliers.map((pilier) => (
        <Feedback key={pilier} score={scores[pilier] || 0} pilier={pilier}>
          {getCorrectFeedback(scores[pilier], pilier)}
        </Feedback>
      ))}
    </div>
    <div className="flex justify-center mt-10  ">
    <div className="flex-col bmd:flex-row flex justify-between items-center ag:gap-10 bg-black text-white mx-12 px-12 ">
    <div className='py-10 '>
    <RadarChart outerRadius={90} width={400} height={400} data={data}>
     <PolarGrid />
     <PolarAngleAxis dataKey="pilier" />
     <PolarRadiusAxis angle={30} domain={[0,25]} />
     <Radar name={`${nomEntreprise}`} dataKey="A" stroke="#ffcc33" fill="#ffcc33" fillOpacity={0.6}  />
     <Legend />
    </RadarChart>
    </div>
    <div className='py-10 pr-10 text-2xl bmd:text-xl'>Un radar chart est un graphique en étoile représentant cinq piliers de performance d'une entreprise, avec chaque axe allant jusqu'à un maximum de 25. Plus la zone jaune s'étend sur le graphique, meilleure est la performance de l'entreprise dans ces piliers. Un espace jaune large signifie des scores élevés et une bonne maintenance des piliers, tandis qu'un espace restreint indique des domaines nécessitant des améliorations.</div>
    </div>
    </div>
    
    </div> 
  );
};

export default Response;
