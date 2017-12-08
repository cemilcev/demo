package com.cemilcev.springbootproject.springbootproject.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.sun.istack.internal.Nullable;
import lombok.Data;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    @RestResource
    private int Id;

    @Column(name = "name", nullable = false)
    private String name;

    @Nullable
    @Column(name = "description")
    private String description;

    private Department() {}

    public Department(String name, String description) {
        this.name = name;
        this.description = description;
    }

    /*
    @ManyToMany
    @JoinTable(name = "department_meetings",
            joinColumns = @JoinColumn(name = "department_id", referencedColumnName = "department_id"),
            inverseJoinColumns = @JoinColumn(name = "meeting_id", referencedColumnName = "meeting_id"))
    private Set<Meeting> meetings = new HashSet<Meeting>();
    */

}
