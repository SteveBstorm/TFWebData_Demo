import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { CustomsValidatorsService } from './services/customs-validators.service';

@Component({
  selector: 'app-demo13',
  templateUrl: './demo13.component.html',
  styleUrls: ['./demo13.component.scss']
})
export class Demo13Component implements OnInit{

  inscription_form! : FormGroup;

  constructor(private _fb : FormBuilder, private _custom_validators : CustomsValidatorsService){}
  
  ngOnInit(): void {
    this.inscription_form = this._fb.group({
      first_name : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      last_name : [null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]],
      email : [null, [Validators.required, Validators.minLength(5), Validators.maxLength(256), Validators.email]],
      birthdate : [null, [Validators.required, this._custom_validators.haveRequiredAge(12) /*this._custom_validators.isAdult*/]],
      allergens : this._fb.array([])
    });
    this.add_allergen();
  }
  
  validate_form() : void{
    console.log(this.inscription_form);
    // if(this.inscription_form.status == 'INVALID'){
    //   console.error('Formulaire invalide')
    // }
    if(!this.inscription_form.valid){
      console.error('Formulaire invalide')
    }
    //Si valid alors sauvegarder les données dans la DB à l'aide d'un service
  }
  
  get_allergens_array() : FormArray{
    return this.inscription_form.get("allergens") as FormArray;
  }

  add_allergen() : void{
    this.get_allergens_array().push(this._fb.control(null, [Validators.required, Validators.minLength(2), Validators.maxLength(32)]));
  }

  sub_allergen() : void{
    if (this.get_allergens_array().length <= 0) throw new Error(`No enought allergens`);
    this.get_allergens_array().removeAt(this.get_allergens_array.length-1);
  }

}
