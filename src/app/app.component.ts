import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-form';
}

  dynamic-form = this.fb.group({
    firstname:['',[ Validators.required ]],
    secondname:['',[ Validators.required ]],
  Phoneno:['',[ Validators.required, Validators.minLength(10) ]],
    email:['',[ Validators.required ]],
    password:['',[ Validators.required ]],
  });
  constructor(private router:Router,
    private fb:FormBuilder) { }
  

  ngOnInit(): void {
  }
  getError(field){
    return (this.vuelogicsForm.get(field).touched||this.vuelogicsForm.get(field).dirty)&&this.vuelogicsForm.get(field).errors;
  }
  register(){
    if(this.vuelogicsForm.valid){
      this.Service.register(this.vuelogicsForm.value.firstname,this.vuelogicsForm.value.secondname,
        this.vuelogicsForm.value.phno,this.vuelogicsForm.value.email,
        this.vuelogicsForm.value.pwd)
      .subscribe(data=>{
        if(data){
          alert("Successfully created account. Please login");
          this.router.navigateByUrl("");
        }
      },(data)=>{
        alert(data.error.message)
      })
    }else{
      alert("Form is invalid");
    }
  }

}


