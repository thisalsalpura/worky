export interface User {
    id?: string;
    fname?: string;
    lname?: string;
    pronoun?: string;
    email?: string;
    password?: string;
    mobileCountryCode?: Country;
    mobileNum?: number;
    dob?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    isEmailVerified?: boolean;
    status?: string;
    address?: Address;
    profileURL?: string;
    linkedInURL?: string;
    gitHubURL?: string;
    role?: string;
};

export interface Address {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    postalCode?: number;
    country?: Country;
};

export interface Country {
    code?: string;
    name?: string;
    dial?: string;
    flagCode?: string;
};