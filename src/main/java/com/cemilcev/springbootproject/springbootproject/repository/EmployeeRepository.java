package com.cemilcev.springbootproject.springbootproject.repository;

import com.cemilcev.springbootproject.springbootproject.domain.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
