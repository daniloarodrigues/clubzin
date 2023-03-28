import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CheckMail } from '../../home/model/check-mail';

import { environment } from '../../../environments/environment';

import { Buffer } from 'buffer';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private readonly API = `/api/people`;

  constructor(private httpClient: HttpClient) { }

  checkMailInUse(mail: string) {
    let credential = Buffer.from(`${environment.username}:${environment.password}`).toString('base64');
    let headers = { Authorization: 'Basic ' + credential, mail: mail };
    let data = this.httpClient.get<CheckMail>(`${this.API}/check`, { headers });
    return data;
  }

}
