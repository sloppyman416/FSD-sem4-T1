const a = {
    "DS": [{ "name": "tree", "course": "intro", "content": ['1', 'B', 'C'] },
    { "name": "tree1", "course": "intro", "content": ['1', 'B', 'C', 'd'] },
    ],
    "xyz": { "name": "Graphics", "topic": ["BFS", "CDF", "sorting"] },
}

console.log(a.xyz.topic)
const b = {
    "name": "Ramesh",
    "subjects": ["maths", "science", "chemistry"],
    "grade": { "type": "marks", "total": [80, 90, 99, 87] },
    "range": { "opt": 100, "type": ["secure", "subject", "class"] },
    "achieve": [{ "Rank": "rank", "place": [1, 2, 3] },
    { "ordinalindicator": "st" },
        "12"],
    "joints": ["outof", "got", "and"]
}
console.log(b.name + " " + b.joints[1] + " " + b.grade.total[2] + " " + b.joints[0] + " " + b.range.opt + " " + b.grade.type + " " + b.joints[2] + " " + b.range.type[0] + " " + b.achieve[0].place[0] + b.achieve[1].ordinalindicator + " " + b.achieve[0].Rank)


const st = `{"Name":"xyz","age":17,"dob":"1999-09-27"}`
const obj = JSON.parse(st)

c=new Date(obj.dob)
console.log(c)