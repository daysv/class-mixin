import assert from 'assert'
import EventEmitter from 'events'
import mixin from '../src'

class Base {
    constructor() {
        this.value = 'base'
    }

    static staticMethod() {
        return 'err'
    }

    getName() {
        return 'Base'
    }

    getValue() {
        return this.value
    }

    getNumber() {
        return 1
    }
}

class Base2 {
    static staticMethod() {
        return 'test'
    }

    getNumber() {
        return 2
    }

    get prop() {
        return this._value + ' ok'
    }

    set prop(value) {
        this._value = value
    }
}

class Test extends mixin(EventEmitter, Base, Base2) {
    constructor() {
        super()
        this.value = 'test'
    }
}

describe('mixin', () => {
    const test = new Test()
    it('should inherits prototypes from EventEmitter', done => {
        test.on('test', ()=> {
            done()
        })
        test.emit('test')
    })

    it('should inherist prototypes from Base', done=> {
        assert.equal('Base', test.getName())
        assert.equal('test', test.getValue())
        done()
    })

    it('should inherits getNumber from Base2', done=> {
        assert.equal(2, test.getNumber())
        done()
    })

    it('should inherits static method from Base2', done=> {
        assert.equal('test', Test.staticMethod())
        done()
    })

    it('should inherits getter and setter from Base2', done=> {
        test.prop = 'setter'
        assert.equal('setter ok', test.prop)
        done()
    })
})