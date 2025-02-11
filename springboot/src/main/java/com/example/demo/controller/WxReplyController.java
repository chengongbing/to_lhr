package com.example.demo.controller;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.example.demo.common.Result;
import com.example.demo.entity.Forum;
import com.example.demo.entity.Reply;
import com.example.demo.entity.SecondHand;
import com.example.demo.mapper.ReplyMapper;
import org.springframework.web.bind.annotation.*;
import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reply")
public class WxReplyController {

    @Resource
    ReplyMapper replyMapper;

    @PostMapping("/add")//新增
    public Result<?> save(@RequestBody Reply reply) {
        System.out.println(reply.toString());
        replyMapper.insert(reply);
        return Result.success();
    }

    @PostMapping("/list")//列表
    public Result<?> allReply(@RequestBody Map<String,Object> params
    ){
        String id=params.get("id").toString();
        LambdaQueryWrapper<Reply> wrapper = Wrappers.<Reply>lambdaQuery()
                .eq(Reply::getPostId, id);
        List<Reply> replyList = replyMapper.selectList(wrapper);
        return Result.success(replyList);
    }
    @PostMapping("/delete")  //删除
    public Result<?> deleteById(@RequestBody Map<String, Object> params) {
        String id = params.get("id").toString();
        replyMapper.deleteById(id);
        return Result.success();
    }
}
