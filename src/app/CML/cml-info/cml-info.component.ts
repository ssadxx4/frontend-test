import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetService } from 'src/app/get.service';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-cml-info',
  templateUrl: './cml-info.component.html',
  styleUrls: ['./cml-info.component.scss']
})
export class CmlInfoComponent {

  cml: FormGroup;
  linenum = ""

  constructor(private fb:FormBuilder, private getservice:GetService, private postservice:PostService,private router:Router) {
    this.cml = this.fb.group({
      cml_info: this.fb.array([]) ,
    });
   }

  cml_info() : FormArray {
    return this.cml.get("cml_info") as FormArray
  }

  newcml(): FormGroup {
    let num : number =   this.cml_info().controls.length
    return this.fb.group({
      cml_number: [Number(`${num+1}`)],
      cml_description: ['', Validators.required ],
      actual_outside_diameter: [Number(''), Validators.required ],
      design_thickness: [Number(''), Validators.required ],
      structural_thickness: [Number(''), Validators.required ],
      required_thickness:[Number(''), Validators.required ]
    })
  }

  addcml() {
    // this.cml_info().push(this.newcml());
    let design_thickness_cal :number = 0
    let actual_outside_diameter :number = 0
    let structural_thickness :number = 0
    let required_thickness :number = 0
    let num : number =   this.cml_info().controls.length
    this.getservice.GET("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/selectByLineNumberInfo/"+this.linenum).then((response:any) => {
      switch(response[0].pipe_size) {
        case 0.125: {
          actual_outside_diameter = 10.30
          break;
        }
        case 0.250: {
          actual_outside_diameter = 13.70
          break;
        }
        case 0.357: {
          actual_outside_diameter = 17.10
          break;
        }
        case 0.500: {
          actual_outside_diameter = 21.30
          break;
        }
        case 0.750: {
          actual_outside_diameter = 26.70
          break;
        }
        case 1.000: {
          actual_outside_diameter = 33.40
          break;
        }
        case 1.250: {
          actual_outside_diameter = 42.20
          break;
        }
        case 1.500: {
          actual_outside_diameter = 48.30
          break;
        }
        case 2.000: {
          actual_outside_diameter = 60.30
          break;
        }
        case 2.500: {
          actual_outside_diameter = 73.00
          break;
        }
        case 3.000: {
          actual_outside_diameter = 88.90
          break;
        }
        case 3.500: {
          actual_outside_diameter = 101.60
          break;
        }
        case 4.000: {
          actual_outside_diameter = 114.30
          break;
        }
        case 5.000: {
          actual_outside_diameter = 141.30
          break;
        }
        case 6.000: {
          actual_outside_diameter = 168.30
          break;
        }
        case 8.000: {
          actual_outside_diameter = 219.10
          break;
        }
        case 10.000: {
          actual_outside_diameter = 273.00
          break;
        }
        case 12.000: {
          actual_outside_diameter = 323.80
          break;
        }
        case 14.000: {
          actual_outside_diameter = 355.60
          break;
        }
        case 16.000: {
          actual_outside_diameter = 406.40
          break;
        }
        case 18: {
          actual_outside_diameter = 457.00
          break;
        }
        // default: {
        //   this.cml_info().at(i).get('actual_outside_diameter')?.setValue(0.00)
        //    break;
        // }
     }

      design_thickness_cal = ((response[0].design_pressure * actual_outside_diameter) )/ (((2 * response[0].stress * response[0].joint_efficiency) + (2 * response[0].design_pressure * 0.4)))

      if(response[0].pipe_size <= 2){
        structural_thickness = 1.80
      }
      else if(response[0].pipe_size == 3){
        structural_thickness = 2.00
      }
      else if(response[0].pipe_size == 4){
        structural_thickness = 2.30
      }
      else if(response[0].pipe_size >= 6 && response[0].pipe_size <=18){
        structural_thickness = 2.80
      }
      else if(response[0].pipe_size >= 20){
        structural_thickness = 3.10
      }
      else{
        structural_thickness = 0
      }

      if(structural_thickness > design_thickness_cal){
        required_thickness = structural_thickness
      }
      else{
        required_thickness = design_thickness_cal
      }
      this.cml_info().push(this.fb.group({
        cml_number: [Number(`${num+1}`)],
        cml_description: ['', Validators.required ],
        actual_outside_diameter: [Number(actual_outside_diameter.toFixed(2)), Validators.required ],
        design_thickness: [Number(design_thickness_cal.toFixed(2)), Validators.required ],
        structural_thickness: [Number(structural_thickness.toFixed(2)), Validators.required ],
        required_thickness:[Number(required_thickness.toFixed(2)), Validators.required ]
      }))
    })
  }

  removecml(i:number) {

    this.cml_info().removeAt(i);
    for (i=0;i<= this.cml_info().controls.length-1;i++){
      this.cml_info().at(i).get('cml_number')?.setValue(`${i+1}`)
    }

  }

  design_thickness_cal(i:any){
    let design_thickness_cal :number = 0
    this.getservice.GET("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/selectByLineNumberInfo/"+this.linenum).then((response:any) => {
      switch(response[0].pipe_size) {
        case 0.125: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(10.30)
          break;
        }
        case 0.250: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(13.70)
          break;
        }
        case 0.357: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(17.10)
          break;
        }
        case 0.500: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(21.30)
          break;
        }
        case 0.750: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(26.70)
          break;
        }
        case 1.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(33.40)
          break;
        }
        case 1.250: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(42.20)
          break;
        }
        case 1.500: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(48.30)
          break;
        }
        case 2.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(60.30)
          break;
        }
        case 2.500: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(73.00)
          break;
        }
        case 3.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(88.90)
          break;
        }
        case 3.500: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(101.60)
          break;
        }
        case 4.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(114.30)
          break;
        }
        case 5.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(141.30)
          break;
        }
        case 6.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(168.30)
          break;
        }
        case 8.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(219.10)
          break;
        }
        case 10.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(273.00)
          break;
        }
        case 12.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(323.80)
          break;
        }
        case 14.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(355.60)
          break;
        }
        case 16.000: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(406.40)
          break;
        }
        case 18: {
          this.cml_info().at(i).get('actual_outside_diameter')?.setValue(457.00)
          break;
        }
        // default: {
        //   this.cml_info().at(i).get('actual_outside_diameter')?.setValue(0.00)
        //    break;
        // }
     }

      design_thickness_cal = ((response[0].design_pressure * this.cml_info().at(i).get('actual_outside_diameter')?.value) )/ (((2 * response[0].stress * response[0].joint_efficiency) + (2 * response[0].design_pressure * 0.4)))
      this.cml_info().at(i).get('design_thickness')?.setValue(design_thickness_cal.toFixed(2))
      if(response[0].pipe_size <= 2){
        this.cml_info().at(i).get('structural_thickness')?.setValue(1.80)
      }
      else if(response[0].pipe_size == 3){
        this.cml_info().at(i).get('structural_thickness')?.setValue(2.00)
      }
      else if(response[0].pipe_size == 4){
        this.cml_info().at(i).get('structural_thickness')?.setValue(2.30)
      }
      else if(response[0].pipe_size >= 6 && response[0].pipe_size <=18){
        this.cml_info().at(i).get('structural_thickness')?.setValue(2.80)
      }
      else if(response[0].pipe_size >= 20){
        this.cml_info().at(i).get('structural_thickness')?.setValue(3.10)
      }
      else{
        this.cml_info().at(i).get('structural_thickness')?.setValue(0)
      }
    }).then(() => {
      if(this.cml_info().at(i).get('structural_thickness')?.value > this.cml_info().at(i).get('design_thickness')?.value){
        this.cml_info().at(i).get('required_thickness')?.setValue(this.cml_info().at(i).get('structural_thickness')?.value)
      }
      else{
        this.cml_info().at(i).get('required_thickness')?.setValue(this.cml_info().at(i).get('design_thickness')?.value)
      }
    })
  }
  structural_thickness_cal(i:any){
    this.cml_info().at(i).get('design_thickness')?.setValue("")
  }
  onSubmit() {
    //console.log(this.cml.value);
  }

  ngOnInit(): void {
    let linenum = history.state.requestno
    let i:number =0
    if (!linenum) {
      this.linenum = linenum
    } else {
      localStorage.setItem('linenum',linenum)
      this.linenum = linenum
      this.getservice.GET('http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/selectByLineNumberCML/'+linenum).then((response:any) => {
        for (i=0;i<= response.length-1;i++){
          this.cml_info().push(this.fb.group({
            cml_number: [Number(response[i].cml_number)],
            cml_description: [response[i].cml_description, Validators.required ],
            actual_outside_diameter: [Number(response[i].actual_outside_diameter), Validators.required ],
            design_thickness: [Number(response[i].design_thickness), Validators.required ],
            structural_thickness: [Number(response[i].structural_thickness), Validators.required ],
            required_thickness:[Number(response[i].required_thickness), Validators.required ]
          }))
        }
      })
    }
  }

  btn_save(){
    let i:number
    let body = new URLSearchParams
    let line_num:any = localStorage.getItem('linenum')
    this.getservice.GET("http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/deleteByLineNumberCML/"+line_num).then(() => {
      for(i=0;i<=this.cml.value.cml_info.length-1;i++){
        console.log(i)
        body.set('line_number',line_num)
        body.set('cml_description',this.cml_info().at(i).get('cml_description')?.value)
        body.set('cml_number',this.cml_info().at(i).get('cml_number')?.value)
        body.set('actual_outside_diameter',this.cml_info().at(i).get('actual_outside_diameter')?.value)
        body.set('design_thickness',this.cml_info().at(i).get('design_thickness')?.value)
        body.set('structural_thickness',this.cml_info().at(i).get('structural_thickness')?.value)
        body.set('required_thickness',this.cml_info().at(i).get('required_thickness')?.value)
        this.postservice.POST('http://phumnt03.ap-southeast-1.elasticbeanstalk.com/api/insertcml',body)
        if(i == this.cml.value.cml_info.length-1){
            window.alert("Success")
            this.router.navigateByUrl('')
        }
      }
    })

  }
  btn_cancel(){
    window.location.reload()
  }

  btn_back(){
    this.router.navigateByUrl('')
  }
}
