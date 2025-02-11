package com.example.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.demo.common.Result;
import com.example.demo.entity.Assistance;
import com.example.demo.entity.Student;
import com.example.demo.mapper.AssistanceMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/assistance")
public class WxAssistanceController {

    @Resource
    AssistanceMapper assistanceMapper;



    @PostMapping("/mySale")//我的出售
    public Result<?> select(@RequestBody Student student) {
        System.out.println(student.toString());
        LambdaQueryWrapper<Assistance> wrapper = Wrappers.<Assistance>lambdaQuery()
                .eq(Assistance::getAccount, student.getAccount());
        List<Assistance> res = assistanceMapper.selectList(wrapper);
        System.out.println("我的出售：" + res.toString());
        return Result.success(res);
    }

    @PostMapping("/sold")//已售出
    public Result<?> sold(@RequestBody Student student) {
        System.out.println(student.toString());
        List<Assistance> res = assistanceMapper.selectList(Wrappers.<Assistance>lambdaQuery().eq(Assistance::getAccount, student.getAccount()).eq(Assistance::getStatus, 1));
        System.out.println("已售出：" + res.toString());
        return Result.success(res);
    }

    @PostMapping("/purchased")//已购买
    public Result<?> purchased(@RequestBody Student student) {
        System.out.println(student.toString());
        List<Assistance> res = assistanceMapper.selectList(Wrappers.<Assistance>lambdaQuery().eq(Assistance::getBuyer, student.getAccount()));
        System.out.println("已售出：" + res.toString());
        return Result.success(res);
    }

    @PostMapping("/classification")//分类
    public Result<?> classification(@RequestBody Map<String, Object> params) {
        String c = params.get("c").toString();
        LambdaQueryWrapper<Assistance> wrapper = Wrappers.<Assistance>lambdaQuery()
                .eq(Assistance::getCla, c)
                .eq(Assistance::getStatus, 0);
        List<Assistance> res = assistanceMapper.selectList(wrapper);
        return Result.success(res);
    }

    @PostMapping("/search")//搜索
    public Result<?> search(@RequestBody Map<String, Object> params) {
        String s = params.get("s").toString();
        LambdaQueryWrapper<Assistance> wrapper = Wrappers.<Assistance>lambdaQuery()
                .like(Assistance::getSubject, s)
                .eq(Assistance::getStatus, 0);
        List<Assistance> res = assistanceMapper.selectList(wrapper);
        return Result.success(res);
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Long id) {
        return Result.success(assistanceMapper.selectById(id));
    }

    @PostMapping("/add")//新增
    public Result<?> save(@RequestBody Assistance assistance) {
        System.out.println(assistance.toString());
        assistanceMapper.insert(assistance);
        return Result.success();
    }
    @PostMapping("/update")  //更新
    public Result<?> update(@RequestBody Assistance assistance) {
        assistanceMapper.updateById(assistance);
        return Result.success();
    }
    @PostMapping("/delete")  //删除
    public Result<?> deleteById(@RequestBody Map<String, Object> params) {
        String id = params.get("id").toString();
        assistanceMapper.deleteById(id);
        return Result.success();
    }
}
