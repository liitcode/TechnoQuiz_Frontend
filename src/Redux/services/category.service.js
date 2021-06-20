import axios from "axios";
import { categoryUrl } from "./apiUrl";

const Category = axios.get(categoryUrl);

export default Category;