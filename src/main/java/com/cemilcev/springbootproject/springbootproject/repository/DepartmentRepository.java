package com.cemilcev.springbootproject.springbootproject.repository;

import com.cemilcev.springbootproject.springbootproject.domain.Department;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends CrudRepository<Department, Integer> {

}
