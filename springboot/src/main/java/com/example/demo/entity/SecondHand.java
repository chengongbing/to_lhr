package com.example.demo.entity;


import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@TableName("secondhand")
@Data
public class SecondHand {
    @TableId(type = IdType.AUTO)
    private Integer id;
    private String itemName;
    private String quantity;
    private String description;
    private String price;
    private String originalPrice;
    private String account;
    private String createdAt;
    private Integer status;
    private Integer auditStatus;
    private String buyer;
    private String cla;
    private String refund;
    private String cover;

}
