package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("campus_forum")
@Data
public class Forum {
        @TableId(type = IdType.AUTO)
        private Integer id;
        private String subject;
        private String content;
        private String time;
        private String account;
        private String username;

}
