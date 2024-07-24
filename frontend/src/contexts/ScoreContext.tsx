import { createContext, useContext, useState, ReactNode } from 'react';

interface ScoreContextType {
  scores: { [key: string]: number };
  updateScore: (pilierName: string, score: number) => void;
  nomEntreprise: string;
  setNomEntreprise: (nom: string) => void;
}

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

const ScoreProvider = ({ children }: { children: ReactNode }) => {
  const [scores, setScores] = useState<{ [key: string]: number }>({});
  const [nomEntreprise, setNomEntreprise] = useState<string>('');

  const updateScore = (pilierName: string, score: number) => {
    setScores((prevScores) => ({ ...prevScores, [pilierName]: score }));
  };

  return (
    <ScoreContext.Provider value={{ scores, updateScore, nomEntreprise, setNomEntreprise }}>
      {children}
    </ScoreContext.Provider>
  );
};

const useScores = () => {
  const context = useContext(ScoreContext);
  if (!context) {
    throw new Error('useScores must be used within a ScoreProvider');
  }
  return context;
};

export { ScoreProvider, useScores };
