import { Component,NgModule, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';
import { HotelService } from 'src/app/Services/hotel.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[] = [];
  loading: boolean = false;
  file? : File;
  dataLoaded= false;
  constructor(private hotelService:HotelService,private toastrService:ToastrService) { }

  ngOnInit(): void {
  this.getHotels();
  }

  getHotels() {
    this.hotelService.getHotels()
    .subscribe(response=>{
      this.hotels = response.data
      this.dataLoaded=true;
    })
  }

public WriteAsJson(){
  this.hotelService.WriteAsJson().subscribe(response => {
    this.toastrService.success(response.message);
  })}

public WriteAsXml(){
  this.hotelService.WriteAsXml().subscribe(response => {
    this.toastrService.success(response.message);
  })}

  public onChange(event : any) {
    this.file = event.target.files[0];
}

// OnClick of button Upload
public  UploadCsv() {
  this.loading = !this.loading;
  console.log(this.file);
  this.hotelService.UploadCsv(this.file!).subscribe(
      (event: any) => {
          if (typeof (event) === 'object') {

              // Short link via api response
              //this.shortLink = event.link;
              this.toastrService.success(event.message);
              this.getHotels();
              this.loading = false; // Flag variable 
          }
      }
  );
}
  }

  

    
  



