package com.example.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("auditors")
@Data
public class Auditors {
    @TableId(type = IdType.AUTO)
    private Integer id=null;
    private String account;
    private String username;
    private String password;
    private String phone;
    private Integer workload;
    private Integer role;

}
