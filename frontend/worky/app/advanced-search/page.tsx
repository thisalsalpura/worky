'use client';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Gig } from "@/components/interfaces/Gig";
import { CustomTextField } from "@/components/ui/mui/CustomTextField";
import { CustomSelect } from "@/components/ui/mui/CustomSelect";
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

    const [sortOption, setSortOption] = useState<string>('');

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

            <div className="w-full h-auto flex flex-col items-start justify-center md:p-4 gap-y-8">
                <div className="w-full h-auto grid grid-cols-12 bg-on-background border-2 border-on-background rounded-lg p-5 md:p-10 gap-y-8">
                    <div className="col-span-12 flex items-center justify-start">
                        <h2 className="w-full h-auto text-2xl md:text-3xl text-background font-heading font-semibold">Advanced Search</h2>
                    </div>

                    <div className="col-span-12">
                        <CustomTextField
                            label="Gig Title"
                            type="text"
                            variant="outlined"
                            fullWidth
                            endIcon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                            value={searchData.title}
                            onChange={(e) => {
                                setSearchData(prev => ({ ...prev, title: e.target.value }));
                                setErrors(prev => ({ ...prev, title: "" }));
                            }}
                            error={!!errors.title}
                            helperText={errors.title}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 md:pr-4">
                        <CustomSelect
                            label="Category"
                            fullWidth
                            options={[
                                { value: 'select', label: 'Select Category' },
                                { value: 'web', label: 'Web' },
                                { value: 'app', label: 'App' },
                                { value: 'game', label: 'Game' },
                                { value: 'design', label: 'Design' },
                                { value: 'marketing', label: 'Marketing' },
                                { value: 'writing', label: 'Writing' },
                                { value: 'video', label: 'Video' }
                            ]}
                            value={searchData.category}
                            onChange={(e) => {
                                setSearchData(prev => ({ ...prev, category: String(e.target.value) }));
                                setErrors(prev => ({ ...prev, category: "" }));
                            }}
                            error={!!errors.category}
                            helperText={errors.category}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 md:pl-4">
                        <CustomSelect
                            label="Sub Category"
                            fullWidth
                            options={[
                                { value: 'select', label: 'Select Sub Category' },
                                { value: 'web_design', label: 'Web Design' },
                                { value: 'web_development', label: 'Web Development' },
                                { value: 'app_development', label: 'App Development' },
                                { value: 'game_development', label: 'Game Development' },
                                { value: 'content_writing', label: 'Content Writing' },
                                { value: 'copywriting', label: 'Copywriting' },
                                { value: 'video_editing', label: 'Video Editing' }
                            ]}
                            value={searchData.subCategory}
                            onChange={(e) => {
                                setSearchData(prev => ({ ...prev, subCategory: String(e.target.value) }));
                                setErrors(prev => ({ ...prev, subCategory: "" }));
                            }}
                            error={!!errors.subCategory}
                            helperText={errors.subCategory}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 md:pr-4">
                        <CustomSelect
                            label="Sort By"
                            fullWidth
                            options={[
                                { value: 'select', label: 'Select Sort Option' },
                                { value: 'relevance', label: 'Relevance' },
                                { value: 'newest', label: 'Newest' },
                                { value: 'price_low', label: 'Price: Low to High' },
                                { value: 'price_high', label: 'Price: High to Low' },
                                { value: 'rating', label: 'Top Rated' }
                            ]}
                            value={sortOption}
                            onChange={(e) => {
                                setSortOption(String(e.target.value));
                                setErrors(prev => ({ ...prev, sortOption: "" }));
                            }}
                            error={!!errors.sortOption}
                            helperText={errors.sortOption}
                        />
                    </div>

                    <div className="col-span-12 md:col-span-6 md:pl-4">

                    </div>

                    <div className="col-span-12 md:col-span-6 md:pr-4">
                        <Button name="Clear" btnContainer="w-full text-primary bg-on-primary" btnPing="bg-primary" btnPingDot="bg-primary" />
                    </div>

                    <div className="col-span-12 md:col-span-6 md:pl-4">
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