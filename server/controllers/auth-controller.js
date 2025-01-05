// Home Logic

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to world best mern series by Sailesh using router");      
    } catch (error) {
        console.log(error);
    }
};

// Register Logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        res.status(200).json({message: req.body});      
    } catch (error) {
        res.status(500).json({msg:"internal server error"})
    }
};

module.exports = { home, register };