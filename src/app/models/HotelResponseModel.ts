import { Hotel } from "./hotel";
import { ResponseModel } from "./responseModel";

export interface ProductResponseModel extends ResponseModel{
    data:Hotel[]
   
}