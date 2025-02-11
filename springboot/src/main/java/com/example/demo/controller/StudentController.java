package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Student;
import com.example.demo.entity.User;
import com.example.demo.mapper.AuditorsMapper;
import com.example.demo.mapper.StudentMapper;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Resource
    StudentMapper studentMapper;

//    @PostMapping//新增
//    public Result<?> save(@RequestBody User user){
//        userMapper.insert(user);
//        return Result.success();
//    }
    @GetMapping//查找
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search){
        LambdaQueryWrapper<Student> wrapper = Wrappers.<Student>lambdaQuery().eq(Student::getStatus, 0).like(Student::getAccount, search);
        if(StrUtil.isNotBlank(search))
        {
            wrapper.like(Student::getAccount,search);
        }
        Page<Student> studentPage = studentMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(studentPage);
    }
    @PutMapping  //更新
    public Result<?> update(@RequestBody Student student){
        studentMapper.updateById(student);
        return Result.success();
    }

//    @DeleteMapping("/{id}")  //删除
//    public Result<?> deleteById(@PathVariable Long id){
//        userMapper.deleteById(id);
//        return Result.success();
//    }
}
