package com.cemilcev.springbootproject.springbootproject;

import com.cemilcev.springbootproject.springbootproject.domain.Department;
import com.cemilcev.springbootproject.springbootproject.domain.Employee;
import com.cemilcev.springbootproject.springbootproject.domain.Meeting;
import com.cemilcev.springbootproject.springbootproject.repository.DepartmentRepository;
import com.cemilcev.springbootproject.springbootproject.repository.EmployeeRepository;
import com.cemilcev.springbootproject.springbootproject.repository.MeetingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EmployeeRepository employeeRepository;
	private final DepartmentRepository departmentRepository;
	private final MeetingRepository meetingRepository;

	@Autowired
	public DatabaseLoader(EmployeeRepository employeeRepository
            , DepartmentRepository departmentRepository
            , MeetingRepository meetingRepository
    ) {
		this.employeeRepository = employeeRepository;
		this.departmentRepository = departmentRepository;
		this.meetingRepository = meetingRepository;
	}

	@Override
	public void run(String... strings) throws Exception {

	    Department hardware = this.departmentRepository.save(new Department("Donanım", "Department of Software"));
	    Department software = this.departmentRepository.save(new Department("Yazılım", "Department of Software"));

		this.employeeRepository.save(new Employee("Cemil", "Çevik", 1500.00f, software));
		this.employeeRepository.save(new Employee("Berker", "Yalçınkaya", 800.00f, hardware));

		this.meetingRepository.save(new Meeting("Danışma Toplantısı", "Toplantı açıklaması xxx yyy "));
		this.meetingRepository.save(new Meeting("Bilgisayar Bakım Toplantısı", "Toplantı bilgisayarların bakımları ile ilgili"));

	}
}
