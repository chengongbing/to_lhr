package com.example.demo.entity;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("likes")
@Data
public class Likes {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String userAccount;
    private Integer postId;
    private String createdAt;
}
