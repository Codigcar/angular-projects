import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public auth: AngularFireAuth) {}

  public crearUsuario(nombre: string, email: string, password: string) {
    console.log("authService: ", nombre, email, password);

    return this.auth.createUserWithEmailAndPassword(email, password);
  }
}
