




// Massiv va obyektlarga oid masalalar.

// 1-masala
// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//    ];
//    let result = [];
//    for(let value of students){
     // result.push(value.name, value.age )//buham ishladi lekin har bir malumotni alohida qilib
//      delete value.score
//      delete value.status
//      result.push(value)
//    }
//    console.log(result)

// 2-masala
// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'ali', age: 27, score: 54, status: 'inactive' }
//    ];
//    function aniqlovchi(students){
//         var maxball = students[0]
//         let result = maxball.score
//         for(let value of students){
//              if(result < value.score){
//                   result = value.score
//                }
//           }
//           return result
//      }
// console.log(aniqlovchi(students))

// 3-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Andrew', age: 23, score: 88, status: 'active' }
//    ];

//    function tanlash(students){
//      let arr = []
//      for(let i of students){
//          arr.push(i.name)
//      }
//      let result = [];
//      arr.forEach(function(value){
//           if('A' == value[0]){
//              result.push(value)
//           }
//      })
//      return result;
//    }
//    console.log(tanlash(students))


// 4-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Andrew', age: 23, score: 88, status: 'active' }
//    ];

//    function tanlash(students){
//      let arr = []
//      let boluvchi = 0
//      for(let i of students){
//          arr.push(i.score)
//          boluvchi = boluvchi + 1;
//      }
//      let yigindi = 0;
//      arr.forEach(function(value){
//           yigindi = yigindi + value;
//      })
//      let result = yigindi / boluvchi;

//      return result;
//    }
//    console.log(tanlash(students))

// 5-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 23, score: 88, status: 'active' },
//      { name: 'John', age: 22, score: 92, status: 'inactive' },
//    ];
// function topuvchi(students){
//      let indexson = 0;
//      for(let i of students){
//              indexson++
//           if('John' == i.name){
//                console.log('Jhon indexsi :', indexson - 1)
//                return i;
//           }
// }
// }
// console.log(topuvchi(students))


// 6-masala

// const students = [
//      { name: 'Alice', age: 20, score: 80, status: 'active' },
//      { name: 'Bob', age: 22, score: 45, status: 'inactive' },
//      { name: 'Bob', age: 22, score: 78, status: 'inactive' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 85, status: 'active' }
//    ];
// function indextopiw(students){
//      let indexson = 0;
//           for(let i of students){
//                   indexson++
//                if(85 < i.score){
//                     return indexson - 1;
//                }
//      }    
// }
// console.log(indextopiw(students))

// 7-masala
// const students = [
//      { name: 'Alice', age: 20, score: 80, status: 'active' },
//      { name: 'Bob', age: 22, score: 45, status: 'inactive' },
//      { name: 'Bob', age: 22, score: 78, status: 'inactive' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 85, status: 'active' }
//    ];
// function indextopiw(students){
//      let arr = [];
//           for(let i of students){
//                if('active' == i.status){
//                   arr.push(i);  
//                }
//      }    
//      return arr;
// }
// console.log(indextopiw(students))

// 8-masala
// const students = [
// { name: 'Alice', age: 20, score: 85, status: 'active' },
// { name: 'Bob', age: 22, score: 98, status: 'inactive' },
// { name: 'Charlie', age: 17, score: 88, status: 'active' }
// ];
// let ages = [];
// students.forEach(function(value){
//      ages.push(value.age);
// })
// let res = ages.every(function(i){
//      return i > 18;
// })
// console.log(res);


// 9-masala
// const students = [
// { name: 'Alice', age: 20, score: 85, status: 'active' },
// { name: 'Bob', age: 22, score: 98, status: 'inactive' },
// { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];
// let scrores = [];
// students.forEach(function(value){
//      scrores.push(value.score);
// })
// let res = scrores.some(function(i){
//      return i > 90;
// })
// console.log(res);


// 10-masala

// const students1 = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//    ];
//    const students2 = [
//      { name: 'Charlie', age: 23, score: 88, status: 'active' },
//      { name: 'David', age: 21, score: 90, status: 'inactive' }
//    ];

// let students = students1.concat(students2);
// console.log(students);

// 11-masala

// unikal sozini tushinmadim

// 12-masala
// const students = [
//   {name: 'Alice', age: 20, score: 85, status: 'active'},
//   {name: 'Bob', age: 22, score: 92, status: 'inactive'}
// ];
// function kottatoupercase(students) {
//      students.forEach(student => {
//        student.name = student.name.toUpperCase();
//      });
//      return students
//    }
//    console.log(kottatoupercase(students));
   

// 13-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 88, status: 'active' }
//    ];

//    function qiymatolish(students){
//      let res = []
//      students.forEach(function(value){
//           res.push(value.score )
//      })
//      return res;
//    }
//    console.log(qiymatolish(students))

// 14-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 88, status: 'active' }
        
//    ];
//    function bir(students){
//      let res = students[0];
//      let result = [];
//      for(let i in res){
//           result.push(i);
//      }    
//    return result;
// }
// console.log(bir(students));

// 15-masala
// function Oquvchi(name, age, score, status){
//      this.name = name;
//      this.age = age;
//      this.score = score;
//      this.status = status;
// }

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//    ];

//  const   newstudents = new Oquvchi('Charlie', 23, 88, 'active')

// console.log(newstudents);
// console.log(students.concat(newstudents));

// 16-masala
// let ism = prompt(
//      'name: Charlie, age: 23, score: 88, status: active; name: Bob, age: 22, score: 92, status: inactive; name: Alice, age: 20, score: 85, status: active;         malumotlarini ochirmoqchi bolgan studentni ismini yozing '
// )

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 88, status: 'active' }
//    ];
//    let result = [];
// students.forEach(function(value){
//      if(value.name != ism){
//            result.push(value);
//      }
// }) 
// console.log(result)




// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 88, status: 'active' }
//    ];
//    let result = [];
// students.forEach(function(value){
//      if(value.name != 'Bob'){// o`chirmoqchi bo`lgan student ismini yozsek osha student malumotlari olib tawlanadi masalan Bob
//       result.push(value);
//      }
// })
// console.log(result)

// 17-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 19, score: 88, status: 'active' }
//    ];

// function tekshiruvchi(students){
//      let res = [];
//      let son = 1;
//      students.forEach(function(value){
//           res.push(son)
//           if(value.age > 20){
//                res.push(' o`quvchining yoshi 20dan kotta')
//           } else if(value.age < 20){
//                res.push('o`quvchining yoshi 20dan kichik')
//           } else{
//                res.push('o`quvchining yoshi 20da')
//           }
//           son++
//      })
//      return res;
// }
// console.log(tekshiruvchi(students))

// 18-masala
// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 23, score: 88, status: 'active' }
//    ];

//    function tekshiruvchi(students){
//      let res = [];
//      let son = 1;
//      students.forEach(function(value){
//           res.push(son)
//           if(value.status == 'active'){
//                res.push(' o`quvchi active')
//           } else{
//                res.push('o`quvchi inactive ')
//           }
//           son++
//      })
//      return res;
// }
// console.log(tekshiruvchi(students))

// 19-masala




// 20-masala

// const students = [
//      { name: 'Alice', age: 20, score: 85, status: 'active' },
//      { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//      { name: 'Charlie', age: 19, score: 88, status: 'active' }
//    ];

//    function engkchik(students){
//      let res = [];
//      students.forEach(function(value){
//           res.push(value.age);
//      })
//      let son = res[0]
//       res.forEach(function(i){
//           if(son > i){
//                son = i;
//           }
//      })
//      return son;
//    }
//    console.log(engkchik(students));

// String metodlariga oid masalalar.


// 1-masala

// let str = "Hello, world!"
// let res = str.substring(0,5);
// console.log(res)
// 2-masala

// let str = "Hello, WORLD!"


// 3-masala
// let str = "Hello world from JavaScript"
// let res = str.split("")
// console.log(res)

// 4-masala

// let arr = ["Hello", "world", "from", "JavaScript"];
// let str = arr.join(", ")
// console.log(str)

// 5-masala

// let str = "JavaScript";
// let res = str.replace('a','@')
// console.log(res)


// 6-masala

// let str = "   Hello, world!   ";
// let res = str.trim()
// console.log(res)

// 7-masala

// let str = "Hello, world!"
// let res = str.charAt(7)
// console.log(res)

// 8-masala

// let str = "Hello, world!";
// let res = str.includes('world');
// console.log((res));

// 9-masala

// let str = "Hello, world!";
// let res = str.startsWith('Hello')
// console.log(res);

// 10-masala
// let str = "Hello, world!";
// let res = str.endsWith('world!')
// console.log(res);