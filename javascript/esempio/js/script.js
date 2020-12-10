'use strict';
/**
 * In questo modo  JQuery aggiunge delle funzionalità all'elemento preso come argomento
 * 
 * Classico event listener sull'evento mousemove
 */
$(document)
    .mousemove(
        (event) => {
            // Prendo l'elemento con ID unclickable e lo posizione sotto il pointer
            $('#unclickable').css({ top: event.pageY + 30, left: event.pageX + 70 });
        }
    )


// Exploit : $("#unclickable").get()[0].dispatchEvent( new MouseEvent("click"))
$("#unclickable").click(() => {
    alert("Ce l'hai fatta!");
})
/**
 * Aggiungo a document un handler all'evento ready
 * In questo modo il pezzo di codice contenuto nell'handler verrà eseguito
 * quando il documento sarà caricato 
 */
$(document)
    .ready(
        (event) => {
            console.log("Il documento è caricato!")
            $('#unclickable').css({ position: "absolute", transition: "all 0.05s" })
        }
    )