package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Forum;
import com.example.demo.mapper.ForumMapper;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/forum")
public class WxForumController {

    @Resource
    ForumMapper forumMapper;

    @PostMapping("/add")//新增
    public Result<?> save(@RequestBody Forum forum) {
        System.out.println(forum.toString());
        forumMapper.insert(forum);
        return Result.success();
    }

    @PostMapping("/list")//列表
    public Result<?> findPage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestParam(defaultValue = "") String account) {
        QueryWrapper<Forum> wrapper = new QueryWrapper<>();
        if (!StringUtils.isEmpty(account)) { // 如果account参数不为空，则添加查询条件
            wrapper.eq("account", account);
        }
        wrapper.orderByDesc("time");
        Page<Forum> forumPage = forumMapper.selectPage(new Page<>(pageNum, -1), wrapper);
        return Result.success(forumPage);
    }
    @PostMapping("/manage")//列表
    public Result<?> forumManage(@RequestParam(defaultValue = "1") Integer pageNum,
                              @RequestParam(defaultValue = "10") Integer pageSize,
                              @RequestBody Map<String, Object> params) {
        String account=params.get("account").toString();
        LambdaQueryWrapper<Forum> wrapper = Wrappers.<Forum>lambdaQuery();
        if(StrUtil.isNotBlank(account))
        {
            wrapper.like(Forum::getAccount,account).orderByDesc();
        };
        Page<Forum> forumPage = forumMapper.selectPage(new Page<>(pageNum, -1), wrapper);
        return Result.success(forumPage);
    }
    @PostMapping("/search")//搜索
    public Result<?> search(@RequestBody Map<String, Object> params) {
        String s = params.get("s").toString();
        LambdaQueryWrapper<Forum> wrapper = Wrappers.<Forum>lambdaQuery()
                .like(Forum::getSubject, s);
        List<Forum> res = forumMapper.selectList(wrapper);
        return Result.success(res);
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Long id) {
        return Result.success(forumMapper.selectById(id));
    }

    @PostMapping("/update")  //更新
    public Result<?> update(@RequestBody Forum forum) {
        forumMapper.updateById(forum);
        return Result.success();
    }

    @PostMapping("/delete")  //删除
    public Result<?> deleteById(@RequestBody Map<String, Object> params) {
        String id = params.get("id").toString();
        forumMapper.deleteById(id);
        return Result.success();
    }

}
