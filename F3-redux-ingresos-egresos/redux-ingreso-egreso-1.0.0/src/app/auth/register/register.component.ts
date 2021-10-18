import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styles: [],
})
export class RegisterComponent implements OnInit {
  registerFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registerFormGroup = this.fb.group({
      nombre: ["", Validators.required],
      correo: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }

  public crearUsuario() {
    if (this.registerFormGroup.invalid) {
      return;
    }

    console.log("registerFormGroup: ", this.registerFormGroup);
    console.log("registerFormGroup: ", this.registerFormGroup.valid);
    console.log("registerFormGroup: ", this.registerFormGroup.value);

    const { nombre, correo, password } = this.registerFormGroup.value;
    this.authService
      .crearUsuario(nombre, correo, password)
      .then((credentials) => {
        console.log("credentials firebase: ", credentials);
        this.router.navigate(['/']);
      })
      .catch((err) => console.log("error register firebase: ", err));
  }
}
