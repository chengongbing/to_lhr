package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.SecondHand;
import com.example.demo.entity.Student;
import com.example.demo.mapper.SecondHandMapper;
import com.example.demo.mapper.StudentMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/student_no")
public class StudentNoController {

    @Resource
    StudentMapper studentMapper;

    @GetMapping//查找
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search
    ){
        LambdaQueryWrapper<Student> wrapper = Wrappers.<Student>lambdaQuery().eq(Student::getStatus, -1).like(Student::getAccount , search);
        wrapper.like(Student::getStatus,-1);
        if(StrUtil.isNotBlank(search))
        {
            wrapper.like(Student::getAccount,search);
        };

        Page<Student> studentPage = studentMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(studentPage);
    }
    @PutMapping  //更新
    public Result<?> update(@RequestBody Student student){
        studentMapper.updateById(student);
        return Result.success();
    }
}
