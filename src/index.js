//DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (a) => {return a};
const createNotEnumerableProperty = (a) => {return Symbol(a)};
const createProtoMagicObject = () => {return Function};

let counterIncr = 0;
const incrementor = () => {

    const foo = function () {
        counterIncr++;
        return foo;
    };
    
    foo.valueOf = () => counterIncr;
    return foo();
}

let counterAsyncIncr = 0;
const asyncIncrementor = () => {

    const foo = function () {
        counterAsyncIncr++;
        return foo;
    };
    
    foo.valueOf = () => counterAsyncIncr;
    return foo();
};

class helpAsyncIncrementor{
    constructor() {
        this.counter = 0;
    }

    next() {
        this.counter++;

        return {
            done: false,
            value: this.counter
        }
    }


    [Symbol.iterator](){
        return this;
    }
}

const createIncrementer = () => {return new helpAsyncIncrementor()};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;