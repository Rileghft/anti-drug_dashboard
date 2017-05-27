
// https://plot.ly/javascript/#basic-charts



$(function(){

    function barChart(id, x, y, title, xlable, ylable){
        var data = [
            {
                x: x,
                y: y,
                type: 'bar'
            }
        ];
        var layout = {
            title: title,
            yaxis: {
                title: ylable
            },
            xaxis:{
                title: xlable
            }

        };
        Plotly.newPlot('bar_' + id, data, layout);
    }

    function lineChart(id, x, y, title, xlable, ylable){
        var trace1 = {
            x: x,
            y: y,
            type: 'scatter'
        };
        var layout = {
            title: title,
            yaxis: {
                title: ylable
            },
            xaxis:{
                title: xlable
            }
        };
        var data = [trace1];

        Plotly.newPlot('line_' + id, data, layout);
    }

    function scatterChart(id, x, y, title, xlable, ylable){
        var trace1 = {
            x: x,
            y: y,
            mode: 'markers',
            type: 'scatter'
        };
        var layout = {
            title: title,
            yaxis: {
                title: ylable
            },
            xaxis:{
                title: xlable
            }
        };
        var data = [trace1];

        Plotly.newPlot('scatter_' + id, data, layout);
    }

    function renderPloty() {
        $.ajax({
            url: '/dashboard',
            type: 'post',
            dataType: 'json',
            async: false,
            data: {user:'just demo haha', id:87},
            success : function(datas) {
                //<div class="chart wow zoomIn" id="pie_1" ></div>
                $.each(datas, function( i, data ) {
                    $( "#plotly" ).append( "<div class='chart wow zoomIn' id='" + data.type + "_" + data.id +"'>" +
                        "<button type='button' class='btn remove_btn pull-right btn-info btn-sm' value="+data.id+">" +
                        "<span class='glyphicon glyphicon-remove'></span> Rwmove" +
                        "</button>" +
                        "<button type='button' class='btn modify_btn pull-right btn-info btn-sm' value="+data.name+"_"+data.id+">" +
                        "<span class='glyphicon glyphicon-pencil'></span> modify" +
                        "</button>" +
                        " </div>" );
                    /*
                    *
                    * 				<div class="chart wow zoomIn" id="test" >
                     <button type="button" class="btn remove_btn pull-right btn-info btn-sm" value="1">
                     <span class="glyphicon glyphicon-remove"></span> Remove
                     </button>
                     <button type="button" class="btn modify_btn pull-right btn-info btn-sm">
                     <span class="glyphicon glyphicon-pencil"></span> modify
                     </button>
                     </div>
                    *
                    *
                    *
                    * */
                    $("#"+data.type+"_"+data.id).css({top: data.top, left:data.left, width:data.width, height:data.height});

                    $.ajax({
                        url: '/data/' + data.name ,
                        type: 'GET',
                        dataType: 'text',
                        success: function (dataDetails) {
                            dataDetails = eval(dataDetails);
                            var x = [];
                            var y = [];
                            var columns = eval(data.columns);
                            $.each(dataDetails, function( i, dataDetail ) {

                                x.push(dataDetail[columns[0]]);
                                y.push(dataDetail[columns[1]]);
                            });

                            if(data.type == 'bar'){
                                barChart(data.id, x, y, data.name, columns[0], columns[1]);
                            }
                            else if(data.type == 'line'){
                                lineChart(data.id, x, y, data.name, columns[0], columns[1]);
                            }
                            else if(data.type == 'scatter'){
                                scatterChart(data.id, x, y, data.name, columns[0], columns[1]);
                            }
                        }
                    });
                });

                $(".chart").draggable({
                    containment: "parent",
                    start: function () {
                    },
                    drag: function (event, ui) {
                    },
                    stop: function (event, ui) {
                        var position = {
                            top: ui.position.top,
                            left: ui.position.left
                        };
                        var id = $(this)[0].id.split('_')[1];

                         $.ajax({
                         url: '/drag',
                         type: 'post',
                         dataType: 'json',
                         data: {position:position, id:id}
                         });

                    },
                    cancel: ".coor"
                });

            }
        });
    }

    renderPloty();

    $( ".remove_btn" ).click(function() {
        $.ajax({
            url: '/api/dataVisual/',
            type: 'delete',
            dataType: 'json',
            async: false,
            data: {id: $(this).val()},
            success: function (datas) {

            }
        });
        location.reload();
        //console.log($(this).val());
    });

    $( ".modify_btn" ).click(function() {
        var name = $(this).val().split('_')[0];
        var id = $(this).val().split('_')[1];
        window.location.href = '/dataVisual/' + name + '?mode=modify&id=' + id;
    });



    var data = [
        {
            x: ['giraffes', 'orangutans', 'monkeys'],
            y: [20, 14, 23],
            type: 'bar'
        }
    ];


    //$("#test").css({top: 0, left:0, width:480, height:400});
    //Plotly.newPlot('test', data);
});