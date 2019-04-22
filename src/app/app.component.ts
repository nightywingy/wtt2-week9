import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  formModel = {

  };
  myReactiveForm: FormGroup;

  ngOnInit() {
    console.log("initialize");
    this.myReactiveForm = new FormGroup({
      nama: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(20), Validators.pattern('[a-zA-Z]*')]),
      nim: new FormControl(null, [Validators.required, Validators.pattern('\\d+')]),
      check: new FormControl(null, [Validators.requiredTrue]),
      faculty: new FormControl(null, [Validators.required]),
      entrydate: new FormControl(null, [Validators.required]),
      birthdate: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      notes: new FormControl(),
      phone: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required])
    });
  }

  get nama() {
    return this.myReactiveForm.get("nama");
  }

  get nim() {
    return this.myReactiveForm.get("nim");
  }

  get check() {
    return this.myReactiveForm.get("check");
  }

  get faculty() {
    return this.myReactiveForm.get("faculty");
  }
  get entrydate() {
    return this.myReactiveForm.get("entrydate");
  }

  get birthdate() {
    return this.myReactiveForm.get("birthdate");
  }

  get address() {
    return this.myReactiveForm.get("address");
  }
  get notes() {
    return this.myReactiveForm.get("notes");
  }

  get phone() {
    return this.myReactiveForm.get("phone");
  }

  get email() {
    return this.myReactiveForm.get("email");
  }

  //untuk reactive form
  submit2() {
    console.log(this.myReactiveForm);
    alert("submitted!");
  }
}
