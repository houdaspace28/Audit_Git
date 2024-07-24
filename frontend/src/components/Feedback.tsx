import { FaArrowRightLong } from "react-icons/fa6";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Props{
  score: number;
  pilier: string;
  children: React.ReactNode;
}

const Feedback = ({ score, pilier, children }: Props) => {
  let percentage = (score / 25)*100;
  return (
    <div className="flex justify-center">
     <div className="border-4 border-black p-5 w-11/12 ">
    <div className="flex w-auto gap-3 items-center mb-5">
        <FaArrowRightLong size={30} />
        <h2 className="text-xl font-semibold">{pilier}</h2>
    </div>
    <div className="flex-col md:flex-row flex gap-10 items-center justify-center md:px-5 pb-5">
    <CircularProgressbar counterClockwise value={score} minValue={0} maxValue={25} text={`${percentage}%`} 
       styles={{ 
        root: {
            width: "200px",
        },
        path: { 
          stroke: `#ffcc33`,
          strokeLinecap: 'round',
          transition: 'stroke-dashoffset 0.5s ease 0s',
          transform: 'rotate(0.25turn)',
          transformOrigin: 'center center',
        },
        
        trail: {
          stroke: '#d6d6d6',
          strokeLinecap: 'round',
          transform: 'rotate(0.25turn)',
          transformOrigin: 'center center',
        }, 
        text: {
          fill: 'black',
          fontSize: '1.5rem',
          fontFamily: 'Poppins',
        },
      }}
       />
       <p className="text-lg font-light w-2/3 text-center md:text-left">{children}</p>      
    </div>     
    </div>
    </div>
    
  )
}

export default Feedback