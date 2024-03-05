import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  private router = inject(Router)
  mensajeEnviado: boolean = false;
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      repite_password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  ngOnInit(): void {
    
  }

  
  onSubmit() {
    if (this.formulario.valid) {
      // console.log(this.formulario.value);
      this.mensajeEnviado = true; 
      this.formulario.reset(); 
    } else {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
    } 
  }

  close(): void {
    
    this.router.navigate(['/blog']);
  }

}
