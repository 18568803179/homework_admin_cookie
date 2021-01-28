
/**
 * 格式化日期
 * @param {string} time 时间戳
 * @param {string} type 分隔符 需要手动传入
 * 使用方法 {{1946777545617 | formatDate('/')}}
 */
export const formatDate = (time, type) => {
  if (time) {
    var date = new Date();
    date.setTime(time);
    var year = date.getFullYear();
    var month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1) * 1
        : date.getMonth() + 1;
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    if (type) {
      return year + type + month + type + day;
    } else {
      return year + "年" + month + "月" + day + "日";
    }
  }
};

