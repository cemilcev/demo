package com.cemilcev.springbootproject.springbootproject.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Data;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Data
@Entity
public class Meeting {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long Id;

    @Column(name = "name", nullable = false)
    private String name;
    @Column(name = "description")
    private String description;

    private Meeting() {

    }

    public Meeting(String name, String description) {
        this.name = name;
        this.description = description;
    }

    /*

    @ManyToMany(cascade = CascadeType.ALL)
    @JsonBackReference
    @JoinTable(name = "department_meetings",
            joinColumns = @JoinColumn(name = "meeting_id", referencedColumnName = "meeting_id"),
            inverseJoinColumns = @JoinColumn(name = "department_id", referencedColumnName = "department_id"))
    private Set<Department> departments = new HashSet<Department>();
*/

}
