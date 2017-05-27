
// https://plot.ly/javascript/#basic-charts



$(function(){

    function pieChart(id,  x, y){
        var data = [{
            values: [19, 26, 55],
            labels: ['Residential', 'Non-Residential', 'Utility'],
            type: 'pie'
        }];

        var layout = {
            title: 'title'

        };

        Plotly.newPlot('pie_' + id, data, layout);
    }

    function barChart(id, x, y, title){
        var data = [
            {
                x: x,
                y: y,
                type: 'bar'
            }
        ];
        var layout = {
            title: title

        };
        Plotly.newPlot('bar_' + id, data, layout);
    }

    function renderPloty() {
        $.ajax({
            url: '/dashboard',
            type: 'post',
            dataType: 'json',
            data: {user:'just demo haha', id:87},
            success : function(datas) {
                //<div class="chart wow zoomIn" id="pie_1" ></div>
                $.each(datas, function( i, data ) {
                    $( "#plotly" ).append( "<div class='chart wow zoomIn' id='" + data.type + "_" + data.id +"'></div>" );
                    $("#"+data.type+"_"+data.id).css({top: data.top, left:data.left, width:data.width, height:data.height});

                    $.ajax({
                        url: '/data/' + data.name ,
                        type: 'GET',
                        dataType: 'text',
                        success: function (dataDetails) {
                            dataDetails = eval(dataDetails);
                            var x = [];
                            var y = [];
                            $.each(dataDetails, function( i, dataDetail ) {
                                var columns = eval(data.columns);
                                x.push(dataDetail[columns[0]]);
                                y.push(dataDetail[columns[1]]);
                            });
                            if (data.type == 'pie') {
                                pieChart(data.id, x, y);
                            }
                            else if(data.type == 'bar'){
                                barChart(data.id, x, y, data.name);
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

});