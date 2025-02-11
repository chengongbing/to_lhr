package com.example.demo.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.web.bind.annotation.Mapping;

import java.util.List;
import java.util.Map;

@Mapper
public interface StatisticsMapper {

    @Select("WITH RECURSIVE date_series AS ( SELECT CURDATE() AS date UNION ALL SELECT DATE_SUB(date, INTERVAL 1 DAY) FROM date_series WHERE date > CURDATE() - INTERVAL 6 DAY) SELECT ds.date AS date, COALESCE(s.count, 0) AS count FROM date_series ds LEFT JOIN ( SELECT DATE(created_at) AS date, COUNT(*) AS count FROM secondhand WHERE created_at >= CURDATE() - INTERVAL 6 DAY GROUP BY DATE(created_at) ) s ON ds.date = s.date ORDER BY ds.date ASC; ")
    List<Map<String, Object>> secondHand();

    @Select("WITH RECURSIVE date_series AS ( SELECT CURDATE() AS date UNION ALL SELECT DATE_SUB(date, INTERVAL 1 DAY) FROM date_series WHERE date > CURDATE() - INTERVAL 6 DAY) SELECT ds.date AS date, COALESCE(s.count, 0) AS count FROM date_series ds LEFT JOIN ( SELECT DATE(time) AS date, COUNT(*) AS count FROM campus_assistance WHERE time >= CURDATE() - INTERVAL 6 DAY GROUP BY DATE(time) ) s ON ds.date = s.date ORDER BY ds.date ASC; ")
    List<Map<String, Object>> assistance();

//    Page<User> findPage(Page<Object> objectPage, String search);
}
