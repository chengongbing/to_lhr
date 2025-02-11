package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Auditors;
import com.example.demo.entity.Student;
import com.example.demo.mapper.AuditorsMapper;
import com.example.demo.mapper.StudentMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Map;

@RestController
@RequestMapping("/student")
public class WxStudentController {

    @Resource
    StudentMapper studentMapper;

    @PostMapping//注册
    public Result<?> save(@RequestBody Student student) {
        studentMapper.insert(student);
        return Result.success();
    }
    @PostMapping("/login")//登录
    public Result<?> login(@RequestBody Student student) {
        LambdaQueryWrapper<Student> wrapper = Wrappers.<Student>lambdaQuery()
                .eq(Student::getAccount, student.getAccount())
                .eq(Student::getPassword, student.getPassword())
                .eq(Student::getSchool, student.getSchool());
        Student res = studentMapper.selectOne(wrapper);
        if (res == null) {
            return Result.error("-1", "用户名或密码错误");
        }
        return Result.success(res);
    }

    @PostMapping("/phone")
    public Result<?> phone(@RequestBody Map<String, Object> params) {
        String account = params.get("account").toString();
        Student res = studentMapper.selectOne(Wrappers.<Student>lambdaQuery().eq(Student::getAccount, account));
        return Result.success(res);
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Long id) {
        return Result.success(studentMapper.selectById(id));
    }

    @PostMapping("/update")  //更新
    public Result<?> update(@RequestBody Student student) {
        studentMapper.updateById(student);
        return Result.success();
    }

    @DeleteMapping("/{id}")  //删除
    public Result<?> deleteById(@PathVariable Long id) {
        studentMapper.deleteById(id);
        return Result.success();
    }
}
