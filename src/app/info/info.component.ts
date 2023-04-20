import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {
  infoForm:FormGroup;

  constructor(private httpclient:HttpClient,private fb: FormBuilder,private router:Router){
    this.infoForm = this.fb.group({
      list:this.fb.array([])
    })
  }
  list(){
    return this.infoForm.get('list') as FormArray
  }
  ngOnInit():void{

    this.httpclient.get<any>('http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/selectAllInfo').subscribe((res) => {
      let i:number = 0
      console.log(res.message)
      for(i;i<res.message.length;i++){
        console.log(res.message[i])
        this.list().push(this.fb.group({
          line_number: res.message[i].line_number,
          location: res.message[i].location,
          from_info: res.message[i].from_info,
          to_info: res.message[i].to_info,
          pipe_size: res.message[i].pipe_size,
          service: res.message[i].service,
          material: res.message[i].material,
        }))
      }
    })
  }
  btn_edit(i:any){
    window.alert(this.list().at(i).get('line_number')?.value)
  }
  btn_app(i:any){
    window.alert(this.list().at(i).get('line_number')?.value)
  }
  btn_newpiping(){
    this.router.navigateByUrl('pipinginfo')
  }

  btn_info(i:any){
    this.router.navigateByUrl('/editpipinginfo', { state: { requestno:this.list().at(i).get('line_number')?.value } })
  }

  btn_detail(i:any){
    this.router.navigateByUrl('/cmlinfo', { state: { requestno:this.list().at(i).get('line_number')?.value } })
  }
}
