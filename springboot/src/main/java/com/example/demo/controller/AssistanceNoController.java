package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Assistance;
import com.example.demo.mapper.AssistanceMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/assistance_no")
public class AssistanceNoController {

    @Resource
    AssistanceMapper assistanceMapper;

    @GetMapping//查找
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search
    ){
        LambdaQueryWrapper<Assistance> wrapper = Wrappers.<Assistance>lambdaQuery().eq(Assistance::getStatus, -1).like(Assistance::getSubject, search);
        wrapper.like(Assistance::getStatus,-1);
        if(StrUtil.isNotBlank(search))
        {
            wrapper.like(Assistance::getSubject,search);
        };

        Page<Assistance> assistancePage = assistanceMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(assistancePage);
    }
    @PutMapping  //更新
    public Result<?> update(@RequestBody Assistance assistance){
        assistanceMapper.updateById(assistance);
        return Result.success();
    }
}
