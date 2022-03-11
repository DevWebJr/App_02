import {Component, OnInit} from '@angular/core';
import {Worker} from "../model/worker";
import {WorkerService} from "../service/worker.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public workers!: Worker[];

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.getWorkers();
  }

  public getWorkers(): void {
    // @ts-ignore
    this.workerService.getWorkers().subscribe({
      next: (response: Worker[]) => {
        this.workers = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  public onOpenModal( mode: string, worker?: Worker | null): void {
    const button = document.createElement('button');
    const container = document.getElementById("main-container")
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-togle','modal');
    if(mode === 'add') {
      button.setAttribute('data-bs-target','#addWorkerModal');
    }
    if(mode === 'edit') {
      button.setAttribute('data-bs-target','#editWorkerModal');
    }
    if(mode === 'delete') {
      button.setAttribute('data-bs-target','#deleteWorkerModal');
    }
    container?.appendChild(button);
    button.click();
  }
}
