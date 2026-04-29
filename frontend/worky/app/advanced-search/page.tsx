import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Advanced_Search = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
            <div className="w-full h-auto flex items-center justify-start">
                <p className="text-sm text-primary font-base">
                    <span className="opacity-40 cursor-pointer">Home</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span className="cursor-pointer">Advanced Search</span>
                </p>
            </div>

            <div className="w-full h-auto p-4 gap-y-8 md:gap-x-8">
                <div className="w-full h-full flex flex-col items-center justify-center bg-on-background border-2 border-on-background rounded-lg p-5 sm:p-10 gap-y-8">
                    <div className="w-full h-auto grid grid-cols-12">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advanced_Search;