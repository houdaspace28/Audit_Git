import ChoiceQuestion from "./ChoiceQuestion";
import OpenQuestion from "./OpenQuestion";
import QstsLabels from "./QstsLabels";
import { FaQuestion } from "react-icons/fa6";
import { MdTextSnippet } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScores } from '../contexts/ScoreContext';
import axios from "axios";
import {link_server} from "../../someinfo";
interface Question {
  qst_id: number;
  qst_content: string;
}
interface PilierData {
  pilier_id: number;
  pilier_nom: string;
  nbr_oq: number;
  choice_qsts: Question[];
  open_qsts: Question[];
}

const getNextPilier = (pilier_nom: string, nom_entreprise: string) => {
  const piliers = ["Données", "Reporting", "SiteWeb", "Automatisation", "Messages"];
  if (pilier_nom === "Messages") return `/entreprises/${nom_entreprise}/response`;
  else {
    const index = piliers.indexOf(pilier_nom);
    return `/audit/${piliers[index + 1]}/entreprises`;
  }
};

interface Props {
  pilier_nom: string;
  onPilierComplete: (score: number) => void;

}

const QuestionsForm = ({ pilier_nom, onPilierComplete }: Props) => {
  const { updateScore,nomEntreprise,scores } = useScores();
  const [pilierData, setPilierData] = useState<PilierData | null>(null);
  const [choices, setChoices] = useState<number[]>(Array(5).fill(0));
  const [openAnswers, setOpenAnswers] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPilierData = async (pilier_nom: string) => {
      const response = await fetch(`${link_server}audit/${pilier_nom}`);
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        console.error(message);
        return;
      }
      const data = await response.json();
      setPilierData(data);
      setOpenAnswers(new Array(data.nbr_oq).fill(""));
      setChoices(Array(5).fill(0));
    };
    fetchPilierData(pilier_nom);
  }, [pilier_nom]);

  const handleChoiceChange = (index: number, choice: number) => {
    const newChoices = [...choices];
    newChoices[index] = choice;
    setChoices(newChoices);
  };

  const handleOpenAnswerChange = (index: number, answer: string) => {
    const newAnswers = [...openAnswers];
    newAnswers[index] = answer;
    setOpenAnswers(newAnswers);
  };


  const handleNextPilier =async () => {
    const score = choices.reduce((acc, curr) => acc + curr, 0);
    updateScore(pilier_nom, score);
    onPilierComplete(score);
    const dataToPost = {
      [`choice_qsts_${pilierData?.pilier_id}`]: choices,
      [`open_qsts_${pilierData?.pilier_id}`]: openAnswers,
      scores: {
        ...scores,
        [pilier_nom]: score
      } 
    };

    console.log("Data to be posted:", dataToPost);

    try {
      await axios.post(`${link_server}entreprises/${pilier_nom}/${nomEntreprise}`, dataToPost);
    } catch (error) {
      console.error("Error posting data:", error);
    }
    navigate(getNextPilier(pilier_nom,nomEntreprise));
  };

  return (
    <>
      <div className="hidden md:block">
        <QstsLabels />
      </div>

      <form>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-1">
          <div className="col-span-1 border-r-2 border-black">
            <div className="md:hidden flex justify-center items-center">
              <div className="mt-3 flex justify-center items-center gap-2 md:ml-5 border-2 border-black w-auto py-1 px-2">
                <FaQuestion size={25} />
                <h3 className="font-medium text-sm sm:text-md xmd:text-lg">Questions d'évaluation</h3>
              </div>
            </div>
               
            <ChoiceQuestion key={pilierData?.choice_qsts[0].qst_id} questionContent={`${
              pilierData?.choice_qsts[0].qst_content}
            `} onChoiceChange={(choice) => handleChoiceChange(0, choice)} answer={choices[0]}/>
            <ChoiceQuestion key={pilierData?.choice_qsts[1].qst_id} questionContent={`${
              pilierData?.choice_qsts[1].qst_content}
            `} onChoiceChange={(choice) => handleChoiceChange(1, choice)} answer={choices[1]}/>
            <ChoiceQuestion key={pilierData?.choice_qsts[2].qst_id} questionContent={`${
              pilierData?.choice_qsts[2].qst_content}
            `} onChoiceChange={(choice) => handleChoiceChange(2, choice)} answer={choices[2]}/>
            <ChoiceQuestion key={pilierData?.choice_qsts[3].qst_id} questionContent={`${
              pilierData?.choice_qsts[3].qst_content}
            `} onChoiceChange={(choice) => handleChoiceChange(3, choice)} answer={choices[3]}/>
            <ChoiceQuestion key={pilierData?.choice_qsts[4].qst_id} questionContent={`${
              pilierData?.choice_qsts[4].qst_content}
            `} onChoiceChange={(choice) => handleChoiceChange(4, choice)} answer={choices[4]}/>
            
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="md:hidden flex justify-center items-center">
              <div className="flex justify-center items-center gap-2 mr-5 bg-[#3399ff] py-1 border-2 border-[#3399ff] w-auto px-2">
                <MdTextSnippet color="white" size={25} />
                <h3 className="font-medium text-white text-sm sm:text-md xmd:text-lg">Questions ouvertes</h3>
              </div>
            </div>
            {pilierData?.open_qsts.map((qst, index) => (
              <OpenQuestion key={index} onAnswerChange={(answer) => handleOpenAnswerChange(index, answer)} answer={openAnswers[index]}>{qst.qst_content}</OpenQuestion>
            ))}
          </div>
        </div>
        <div className="flex justify-center w-auto">
          <button type="button" onClick={handleNextPilier} className="text-white medium bg-[#3399ff] active:border-4 border-[#3399ff] active:bg-white active:text-[#3399ff] rounded-none my-5 hover:border-4 border-[rgb(157,203,249,0.98)]">
            {pilierData?.pilier_nom === "Messages" ? "Résultats" : "Pilier Suivant"}
          </button>
        </div>
      </form>
    </>
  );
};

export default QuestionsForm;
