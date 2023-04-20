import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  async POST(URL: string, BODY:any){
    return await new Promise((resolve, reject) => {
      let options  = {headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')}
      this.httpClient.post(URL,BODY,options).subscribe({
        next: (data: any) => {
          if(data.success){
            resolve(data.message);
          }else{
            console.log('post reject: '+data.message)
            reject(data.message);
          }
        },
        error: (error) => {
          console.log(error);
          let error_description = error.error != null ? " [ " + error.error.error_description + "]" : "";
          reject(error.status + " " + error.statusText + error_description);
        }
      });
    })
  }
}
