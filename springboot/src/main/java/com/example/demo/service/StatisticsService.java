package com.example.demo.service;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public interface StatisticsService {
    List<Map<String, Object>> getLast7DaysTransactionCount() ;
}
