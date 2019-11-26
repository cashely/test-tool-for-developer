const mongoose = require('../db.config');

const Users = new mongoose.Schema({
  acount: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  role: {
    type: Number,
    default: 0 // 0 普通角色  1 开发角色  2  测试角色   3  超级管理员
  },
  statu: {
    type: Number,
    default: 1 // 1 正常   2 异常
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

module.exports = mongoose.model('users', Users);
