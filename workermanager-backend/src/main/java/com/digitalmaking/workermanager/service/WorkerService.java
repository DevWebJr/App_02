package com.digitalmaking.workermanager.service;

import com.digitalmaking.workermanager.exception.UserNotfoundException;
import com.digitalmaking.workermanager.model.Worker;
import com.digitalmaking.workermanager.model.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class WorkerService {
    private final WorkerRepository workerRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository) {
        this.workerRepository = workerRepository;
    }

    public Worker addWorker(Worker worker) {
        worker.setWorkerCode(UUID.randomUUID().toString());
        return workerRepository.save(worker);
    }

    public List<Worker> findAllWorkers() {
        return workerRepository.findAll();
    }

    public Worker updateWorker(Worker worker) {
        return workerRepository.save(worker);
    }

    public Worker findWorkerById(Long id) {
        return workerRepository.findWorkerById(id).orElseThrow(
                () -> new UserNotfoundException("User by id: " + id + " was not found")
        );
    }

    public void deleteWorker(Long id) {
        workerRepository.deleteWorkerById(id);
    }
}
