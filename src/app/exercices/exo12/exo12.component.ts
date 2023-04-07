import { CustomsValidatorsService } from './../../demos/demo13/services/customs-validators.service';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-exo12',
  templateUrl: './exo12.component.html',
  styleUrls: ['./exo12.component.scss']
})
export class Exo12Component {

  fg! : FormGroup

  constructor(private _builder : FormBuilder,
          private _validators : CustomsValidatorsService
    ){}

  ngOnInit(){
    this.fg = this._builder.group({
      nickname : [null, Validators.required],
      email : [null, [Validators.required,Validators.email]],
      birthdate : [null, [this._validators.haveRequiredAge(13), Validators.required]],
      favoritemovie : this._builder.array([])
    })
  }

  getMovieArray() : FormArray {
    return this.fg.get("favoritemovie") as FormArray
  }

  addMovie() {
    this.getMovieArray().push(new FormControl(null, Validators.required))
  }

  removeMovie(index : number) {
    this.getMovieArray().removeAt(index)
  }

  onSubmit() {
    console.log(this.fg.value)
  }
}
