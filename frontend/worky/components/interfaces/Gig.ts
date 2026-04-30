import { FaqItem } from "./FaqItem";

export interface Gig {
    id?: string;
    title?: string;
    desc?: string;
    category?: string;
    subCategory?: string;
    searchTags?: string[];
    faqs?: FaqItem[];
    packages?: GigPackage[];
}

export interface GigPackage {
    title: string;
    desc: string;
    features: string[];
    deliveryTime: number;
    revisions: number;
    price: number;
}