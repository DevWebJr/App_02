import {Observable, publish} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class WorkerService {
  private apiServerUrl = '';

  constructor(private  http: HttpClient) {

    public getworkers(): Observable<any> {
      return this.http.get<any>(`${this.apiServerUrl}/worker/all`);
    }
  }
}
