'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Gig } from "@/components/interfaces/Gig";
import { CustomTextField } from "@/components/ui/mui/CustomTextField";
import { Button } from "@/components/ui/Button";
import { GigCard } from "@/components/ui/GigCard";
import { CustomPagination } from "@/components/ui/mui/CustomPagination";

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
                <div className="w-full h-full flex flex-col items-center justify-center bg-on-background border-2 border-on-background rounded-lg p-8 gap-y-12">
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

                        <div className="col-span-12 md:col-span-6">

                        </div>

                        <div className="col-span-12 md:col-span-6">

                        </div>

                        <div className="col-span-12 md:col-span-6">

                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <Button name="Clear" btnContainer="w-full text-primary-container bg-on-primary-container" btnPing="bg-primary-container" btnPingDot="bg-primary-container" />
                        </div>

                        <div className="col-span-12 md:col-span-6">
                            <Button name="Search" btnContainer="w-full text-on-primary bg-primary" btnPing="bg-on-primary" btnPingDot="bg-on-primary" />
                        </div>
                    </div>

                    <div className="w-full h-0.5 bg-outline opacity-20" />

                    <div className="w-full h-auto flex flex-col items-center justify-center gap-y-6">
                        <div className="w-full h-auto flex flex-wrap items-start justify-center gap-6">
                            <GigCard />
                            <GigCard />
                            <GigCard />
                            <GigCard />
                            <GigCard />
                            <GigCard />
                        </div>

                        <CustomPagination count={6} page={1} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advanced_Search;