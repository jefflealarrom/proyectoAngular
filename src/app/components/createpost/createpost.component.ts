import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

private route = inject(Router)
formulario: FormGroup; 

  ngOnInit(): void {
    
  }

  constructor () {
    this.formulario = new FormGroup({
      titulo: new FormControl ('', [Validators.required]),
      descripcion: new FormControl ('', [Validators.required, Validators.minLength(10)]),
      autor: new FormControl ('', [Validators.required]),
    })
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value)
      this.formulario.reset(); 
     }
  }

  close(): void {
    this.route.navigate(['/blog']);
  }
    
}
