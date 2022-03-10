package com.digitalmaking.workermanager.resource;

import com.digitalmaking.workermanager.model.Worker;
import com.digitalmaking.workermanager.service.WorkerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/worker")
public class WorkerResource {
    private final WorkerService workerService;

    public WorkerResource(WorkerService workerService) {
        this.workerService = workerService;
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Worker> getWorkerById(@PathVariable("id") Long id) {
        Worker worker = workerService.findWorkerById(id);
        return new ResponseEntity<>(worker, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Worker>> getAllWorkers() {
        List<Worker> workers = workerService.findAllWorkers();
        return new ResponseEntity<>(workers, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Worker> addWorker(@RequestBody Worker worker) {
        Worker newWorker = workerService.addWorker(worker);
        return new ResponseEntity<>(newWorker, HttpStatus.CREATED);
    }

    @PutMapping("/add")
    public ResponseEntity<Worker> updateWorker(@RequestBody Worker worker) {
        Worker updatedWorker = workerService.updateWorker(worker);
        return new ResponseEntity<>(updatedWorker, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteWorker(@PathVariable("id") Long id) {
        workerService.deleteWorker(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
