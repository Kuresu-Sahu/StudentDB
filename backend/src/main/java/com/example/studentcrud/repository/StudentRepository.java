package com.example.studentcrud.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.studentcrud.model.Student;

public interface StudentRepository extends MongoRepository<Student, String> {
}