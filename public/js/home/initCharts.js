// JavaScript Document
FusionCharts.setCurrentRenderer('JavaScript');
//Formulario
var form = $('#form');

var Chart_1 = new FusionCharts( "FusionCharts/Column3D.swf", "chart1", "100%", "300", "0" );
var Chart_2 = new FusionCharts( "FusionCharts/Column3D.swf", "chart2", "100%", "300", "0" );
var Chart_3 = new FusionCharts( "FusionCharts/Pie3D.swf", "chart3", "100%", "300", "0" );
var Chart_4 = new FusionCharts( "FusionCharts/Pie3D.swf", "chart4", "100%", "300", "0" );
var Chart_5 = new FusionCharts( "FusionCharts/Column3D.swf", "chart5", "100%", "300", "0" );
var Chart_6 = new FusionCharts( "FusionCharts/Column3D.swf", "chart6", "100%", "300", "0" );
var Chart_7 = new FusionCharts( "FusionCharts/Column3D.swf", "chart7", "100%", "300", "0" );

function chart1_top10()
{
    var loading=document.getElementById("chart_1");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart1";
    var data= { descarga: "1", titulo: "Top 10 Palabras mas buscadas", subtitulo: "Google", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_1.setXMLData(result.xml);
        Chart_1.render("chart_1");
    }).fail( function(result) {
       document.getElementById("chart_1").innerHTML="Error al Cargar el Gráfico";
    });
}

function chart2_top10()
{
    var loading=document.getElementById("chart_2");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart2";
    var data= { descarga: "1", titulo: "Top 10 Palabras mas buscadas", subtitulo: "Youtube", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_2.setXMLData(result.xml);
        Chart_2.render("chart_2");
    }).fail( function(result) {
       document.getElementById("chart_2").innerHTML="Error al Cargar el Gráfico";
    });
}

function chart3_comparison()
{
    var loading=document.getElementById("chart_3");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart3";
    var data= { descarga: "1", titulo: "Comparación Tipos Expedientes", subtitulo: " ", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_3.setXMLData(result.xml);
        Chart_3.render("chart_3");
    }).fail( function(result) {
       document.getElementById("chart_3").innerHTML="Error al Cargar el Gráfico";
    });
}

function chart4_comparison()
{
    var loading=document.getElementById("chart_4");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart4";
    var data= { descarga: "1", titulo: "Comparación de Radicación", subtitulo: " ", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_4.setXMLData(result.xml);
        Chart_4.render("chart_4");
    }).fail( function(result) {
       document.getElementById("chart_4").innerHTML="Error al Cargar el Gráfico";
    });
}

function chart5_top10()
{
    var loading=document.getElementById("chart_5");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart5";
    var data= { descarga: "1", titulo: "Top 10 Palabras mas buscadas", subtitulo: "Google", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_5.setXMLData(result.xml);
        Chart_5.render("chart_5");
    }).fail( function(result) {
       document.getElementById("chart_5").innerHTML="Error al Cargar el Gráfico";
    });
}

function chart6_top10()
{
    var loading=document.getElementById("chart_6");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart6";
    var data= { descarga: "1", titulo: "Top 10 Palabras mas buscadas", subtitulo: "Google", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_6.setXMLData(result.xml);
        Chart_6.render("chart_6");
    }).fail( function(result) {
       document.getElementById("chart_6").innerHTML="Error al Cargar el Gráfico";
    });
}

function chart7_top10()
{
    var loading=document.getElementById("chart_7");
    loading.innerHTML="<div style='padding-left:45%; padding-top:18%'><img src='images/loading.gif'></div>";

    var url=form.attr("action")+"/chart1";
    var data= { descarga: "1", titulo: "Top 10 Palabras mas buscadas", subtitulo: "Google", ejeX: "Fuente Sivef", ejeY: "Nº Búsquedas", mostral_label: "1", mostrar_valores: "1", num_prefijo: "", leyenda: "0", pos_leyenda: ""};

    $.post(url, data, function(result){
        Chart_7.setXMLData(result.xml);
        Chart_7.render("chart_7");
    }).fail( function(result) {
       document.getElementById("chart_7").innerHTML="Error al Cargar el Gráfico";
    });
}
