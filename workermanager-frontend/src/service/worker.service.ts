  import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class WorkerService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private  http: HttpClient) {}

  public getWorkers(): Observable<Worker> {
    return this.http.get<any>(`${this.apiServerUrl}/worker/all`);
  }

  public addWorker(worker: Worker): Observable<Worker> {
    return this.http.post<Worker>(`${this.apiServerUrl}/worker/add`, worker);
  }

  public updateWorker(worker: Worker): Observable<Worker> {
    return this.http.put<Worker>(`${this.apiServerUrl}/worker/update`, worker);
  }

  public deleteWorker(workerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/worker/delete/${workerId}`);
  }

}
