/* Write a NodeJS program to create a file named test.txt containing the
initial text "Exam attempt ". Then, it should add three more lines to
the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".
After writing, the program must read the file and count how many
times the word "Pass" appears and if the word "Pass" appears three or
more times, the program should erase the content inside test.txt. */

var fs = require("fs")

fs.writeFile("test.txt", "Exam attempt", (err) => {
    if (err)
        throw err
    else
        fs.appendFile("test.txt", "\nEntry 1: Pass \nEntry 2: Fail \nEntry 3: Pass", (err) => {
            if (err)
                throw err
            else
                fs.readFile("test.txt", "utf-8", (err, data) => {
                    if (err)
                        throw err
                    else {
                        data = data.split(" ")
                        console.log(data)
                        
                    }
                })
        })
})