import { BusinessResponse } from "./types/business";

const emptyBusiness = {
    id: "",
    name: "",
    description: "",
    phone: "",
    image: "",
    email: "",
    address: {
        number: "",
        street: "",
        zip: "",
        city: "",
        country: ""
    }
}

const defaultBusinessesData: BusinessResponse = {
    transactions: new Array(10).fill(emptyBusiness),
};

export { defaultBusinessesData }