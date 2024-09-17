var express = require('express');
var router = express.Router();

const alunoService = require("../services/AlunoService");

router.get(
    "/listar"
    ,
    (req,res,next)=>{
        res.json(alunoService.list())
    }
)

router.post(
    "/cadastrar"
    ,
    (req,res,next)=>{
        //res.json(alunoService.list())
        const aluno = alunoService.register(req.body)
        res.json(aluno)
    }
)

router.get(
    "/recuperar/:id"
    ,
    (req,res,next)=>{
        //res.json(alunoService.list())
        const aluno = alunoService.retrieve(req.params.id)
        res.json(aluno)
    }
)

router.put(
    "/atualizar/:id"
    ,
    (req,res,next)=>{
        //res.json(alunoService.list())
        const aluno = alunoService.update(req.params.id,req.body)
        res.json(aluno)
    }
)

router.delete(
    "/remover/:id"
    ,
    (req,res,next)=>{
        //res.json(alunoService.list())
        const out = alunoService.delete(req.params.id)
        res.json({"sucesso":out})
    }
)

module.exports = router