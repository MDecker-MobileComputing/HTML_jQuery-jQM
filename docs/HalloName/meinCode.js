
/* This file is licensed under the terms of the BSD 3-Clause License. */

/*
 * Event-Handler für Button
 */
function sageHallo() {
    let nameEingegeben = $("#inputName").val();
    
    nameEingegeben = nameEingegeben.trim();
    console.log(`Name eingegeben: "${nameEingegeben}"`);

    if (nameEingegeben.length === 0) {
        //alert("Fehler: Kein Name eingegeben!");
        
          $("#popupDialogFehler_leereEingabe").popup("open");
        
    } else {
        
        // Ergebnis auf Ergebnis-Seite darstellen
        $("#ergebnis").text("Hallo " + nameEingegeben + "!");        
        
        // Zur Ergebnis-Seite navigieren
        $("body").pagecontainer("change", "#ergebnisSeite");
    }
}


/*
 * Event-Handler-Funktion; wird ausgeführt, wenn Seite
 * komplett geladen.
 */
function onSeiteGeladen() {
    $("#buttonGruss").attr("onclick", "sageHallo();");
}


$(document).on("pagecreate", onSeiteGeladen);