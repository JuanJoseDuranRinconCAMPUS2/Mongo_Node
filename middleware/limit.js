import rateLimit from "express-rate-limit";

export let limitGrt = () => {
    return rateLimit({
        windowMs: 15 * 1000, // 15 sg
        max: 5, 
        standardHeaders: true, 
        legacyHeaders: false, 
        skip: (req, res) =>{
            if(req.headers["content-length"]>91){
                res.status(413).send({
                    status: 413,
                    message: "El tamaño es incorrecto"
                });
                return true;
            }
        },
        message: (req,res)=>{
            res.status(429).send({
                status: 429,
                message: 'Se te acabo el tiempo pi pi pi'
            })
        }
    })
}