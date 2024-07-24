import { useParams } from 'react-router-dom'
import QuestionsForm from '../components/QuestionsForm';
import { useScores } from '../contexts/ScoreContext';




const QstsParPilier = () => {
    const params = useParams<{pilierName: string}>();
    const { nomEntreprise } = useScores();
    console.log(params);
    
    const pilierComplet =(score: number) => {
      console.log(score);
      console.log(nomEntreprise);
    };
    
      return (
        <QuestionsForm pilier_nom={`${params.pilierName}`} onPilierComplete={pilierComplet}/>
      )
}

export default QstsParPilier