const express = require("express")
const router= express.Router();
const chatModel = require("../../model/chatmodel/chatModel");
// const { find } = require("../models/userModel");

router.post("/chatcreated",async(req,res)=>{

    try {
           
        const chatName=req.body.chatName;
        const users= req.body.users;
    
         const chatExists= await chatModel.find(
            {
            $and:[ {users:{$elemMatch:{$eq:users[0]}}

            },
            {users:{$elemMatch:{$eq:users[1]}}
            }]
         }
         )
        
         if(chatExists.length!=0){
            const data2= await chatModel.find(
                {
                    $and:[ {users:{$elemMatch:{$eq:users[0]}}
                    },
                    {users:{$elemMatch:{$eq:users[1]}}
                    }
        ]
                 }
            )
   
            return res.json({data:data2,
                info:"chat already craeted"})
         }else {
            const data = await chatModel.create({
                chatName:chatName,
                users:users,
            })
            const data2= await chatModel.find( {
                $and:[ {users:{$elemMatch:{$eq:users[0]}}
    
                },
                {users:{$elemMatch:{$eq:users[1]}}
                }
    ]
             })
            //  console.log(data2)
            return res.json({data:data2,
                info:"chat now created"})
         }

    
        
    } catch (error) {
        // console.log("error in creating chat")
         return res.json({success:false,
           issue:"error in creating chat"})
    }

})

module.exports=router