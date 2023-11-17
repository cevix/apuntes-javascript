$.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000",
    method: "get",
    dataType: "json",
    success: function (data) {
       //rellenar aqui

        data.results.forEach(pokemon => {
            $("#opciones").append("<option value='"+pokemon.name+"'>"+pokemon.name+"</option>")
            
        });

//funcionalidad de mostrar todos      
        $("#todos").on("click",function(e){
            data.results.forEach(pokemon => {
                $.ajax({
                    url: pokemon.url,
                    method: "get",
                    dataType: "json",
                    success: function (data) {
                        //metodo principal
                        $("tbody").append("<tr><td>"
                        +data.id+"</td><td>"
                        +data.species.name+"</td><td>"
                        +data.abilities[0].ability.name+"</td><td>"
                        +data.types[0].type.name+
                        "</td><td><img src='"+data.sprites.back_default+"'></img></td><td><img src='"+data.sprites.front_default+"'></img></td>");
                        
                        /*
                        $("tbody").append("<tr> ");
                        $("tbody").append("<td>"+data.id+"</td>")
                        $("tbody").append("<td>"+data.species.name+"</td>")
                        $("tbody").append("<td>"+data.abilities[0].ability.name+"</td>");
                        $("tbody").append("<td>"+data.types[0].type.name+"</td>");
                        $("tbody").append("<td><img src='"+data.sprites.back_default+"'></img></td>");
                        $("tbody").append("<td><img src='"+data.sprites.front_default+"'></img></td>");
                        
                        
                        $("tbody").append("</tr> ");
                        */
                        //esto de abjao llama a la base stat del stats 5
                        //$("tbody").append("<td>"+data.stats[5].base_stat+"</td>")
                    },
                    error: function (xhr, status, error) {
                        debugger
                    }
                })    

            })
            //pokemon.url
            
        })
    //Funcionalzidad del seleccionado
    $("#info").on("click",function(e){
        data.results.forEach(pokemon => {
            if (pokemon.name==($("select#opciones option:checked").val())) {
                $.ajax({
                    url: pokemon.url,
                    method: "get",
                    dataType: "json",
                    success: function (data){
                        $("tbody").append("<tr><td>"
                        +data.id+"</td><td>"
                        +data.species.name+"</td><td>"
                        +data.abilities[0].ability.name+"</td><td>"
                        +data.types[0].type.name+
                        "</td><td><img src='"+data.sprites.back_default+"'></img></td><td><img src='"+data.sprites.front_default+"'></img></td>");
                    },
                    error: function (xhr, status, error) {
                        debugger
                    }
                })
            }
        });
    })
        

    },
    error: function (xhr, status, error) {
        debugger
    }
})



