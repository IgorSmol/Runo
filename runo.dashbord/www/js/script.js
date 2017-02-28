$( function() {
    $('#datepicker').datepicker({
        showOn: "button",
        buttonImage: "img/date-select.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    $('#datepicker').datepicker('setDate', '4/22/2016');
    
    $('.burg-btn').on('click', function(){
        $('body').toggleClass('no-menu');
    });
    
    $('.history-wrap .head').on('click', function(){
        $(this).toggleClass('open').siblings('.body').slideToggle();
    });
    
    $('input[name=amount-mony]').on('click', function(){
        $('.mony-type').removeClass('active');
        $(this).parent().addClass('active');
        $('#amountCredit').val($(this).val());
    });
    
    $('.modal-to-show').on('click', function(){
        $('body').addClass('open-cw-modal');
        $($(this).attr('data-modal')).addClass('open');
        return false;
    });
    
    $('.btn-close-modal').on('click', function(){
        $('body').removeClass('open-cw-modal');
        $('.modal-wrap').removeClass('open');
    });
    
    var ctx = $('#canvas');
    var ctx2 = $('#canvas2');
    var ctx3 = $('#canvas3');
    
    var data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sum"],
        datasets: [
            {
                label: "Android",
                backgroundColor: 'rgba(150,207,255,0.5)',
                borderColor: 'rgba(150,207,255,0.5)',
                borderWidth: 1,
                data: [160, 180, 130, 160, 215, 130, 170],
            },{
                label: "iOS",
                backgroundColor: 'rgba(252,215,139,0.5)',
                borderColor: 'rgba(252,215,139,0.5)',
                borderWidth: 1,
                data: [120, 195, 145, 105, 150, 150, 140],
            }
        ]
    };
    
    var options = {
        scales: {
            xAxes: [{
                stacked: false
            }],
            yAxes: [{
                stacked: false,
                ticks: {
                    max: 250,
                    min: 0,
                    stepSize: 50
                }
            }]
        }
    };
    
    if(ctx.length){
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    }
    
    var data2 = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sum"],
        datasets: [
            {
                label: "Android",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(150,207,255,0.5)",
                borderColor: "rgba(150,207,255,0)",
                borderWidth: 0,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(150,207,255,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(150,207,255,1)",
                pointHoverBorderColor: "rgba(150,207,255,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                data: [95, 140, 110, 165, 175, 145, 145],
            },{
                label: "iOS",
                fill: true,
                lineTension: 0,
                backgroundColor: "rgba(252,215,139,0.5)",
                borderColor: "rgba(252,215,139,0)",
                borderWidth: 0,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(252,215,139,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(252,215,139,1)",
                pointHoverBorderColor: "rgba(252,215,139,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 0,
                data: [140, 120, 130, 200, 100, 175, 160],
            }
        ]
    };
    
    if(ctx2.length){
        new Chart(ctx2, {
            type: 'line',
            data: data2,
            options: options
        });
    }
    
    var data3 = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sum"],
        datasets: [
            {
                label: "Android",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(150,207,255,0.5)",
                borderColor: "rgba(150,207,255,0.8)",
                borderWidth: 1,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointHoverBackgroundColor: "rgba(0,63,116,1)",
                pointBorderColor: "rgba(255,255,255,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(0,63,116,1)",
                pointHoverBorderColor: "rgba(255,255,255,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                data: [95, 145, 105, 160, 175, 145, 145],
            },{
                label: "iOS",
                fill: true,
                lineTension: 0.5,
                backgroundColor: "rgba(252,215,139,0.5)",
                borderColor: "rgba(252,215,139,0.8)",
                borderWidth: 1,
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBackgroundColor: "rgba(140,148,128,1)",
                pointBorderColor: "rgba(255,255,255,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 3,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(140,148,128,1)",
                pointHoverBorderColor: "rgba(255,255,255,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 2,
                data: [80, 115, 80, 200, 100, 175, 160],
            }
        ]
    };
    
    if(ctx3.length){
        new Chart(ctx3, {
            type: 'line',
            data: data3,
            options: options
        });
    }
    
    
} );

