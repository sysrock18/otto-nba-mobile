const utils = {
  getFormatDate(date = new Date()) {
    return `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
  }
}

export default utils;
