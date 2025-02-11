package com.example.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.lang.reflect.Type;

@TableName("admins")
@Data
public class User {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String account;
    private String username;
    private String password;
    private String phone;
}
