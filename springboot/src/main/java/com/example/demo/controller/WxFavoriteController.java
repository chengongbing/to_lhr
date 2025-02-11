package com.example.demo.controller;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.example.demo.common.Result;
import com.example.demo.entity.Favorite;
import com.example.demo.mapper.FavoriteMapper;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/favorite")
public class WxFavoriteController {

    @Resource
    FavoriteMapper favoriteMapper;

    @PostMapping("/insert")//新增
    public Result<?> save(@RequestBody Favorite favorite) {
//        System.out.println(student.toString());
        System.out.println(favorite.toString() + "-----------------------------------------------------------");
        favoriteMapper.insert(favorite);
        return Result.success();
    }

    @PostMapping("/search")//搜索
    public Result<?> search(@RequestBody Map<String, Object> params) {
        String ids = params.get("ids").toString();
        List<Favorite> res = favoriteMapper.selectList(Wrappers.<Favorite>lambdaQuery().eq(Favorite::getSecondhandId, ids).eq(Favorite::getIsDeleted, 0));
        return Result.success(res);
    }

    @PostMapping("/delete")  //删除
    public Result<?> deleteById(@RequestBody Map<String, Object> params) {
        String id = params.get("id").toString();
        favoriteMapper.deleteById(id);
        return Result.success();
    }
}
