
/* This file is licensed under the terms of the BSD 3-Clause License. */

/*
 * Fügt der Liste ein neues Element (String-Eintrag) 
 * hinzu.
 *
 * Methode "append()"  von jQuery-Objekt  : http://api.jquery.com/append/
 * Methode "prepend()" von jQuery-Objekt  : http://api.jquery.com/prepend/
 * Methode "refresh()" von Listview-Widget: http://api.jquerymobile.com/listview/#method-refresh
 */
function trageInListeEin(eintragString) { "use strict";
       
    const liElement = `<li>${eintragString}</li>`;
    $("#dieListe").append(liElement);    // am Ende der Liste einfügen
    //$("#dieListe").prepend(liElement); // am Beginn der Liste einfügen
    $("#dieListe").listview("refresh");
    console.log("Neues Element in Liste eingefügt: " + liElement);
}


/*
 * Event-Handler-Funktion für den Button, mit dem ein neuer String
 * der Liste hinzugefügt wird.
 *
 * Methode "val()" von jQuery-Objekt: http://api.jquery.com/val/
 */
function onButtonNeuerListeneintrag() { "use strict";

    const neuerEintrag = $("#inputName").val();
    trageInListeEin(neuerEintrag);
    
    // Eingabefeld löschen
    $("#inputName").val("");
}


/*
 * Obersten Listen-Eintrag löschen; wenn die Liste leer ist,
 * dann wird eine Warnung auf die Console geschrieben.
 *
 * Child-Selektor: http://api.jquery.com/child-selector/
 * Eigenschaft "length" von jQuery-Objekt: http://api.jquery.com/length/
 * Methode "first()"    von jQuery-Objekt: http://api.jquery.com/first/ 
 * Methode "remove()"   von jQuery-Objekt: http://api.jquery.com/remove/
 *
 * Für Kurzfassung:
 * jQuery-Selektor ":first-Child": http://api.jquery.com/first-child-selector/
 */
function onButtonLoescheListeneintrag() { "use strict";

    const listenElemente = $("#dieListe > li"); // ">" ist Child-Selektor
    const anzahl = listenElemente.length;
    console.log(`Anzahl Einträge in Liste: ${anzahl}`);
    if (anzahl > 0) {
        const erstesListElement = listenElemente.first();
        erstesListElement.remove();
    } else {
        console.log("Liste ist schon leer.");
    }
    
    // Kurzform (ohne Warnung)
    //$("#dieListe > li:first-child").remove();
}


/*
 * Event-Handler für "Datei fertig geladen".
 * Setzt Event-Handler-Funktionen für die beiden Buttons.
 *
 * Methode "attr()" von jQuery-Objekt: http://api.jquery.com/attr/
 */
function onSeiteGeladen() { "use strict";

    $("#buttonGruss"   ).click( onButtonNeuerListeneintrag   );
    $("#buttonLoeschen").click( onButtonLoescheListeneintrag );

    trageInListeEin("Beispiel-Eintrag 1");
    trageInListeEin("Beispiel-Eintrag 2");
}


$(document).on("pagecreate", onSeiteGeladen);
