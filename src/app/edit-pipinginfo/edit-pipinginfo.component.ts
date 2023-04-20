import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { GetService } from '../get.service';

@Component({
  selector: 'app-edit-pipinginfo',
  templateUrl: './edit-pipinginfo.component.html',
  styleUrls: ['./edit-pipinginfo.component.scss']
})
export class EditPipinginfoComponent {

  pipinfInfo:FormGroup;
  initStatus:boolean = false
  today = new Date()
  constructor(private fb: FormBuilder,private postservice:PostService,private router: Router,private getservice:GetService){
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
    let linenum = history.state.requestno
    if (!linenum) {
      //console.log('page was refreshed!');
      this.getservice.GET("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/selectByLineNumberInfo/"+linenum).then((response:any) => {
        this.pipinfInfo.get('line_number')?.patchValue(response[0].line_number)
        this.pipinfInfo.get('location')?.patchValue(response[0].location)
        this.pipinfInfo.get('from_info')?.patchValue(response[0].from_info)
        this.pipinfInfo.get('to_info')?.patchValue(response[0].to_info)
        this.pipinfInfo.get('drawing_number')?.patchValue(response[0].drawing_number)
        this.pipinfInfo.get('service')?.patchValue(response[0].service)
        this.pipinfInfo.get('material')?.patchValue(response[0].material)
        this.pipinfInfo.get('inservice_date')?.patchValue(response[0].inservice_date)
        this.pipinfInfo.get('pipe_size')?.patchValue(response[0].pipe_size)
        this.pipinfInfo.get('original_thickness')?.patchValue(response[0].original_thickness)
        this.pipinfInfo.get('stress')?.patchValue(response[0].stress)
        this.pipinfInfo.get('joint_efficiency')?.patchValue(response[0].joint_efficiency)
        this.pipinfInfo.get('ca')?.patchValue(response[0].ca)
        this.pipinfInfo.get('design_life')?.patchValue(response[0].design_life)
        this.pipinfInfo.get('design_pressure')?.patchValue(response[0].design_pressure)
        this.pipinfInfo.get('operating_pressure')?.patchValue(response[0].operating_pressure)
        this.pipinfInfo.get('design_temperature')?.patchValue(response[0].design_temperature)
        this.pipinfInfo.get('operating_temperature')?.patchValue(response[0].oparating_temperature)
      }).then(() => {
        this.initStatus = true;
      })
    } else {
      localStorage.setItem('requestno',linenum)
      this.getservice.GET("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/selectByLineNumberInfo/"+linenum).then((response:any) => {
        this.pipinfInfo.get('line_number')?.patchValue(response[0].line_number)
        this.pipinfInfo.get('location')?.patchValue(response[0].location)
        this.pipinfInfo.get('from_info')?.patchValue(response[0].from_info)
        this.pipinfInfo.get('to_info')?.patchValue(response[0].to_info)
        this.pipinfInfo.get('drawing_number')?.patchValue(response[0].drawing_number)
        this.pipinfInfo.get('service')?.patchValue(response[0].service)
        this.pipinfInfo.get('material')?.patchValue(response[0].material)
        this.pipinfInfo.get('inservice_date')?.patchValue(response[0].inservice_date)
        this.pipinfInfo.get('pipe_size')?.patchValue(response[0].pipe_size)
        this.pipinfInfo.get('original_thickness')?.patchValue(response[0].original_thickness)
        this.pipinfInfo.get('stress')?.patchValue(response[0].stress)
        this.pipinfInfo.get('joint_efficiency')?.patchValue(response[0].joint_efficiency)
        this.pipinfInfo.get('ca')?.patchValue(response[0].ca)
        this.pipinfInfo.get('design_life')?.patchValue(response[0].design_life)
        this.pipinfInfo.get('design_pressure')?.patchValue(response[0].design_pressure)
        this.pipinfInfo.get('operating_pressure')?.patchValue(response[0].operating_pressure)
        this.pipinfInfo.get('design_temperature')?.patchValue(response[0].design_temperature)
        this.pipinfInfo.get('operating_temperature')?.patchValue(response[0].oparating_temperature)
      }).then(() => {
        this.initStatus = true;
      })
    }
  }

  btn_submit(){
    let body = new URLSearchParams
    body.set("line_number",this.pipinfInfo.get('line_number')?.value)
    body.set("line_number2",this.pipinfInfo.get('line_number')?.value)
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
    this.postservice.POST("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/updateInfo",body).then(() => {
      window.alert("Success...")
      this.router.navigateByUrl("")
    })
    // window.alert(this.pipinfInfo.get('inservice_date')?.value)
  }
  btn_Cancel(){
    this.router.navigateByUrl("")
  }
}
