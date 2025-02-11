package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Auditors;
import com.example.demo.entity.SecondHand;
import com.example.demo.entity.User;
import com.example.demo.mapper.AuditorsMapper;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/auditors")
public class AuditorsController {

    @Resource
    AuditorsMapper auditorsMapper;

    @PostMapping//新增
    public Result<?> save(@RequestBody Auditors auditors) {
        System.out.println(auditors.toString());
        auditorsMapper.insert(auditors);
        return Result.success();
    }


    @PostMapping("/login")
    public Result<?> login(@RequestBody Auditors auditors) {
        Auditors res = auditorsMapper.selectOne(Wrappers.<Auditors>lambdaQuery().eq(Auditors::getAccount, auditors.getAccount()).eq(Auditors::getPassword, auditors.getPassword()));
        if (res == null) {
            return Result.error("-1", "用户名或密码错误");
        }
        return Result.success(res);
    }

    @GetMapping//查找
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search
    ) {
        LambdaQueryWrapper<Auditors> wrapper = Wrappers.<Auditors>lambdaQuery()
                .like(Auditors::getRole, 0)
                .like(Auditors::getAccount, search);
        if (StrUtil.isNotBlank(search)) {
            wrapper.like(Auditors::getAccount, search);
        }
        Page<Auditors> secondHandPage = auditorsMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(secondHandPage);
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Long id) {
        return Result.success(auditorsMapper.selectById(id));
    }

    @PutMapping  //更新
    public Result<?> update(@RequestBody Auditors auditors) {
        auditorsMapper.updateById(auditors);
        return Result.success();
    }

    @DeleteMapping("/{id}")  //删除
    public Result<?> deleteById(@PathVariable Long id) {
        auditorsMapper.deleteById(id);
        return Result.success();
    }
}
