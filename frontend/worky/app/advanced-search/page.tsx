'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Gig } from "@/components/interfaces/Gig";
import { CustomTextField } from "@/components/ui/mui/CustomTextField";
import { Button } from "@/components/ui/Button";
import { GigCard } from "@/components/ui/GigCard";
import { CustomPagination } from "@/components/ui/mui/CustomPagination";
import { CustomSelect } from "@/components/ui/mui/CustomSelect";

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

            <div className="w-full h-auto flex flex-col items-start justify-center p-4 gap-y-8">
                <div className="w-full h-auto grid grid-cols-12 bg-on-background border-2 border-on-background rounded-lg p-10 gap-8">
                    <div className="col-span-12 flex items-center justify-start">
                        <h2 className="w-full h-auto text-2xl md:text-3xl text-background font-heading font-semibold">Advanced Search</h2>
                    </div>

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
                        <CustomSelect
                            label="Category"
                            options={[
                                { value: 'select', label: 'Select Category' },
                                { value: 'web', label: 'Web' },
                                { value: 'app', label: 'App' },
                                { value: 'game', label: 'Game' },
                                { value: 'design', label: 'Design' },
                                { value: 'marketing', label: 'Marketing' },
                                { value: 'writing', label: 'Writing' },
                                { value: 'video', label: 'Video' },
                                { value: 'other', label: 'Other' }
                            ]}
                            value={searchData.category}
                            onChange={(e) => {
                                setSearchData(prev => ({ ...prev, category: e.target.value as string }));
                                setErrors(prev => ({ ...prev, category: "" }));
                            }}
                            error={!!errors.category}
                            helperText={errors.category}
                            fullWidth
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6">

                    </div>

                    <div className="col-span-12 md:col-span-6">

                    </div>

                    <div className="col-span-12 md:col-span-6">

                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <Button name="Clear" btnContainer="w-full text-primary bg-on-primary" btnPing="bg-primary" btnPingDot="bg-primary" />
                    </div>

                    <div className="col-span-12 md:col-span-6">
                        <Button name="Search" btnContainer="w-full text-on-primary bg-primary" btnPing="bg-on-primary" btnPingDot="bg-on-primary" />
                    </div>
                </div>

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
    );
}

export default Advanced_Search;