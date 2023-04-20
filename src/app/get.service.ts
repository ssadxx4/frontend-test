import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private httpClient: HttpClient) { }

  async GET(URL:string){
    return await new Promise((resole, reject) => {
      this.httpClient.get(URL).subscribe({
        next: (data:any) => {
          if (data.success){
            resole(data.message);
          }else{
            reject(data.message);
          }
        },
        error:(error) => {
          let error_description = error.error.error_description ? " [" + error.error.error_description + "]" :"";
          reject(error.status + " " + error.status.Text + error.error.error_description);
        }
      });
    });
  }
}
