'use strict';
// let object = {

// };

function isEmpty(obj){
    return JSON.stringify(obj) === JSON.stringify({})
}

// let index;
// function createIndex(obj, value){
//     if(isEmpty(obj)) index = 0;
//     for(let prop in obj){
//         index++
//     }
//     obj[index] = value;
//     index = 0;
// }


// function push(obj, value){
//     createIndex(obj, value)
// }
// function pop(obj){
//     let index = 0;
//     for(let prop in obj){
//         index++;
//     }
//     delete obj[index-1];
// }
// function shift(obj){
//     delete obj[0]
//     for(let i = 0; i< Object.keys(obj).length; i++){
//         obj[i-1] = obj[i]
//     }
//     for(let prop in obj){
//         if(obj[prop] == undefined){
//             delete obj[prop]
//         };
//     }
// }
// function unshift(obj,value){
//     let newObj = {};
//     newObj[0] = value;
//     for(let val in obj){
//             createIndex(newObj, obj[val]);
//             delete obj[val]
//     }
//     for(let val in newObj){
//         createIndex(obj, newObj[val])
//     }

// }

// push(object, 'one');
// push(object, 'two');
// push(object, 'three');
// push(object, 'four');
// push(object, 'five');
// push(object, 'six');
// push(object, 'seven');
// shift(object)
// pop(object)
// unshift(object, 'zero');


// console.log(object);
// let renameProp =  (oldProp,newProp,{ [oldProp]: old, ...others }) => ({
//     [newProp]: old,
//     ...others})

// bobo = {
//     name: 'Bobo',
//     job: 'Front-End Master',
//     age: 25
// }
// renameProp('name', 'firstName', bobo)
// console.log(bobo);

class CustomArray{
    constructor(){
        this.obj = {};
        this.index;
    }
    createIndex(obj, value){
        if(isEmpty(obj)) this.index = 0;
        for(let prop in obj){
            this.index++
        }
        obj[this.index] = value;
        this.index = 0;
    }
    push(value){
        this.createIndex(this.obj, value)
    }
    pop(){
        let index = 0;
        for(let prop in this.obj){
            index++;
        }
        delete this.obj[index-1];
    }
     shift(){
        delete this.obj[0]
        for(let i = 0; i< Object.keys(this.obj).length; i++){
            this.obj[i-1] = this.obj[i]
        }
        for(let prop in this.obj){
            if(this.obj[prop] == undefined){
                delete this.obj[prop]
            };
        }
    }
     unshift(value){
        let newObj = {};
        newObj[0] = value;
        for(let val in this.obj){
                this.createIndex(newObj, this.obj[val]);
                delete this.obj[val]
        }
        for(let val in newObj){
            this.createIndex(this.obj, newObj[val])
        }
    
    }
}
const custom = new CustomArray();
custom.push('zero')
custom.push('one')
custom.push('two')
custom.push('three')
custom.push('four')
custom.push('five')
custom.push('six')
custom.shift()
custom.pop()
custom.unshift('zero')
console.log(custom);