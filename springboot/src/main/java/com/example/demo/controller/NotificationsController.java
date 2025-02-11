package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Notifications;
import com.example.demo.entity.User;
import com.example.demo.mapper.NotificationsMapper;
import com.example.demo.mapper.UserMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

@RestController
@RequestMapping("/notifications")
public class NotificationsController {

    @Resource
    NotificationsMapper notificationsMapper;

    @PostMapping//新增
    public Result<?> save(@RequestBody Notifications notifications){
        notificationsMapper.insert(notifications);
        return Result.success();
    }
    @GetMapping//查找
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String search){
        LambdaQueryWrapper<Notifications> wrapper = Wrappers.<Notifications>lambdaQuery().like(Notifications::getContent, search);
        if(StrUtil.isNotBlank(search))
        {
            wrapper.like(Notifications::getContent,search);
        }
        Page<Notifications> notificationsPage = notificationsMapper.selectPage(new Page<>(pageNum, pageSize), wrapper);
        return Result.success(notificationsPage);
    }
    @GetMapping("/last")//查找
    public Result<?> last(){
        LambdaQueryWrapper<Notifications> wrapper = Wrappers.lambdaQuery();
        wrapper.orderByDesc(Notifications::getTime).last("LIMIT 1");
        Notifications notifications = notificationsMapper.selectOne(wrapper);
        String s[]=new String[1];
        s[0]=notifications.getContent();
        return Result.success(s);
    }
    @PutMapping  //更新
    public Result<?> update(@RequestBody Notifications notifications){
        notificationsMapper.updateById(notifications);
        return Result.success();
    }
    @DeleteMapping("/{id}")  //删除
    public Result<?> deleteById(@PathVariable Long id){
        notificationsMapper.deleteById(id);
        return Result.success();
    }
}
