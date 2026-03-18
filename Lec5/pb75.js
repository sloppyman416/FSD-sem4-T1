/* Write a Node.Js program for following action
1.	Write a file having five random elements separated by white
space in .txt file.
2.	append sorted array of these 5 elements in same file along with
message : “Sorted array:” in new line.
3.	Find maximum number from that and append with message
“maximum number=” in same file.  */

var fs=require("fs")

fs.writeFile("whiteSpace.txt","50 -1 7 99 78",(err)=>{
    if(err)
        throw err
    else
        fs.readFile("whiteSpace.txt","utf-8",(err,sorted_arr)=>{
            if(err)
                throw err
            else{
                sorted_arr=sorted_arr.split(" ")
                sorted_arr.sort((a,b)=>a-b)
                fs.appendFile("whiteSpace.txt","\nSorted array :"+sorted_arr,(err)=>{
                    if(err)
                        throw err
                    else{
                        fs.appendFile("whiteSpace.txt","\nMaximum no. :"+sorted_arr[sorted_arr.length-1],(err)=>{
                            if(err)
                                throw err
                            else
                                console.log("complete")
                        })
                    }
                })
            }

    })
})