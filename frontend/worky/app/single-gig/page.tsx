import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShare } from "@fortawesome/free-solid-svg-icons";

const Single_Gig = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
            <div className="w-full h-auto flex items-center justify-between gap-x-4">
                <p className="text-sm text-primary font-base">
                    <span className="opacity-40">Home</span>
                    <FontAwesomeIcon icon={faAngleRight} className="opacity-40" />
                    <span className="opacity-40">SingleGig</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>Programming & Tech</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span>Web Development</span>
                </p>

                <div className="w-auto h-auto flex items-center justify-center bg-on-primary border border-outline hover:bg-primary rounded-xl p-2.5 transition-colors duration-300 cursor-pointer group">
                    <FontAwesomeIcon icon={faShare} className="text-sm text-primary group-hover:text-on-primary" />
                </div>
            </div>

            <div className="w-full h-auto p-4">
                <div className="w-full h-auto grid grid-cols-12 gap-y-8 md:gap-x-8">
                    <div className="col-span-12 md:col-span-7 h-auto flex flex-col items-center justify-start gap-y-16">

                    </div>

                    <div className="md:top-22 col-span-12 md:col-span-5 h-auto md:h-fit flex flex-col md:sticky gap-y-6">

                    </div>
                </div>
            </div>
        </div >
    );
}

export default Single_Gig;