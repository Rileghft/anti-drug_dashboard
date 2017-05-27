
// https://plot.ly/javascript/#basic-charts



$(function(){

    function pieChart(id){
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

    function barChart(id){
        var data = [
            {
                x: ['giraffes', 'orangutans', 'monkeys'],
                y: [20, 14, 23],
                type: 'bar'
            }
        ];
        Plotly.newPlot('bar_' + id, data);
    }

    //console.log(datas);
    /*$.each(datas, function( i, data ) {
        $("#"+data.type+"_"+data.id).css({top: data.top, left:data.left, width:data.width, height:data.height});
        if (data.type == 'pie') {
            pieChart(data.id);
        }
        else if(data.type == 'bar'){
            barChart(data.id);
        }
    });*/
    
    $("#pie_1").css({top: 0, left:0, width:480, height:400});
    $("#bar_2").css({top: 0, left:0, width:480, height:400});
    pieChart(1);
    barChart(2);

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
            /*
            $.ajax({
                url: '/drag',
                type: 'post',
                dataType: 'json',
                data: {position:position, id:id}
            });
            */
        },
        cancel: ".coor"
    });

});