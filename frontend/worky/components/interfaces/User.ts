export interface User {
    fname?: string;
    lname?: string;
    email: string;
    password: string;
    country?: Country;
    mobile?: string;
    role?: string;
}

export interface Country {
    code: string;
    name: string;
    dial: string;
    flagCode: string;
}