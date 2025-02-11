package com.example.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.sql.Time;

@TableName("notifications")
@Data
public class Notifications {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String content;
    private String publisher;
    private String time;
}
