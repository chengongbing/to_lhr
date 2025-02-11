/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80023
 Source Host           : localhost:3306
 Source Schema         : db

 Target Server Type    : MySQL
 Target Server Version : 80023
 File Encoding         : 65001

 Date: 11/02/2025 17:51:17
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for auditors
-- ----------------------------
DROP TABLE IF EXISTS `auditors`;
CREATE TABLE `auditors`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `account` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `workload` int(0) NULL DEFAULT NULL,
  `role` int(0) NULL DEFAULT NULL,
  `qq_openid` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT 'QQ OpenID（用于绑定 QQ 登录）',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `account`(`account`) USING BTREE,
  UNIQUE INDEX `qq_openid`(`qq_openid`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of auditors
-- ----------------------------
INSERT INTO `auditors` VALUES (1, 'a1', '管理员1', '123', '138XXXXXXXX', 12, 1, NULL);
INSERT INTO `auditors` VALUES (2, 'b1', '审核员1', '123', '132XXXXXXXX', 18, 0, NULL);
INSERT INTO `auditors` VALUES (3, 'auditor002', '周二', '123', '136XXXXXXXX', 23, 1, NULL);
INSERT INTO `auditors` VALUES (4, 'auditor003', '钱三', '123', '135XXXXXXXX', 3, 0, NULL);
INSERT INTO `auditors` VALUES (5, 'auditor004', '孙四', '123', '137XXXXXXXX', 5, 0, NULL);
INSERT INTO `auditors` VALUES (6, 'auditor005', '朱五', '123', '138XXXXXXXX', 11, 0, NULL);
INSERT INTO `auditors` VALUES (7, 'auditor006', '杨六', '123', '139XXXXXXXX', 16, 0, NULL);
INSERT INTO `auditors` VALUES (8, 'auditor007', '曹七', '123', '136XXXXXXXX', 21, 0, NULL);
INSERT INTO `auditors` VALUES (10, 'b2', '审核员2', '123', '123XXXXXXX', 0, 0, NULL);

-- ----------------------------
-- Table structure for campus_assistance
-- ----------------------------
DROP TABLE IF EXISTS `campus_assistance`;
CREATE TABLE `campus_assistance`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `location` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `price` decimal(10, 2) NULL DEFAULT NULL,
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `status` int(0) NULL DEFAULT 0 COMMENT '1：被接单，0：未被接单',
  `buyer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cla` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '分类',
  `audit_status` int(0) NULL DEFAULT 0 COMMENT '1：审核通过，-1：审核不通过，0：待审核',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 61 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of campus_assistance
-- ----------------------------
INSERT INTO `campus_assistance` VALUES (1, '物理作业', '有谁能帮忙解决下第五章习题吗？', '图书馆四楼自修室', 5.00, 's1', '2025-02-06 10:38:28', 1, NULL, '求助', 1);
INSERT INTO `campus_assistance` VALUES (2, '英语口语练习', '想找一起练口语的小伙伴', '学生活动中心', 0.00, 's2', '2023-03-05 10:38:28', 1, 's1', '求助', 1);
INSERT INTO `campus_assistance` VALUES (3, '求借人体解剖大图册', '课上用到的教材，急需借阅', '医学院图书馆', 10.00, 's3', '2023-03-06 10:38:28', 1, 's1', '求助', 1);
INSERT INTO `campus_assistance` VALUES (4, '班级聚餐拼单', '我们班计算机系请客，需要拼单的同学请私信我', '华东菜馆', 80.50, 's2', '2023-03-07 10:38:28', 1, 's1', '跑腿', 0);
INSERT INTO `campus_assistance` VALUES (5, '数学竞赛培训', '我们班组织的数学竞赛培训，欢迎所有对数学感兴趣的同学参加', '逸夫楼403', 0.00, 's3', '2023-03-08 10:38:28', 0, NULL, '其他', 0);
INSERT INTO `campus_assistance` VALUES (6, '免费赠送二手书籍', '清空闲置书籍，共15本，需要的同学请联系我领取', '教育超市门口', 0.00, 's1', '2023-03-09 10:38:28', 0, NULL, '跑腿', 0);
INSERT INTO `campus_assistance` VALUES (7, '求助C++程序设计', '因为电脑坏了，需要在实验室或者别的地方写作业', '计算机科学实验中心', 10.00, 'user007', '2023-03-10 10:38:28', 1, '', '求助', 1);
INSERT INTO `campus_assistance` VALUES (8, '失物招领', '丢失一张身份证和一个黑色钱包，请拾到者私信我', '大礼堂门口', 0.00, 'user008', '2023-03-11 10:38:28', 0, NULL, NULL, 1);
INSERT INTO `campus_assistance` VALUES (9, '寻找室友', '我是女生，想找一位女性室友合住校内双人间', '紫荆公寓17号楼', 0.00, 'user009', '2025-02-06 10:38:28', 0, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (10, '办理银行卡', '需要办理工行卡，有没有一起去的小伙伴', '工商银行营业厅', 0.00, 's2', '2023-03-13 10:38:28', 0, NULL, '兼职', 0);
INSERT INTO `campus_assistance` VALUES (11, '家教招聘', '高中物理老师一名，每周两次，时长1小时，报酬200元', '育才中学', 200.00, 's3', '2025-02-05 10:38:28', 0, NULL, '兼职', 0);
INSERT INTO `campus_assistance` VALUES (12, '义务翻译', '有需要翻译英文文献的同学可以联系我，不收费', '第一教学楼508', 0.00, 'user002', '2023-03-14 10:38:28', -1, NULL, '其他', 0);
INSERT INTO `campus_assistance` VALUES (13, '求购二手单车', '需要一辆二手单车，价格在500元以下', '建筑群停车场', 400.00, 'user003', '2023-03-14 10:38:28', -1, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (14, '健身房拼单', '我们几个人正在健身房锻炼，欢迎其他同学一起加入', '东体育馆健身房', 25.00, 'user004', '2023-03-14 10:38:28', 0, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (15, '英语笔试辅导', '有需要复习英语笔试的同学可以找我，我是英语专业的', '逸夫楼512', 0.00, 'user005', '2023-03-14 10:38:28', 0, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (16, '练习钢琴', '我在钢琴房练习，欢迎其他同学一起加入', '艺术楼钢琴房', NULL, 'user006', '2023-02-22 10:40:41', 0, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (17, '免费赠送化妆品', '清空闲置化妆品，需要的同学请联系我领取', '美容美发学院门口', NULL, 'user007', '2025-02-06 10:40:41', 0, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (18, '论文翻译', '提供英汉互译服务，有需要的同学请私信我', '第二教学楼308', NULL, 'user008', '2023-02-24 10:40:41', 0, NULL, NULL, 1);
INSERT INTO `campus_assistance` VALUES (19, '校内兼职招募', '招募数名志愿者参与校内活动策划与推广工作', '逸夫楼207', 50.00, 'user009', '2023-02-25 10:40:41', 0, NULL, NULL, 0);
INSERT INTO `campus_assistance` VALUES (61, '求代拿快递', '今天下午帮忙从菜鸟驿站拿快递送到1号宿舍楼', '一号宿舍楼', 2.00, 's1', '2025-02-06 15:15:26', 0, NULL, '跑腿', 0);

-- ----------------------------
-- Table structure for campus_forum
-- ----------------------------
DROP TABLE IF EXISTS `campus_forum`;
CREATE TABLE `campus_forum`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `subject` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
  `account` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 45 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of campus_forum
-- ----------------------------
INSERT INTO `campus_forum` VALUES (1, '今天校园网怎么这么慢啊！', '今天上午上课的时候校园网突然变得超级慢，有没有同学也遇到这种情况？', '2023-02-22 10:49:19', 's1', '小明');
INSERT INTO `campus_forum` VALUES (2, '关于体育课的选项', '我听说体育课可以选自己感兴趣的项目，但是具体怎么操作不是很清楚，有大佬能解答一下吗？', '2023-02-23 10:49:19', 's2', '赵二');
INSERT INTO `campus_forum` VALUES (44, '学校附近有啥好吃的', '学校食堂吃腻了，推荐一下附近便宜好吃的餐馆吧', '2023-06-02 21:51:31', 's1', '小明');

-- ----------------------------
-- Table structure for favorite
-- ----------------------------
DROP TABLE IF EXISTS `favorite`;
CREATE TABLE `favorite`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `student_account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `secondhand_id` int(0) NOT NULL,
  `create_time` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `is_deleted` tinyint(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_favorite_secondhand_id`(`secondhand_id`) USING BTREE,
  CONSTRAINT `fk_favorite_secondhand_id` FOREIGN KEY (`secondhand_id`) REFERENCES `secondhand` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of favorite
-- ----------------------------
INSERT INTO `favorite` VALUES (2, 's2', 153, '2023-06-05 10:04:19', 0);

-- ----------------------------
-- Table structure for likes
-- ----------------------------
DROP TABLE IF EXISTS `likes`;
CREATE TABLE `likes`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `user_account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '点赞用户的ID',
  `post_id` int(0) NOT NULL COMMENT '点赞的帖子的ID',
  `created_at` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '点赞时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `unique_idx`(`user_account`, `post_id`) USING BTREE COMMENT '联合唯一索引，保证一个用户只能对同一篇文章点赞一次'
) ENGINE = InnoDB AUTO_INCREMENT = 82 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci COMMENT = '点赞表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of likes
-- ----------------------------
INSERT INTO `likes` VALUES (19, 's1', 4, '2023-05-22 16:28:51');
INSERT INTO `likes` VALUES (22, 's1', 5, '2023-05-22 16:28:57');
INSERT INTO `likes` VALUES (23, 's1', 6, '2023-05-22 16:28:59');
INSERT INTO `likes` VALUES (52, 's2', 1, '2023-05-29 17:26:21');
INSERT INTO `likes` VALUES (56, 's1', 9, '2023-06-02 21:09:24');
INSERT INTO `likes` VALUES (63, 's1', 3, '2023-06-02 21:35:43');
INSERT INTO `likes` VALUES (71, 's3', 45, '2023-06-03 21:44:43');
INSERT INTO `likes` VALUES (72, 's2', 45, '2023-06-03 21:44:57');
INSERT INTO `likes` VALUES (73, 's2', 3, '2023-06-03 21:45:03');
INSERT INTO `likes` VALUES (77, 's3', 44, '2023-06-06 09:09:50');
INSERT INTO `likes` VALUES (82, 's1', 1, '2025-02-05 11:06:20');

-- ----------------------------
-- Table structure for notifications
-- ----------------------------
DROP TABLE IF EXISTS `notifications`;
CREATE TABLE `notifications`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publisher` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of notifications
-- ----------------------------
INSERT INTO `notifications` VALUES (2, '明天放假', 'admin', '2023-04-04 15:00:00');
INSERT INTO `notifications` VALUES (3, '重要通知：公司搬迁', 'admin', '2023-04-03 16:45:00');
INSERT INTO `notifications` VALUES (4, '推出新产品，欢迎试用', 'admin', '2023-04-02 10:20:00');
INSERT INTO `notifications` VALUES (5, '计划停电通知', 'admin', '2023-04-01 08:00:00');
INSERT INTO `notifications` VALUES (6, '过节放假通知', 'admin', '2023-03-29 15:30:00');
INSERT INTO `notifications` VALUES (7, '系统升级通知', 'admin', '2023-03-28 11:10:00');
INSERT INTO `notifications` VALUES (8, '员工晚宴安排', 'admin', '2023-03-25 14:00:00');
INSERT INTO `notifications` VALUES (9, '召开股东大会', 'admin', '2023-03-23 10:00:00');
INSERT INTO `notifications` VALUES (10, '新招聘信息发布', 'admin', '2023-03-22 09:00:00');
INSERT INTO `notifications` VALUES (11, '哈哈哈哈哈哈哈', 'admin', '2023-04-04 21:25:55');
INSERT INTO `notifications` VALUES (13, '2023年6月5日00：00-1：00系统维护', 'a1', '2023-06-04 21:14:50');

-- ----------------------------
-- Table structure for reply
-- ----------------------------
DROP TABLE IF EXISTS `reply`;
CREATE TABLE `reply`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` text CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `post_id` int(0) NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `is_like` int(0) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 95 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of reply
-- ----------------------------
INSERT INTO `reply` VALUES (1, 's1', '这篇文章写得非常好，让我受益匪浅。', '2023-03-07 11:05:15', 1, '王二', 0);
INSERT INTO `reply` VALUES (91, 's1', 'aaaaa', '2023-06-02 17:09:32', 1, '小明', 0);
INSERT INTO `reply` VALUES (92, 's2', '南门包子超级好吃', '2023-06-02 22:10:57', 45, '小明', 0);
INSERT INTO `reply` VALUES (93, 's2', '南门包子超级好吃', '2023-06-02 22:12:15', 44, '赵二', 0);
INSERT INTO `reply` VALUES (94, 's2', '小吃街上的鸡公煲yyds', '2023-06-03 21:42:34', 44, '赵二', 0);
INSERT INTO `reply` VALUES (95, 's3', '门口的火锅也好吃', '2023-06-03 21:43:28', 44, '张三', 0);

-- ----------------------------
-- Table structure for secondhand
-- ----------------------------
DROP TABLE IF EXISTS `secondhand`;
CREATE TABLE `secondhand`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `item_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `quantity` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL DEFAULT '1',
  `description` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `original_price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `account` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `created_at` timestamp(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
  `status` int(0) NOT NULL DEFAULT 0,
  `audit_status` int(0) NULL DEFAULT 0,
  `price` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `buyer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `cla` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `refund` int(0) NULL DEFAULT NULL,
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_secondhand_student_account`(`account`) USING BTREE,
  CONSTRAINT `fk_secondhand_student_account` FOREIGN KEY (`account`) REFERENCES `student` (`account`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of secondhand
-- ----------------------------
INSERT INTO `secondhand` VALUES (149, '四六级耳机', '1', '95新，仅用过一次，送电池', '19.9', 's4', '2023-06-01 21:59:53', 0, -1, '5', NULL, '电子产品', NULL, 'http://localhost:9090/files/b532f07ea886448e9693ac207ed20e59');
INSERT INTO `secondhand` VALUES (150, '出胶带', '5卷', '美工胶带，全新，五卷', '10', 's4', '2023-06-01 22:15:45', 0, 0, '5', NULL, '其他', NULL, 'http://localhost:9090/files/15cc73230aed41e7845d7546bbd38d47');
INSERT INTO `secondhand` VALUES (151, '出面包', '2包', '桃李面包，今天买的，一包100g', '9.9', 's3', '2023-06-01 22:17:50', 0, 0, '6', NULL, '食品', NULL, 'http://localhost:9090/files/9d9a8448422e4aac8a6b195adf62b225');
INSERT INTO `secondhand` VALUES (152, '冰凉贴', '5包', '夏日必备冰凉贴，清凉解暑，全新', '5', 's3', '2023-06-01 22:20:20', 0, 0, '3', NULL, '生活用品', NULL, 'http://localhost:9090/files/183fd4d8ee8a49929255d9b7aa338861');
INSERT INTO `secondhand` VALUES (153, '苹果数据线', '1条', '全新苹果原装数据线，支持快充', '39', 's2', '2023-06-01 22:21:29', 1, 1, '30', 's1', '电子产品', NULL, 'http://localhost:9090/files/ca66c2fbd0c1491ca83f48fa2eb4bbf8');
INSERT INTO `secondhand` VALUES (154, '小夹子', '5个', '小夹子，9成新，用过一次，大小不一', '2.5', 's2', '2023-06-01 22:23:12', 0, 0, '1', NULL, '生活用品', NULL, 'http://localhost:9090/files/5d04580fd369424cb765ed4a134caeb6');
INSERT INTO `secondhand` VALUES (155, '小米路由器', '1个', '小米路由器，用了半年，毕业出', '99', 's1', '2023-06-01 22:24:30', 1, 1, '30', 's1', '电子产品', NULL, 'http://localhost:9090/files/8cd6a0bdac854a9f88ce24e9c674b3c0');
INSERT INTO `secondhand` VALUES (156, '出书', '2本', '考研参考书，8成新，轻微涂画', '69', 's1', '2025-02-06 22:25:46', 0, -1, '15', NULL, '其他', NULL, 'http://localhost:9090/files/d65eed0512814e06a61ca0fe294ea332');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `account` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `school` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `number` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(0) NULL DEFAULT NULL COMMENT '1:审核通过，0:待审核，-1:审核失败',
  `url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `account`(`account`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 28 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (11, 's1', '小明', '123', '1231313131311', '山东科技大学', '111121', 1, 'http://localhost:9090/files/e544099f1bfc4303b080a8ae053d82ed');
INSERT INTO `student` VALUES (21, 's2', '赵二', '123', '12345432100', '山东科技大学', '111122', 1, 'http://localhost:9090/files/7d0801db753940ae97268f431240ee98');
INSERT INTO `student` VALUES (27, 's3', '张三', '123', '12345678901', '山东科技大学', '111123', 0, 'http://localhost:9090/files/dca346cfe48e4736bb4cfb2b3b83c942');
INSERT INTO `student` VALUES (28, 's4', '李四', '123', '43534523532', '山东科技大学', '111124', 0, 'http://localhost:9090/files/fcf5fbf902f54109a76440832061b3d8');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` int(0) NOT NULL,
  `gender` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------

SET FOREIGN_KEY_CHECKS = 1;
