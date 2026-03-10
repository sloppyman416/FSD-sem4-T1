var division1 = { "name": ['Z', 'B', 'H'] }
var division2 = { "name": ['Y', 'A', 'G'] }

const div1 = division1.name
const div2 = division2.name

var combine_data = div1.concat(div2).sort()

console.log(combine_data)

//pb 29

function firstandlast(arr) {
    let result = {}
    let first = arr[0]
    result[first] = arr[arr.length - 1]
    return result
}
let input = ["abd", "skf", "emp", "manager"]
console.log(firstandlast(input))

const sub = {
    "fsd": [
        {
            "topic": "html",
            "course": "beginner",
            "content": ["tags", "table", "form"]
        },
        {
            "topic": "css",
            "course": "beginner",
            "content": ["flex", "grid", "animation"]
        }
    ]
}

for (x in sub.fsd) {
    for (y in sub.fsd[x]) {
        console.log(sub.fsd[x][y])
    }
}

const person = [
    { "name": "abc", "age": 19 },
    { "name": "def", "age": 20 },
    { "name": "xyz", "age": 15 },
]

for(let i=0;i<person.length;i++){
    for(let j=i;j<person.length;j++){
        if(person[i].age>person[j].age){
            var temp
            temp=person[i]
            person[i]=person[j]
            person[j]=temp
        }
    }
}

console.log(person)

const asort=person.sort((a,b)=>a.age-b.age)
// -ve diff a before b
// +ve diff a after b
// if no order stays same
for(i of asort){
    console.log(i.name+"  "+i.age)
}