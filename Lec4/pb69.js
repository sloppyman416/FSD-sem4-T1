/* Write node.js script to copy content of one file to the other file. data 
should be fetched from source.txt and insert to destination.txt */

var fs=require("fs")

fs.writeFile("source.txt","this line is in source",(err)=>{
    if (err)
        throw err
    else
        fs.copyFile("source.txt","destination.txt",(err)=>{
            if (err)
                throw err
            else
                fs.readFile("destination.txt","utf-8",(err,data)=>{
                    if(err)
                        throw err
                    else
                        console.log(data)
            })
    })
})