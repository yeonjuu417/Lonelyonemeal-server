const { resultRecipes } = require('../../models');

module.exports = {
    post: async (req, res) => {
	    console.log(req.body);
        let result = [];
	    // console.log(req.body.ingredients);
        // const { 'potato', 'egg', 'rice', 'sesame', 'onion', 'tofu', 'spam', 'bread', 'gochujang', 'pork', 'chicken', 'tuna', 'flour', 'kimchi', nutella, pocachip } = req.body
        const { ingredients } = req.body;
        // if ('egg' && 'rice' && 'spam' && 'bread' && 'chicken') {
        //     let id = Math.floor(Math.random() * (6 - 1)) + 1;
        //     let result = await resultRecipes.findOne({
        //         where: { id: id }//id:1~4
        //     })
        //     res.status(200).send({ data: result  })
        // } 
        
        if (ingredients.includes('egg') && ingredients.includes('sesame')) {
            let eggroll = await resultRecipes.findOne({
                where: { id: 1 }
            })
            result.push(eggroll);
            // res.status(200).send({ data: eggroll, message : "eggroll"})
        }
        if (ingredients.includes('egg') && ingredients.includes('rice')) {
            let eggrice = await resultRecipes.findOne({
                where: { id: 2 }
            })
            result.push(eggrice);
            // res.status(200).send({ data: eggrice, message : "eggrice" })
        } 
        if (ingredients.includes('spam') && ingredients.includes('egg') && ingredients.includes('bread')) {
            let spamsand = await resultRecipes.findOne({
                where: { id: 3 }
            })
            result.push(spamsand)
            // res.status(200).send({ data: spamsand, message : "spamsand" })
        } 
        if (ingredients.includes('spam') && ingredients.includes('egg')) {
            let spammayo = await resultRecipes.findOne({
                where: { id: 4 }
            })
            result.push(spammayo)
            // res.status(200).send({ data: spammayo, message : "spammayo" })
        } 
        if (ingredients.includes('chicken') && ingredients.includes('egg')) {
            let chickenmayo = await resultRecipes.findOne({
                where: { id: 5 }
            })
            result.push(chickenmayo)
            // res.status(200).send({ data: chickenmayo, message : "chickenmayo" })
        } 
        if (ingredients.includes('tofu') && ingredients.includes('onion')) {
            let tofufood = await resultRecipes.findOne({
                where: { id: 6 }
            })
            result.push(tofufood)
            // res.status(200).send({ data: tofufood, message : "tofufood"})
        }
        // } else if ('gochujang' && 'pork' && 'kimchi') {
        //     let id = Math.floor(Math.random() * (9 - 7)) + 7;
        //     let result = await resultRecipes.findOne({
        //         where: { id: id }//7~8
        //     })
        //     res.status(200).send({ data: result })
        // } 
        
        if (ingredients.includes('gochujang') && ingredients.includes('pork')) {
            let bullgogi = await resultRecipes.findOne({
                where: { id: 7 }
            })
            result.push(bullgogi)
            // res.status(200).send({ data: bullgogi, message : "bullgogi"})
        }
        if (ingredients.includes('kimchi') && ingredients.includes('pork')) {
            let kimchistew = await resultRecipes.findOne({
                where: { id: 8 }
            })
            result.push(kimchistew)
            // res.status(200).send({ data: kimchistew, message : "kimchistew" })
        }
        if (ingredients.includes('potato') && ingredients.includes('flour')) {
            let potatopizza = await resultRecipes.findOne({
                where: { id: 9 }
            })
            result.push(potatopizza)
            // res.status(200).send({ data: potatopizza, message : "potatopizza"})
        }
        if (ingredients.includes('potato')) {
            let hashbrown = await resultRecipes.findOne({
                where: { id: 10 }
            })
            result.push(hashbrown)
            // res.status(200).send({ data: hashbrown, message : "hashbrown"})
        }
        if (ingredients.includes('kimchi') && ingredients.includes('flour')) {
            let kimchipizza = await resultRecipes.findOne({
                where: { id: 11 }
            })
            result.push(kimchipizza)
            // res.status(200).send({ data: kimchipizza, message : "kimchipizza" })
        }
        if (ingredients.includes('tuna') && ingredients.includes('rice')) {
            let tunarice = await resultRecipes.findOne({
                where: { id: 12 }
            })
            result.push(tunarice)
            // res.status(200).send({ data: tunarice, message : "tunarice"})
        }
        if(result.length === 0) {
            let result = await resultRecipes.findOne({ //배민링크
                where: { id: 13 }
            })
            res.send({data: result , message: "No recipe" })
        } else {
            let i = Math.floor(Math.random() * (result.length - 0)) + 0;
            console.log("리절트:" + JSON.stringify(result));
            res.status(201).send({data : result[i]})
        }
    }
}
