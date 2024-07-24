interface Props {
  questionContent: string;
  onChoiceChange: (choice: number) => void;
  answer: number;
}

const ChoiceQuestion = ({ questionContent, onChoiceChange, answer }: Props) => {
  const choices = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col justify-center items-center px-8 my-4 w-auto">
      <label className="font-light text-sm xxmd:text-lg xlg:text-md my-3 text-center">{questionContent}</label>
      <div className="flex justify-around w-4/5 text-sm xlg:text-md">
        <p className="italic">Jamais</p>

        {choices.map((choiceValue) => (
          <div className="flex items-center gap-1" key={choiceValue}>
            <label className="text-md xmd::text-lg">{choiceValue}</label>
            <input
              type="radio"
              name={`choice-${questionContent}`} // Ensure unique name for each question
              className="appearance-none radio border border-black checked:bg-white xlg:w-4 xlg:h-4 w-3 h-3"
              checked={answer === choiceValue}
              onChange={() => onChoiceChange(choiceValue)}
            />
          </div>
        ))}

        <p className="italic">Toujours</p>
      </div>
    </div>
  );
};

export default ChoiceQuestion;
