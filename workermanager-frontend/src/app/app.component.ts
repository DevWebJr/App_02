import {Component, OnInit} from '@angular/core';
import {Worker} from "../model/worker";
import {WorkerService} from "../service/worker.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public workers!: Worker[];
  public editedWorker!: Worker | undefined;
  public deletedWorker!: Worker | undefined;

  constructor(private workerService: WorkerService) {}

  ngOnInit() {
    this.getWorkers();
  }

  public getWorkers(): void {
    // @ts-ignore
    this.workerService.getWorkers()
      .subscribe({
      next: (response: Worker[]) => { this.workers = response; },
      error: (error: HttpErrorResponse) => { alert(error.message); }
    });
  }

  public onAddWorker(addForm: NgForm): void {
    document.getElementById('add-worker-form')?.click();
    // @ts-ignore
    this.workerService.addWorker(addForm.value)
      .subscribe({
        next: (response: Worker) => { this.getWorkers(); },
        error: (error: HttpErrorResponse) => { alert(error.message); }
      });
    addForm.reset();
  }

  public onUpdateWorker(worker: Worker): void {
    // @ts-ignore
    this.workerService.updateWorker(worker)
      .subscribe({
        next: (response: Worker) => { this.getWorkers(); },
        error: (error: HttpErrorResponse) => { alert(error.message); }
      });
  }

  public onDeleteWorker(workerId: number):void {
    this.workerService.deleteWorker(workerId)
      .subscribe({
        next: (response:void) => { this.getWorkers(); },
        error: (error: HttpErrorResponse) => { alert(error.message); }
      });
  }

  public onOpenModal(mode: string, worker?: Worker): void {
    const container = document.getElementById('main-container');

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-bs-toggle','modal');

    if(mode === 'add') {
      button.setAttribute('data-bs-target','#addWorkerModal');
    }
    if(mode === 'edit') {
      this.editedWorker = worker;
      button.setAttribute('data-bs-target','#editWorkerModal');
    }
    if(mode === 'delete') {
      this.deletedWorker = worker;
      button.setAttribute('data-bs-target','#deleteWorkerModal');
    }
    container?.appendChild(button);
    button.click();
  }

  public onCloseModal(form: NgForm) {
    form.reset();
  }
}
