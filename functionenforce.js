function tarbitrary() {
    this.originFunc = function() {};
}

tarbitrary.prototype = {
    enforceFunc:function(enforceHandle) {
        var tmp = this.originFunc;
        this.originFunc = function() {
            tmp();
            enforceHandle();
        }
    }
}

var t = new tarbitrary();
t.enforceFunc(function () {console.log("abc")});
t.enforceFunc(function () {console.log("def")});
t.originFunc();

var b = new tarbitrary();
b.originFunc();
b.enforceFunc(function () {console.log("another")});
b.originFunc();
t.originFunc();