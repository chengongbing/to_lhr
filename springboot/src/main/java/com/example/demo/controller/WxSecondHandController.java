package com.example.demo.controller;

import cn.hutool.core.util.StrUtil;
import cn.hutool.poi.excel.sax.ElementName;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Assistance;
import com.example.demo.entity.SecondHand;
import com.example.demo.entity.Student;
import com.example.demo.mapper.SecondHandMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

import static cn.hutool.poi.excel.sax.ElementName.c;

@RestController
@RequestMapping("/secondHand")
public class WxSecondHandController {

    @Resource
    SecondHandMapper secondHandMapper;

    @PostMapping("/add")//新增
    public Result<?> save(@RequestBody SecondHand secondHand) {
        System.out.println(secondHand.toString());
        secondHandMapper.insert(secondHand);
        return Result.success();
    }

    @PostMapping("/mySale")//我的出售
    public Result<?> select(@RequestBody Student student) {
        System.out.println(student.toString());
        LambdaQueryWrapper<SecondHand> wrapper = Wrappers.<SecondHand>lambdaQuery()
                .eq(SecondHand::getAccount, student.getAccount());
        List<SecondHand> res = secondHandMapper.selectList(wrapper);
        System.out.println("我的出售：" + res.toString());
        return Result.success(res);
    }

    @PostMapping("/sold")//已售出
    public Result<?> sold(@RequestBody Student student) {
        System.out.println(student.toString());
        List<SecondHand> res = secondHandMapper.selectList(Wrappers.<SecondHand>lambdaQuery().eq(SecondHand::getAccount, student.getAccount()).eq(SecondHand::getStatus, 1));
        System.out.println("已售出：" + res.toString());
        return Result.success(res);
    }

    @PostMapping("/purchased")//已购买
    public Result<?> purchased(@RequestBody Student student) {
        System.out.println(student.toString());
        List<SecondHand> res = secondHandMapper.selectList(Wrappers.<SecondHand>lambdaQuery().eq(SecondHand::getBuyer, student.getAccount()));
        System.out.println("已售出：" + res.toString());
        return Result.success(res);
    }

    @PostMapping("/classification")//分类
    public Result<?> classification(@RequestBody Map<String, Object> params) {
        String c = params.get("c").toString();
        LambdaQueryWrapper<SecondHand> wrapper = Wrappers.<SecondHand>lambdaQuery()
                .eq(SecondHand::getCla, c)
                .eq(SecondHand::getStatus, 0)
                .eq(SecondHand::getAuditStatus,1);
        List<SecondHand> res = secondHandMapper.selectList(wrapper);
        return Result.success(res);
    }

    @PostMapping("/search")//搜索
    public Result<?> search(@RequestBody Map<String, Object> params) {
        String s = params.get("s").toString();
        String c = params.get("c").toString();
        LambdaQueryWrapper<SecondHand> wrapper = Wrappers.<SecondHand>lambdaQuery()
                .like(SecondHand::getItemName, s)
                .eq(SecondHand::getStatus, 0)
                .eq(SecondHand::getCla, c);
        List<SecondHand> res = secondHandMapper.selectList(wrapper);
        return Result.success(res);
    }

    @GetMapping("/{id}")
    public Result<?> getById(@PathVariable Long id) {
        return Result.success(secondHandMapper.selectById(id));
    }

    @PostMapping("/update")  //更新
    public Result<?> update(@RequestBody SecondHand secondHand) {
        secondHandMapper.updateById(secondHand);
        return Result.success();
    }

    @PostMapping("/delete")  //删除
    public Result<?> deleteById(@RequestBody Map<String, Object> params) {
        String id = params.get("id").toString();
        secondHandMapper.deleteById(id);
        return Result.success();
    }
}
