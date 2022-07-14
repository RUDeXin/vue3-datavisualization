
type a = {
    a: number,
    b: number
}

interface aaa {
    a: a
}

export const log: Function = function log(name: string) {
    return function decorator(Class: any, property: string, describtor: any) {
        return class a extends Class {
            constructor(...args: any) {
                console.log(`log for ${name}: `, args)
                super(args)
            }
        }
    }
}
const log2: Function = function (target: any, property: string, describtor: any) {
    console.log(target, property, describtor)
    // return (...args: any) => {
    //     console.log(target, property, describtor)
    //     return target(...args)
    // }
    return describtor
}
@log('cat')
class Animal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    @log2
    sayHello() {
        console.log('hello')
    }
}

try {
    console.log(Animal, new Animal('hello kitty', 2).sayHello())
} catch (e) {
    console.error(e);
}

// const cat = new Animal('Hello kitty', 2)

//  log for cat:  ["Hello kitty", 2]

// Hello kitty