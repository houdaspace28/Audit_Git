import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onAnswerChange: (answer: string) => void;
  answer: string;
}

const OpenQuestion = ({ children, onAnswerChange, answer }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center w-auto px-8 mt-4">
      <label className="font-light text-sm xxmd:text-lg xlg:text-md mt-3 text-center">{children}</label>
      <textarea
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        placeholder="Bio"
        className="bg-[#f1f2f3] textarea border border-[#aea6a6] textarea-sm w-full max-w-md my-3 rounded-none"
      ></textarea>
    </div>
  );
};

export default OpenQuestion;
