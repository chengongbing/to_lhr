package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Assistance;
import com.example.demo.entity.SecondHand;
import com.example.demo.mapper.AssistanceMapper;
import com.example.demo.mapper.SecondHandMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/secondhand_yes")
public class SecondHandYesController {

    @Resource
    SecondHandMapper secondHandMapper;

    @GetMapping//查找
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search
    ){
        LambdaQueryWrapper<SecondHand> wrapper = Wrappers.<SecondHand>lambdaQuery().eq(SecondHand::getAuditStatus, 1).like(SecondHand::getItemName , search);
        wrapper.like(SecondHand::getAuditStatus,1);
        if(StrUtil.isNotBlank(search))
        {
            wrapper.like(SecondHand::getItemName,search);
        };

        Page<SecondHand> assistancePage = secondHandMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(assistancePage);
    }
    @PutMapping  //更新
    public Result<?> update(@RequestBody SecondHand secondHand){
        secondHandMapper.updateById(secondHand);
        return Result.success();
    }
}
