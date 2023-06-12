var http=require('http');
var server=http.createServer(function(req,res){
    var opcao=req.url;
       if(opcao=='/historia'){
            res.end("<html><body>Historia da Fatec Sorocaba</html>");
       }
       else if(opcao=="/cursos"){
        res.end("<html><body>Cursos</html>");
       }
       else if(opcao=="/professores"){
        res.end("<html><body>professores</html>");
       }
       else
       res.end("<html><body>Site da Fatec Sorocaba</html>");
});
server.listen(3000);