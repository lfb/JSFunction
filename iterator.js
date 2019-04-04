/**
 * 学习方法
 *
 * every() 迭代数组每一项，每项都符合条件的才返回true，反之false
 * some() 迭代数组每一项，只要有一项符合条件就返回true，如果全部不符合才返回false
 * map() 迭代数组每一项，可以给特定条件会返回重新组成新的数组
 * filter() 迭代数组每一项，可以给特定的条件进行筛选返回新的数组
 * forEach() 迭代数组每一项，没有返回值
 */

/**
 * 情景一：
 *
 * 有五个孩子，如果这个五个孩子都大于或等于18岁，才能进入此网站
 *
 * 方法：
 *
 * every() 方法，对数组中的每一项进行迭代，如果每一项都符合条件才可以返回true，反之返回false
 */

let children = [
    {name: 'Bob', age: 18},
    {name: 'Peter', age: 16},
    {name: 'Lynn', age: 28},
    {name: 'Jack', age: 38}
]

// // 数组中需要每一个项都符合条件才返回true，反之返回false
let isAdults = children.every(child => child.age >= 18)

console.log(isAdults); // false 因为Peter的age小于18岁

// 手动把Peter的age改为20，再进行测试
children[1].age = 20;
let isAdults2 = children.every(child => child.age >= 18)

console.log(isAdults2); // true 所有的孩子都已经满足大于或者等于18岁了，所以返回true

/**
 * 情景二
 *
 * 如果有4个人，其中只有一个小妹妹就可以通过了
 *
 * 方法：
 *
 * some() 方法，对数组的每一项迭代，只有一个选项符合条件的，就可以返回true了，只有全部不符合条件才返回false
 */

let people = [
    {name: 'Bob', sex: 'boy'},
    {name: 'Peter', sex: 'boy'},
    {name: 'Lynn', sex: 'girl'},
    {name: 'Jack', sex: 'boy'}
]

// 数组中只需要符合一个条件就返回true，反之返回false
let isGirl = people.some(val => val.sex === 'girl');
console.log(isGirl) // true

/**
 * 情景三
 *
 * 有五个员工，突然当月老板给每个人发奖金1w，求每个人的当月发的工资为多少
 *
 * 方法：
 *
 * map() 方法，对数组的每一项迭代，给特定的条件会重新组成数组
 */

let employees = [
    {name: 'Bob', wage: 5000},
    {name: 'Peter', wage: 10000},
    {name: 'Lynn', wage: 15000},
    {name: 'Jack', wage: 20000}
]

// 对每个员工进行加薪10000元奖金，返回新数组
let employeesWage = employees.map(item => {
    return {
        name: item.name,
        // 每个人加1000元
        wage: item.wage + 10000
    }
});
console.log(employeesWage);

/**
 * 返回了新的员工工资数组
 * [
 *   { name: 'Bob', wage: 15000 },
 *   { name: 'Peter', wage: 20000 },
 *   { name: 'Lynn', wage: 25000 },
 *   { name: 'Jack', wage: 30000 }
 * ]
 **/


/**
 * 情景四
 *
 * 有4个人的成绩中，成绩大于或等于90分的同学就可以获得奖励。
 *
 * 方法：
 *
 * filter() 方法，对数组的每一项迭代，根据给出的条件进行筛选且返回新数组
 */

let students = [
    {name: 'Bob', grade: 100},
    {name: 'Peter', grade: 75},
    {name: 'Lynn', grade: 80},
    {name: 'Jack', grade: 95}
]

// 获得成绩大于或等于90的学生，返回新数组
let awardStudents = students.filter(val => val.grade >= 90);
console.log(awardStudents)
// 输出新数组：
// [
//   { name: 'Bob', grade: 100 },
//   { name: 'Jack', grade: 95 }
// ]


/**
 * 情景五
 *
 * 我想看下班上的每一位同学的成绩为多少，没有返回值
 *
 * 方法：
 *
 * forEach() 方法，对数组的每一项迭代，没有返回值
 */
// 读取每个人的成绩，没有返回值
students.forEach(item => {
    console.log(`${item.name}同学的成绩为${item.grade}`);
    // 输出：
    // Bob同学的成绩为100
    // Peter同学的成绩为75
    // Lynn同学的成绩为80
    // Jack同学的成绩为95
})

// 获取获得奖励同学，没有返回值
awardStudents.forEach(item2 => {
    console.log(`获得奖励的同学有${item2.name}`)
    // 输出：
    // 获得奖励的同学有Bob
    // 获得奖励的同学有Jack
})
