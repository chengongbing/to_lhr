package com.example.demo.controller;


import com.example.demo.common.Result;
import com.example.demo.entity.Statistics;
import com.example.demo.mapper.StatisticsMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/statistics")
public class StatisticsController {

    @Resource
    StatisticsMapper statisticicsMapper;

    @GetMapping("/secondHand")//查找
    public Result<List<Map<String, Object>>> secondHand(){
        List<Map<String, Object>> maps = statisticicsMapper.secondHand();
        return Result.success(maps);
    }

    @GetMapping("/assistance")//查找
    public Result<List<Map<String, Object>>> assistance(){
        List<Map<String, Object>> maps = statisticicsMapper.assistance();
        return Result.success(maps);
    }
}
