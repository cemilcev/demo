package com.cemilcev.springbootproject.springbootproject.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.annotation.sql.DataSourceDefinition;
import javax.persistence.*;

@Data
@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long Id;

    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "surname", nullable = false)
    private String surname;
    @Column(name = "salary", nullable = false)
    private Float salary;
    //@Column(name = "department_id", nullable = false)
    //private int department_id;

    private Employee() {
    }

    public Employee(String name, String surname, Float salary, Department department) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
        this.department = department;
    }

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;

}
