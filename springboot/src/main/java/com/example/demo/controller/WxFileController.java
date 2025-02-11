package com.example.demo.controller;

import cn.hutool.core.io.FileUtil;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import com.example.demo.common.Result;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/files")
public class WxFileController {
    @Value("${server.port}")
    private String port;
    private static final String ip="http://localhost";
    @CrossOrigin
    @PostMapping("/upload")
    public Result<?> upload(MultipartFile file) throws IOException
    {

        String originalFilename = file.getOriginalFilename();
        String flag= IdUtil.fastSimpleUUID();
        String rootFilePath = System.getProperty("user.dir")+"/src/main/resources/files/"+flag+"_"+originalFilename;
        FileUtil.writeBytes(file.getBytes(),rootFilePath);
        return Result.success(ip+":"+port+"/files/"+flag);
    }
@GetMapping("/{flag}")
public void getFiles(@PathVariable String flag, HttpServletResponse response) {
    OutputStream os;  // 新建输出流对象
    String basePath = System.getProperty("user.dir") + "/src/main/resources/files/";  // 文件存储路径
    List<String> fileNames = FileUtil.listFileNames(basePath);  // 获取路径下所有文件名
    String avatar = fileNames.stream().filter(name -> name.contains(flag)).findAny().orElse("");  // 找到包含指定标识的文件名
    try {
        if (StrUtil.isNotEmpty(avatar)) {
            response.addHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(avatar, "UTF-8"));
            response.setContentType("application/octet-stream");  // 设置响应类型为二进制流
            byte[] bytes = FileUtil.readBytes(basePath + avatar);  // 读取文件内容
            os = response.getOutputStream();
            os.write(bytes);
            os.flush();
            os.close();
        }
    } catch (Exception e) {
        System.out.println("文件下载失败");
    }
}

}
