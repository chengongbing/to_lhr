package com.example.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.lang.reflect.Type;

@TableName("student")
@Data
public class Student {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String account;
    private String username;
    private String password;
    private String phone;
    private String school;
    private String number;
    private Integer status;
    private String url;
}
