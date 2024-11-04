console.log("inside printing statement");
let a=[1,2,3,4];
console.log(a,a.length);
for(let i =0;i<a.length;i++)
{
    console.log('index:',i, "value",a[i]);
}
a.push(5);//add value at the last
console.log(a);
a.pop(); // remove value from the last index
console.log(a);
a.unshift(10);//add value to the first index
console.log(a);
a.shift();//remove value from the first index
console.log(a);