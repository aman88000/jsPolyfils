function Person(){
    this.name = 'aman'
};

const a = new Person()
console.log(a)



function myNewKeyword(callback, ...args){
    const newObj = {}

    Object.setPrototypeOf(newObj, myNewKeyword.prototype);
    Object.getPrototypeOf(newObj).constructor = callback;

   const result = callback.apply(newObj, args);
    return result || newObj
}


const b = myNewKeyword(Person, 1,2,3);
console.log(b)