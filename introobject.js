/*let obj={};
obj.name="ankit";
obj.age=19;
console.log(obj.age);
console.log(obj);*/

let obj ={
    name:"ankit",
    age :21,
    school:["bps","bvn","gdps"],

    sayhi:function()
    {
        console.log("inside function");
    }
}
console.log(obj);
console.log(obj.age);
console.log(obj.school[1]);
for(let key in obj)
{
    console.log("key",key,"values",obj[key]);
}