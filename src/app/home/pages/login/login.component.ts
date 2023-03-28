import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/core/services/people.service';
import { CheckMail } from '../../model/check-mail';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl(null, [Validators.required, Validators.email, Validators.nullValidator]);
  myObserver = {
    next(data: CheckMail) { console.log(data)},
    error(err: string) { console.error('Observer got an error: ' + err)},
    complete() { console.log('Observer got a complete notification')}
  };

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  onSubmit() {
    let mail: string = this.emailFormControl.value || '';
    this.peopleService.checkMailInUse(mail)
    .subscribe({
      next: (data) => {
        let validation = (data.mail === mail && data.exists)
        if (validation) {
          console.log("Login Ok");
          return { valid: true }
        } else {
          this.router.navigate(["/register"], { relativeTo: this.route });
          return { valid: false }
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err)
      },
      complete: () => {
        console.log("Done")
      }
    })
  }
}
