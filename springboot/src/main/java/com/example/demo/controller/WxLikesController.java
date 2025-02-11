package com.example.demo.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.demo.common.Result;
import com.example.demo.entity.Likes;
import com.example.demo.mapper.LikesMapper;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/likes")
public class WxLikesController {

    @Resource
    LikesMapper likesMapper;

    @PostMapping("/insert")//新增
    public Result<?> save(@RequestBody Likes likes) {
        likesMapper.insert(likes);
        return Result.success();
    }

    @PostMapping("/delete")  //删除
    public Result<?> deleteById(@RequestBody Map<String, Object> params) {
        Integer p = Integer.parseInt(params.get("p").toString());
        String u = params.get("u").toString();
        LambdaQueryWrapper<Likes> wrapper = Wrappers.<Likes>lambdaQuery().eq(Likes::getPostId, p).eq(Likes::getUserAccount, u);
        likesMapper.delete(wrapper);
        System.out.println("aaaaaaaaaaaaaaaaa");
        return Result.success();
    }
    @PostMapping("/search")  //查找
    public Result<?> search(@RequestBody Map<String, Object> params) {
        Integer p = Integer.parseInt(params.get("p").toString());
        String u = params.get("u").toString();
        System.out.println(p+" "+u);
        LambdaQueryWrapper<Likes> wrapper = Wrappers.<Likes>lambdaQuery().eq(Likes::getPostId, p).eq(Likes::getUserAccount, u);
        Likes likes = likesMapper.selectOne(wrapper);
        if(likes!=null)
            return Result.success(1);
        else
            return Result.success(0);
    }
    @PostMapping("/allLikes")  //查找
    public Result<?> allLikes(@RequestBody Map<String, Object> params) {
        Integer p = Integer.parseInt(params.get("p").toString());
        LambdaQueryWrapper<Likes> wrapper = Wrappers.<Likes>lambdaQuery().eq(Likes::getPostId, p);
        List<Likes> l = likesMapper.selectList(wrapper);
        return Result.success(l);
    }

}
