'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Gig } from "@/components/interfaces/Gig";
import { CustomTextField } from "@/components/ui/mui/CustomTextField";

const Advanced_Search = () => {

    const [searchData, setSearchData] = useState<Gig>({
        title: "",
        category: "",
        subCategory: "",
        searchTags: []
    });

    const [errors, setErrors] = useState<Record<string, string>>({});

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-12">
            <div className="w-full h-auto flex items-center justify-start">
                <p className="text-sm text-primary font-base">
                    <span className="opacity-40 cursor-pointer">Home</span>
                    <FontAwesomeIcon icon={faAngleRight} />
                    <span className="cursor-pointer">Advanced Search</span>
                </p>
            </div>

            <div className="w-full h-auto p-4">
                <div className="w-full h-full flex items-center justify-center bg-on-background border-2 border-on-background rounded-lg p-5">
                    <div className="w-full h-auto grid grid-cols-12 gap-8">
                        <div className="col-span-12">
                            <CustomTextField
                                label="Gig Title"
                                type="text"
                                variant="outlined"
                                fullWidth
                                value={searchData.title}
                                onChange={(e) => {
                                    setSearchData(prev => ({ ...prev, title: e.target.value }));
                                    setErrors(prev => ({ ...prev, title: "" }));
                                }}
                                error={!!errors.title}
                                helperText={errors.title}
                            />
                        </div>

                        <div className="col-span-12 md:col-span-6">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advanced_Search;