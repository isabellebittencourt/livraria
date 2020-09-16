const express = require ('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send("Página Inicial");
});

router.get('/posts', (req, res)=>{
    res.send('Página de posts');
})

router.get('/categoria', (req,res)=>{
    res.send("Página de Categorias");
})

module.exports = router;
