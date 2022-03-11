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

  public onOpenModal(worker: Worker, mode: string): void {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-togle','modal');
    if(mode === 'add') {
      button.setAttribute('data-bs-target','modal');
    }
  }
}
