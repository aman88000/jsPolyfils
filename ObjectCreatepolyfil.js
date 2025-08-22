
const obj1 = {
    name: 'aman',
    getName(){
        return this.name
    }
}

function ObjectCreatePolyfil(fromObj){
    const newObj = {}
    Object.setPrototypeOf(newObj, fromObj)
    return newObj
}

const obj2 = ObjectCreatePolyfil(obj1)
console.log(obj2.name)
console.log(obj2.getName());
