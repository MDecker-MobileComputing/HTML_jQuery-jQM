
/* This file is licensed under the terms of the BSD 3-Clause License. */

/*
 * Event-Handler für Button 
 */
function onButtonBerechnen() { "use strict";
        
    // Auswertung der eingegebenen Kilometer
    let eingabeKilometer = $("#inputKilometer").val();
    eingabeKilometer = parseFloat(eingabeKilometer); // Umwandlung von String nach Number
    
    let meterProMeile = 0.0;

    // Auswertung der gewählten Zieleinheit
    const zieleinheit = $("#inputZieleinheit").val();
    switch ( zieleinheit ) {
        case "MeileEnglisch":
            meterProMeile = 1.609344;
        break;
        
        case "MeileNautisch":
            meterProMeile = 1.852;
        break;
        
        case "MeileChinesisch":
            meterProMeile = 0.5;
        break;
        
        default:
            console.log("Interner Fehler: Unerwartete Auswahl in ComboBox.");
            return;
    }
    
    const ergebnis         = eingabeKilometer / meterProMeile;
    const ergebnisGerundet = ergebnis.toFixed(1);
        
    $("#ergebnis").text(`${eingabeKilometer} Kilometer entsprechen ${ergebnisGerundet} Meilen.`);
}


// Event-Handler für "pagecreate"-Event mit anonymer Funktion.
$(document).on("pagecreate", function() { "use strict";
    
    $("#buttonBerechnen").click(function(){
        onButtonBerechnen();
    }); 
    console.log("Button-Event-Handler wurde registriert.");
});