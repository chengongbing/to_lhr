package com.example.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("favorite")
@Data
public class Favorite {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String studentAccount;
    private Integer secondhandId;
    private String createTime;
    private Integer isDeleted;
}
