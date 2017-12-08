package com.cemilcev.springbootproject.springbootproject.repository;

import com.cemilcev.springbootproject.springbootproject.domain.Meeting;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MeetingRepository extends CrudRepository<Meeting, Long> {
}
