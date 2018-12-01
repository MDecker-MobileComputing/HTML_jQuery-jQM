
/* This file is licensed under the terms of the BSD 3-Clause License. */

/*
 * Funktion zum eigentlichen Erzeugen des zufälligen Passworts.
 * Das erzeugte Passwort wird als String zurückgegeben.
 * Diese Funktion enthält keinen jQuery-spezifischen Code.
 */
function passwortErzeugen(zeichenVorrat, laenge) { "use strict";
    
    const anzZeichen = zeichenVorrat.length;
    
    let passwortString = "";
    for (let i = 1; i <= laenge; i++) {
        
        // Zufälliges Zeichen aus dem String "zeichenVorrat" auswählen
        let zufallsIndex   = Math.floor(Math.random() * anzZeichen);
        let zufallsZeichen = zeichenVorrat.charAt(zufallsIndex);
        
        passwortString += zufallsZeichen;
    }
   
    return passwortString;
}


/*
 * Event-Handler-Funktion für Button.
 *
 * Für Auslesen von Radio-Button-Zustände wird prop() statt
 * attr() verwendet, siehe auch http://api.jquery.com/prop/ 
 */
function onButtonErzeugePasswort() { "use strict";
            
    $("#textareaPasswort").val(""); // altes Passwort ggf. löschen
            
    // Eingaben von Nutzer auslesen
    const anzZeichenString = $("#sliderAnzahlZeichen").val();
    const anzZeichenInt    = parseInt( anzZeichenString );
    
    let zeichenVorrat = "";
    if ( $("#radiogruppe_1a").prop("checked") === true ) {
        
        zeichenVorrat = "ABCDEFGHJKLMNPQRSTVXYZ";
        
    } else if ( $("#radiogruppe_1b").prop("checked") === true ) {
    
        zeichenVorrat = "ABCDEFGHJKLMNPQRSTVXYZ123456789";
        // Keine "0" (Null), wegen Verwechselungsgefahr mit Buchstabe "O"
        
    } else {
    
        zeichenVorrat = "ABCDEFGHJKLMNPQRSTVXYZ123456789+-*/=?!.,=:§$%&()[]";
    }
    
    // Eigentliche Passwort-Erzeugung
    const passwort = passwortErzeugen(zeichenVorrat, anzZeichenInt);
    $("#textareaPasswort").val(passwort, passwort);    
}


/*
 * Funktion wird aufgerufen, sobald alle DOM-Elemente
 * zur Verfügung stehen.
 */
function onSeiteGeladen() { "use strict";
    $("#buttonPasswordErzeugen").click( onButtonErzeugePasswort );
}

$(document).on("pagecreate", onSeiteGeladen);
