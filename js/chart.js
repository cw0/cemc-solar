/**
 * Created by cwilson on 1/2/14.
 */
//load api
google.load('visualization', '1.0', {'packages':['corechart']});
google.setOnLoadCallback(drawKwhDailyChart);

//callback function for drawing the chart
function drawKwhChart() {
    var start_year = $("#year-select-form").val();
    var start_month = $("#month-select-form").val();
    var start_day = $("#day-select-form").val();

    var end_year = $("#end-year-select-form").val();
    var end_month = $("#end-month-select-form").val();
    var end_day = $("#end-day-select-form").val();

    if (start_day.length == 1) {
        start_day = "0" + start_day;
    } if (start_month.length == 1) {
        start_month = "0" + start_month;
    } if (end_day.length == 1) {
        end_day = "0" + end_day;
    } if (end_month.length == 1) {
        end_month = "0" + end_month;
    }

    var start_date = start_year + "-" + start_month + "-" + start_day;
    var end_date = end_year + "-" + end_month + "-" + end_day;

    //create data table
    var kwhData = $.ajax({
        url: "kwh_data.php",
        type:"POST",
        data: {
            'start_date' : start_date,
            'end_date' : end_date
        },
        dataType: "json",
        async: false
    }).responseText;
    var data = new google.visualization.DataTable(kwhData);
    //set options
    var options = {
        backgroundColor: { fill: '#EEFFDE' },
        colors: ['forestgreen'],
        title: 'Total kWh generated by date',
        vAxis: {
            title: 'kWh Generated',
            minValue: 0
        },
        height: 500
    };
    //draw chart w/ options
    var chart =  new google.visualization.AreaChart(document.getElementById('kwh_div'));
    chart.draw(data, options);
}
function drawKwhDailyChart() {
    var start_year = $("#year-select-form").val();
    var start_month = $("#month-select-form").val();
    var start_day = $("#day-select-form").val();

    var end_year = $("#end-year-select-form").val();
    var end_month = $("#end-month-select-form").val();
    var end_day = $("#end-day-select-form").val();

    if (start_day.length == 1) {
        start_day = "0" + start_day;
    } if (start_month.length == 1) {
        start_month = "0" + start_month;
    } if (end_day.length == 1) {
        end_day = "0" + end_day;
    } if (end_month.length == 1) {
        end_month = "0" + end_month;
    }

    var start_date = start_year + "-" + start_month + "-" + start_day;
    var end_date = end_year + "-" + end_month + "-" + end_day;

    //create data table
    var kwhDailyData = $.ajax({
        url:"kwh_daily_data.php",
        type:"POST",
        data: {
            'start_date' : start_date,
            'end_date' : end_date
        },
        dataType:"json",
        async:false
    }).responseText;
    var data = new google.visualization.DataTable(kwhDailyData);
    data.addColumn('number', 'Estimated kWh (used when an exact reading is unavailable)');
    //set options
    var options = {
        backgroundColor: { fill: '#EEFFDE' },
        colors: ['forestgreen', 'black'],
        title: 'Daily kWh generated',
        vAxis: {
            title: 'kWh Generated:',
            minValue: 0
        },
        height: 500
    };
    //draw chart w/ options
    var chart =  new google.visualization.ColumnChart(document.getElementById('kwh_div'));
    chart.draw(data, options);

}
function drawPayoffDailyChart() {
    var start_year = $("#year-select-form").val();
    var start_month = $("#month-select-form").val();
    var start_day = $("#day-select-form").val();

    var end_year = $("#end-year-select-form").val();
    var end_month = $("#end-month-select-form").val();
    var end_day = $("#end-day-select-form").val();

    if (start_day.length == 1) {
        start_day = "0" + start_day;
    } if (start_month.length == 1) {
        start_month = "0" + start_month;
    } if (end_day.length == 1) {
        end_day = "0" + end_day;
    } if (end_month.length == 1) {
        end_month = "0" + end_month;
    }

    var start_date = start_year + "-" + start_month + "-" + start_day;
    var end_date = end_year + "-" + end_month + "-" + end_day;

    //create data table
    var payoffDailyData = $.ajax({
        url:"payoff_daily_data.php",
        type:"POST",
        data: {
            'start_date' : start_date,
            'end_date' : end_date
        },
        dataType:"json",
        async:false
    }).responseText;
    var data = new google.visualization.DataTable(payoffDailyData);
    data.addColumn('number', 'Estimated payoff (used when an exact reading is unavailable)');
    //set options
    var options = {
        backgroundColor: { fill: '#EEFFDE' },
        colors: ['forestgreen', 'black'],
        title: 'Daily payoff generated',
        vAxis: {
            title: 'Payoff Generated:', minValue: 0
        },
        height: 500
    };
    //draw chart w/ options
    var chart =  new google.visualization.ColumnChart(document.getElementById('kwh_div'));
    chart.draw(data, options);
}