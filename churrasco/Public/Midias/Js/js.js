$(document).ready(() => {
    $("#btn-carnes").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
                
       // Cria dinamicamente um novo elemento img \\
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/carne1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/carne2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2); // Adiciona o novo elemento img à div fotos \\

       $("#btn-carnes").click(function () {
            window.location.href = '/carnes'; 
        });
    });
    $("#btn-carnes").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-adic").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();

       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/adic1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/adic2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-adic").click(function () {
            window.location.href = '/acompanhamentos'; 
        });
    });
    $("#btn-adic").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-salada").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
  
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/salada1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/salada2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-salada").click(function () {
            window.location.href = '/salada'; 
        });
    });
    $("#btn-salada").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-bebidas").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
                
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/bebida1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/bebida2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-bebidas").click(function () {
            window.location.href = '/bebidas'; 
        });
    });
    $("#btn-bebidas").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-sobremesa").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
                
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/doce1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/doce2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-sobremesa").click(function () {
            window.location.href = '/doces'; 
        });
    });
    $("#btn-sobremesa").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });

    
});