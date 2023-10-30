const Recipe = require("../model/Recipe")
const recipe = (app) => {
    app.get("/", async (req, res) => {
        try{
            const recipes = await Recipe.find()
            res.render("index",{recipes})
        } catch(err) {
            res.status(500).json({status: false, message: "Internal server error occured"})
        }        
    })

    app.get("/recipes", async(req, res) => {
        try{
            const recipes = await Recipe.find()
            res.render("index",{recipes})
        } catch(err) {
            res.status(500).json({status: false, message: "Internal server error occured"})
        }        
    })

    app.get("/recipe", (req, res) => {
        res.render("recipe")
    })

    app.post("/recipe", (req, res) => {
        res.status(200).json({status: true, message: "Recipe added successfully"})
    })

}

module.exports = recipe;

// const recipe = [
    //     {name: "Egusi Soup", cal: 20, price: 2000, photoURL: "https://www.allrecipes.com/thmb/gGxd_XsQjCNs7Au0PfgvU4Uce2w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/12978-Egusi-Soup-ddmfs-026-4x3-1-e662479f824b4b54bdc25165ad41c6b6.jpg"},
    //     {name: "Beef Mushroom", cal: 30, price: 5000, photoURL: "https://www.allrecipes.com/thmb/t5VaPe4Zl7kIRUzoTBhpMlPuWH4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/7369568_Beef-and-Mushroom-Dumplings-in-Broth_Jessica-Vogl-4x3-4f0ba74da26a4f0599f88f499b667fa0.jpg"},
    //     {name: "Lentil Soup", cal: 15, price: 6000, photoURL: "https://www.allrecipes.com/thmb/WzzNCH0mOKMlqQcEuXqabnUgs7o=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/7968859_Green-Lentil-Gumbo-Soup_Chef-John_4x3-060776d1bb394ba0a08ebc05d1a4e90b.jpg"},
    //     {name: "Chicken Ramen", cal: 12, price: 3500, photoURL: "https://www.allrecipes.com/thmb/jinwpgcHgUpzNEtS6smBJ4Uy3dU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(639x0:641x2):format(webp)/8536550-Creamy-Green-Curry-Chicken-Ramen-1x1-1-bb13cc14417a407b81a7a82db3cc9769.jpg"},
    //     {name: "French Toast", cal: 15, price: 2500, photoURL: "https://www.allrecipes.com/thmb/9MugXixbIqPPV2pTz5-7RoceZj8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/8495603-Croissant-french-toast-1x1-1-2000-dbfc614aa60e45a0ae60e3ef92d4fbcf.jpg"},
    //     {name: "Pancakes", cal: 15, price: 1500, photoURL:"https://www.allrecipes.com/thmb/i-QUYWVQtE3B99JY0Kn9lAfv5mY=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(2081x1576:2083x1578):format(webp)/7970170-cheesecake-pancakes-ddmfs-3x4-7106-2d47267956c2428bb22f4fcca5605722.jpg"},
    //     {name: "Tortilla Soup", cal: 20, price: 3500, photoURL: "https://www.allrecipes.com/thmb/kmRSgakQgg_NJiezlbHd5MiN1Vk=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(351x0:353x2):format(webp)/Instant-Pot-Chicken-Tortilla-Soup-1x1-1-b61b390a54594501a7b78129f28a086a.jpg"},
    //     {name: "Casserole", cal: 10, price: 2500, photoURL: "https://www.allrecipes.com/thmb/THNkmShIB6b9EunAF-i8aEuSTAM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/8532980-Overnight-Ham-and-Cheese-Croissant-Casserole-1x1-1-786fb6718a8d40ca8075f58c18dc4502.jpg"}
    // ]

    // console.log(Recipe)

    // recipe.forEach(async (item) => {
    //     const newRecipe = new Recipe(item)
    //     const saveRecipe = await newRecipe.save()
    //     console.log("recipe item saved", saveRecipe)
    // })