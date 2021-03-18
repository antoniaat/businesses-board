interface Adress {
    number: string,
    street: string,
    zip: string,
    city: string,
    country: string,
}

interface Business {
    id: string,
    name: string,
    description: string,
    phone: string,
    image: string,
    email: string,
    address: Adress,
}

interface BusinessResponse {
    transactions: Business[];
}

export type { BusinessResponse, Business };
