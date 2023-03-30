import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from 'src/app/core/services/people.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailFormControl = new FormControl(null, [Validators.required, Validators.email, Validators.nullValidator]);
  submited: any;
  err: any;

  constructor(
    private peopleService: PeopleService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  onSubmit() {
    let mail: string = this.emailFormControl.value || '';
    this.submited = true;
    this.emailFormControl.disable();
    this.peopleService.checkMailInUse(mail)
      .subscribe({
        next: (data) => {
          let validation = (data.mail === mail && data.exists)
          if (validation) {
            return data;
          } else {
            this.router.navigate(["/register"], { relativeTo: this.route });
            return { valid: false }
          }
        },
        error: (err) => {
          this.submited = false;
          this.openDialog(err);
          this.emailFormControl.enable();
          console.log(err)
        },
        complete: () => {
          console.log("Done")
        }
      })
  }

  openDialog(err: any) {
    this.dialog.open(ErrorDialogComponent, {
      data: {
        error: err
      }
    });
  }
}
