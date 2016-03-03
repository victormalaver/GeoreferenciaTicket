'use strict';

app.funcionalidad06 = kendo.observable({
    onShow: function () {},
    afterShow: function () {
        getListaDespachadores();
        cargaMapa();
    }
});

// START_CUSTOM_CODE_funcionalidad06
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

//getListaDespachadores -> datos del select tipo de tarea
function getListaDespachadores() {
    $("#txtIdDespachadorF06").kendoDropDownList({
        dataSource: {
            transport: {
                read: {
                    url: WServ + "Operaciones/Despachadores",
                    dataType: "json",
                    type: "get",
                }
            }
        },
        dataTextField: "nomDespachador",
        dataValueField: "idDespachador",
    });
    var currentDate = new Date();
    var timezoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
    var localDate = new Date(currentDate.getTime() - timezoneOffset);

    var localDateISOString = localDate.toISOString().substr(0, 16);
    $("#f06Desde").val(localDateISOString);
    $("#f06Hasta").val(localDateISOString);
}

function cargaMapa() {

}

function cargaPosAlmacenesDespachador() {
    var dropdownlist = $("#txtIdDespachadorF06").data("kendoDropDownList");
    $("#nombreDespachador").html(dropdownlist.dataItem().nomDespachador);

    var idDespachador = dropdownlist.dataItem().idDespachador;
    // console.log(" Almacenes >>> idDespachador: " + idDespachador);
    var fechaIniDateParts = $("#f06Desde").val().split("T");
    fechaIniDateParts[0] = fechaIniDateParts[0].replace(/-/g, "/"); // formato date yyyy/mm/dd
    var strFechaIniDateParts = fechaIniDateParts[0] + " " + fechaIniDateParts[1] + ":00";
    // console.log(" Almacenes >>> fechaIni: " + strFechaIniDateParts);
    var fechaFinDateParts = $("#f06Hasta").val().split("T");
    fechaFinDateParts[0] = fechaFinDateParts[0].replace(/-/g, "/"); // formato date yyyy/mm/dd
    var strFechaFinDateParts = fechaFinDateParts[0] + " " + fechaFinDateParts[1] + ":00";
    // console.log(" Almacenes >>> fechaFin: " + strFechaFinDateParts);

    
    $("#f06mapa").attr("src", "components/funcionalidad06KIKE/mapa.html?WServ="+WServ+"&idDespachador="+idDespachador+"&strFechaIniDateParts="+strFechaIniDateParts+"&strFechaFinDateParts="+strFechaFinDateParts);
    return;

    var dsUbicacionListar = new kendo.data.DataSource({
        transport: {
            read: {
                //url: "http://54.213.238.161/wsAusa/Operaciones/UbicacionListar",
                url: WServ + "Operaciones/UbicacionListar",
                dataType: "json",
                type: "post",
                data: {
                    usuario: idDespachador,
                    fechaIni: strFechaIniDateParts,
                    fechaFin: strFechaFinDateParts,
                }
            }
        }
    });


    // *** TAKE CARE: ubicaciones from hard file .json ***
    // var dsUbicacionListar = new kendo.data.DataSource({
    //     // transport: {
    //         // read: {
    //         //     url: "http://54.213.238.161/geodata/prueba-almacenes-ausa.json",
    //         //     dataType: "json"
    //         // }
    //     // }
    //     data: [{
    //             "LatLong": [-12.10270360, -77.00211410],
    //             "Fecha": "2016-02-12 13:53:09",
    //             "Operacion": 1,
    //             "Info": "<b>Fecha: </b>12-02-2016 <br> <b>Hora: </b>13:53:09 <br> <b>Operacion: </b>1"
    //         },
    //         {
    //             "LatLong": [-12.10270360, -77.09211410],
    //             "Fecha": "2016-02-12 13:53:09",
    //             "Operacion": 3,
    //             "Info": "<b>Fecha: </b>12-02-2016 <br> <b>Hora: </b>12:40:18 <br> <b>Operacion: </b>3"
    //         }
    //    	]
    // });

    dsUbicacionListar.fetch(function () {
        var data = this.data();
        console.log("*** Data Length >>> " + data.length);
        if (data.length > 0) {
            if (parseInt(data[0].Ejecucion) == 1) {
                //Notificaciones
                var notificationElement = $("#notification");
                notificationElement.kendoNotification();
                var notificationWidget = notificationElement.data("kendoNotification");
                notificationWidget.show("Sistema App Movil no funciona correctamente", "error");
                //End
            } else {
                var ultimaUbicacionDateParts = data[0].Fecha.split(" ");
                var strDateParts = ultimaUbicacionDateParts[0].split("-");
                var strUltimaUbicacionDateParts = strDateParts[2] + "/" + strDateParts[1] + "/" + strDateParts[0] + " " + ultimaUbicacionDateParts[1];
                // console.log("Ultima ubicacion DP >>> "+strUltimaUbicacionDateParts);
                var dtUltimaUbicacionDateParts = new Date(strUltimaUbicacionDateParts);
                var strGetDate = "";
                if (dtUltimaUbicacionDateParts.getDate() < 10) {
                    strGetDate = "0" + dtUltimaUbicacionDateParts.getDate();
                } else {
                    strGetDate = dtUltimaUbicacionDateParts.getDate();
                }
                $("#ultimaUbicacionYHora").html(
                    strGetDate + "-" +
                    (dtUltimaUbicacionDateParts.getMonth() + 1) + "-" +
                    dtUltimaUbicacionDateParts.getFullYear() + " " +
                    dtUltimaUbicacionDateParts.getHours() + ":" +
                    dtUltimaUbicacionDateParts.getMinutes()
                );

                var arrayPosDespachador = [];
                // console.log("JSON >>> str: "+JSON.stringify(arrayPosDespachador));
                var ds_HC_UbicacionListar = new kendo.data.DataSource({
                    // data: JSON.stringify(arrayPosDespachador)
                    data: arrayPosDespachador
                });

                // Success case we find locations for despachador
                $("#mapDespachadores").kendoMap({
                    center: [-12.11391, -77.03933],
                    zoom: 10,
                    layers: [
                        {
                            type: "tile",
                            urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                            subdomains: ["a", "b", "c"],
                        },
                        {
                            //Layer for positions Ubicacionen despachador
                            type: "marker",
                            dataSource: dsUbicacionListar, //ds_HC_UbicacionListar,
                            locationField: "LatLong",
                            titleField: "Info",
                            shape: "pin",
                        },
                        {
                            //Layer for positions AlmacenesListar
                            type: "marker",
                            dataSource: ds_HC_AlmacenesListar,
                            locationField: "LatLong",
                            titleField: "InfoAlmacen",
                            shape: "pin-marker",
                        },

                    ],
                });
                // Insert here the code to add the almacenes positions on the map read from WS AlmacenesListar START


                var dsAlmacenesListar = new kendo.data.DataSource({
                    transport: {
                        read: {
                            //url: "http://54.213.238.161/wsAusa/Operaciones/AlmacenesListar",
                            url: WServ + "Operaciones/AlmacenesListar",
                            dataType: "json",
                            type: "post"
                        }
                    }
                });

                var ds_HC_AlmacenesListar;

                dsAlmacenesListar.fetch(function () {
                    var data = this.data();
                    if (data.length > 0) {
                        var arrayPosAlmacenes = [];
                        for (var i = 0; i < dsAlmacenesListar.total(); i++) {
                            arrayPosAlmacenes[i] = data[i];
                        }
                        // console.log("JSON >>> str: "+JSON.stringify(arrayPosAlmacenes));
                        ds_HC_AlmacenesListar = new kendo.data.DataSource({
                            data: arrayPosAlmacenes
                        });
                        var map = $("#mapDespachadores").data("kendoMap");
                        var layerTarget = map.layers[2];
                        layerTarget.setDataSource(ds_HC_AlmacenesListar);
                    }
                });

            }
        } else {
            // Failure case NO locations for despachador
            $("#mapDespachadores").kendoMap({
                center: [-12.11391, -77.03933],
                zoom: 10,
                layers: [
                    {
                        type: "tile",
                        urlTemplate: "http://#= subdomain #.tile.openstreetmap.org/#= zoom #/#= x #/#= y #.png",
                        subdomains: ["a", "b", "c"],
                 }],
            });
            $("#ultimaUbicacionYHora").html("N/A");
            $("#funcionalidad06PopUp").data("kendoMobileModalView").open();
        }
        console.log("*** END Data Length");
    });

    $("#controlesMapa").toggle();
}

function resetParametros() {
    $("#nombreDespachador").html("N/A");
    $("#ultimaUbicacionYHora").html("N/A");
}

function opcionesCargaMapa() {
    $("#controlesMapa").toggle();
}

// END_CUSTOM_CODE_funcionalidad06