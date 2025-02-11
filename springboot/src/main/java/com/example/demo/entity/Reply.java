package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("reply")
@Data
public class Reply {
        @TableId(type = IdType.AUTO)
        private Integer id;
        private String account;
        private String content;
        private String time;
        private Integer postId;
        private String username;
        private Integer isLike;
}
