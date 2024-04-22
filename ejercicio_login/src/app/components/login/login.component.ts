import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';
import { ErrorComponent } from '../error/error.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,BienvenidoComponent,ErrorComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario: Usuario = new Usuario("", "");;
  loginExitoso: boolean = false;

  login(){
    if(this.usuario.nombre == 'fgaleano' && this.usuario.clave == '1234'){
      console.log("login ok");
      this.loginExitoso = true;
    }else{
      console.log("fallo login");
      this.loginExitoso = false;
    }
  }

}
