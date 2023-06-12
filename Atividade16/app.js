var express=require('express');
var app=express();//executando o express

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render("home/index");
  });

  app.get('/formulario_adicionar_usuario',function(req,res){
    res.render("admin/adicionar_usuario");
});

/* AQUI TINHA QUE COLOCAR A PASTA INFORMACAO NOS GETS TAMBEM */

app.get('informacao/historia',function(req,res){
    res.render("informacao/historia");
 });

app.get('informacao/cursos',function(req,res){
    res.render("informacao/cursos");  
});

app.get('/professores',function(req,res){
    res.render("informacao/professores");
});

/* AQUI AO INVEES DE LISTEN ESTAVA GET */
app.listen(3000,function(){
    console.log("servidor com express foi carregado");
})