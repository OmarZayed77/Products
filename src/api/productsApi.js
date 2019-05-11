import Axios from 'axios';

// URL for BackEnd Server (API)
const URL = process.env.REACT_APP_BASE_URL || 'http://localhost:6552';

// Get All Products dynamically and backend side pagination based on parameters
// pageSize => number of products in one page
// PageNumber => current page number
// CompanyName => to get products of specific company
// SearchQuery => to search for products of a specific name
export const getAll = (PageSize, PageNumber, CompanyName, SearchQuery) => {
    if(!CompanyName || CompanyName === "All") CompanyName="";
    if(!SearchQuery) SearchQuery="";
    return Axios.get(`${URL}/api/products?PageSize=${PageSize}&PageNumber=${PageNumber}&CompanyName=${CompanyName}&SearchQuery=${SearchQuery}`);
}

// get a single product using id
// id => product ID
export const getById = (id) => {
    return Axios.get(`${URL}/api/products/${id}`);
}

// update a product
// id => product ID
// id => new product to be updated to
export const update = (id, product) => {
    return Axios.put(`${URL}/api/products/${id}`, product);
}