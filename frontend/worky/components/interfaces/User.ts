export interface User {
    id?: string;
    fname?: string;
    lname?: string;
    email?: string;
    password?: string;
    mobileCountryCode?: Country;
    mobileNum?: string;
    dob?: Date;
    createdAt?: Date;
    updatedAt?: Date;
    isEmailVerified?: boolean;
    status?: string;
    role?: string;
    address?: Address;
};

export interface Address {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    postalCode?: string;
    country?: Country;
};

export interface Country {
    code?: string;
    name?: string;
    dial?: string;
    flagCode?: string;
};