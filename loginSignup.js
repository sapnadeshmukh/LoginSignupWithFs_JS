const readlinesync=require("readline-sync")
var passwordValidator = require('password-validator');
const fs = require('fs');


var main_dict={}
var list=[]
var dic_out={}
var user_info={}
var newDict={}
var list3=[]
var list1=[]

const user=readlinesync.question("press 1. for Signup or 2. for Login=")
if (user==1){
    const username=readlinesync.question("Enter name:----")
    const password=readlinesync.question("enter your password (password should conatain Upper,Small Letter, Special Character and number):----")
    var schema = new passwordValidator();
    schema.is().min(8).is().max(15).has().uppercase().has().lowercase().has().digits(1).has().symbols(1)
    var StronfPassword=(schema.validate(password));
    console.log(StronfPassword)
    const confirmpassword=readlinesync.question("Re-enter your password:----")
    if(password==confirmpassword){
        console.log("Both password are equal")
        
    }else{
        console.log("Both password are not equal")


    }if (StronfPassword==true){
        dic_out["Username"]=username
        dic_out["Password"]=password

        list.push(dic_out)

        main_dict["user"]=list
        const path = "userdetails.json"

    
        fs.exists(path, function(exists) {

            if (exists) {
        
                const result1=fs.readFile("userdetails.json","utf8",(err,result1)=>{
                    if(err) throw err;
                    var obj=JSON.parse(result1)
                    

                    var list1=(obj["user"])
                   
                    for (i in list1){
                        var a = list1[i]["Username"]
                        if (a==username){
                            break
                        }
                    }
                    if(a==username) {
                        console.log('already exists')
                    }else{
                        dic_out["Username"]=username
                        dic_out["Password"]=password
                        main_dict["user"]=list1

        
                    
                        console.log("Congrats",username,"you are signed up successfully!!!");
                        const Description=readlinesync.question("Write something about You:--")
                        const BirthDate=readlinesync.question("Enter your date of birth:--")
                        const Hobbies=readlinesync.question("Enter your Hobbies:--")
                        const Gender=readlinesync.question("Enter your gender:--")
                        newDict["description"]=Description
                        newDict["dob"]=BirthDate
                        newDict["hobbies"]=Hobbies
                        newDict["gender"]=Gender
                        dic_out["profile"]=newDict
                        list1.push(dic_out)
                        main_dict["user"]=list1
                        fs.writeFile("userdetails.json", JSON.stringify(main_dict,null,4), err => {
        
                            if (err) throw err; 
                            console.log("data has added successfully in json!!!")
                        })


                    }

                    


                })
            }
            else{
                
        
            
                console.log("Congrats",username,"you are signed up successfully!!!","\uD83D\uDE00");
                const Description=readlinesync.question("Wite saomething about You:--")
                        const BirthDate=readlinesync.question("Enter your date of birth:--")
                        const Hobbies=readlinesync.question("Write your Hobbies:--")
                        const Gender=readlinesync.question("enter your gender:--")
                        newDict["description"]=Description
                        newDict["dob"]=BirthDate
                        newDict["hobbies"]=Hobbies
                        newDict["gender"]=Gender
                        dic_out["profile"]=newDict
                        list1.push(dic_out)
                        main_dict["user"]=list1
                        fs.writeFile("userdetails.json", JSON.stringify(main_dict,null,4), err => {
        
                            if (err) throw err; 
                        })
                

            }
        })
    }else{
        console.log(" Both password are not same")
    }
}else{
    const username=readlinesync.question("Enter name:----")
    const password=readlinesync.question("Enter password:----")
    const data=fs.readFile("userdetails.json","utf8",(err,data)=>{
        if(err) throw err;
        var fileData=JSON.parse(data)
        var list2=(fileData["user"])

        for (i in list2){

            var name = list2[i]["Username"]
            var pswd = list2[i]["Password"]
            var gen  =  list2[i]["profile"]["gender"]
            var bio  =  list2[i]["profile"]["description"]
            var hobbys =list2[i]["profile"]["hobbies"]
            var dob=list2[i]["profile"]["dob"]

            if (name==username && pswd==password){
                break
            }
        }
        if(name==username &&pswd==password) {
            console.log(username,'you are logged in successfully!!',"\uD83D\uDE00")
        
            console.log("*****PROFILE********")
            console.log("Username:-",username)
            console.log("Gender:-",gen)
            console.log("Bio:-",bio)
            console.log("Hobbies:-",hobbys)
            console.log("DOB:-",dob)
        }else{
            
            console.log("Invalid username and password!"); 
            
        }


    
            
        })
                


}
    
    




