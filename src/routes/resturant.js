const Resturant = require("../model/Resturant")
const resturant = (app) => {
    app.get("/resturants", async (req, res) => {
        try {
            res.render("resturant")
        } catch(err) {
            res.status(500).json({status: false, message: "Internal server error occured"})
        }

    })

    app.get("/api/resturants", async (req, res) => {
        console.log(req.query)
        try {
            const resturants = (req.query.city !== 'undefined') ? await Resturant.find({city: req.query.city}) : await Resturant.find();
            res.status(200).json(resturants)
        } catch(err) {
            res.status(500).json({status: false, message: "Internal server error occured"})
        }
    })

    // app.post("/resturant", (req, res) => {
    //     res.status(200).json({status: true, message: "Resturant added successfully"})
    // })

     // const resturants = [
        //     {name: "Ntach Osa", city: "Enugu", address: "20 Chime Avenue, New Heaven"},
        //     {name: "Emili", city: "Enugu", address: "43 Ogui Road"},
        //     {name: "Xtercy", city: "Enugu", address: "Agric Bank bus stop"},
        //     {name: "Crunches", city: "Lagos", address: "Orire road, Ikeja"},
        //     {name: "Maximus", city: "Lagos", address: "Sunny, bus stop, Alaba"},
        //     {name: "Chicken Justice", city: "Lagos", address: "101, Albert Macury Sabo Yaba"},
        //     {name: "Mai Mia", city: "Abuja", address: "13 Wuse Road, near hot pot center"}
        // ]

        // resturants.forEach(async (item) => {
        //     const newResturant = new Resturant(item)
        //     const saveResturant = await newResturant.save()
        //     console.log("resturant item saved", saveResturant)
        // })

}

module.exports = resturant;