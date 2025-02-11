package com.example.demo.service.impl;

import com.example.demo.mapper.StatisticsMapper;
import com.example.demo.service.StatisticsService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Map;

public class StatisticsServiceImpl implements StatisticsService {
    @Autowired
    private StatisticsMapper statisticsMapper;

    public List<Map<String, Object>> getLast7DaysTransactionCount() {
        return statisticsMapper.secondHand();
    }
}
