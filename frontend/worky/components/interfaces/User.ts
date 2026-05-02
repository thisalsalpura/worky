export interface User {
    id?: string;
    fname?: string;
    lname?: string;
    email: string;
    password: string;
    country?: Country;
    mobile?: string;
    dob?: Date;
    role?: string;
};

export interface Country {
    code: string;
    name: string;
    dial: string;
    flagCode: string;
};