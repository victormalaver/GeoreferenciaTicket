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
    // alert(1);
    var iconAlmacen = L.icon({
        iconUrl: 'almacen2.png',
        // iconRetinaUrl: 'my-icon@2x.png',
        // iconSize: [38, 95],
        iconAnchor: [15, 38], //X,Y
        popupAnchor: [0, -35],
        // // shadowUrl: 'my-icon-shadow.png',
        // shadowRetinaUrl: 'my-icon-shadow@2x.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });

    var iconMarker = L.icon({
        iconUrl: 'marker2.png',
        // iconRetinaUrl: 'my-icon@2x.png',
        // iconSize: [38, 95],
        iconAnchor: [15, 38], //X,Y
        popupAnchor: [0, -35],
        // // shadowUrl: 'my-icon-shadow.png',
        // shadowRetinaUrl: 'my-icon-shadow@2x.png',
        // shadowSize: [68, 95],
        // shadowAnchor: [22, 94]
    });



    map = L.map('map', {
        center: [-12.11391, -77.03933],
        zoom: 10,
    });

    L.tileLayer('http://{s}.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
        attribution: "Map: Tiles Courtesy of MapQuest (OpenStreetMap, CC-BY-SA)",
        subdomains: ["otile1", "otile2", "otile3", "otile4"],
        // maxZoom: 12,
        // minZoom: 2
    }).addTo(map);

    var markers = new L.MarkerClusterGroup();
    // markers.addLayer(new L.Marker([1, 1]));

    markers.addTo(map);

    // expect getLayers().length to be 1, which will add 
    // another marker, but it does not happen
    if (markers.getLayers().length !== 1) {


        markers.addLayer(new L.Marker([-12.10717380, -77.03446570], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10715030, -77.03443360], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712780, -77.03441050], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03444470], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712390, -77.03440990], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03445420], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10713000, -77.03441760], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712940, -77.03441560], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10716850, -77.03446960], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10758740, -77.03539700], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10627070, -77.03395750], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629410, -77.03525950], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630490, -77.03531250], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629840, -77.03528860], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629300, -77.03530430], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630950, -77.03534350], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));




        markers.addLayer(new L.Marker([-12.10717380, -77.03446570], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10715030, -77.03443360], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712780, -77.03441050], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03444470], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712390, -77.03440990], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03445420], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10713000, -77.03441760], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712940, -77.03441560], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10716850, -77.03446960], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10758740, -77.03539700], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10627070, -77.03395750], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629410, -77.03525950], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630490, -77.03531250], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629840, -77.03528860], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629300, -77.03530430], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630950, -77.03534350], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));



        markers.addLayer(new L.Marker([-12.10717380, -77.03446570], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10715030, -77.03443360], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712780, -77.03441050], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03444470], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712390, -77.03440990], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03445420], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10713000, -77.03441760], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712940, -77.03441560], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10716850, -77.03446960], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10758740, -77.03539700], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10627070, -77.03395750], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629410, -77.03525950], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630490, -77.03531250], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629840, -77.03528860], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629300, -77.03530430], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630950, -77.03534350], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10717380, -77.03446570], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10715030, -77.03443360], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712780, -77.03441050], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03444470], {
            icon: iconAlmacen
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712390, -77.03440990], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10714490, -77.03445420], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10713000, -77.03441760], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10712940, -77.03441560], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10716850, -77.03446960], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10530840, -77.03899540], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10758740, -77.03539700], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10685380, -77.03467730], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10627070, -77.03395750], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629410, -77.03525950], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630490, -77.03531250], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629840, -77.03528860], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10629300, -77.03530430], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
        markers.addLayer(new L.Marker([-12.10630950, -77.03534350], {
            icon: iconMarker
        }).bindPopup('A pretty CSS3 popup.<br> Easily customizable.'));
    }
}

function resetParametros() {
    $("#nombreDespachador").html("N/A");
    $("#ultimaUbicacionYHora").html("N/A");
}

function opcionesCargaMapa() {
    $("#controlesMapa").toggle();
}

// END_CUSTOM_CODE_funcionalidad06