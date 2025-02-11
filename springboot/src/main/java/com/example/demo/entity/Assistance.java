package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("campus_assistance")
@Data
public class Assistance {
        @TableId(type = IdType.AUTO)
        private Integer id;
        private String subject;
        private String content;
        private String location;
        private Float price;
        private String account;
        private String time;
        private Integer status;//0：待审核，1：通过，-1：驳回
        private String buyer;
        private String cla;
}
