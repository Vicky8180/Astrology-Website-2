

const express = require("express");
const MessageModel = require("../../model/chatmodel/messageModel");
const router = express.Router();


router.post('/messages', async (req, res) => {
    try {
        const chat = req.body.chat;
        const textContent = req.body.textContent;
       
        console.log(req.body)

        const data = await MessageModel.create({
            chat: chat,
            textContent: textContent,
            sender: req.body.sender,
            
         
        });

        const data2 = await MessageModel.findById(data._id) 

        return res.json(data2);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});

module.exports = router;
