import { FaQuestion } from "react-icons/fa6";
import { MdTextSnippet } from "react-icons/md";

const QstsLabels = () => {
  return (
    <div className="flex justify-between items-center mt-3">
    <div className="flex justify-center items-center gap-2 ml-5 border-2 border-black  w-auto py-1 px-2">
        <FaQuestion size={25}/>
        <h3 className="font-medium text-sm sm:text-md xmd:text-lg">Questions d'évaluation</h3>
        </div>

    <div className="flex justify-center items-center gap-2 mr-5 bg-[#3399ff] py-1 border-2 border-[#3399ff] w-auto px-2">
        <MdTextSnippet color="white" size={25}/>
        <h3 className="font-medium text-white text-sm sm:text-md xmd:text-lg">Questions ouvertes</h3>
        </div>
    </div>      
  )
}

export default QstsLabels