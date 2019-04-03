{
    /**
     * 数组去重方法1
     *
     * 优点：简单，性能好
     * 缺点1：在IE6-8下数组的indexOf方法不存在
     * 缺点2：字符串类型和数字类型的数值不会去重
     */
    function unique(arr) {
        var ret = [];

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (ret.indexOf(item) === -1) {
                ret.push(item);
            }
        }

        return ret;
    }

    // 测试
    console.log(unique([1, 2, "3", 3, 4, 4, 5, 6]));
}

{

    /**
     * 优化数组去重方法2
     *
     * 优化：在IE6-8下数组的indexOf方法不存在时，手动添加indexOf实现方法
     * 缺点2：字符串类型和数字类型的数值不会去重
     */
    var indexOf = [].indexOf ?
        function (arr, item) {
            return arr.indexOf(item)
        } :
        function indexOf(arr, item) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === item) {
                    return i
                }
            }
            return -1
        }

    function unique(arr) {
        var ret = [];

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (ret.indexOf(item) === -1) {
                ret.push(item);
            }
        }

        return ret;
    }

    // 测试
    console.log(unique([1, 2, "3", 3, 4, 4, 5, 6]));
}

{
    /**
     * 优化数组去重方法3
     *
     * 优化：兼容
     * 缺点：字符串类型和数字类型的数值不会去重
     */
    function unique(arr) {
        var ret = [];
        var hash = {};

        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            var key = typeof (item) + item;
            if (hash[key] !== 1) {
                ret.push(item);
                hash[key] = 1;
            }
        }
        return ret;
    }

    // 测试
    console.log(unique([1, "2", 3, "3", 4, 4, 5, 6]));
}


{
    /**
     * 数组去重方法优化4
     *
     * 优点：简单，简洁快捷
     * 缺点：兼容性差，字符串类型和数字类型的数值不会去重
     */
    function unique(arr) {
        return [...new Set(arr)];
    }

    // 测试
    console.log(unique([1, "2", 3, "3", 4, 4, 5, 6]));
}

{
    /**
     * 数组去重方法优化5
     *
     * 优点：兼容性好，字符串类型和数字类型的数值会去重
     */
    function unique(arr) {
        let ret = [];
        let hash = {};
        for (var i = 0; i < arr.length; i++) {
            let item = arr[i];
            if (!hash[item]) {
                ret.push(item);
                hash[item] = 1;
            }
        }

        return ret;
    }

    // 测试
    console.log(unique([1, "2", 3, "3", 4, 4, 5, 6]));
}
