
/* This file is licensed under the terms of the BSD 3-Clause License. */

function buttonEventHandler() { "use strict";

    const kleinererWertString  = $("#meinRangeslider_a").val();
    const groessererWertString = $("#meinRangeslider_b").val();

    const kleinererWertInt  = parseInt( kleinererWertString  );
    const groessererWertInt = parseInt( groessererWertString );

    const differenz = groessererWertInt - kleinererWertInt;
    alert("Differenz zwischen den beiden Werten: " + differenz);
}


function onSeiteGeladen() { "use strict";

    $("#button-1").click( buttonEventHandler );
}


$(document).on("pagecreate", onSeiteGeladen);

