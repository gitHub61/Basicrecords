/*
 *产生随机数
 * */
function getRandomNumberByRange(min, max) {
	return Math.floor(Math.random() * (max - min) + min)
}

/**
 * 产生随机整数，包含下限值，但不包括上限值
 * @param {Number} min 下限
 * @param {Number} max 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
*添加对象数组
* */
var arr = [];
var vote = {};
vote.id = 1;
vote.name = 1;
arr.push(vote);
