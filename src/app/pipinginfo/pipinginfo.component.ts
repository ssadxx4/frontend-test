import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pipinginfo',
  templateUrl: './pipinginfo.component.html',
  styleUrls: ['./pipinginfo.component.scss']
})
export class PipinginfoComponent {

  pipinfInfo:FormGroup;
  today = new Date()
  constructor(private fb: FormBuilder,private postservice:PostService,private router: Router){
    this.pipinfInfo = this.fb.group({
      line_number:"",
      location:"",
      from_info:"",
      to_info:"",
      drawing_number:"",
      service:"",
      material:"",
      inservice_date:"",
      pipe_size:Number(""),
      original_thickness:Number(""),
      stress:Number(""),
      joint_efficiency:Number(""),
      ca:Number(""),
      design_life:Number(""),
      design_pressure:Number(""),
      operating_pressure:Number(""),
      design_temperature:Number(""),
      operating_temperature:Number(""),
    })
  }

  ngOnInit():void{
    this.pipinfInfo.get('inservice_date')?.patchValue(this.today.getFullYear()+"-"+(this.today.getMonth() + 1)+"-"+this.today.getDate())
  }

  btn_submit(){
    let body = new URLSearchParams
    body.set("line_number",this.pipinfInfo.get('line_number')?.value)
    body.set("location",this.pipinfInfo.get('location')?.value)
    body.set("from_info",this.pipinfInfo.get('from_info')?.value)
    body.set("to_info",this.pipinfInfo.get('to_info')?.value)
    body.set("drawing_number",this.pipinfInfo.get('drawing_number')?.value)
    body.set("service",this.pipinfInfo.get('service')?.value)
    body.set("material",this.pipinfInfo.get('material')?.value)
    body.set("inservice_date",this.pipinfInfo.get('inservice_date')?.value)
    body.set("pipe_size",this.pipinfInfo.get('pipe_size')?.value)
    body.set("original_thickness",this.pipinfInfo.get('original_thickness')?.value)
    body.set("stress",this.pipinfInfo.get('stress')?.value)
    body.set("joint_efficiency",this.pipinfInfo.get('joint_efficiency')?.value)
    body.set("ca",this.pipinfInfo.get('ca')?.value)
    body.set("design_life",this.pipinfInfo.get('design_life')?.value)
    body.set("design_pressure",this.pipinfInfo.get('design_pressure')?.value)
    body.set("operating_pressure",this.pipinfInfo.get('operating_pressure')?.value)
    body.set("design_temperature",this.pipinfInfo.get('design_temperature')?.value)
    body.set("operating_temperature",this.pipinfInfo.get('operating_temperature')?.value)
    this.postservice.POST("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/insertInfo",body).then(() => {
      window.alert("Success...")
      this.router.navigateByUrl("")
    })
    // window.alert(this.pipinfInfo.get('inservice_date')?.value)
  }
  btn_Cancel(){
    this.router.navigateByUrl("")
  }
}
