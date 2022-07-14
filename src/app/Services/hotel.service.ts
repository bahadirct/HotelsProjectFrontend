import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  
  
  apiUrl = "https://localhost:5001/api/";
  constructor(private httpClient: HttpClient) { }
  
  getHotels():Observable<ListResponseModel<Hotel>> {
    let newPath= this.apiUrl+"Hotels/getall";
     return this.httpClient.get<ListResponseModel<Hotel>>(newPath);

    }

    WriteAsJson(){
      let newPath= this.apiUrl+"Hotels/WriteAsJson";
      return this.httpClient.get<ResponseModel>(newPath);
    }

    WriteAsXml(){
      let newPath= this.apiUrl+"Hotels/WriteAsXml";
      return this.httpClient.get<ResponseModel>(newPath);
    }

    UploadCsv(file: File):Observable<any>{
      let newPath= this.apiUrl+"Hotels/uploadcsv";
       // Create form data
       const formData = new FormData(); 
       // Store form name as "file" with file data
       formData.append("file", file,file.name);
      
    // Make http post request over api
    // with formData as req
    return this.httpClient.post<ResponseModel>(newPath,formData);
    }

    
   
  }

