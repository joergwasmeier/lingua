/**
 * Created by creativecode on 09.11.16.
 */

var baoba = require('baobab');

export default class BaobaTest {
    constructor() {
        var tree = new baoba({});
    }
}


class TestObj {
    name: string = "test";
    h: UnderTest = new UnderTest();
}

class UnderTest {
    name2: string = "test";
}
