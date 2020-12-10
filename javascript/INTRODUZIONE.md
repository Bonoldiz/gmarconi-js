*Negli ultimi tempi i linguaggi di programmazioe hanno messo a disposizione una vastissima gamma di feature per poter essere competitivi in ogni ambito.* 

- [Javascript](#javascript)
  - [Definizione](#definizione)
  - [Struttura](#struttura)
  - [DOM](#dom)
  - [Eventi](#eventi)
    - [Interfaccia](#interfaccia)
    - [Propagazione](#propagazione)
  - [Sintassi del linguaggio](#sintassi-del-linguaggio)
    - [La parola chiave **this**](#la-parola-chiave-this)
    - [strict-mode, come e perchè un must](#strict-mode-come-e-perchè-un-must)

# Javascript

Anno: 1995  (Dec 4 1995 🍰🍰🍰)
Tipizzazione: debole  
Tipo: linguaggio inperpretato  
Implementazione: V8 (Google),etc...  
Encoding: UTF-8  
Documentazione: [MDN](https://developer.mozilla.org/it/docs/Web/JavaScript)

## [Definizione](https://it.wikipedia.org/wiki/JavaScript)
> In informatica JavaScript è un linguaggio di programmazione orientato agli oggetti e agli eventi, comunemente utilizzato nella programmazione Web lato client (esteso poi anche al lato server) per la creazione, in siti web e applicazioni web, di effetti dinamici interattivi tramite funzioni di script invocate da eventi innescati a loro volta in vari modi dall'utente sulla pagina web in uso (mouse, tastiera, caricamento della pagina ecc...).

Qui la [bibbia di javascipt](https://developer.mozilla.org/it/docs/Web/JavaScript)

Javascipt è un caso particolare, infatti con il termine "Javascipt" non si elude a java tantomeno a qualcosa che ha a che fare con un ambiente desktop. 
La parte più coerente è "script", infatti si tratta di un linguaggio di (scripting)[https://it.wikipedia.org/wiki/Linguaggio_di_scripting], ovvero automazione e manipolazione del **DOM**.  

## Struttura
L'ambiente di esecuzione è il **Browser**, infatti il codice viene eseguito da un **Interprete** (V8 nel caso di google Chrome).

Quando si parla di JS si intende l'implementazione delle specifiche ECMA (ente di standardizzazione internazionale) che definiscono le linee guida su coma inserire, testare, implementare e deprecare all'interno del linguaggio.

## [DOM](https://developer.mozilla.org/it/docs/Web/API/Document_Object_Model/Introduzione)
![](https://upload.wikimedia.org/wikipedia/commons/5/5a/DOM-model.svg)

> Il Document Object Model (DOM) è una interfaccia di programmazione per documenti HTML e XML. Rappresenta la pagina in modo che i programmi possano modificare la struttura, lo stile e il contenuto del documento. Il DOM rappresenta il documento come nodi e oggetti. In questo modo, i linguaggi di programmazione possono connettersi alla pagina.

Qui un [esempio lampante](https://developer.mozilla.org/it/docs/Web/API/Document_object_model/How_to_create_a_DOM_tree)

Si tratta di una struttura ad albero, quindi ha bisogno di un nodo "radice" (in informatica gli alberi sono al contrario, con radice in alto e foglie in basso).

Gran parte del lavoro quando si parla di sviluppo in Javascipt consiste nel modificare, eliminare, creare nodi di questo albero; il DOM in combinazione con il CSSOM (CSS Object Model) provvederà alla visualizzazione e al rendering vero e proprio della pagina.

Il DOM è responsabile della gestione degli **Eventi**, questi sono delle reazioni causati da certe azioni compiute sullo stesso.

## [Eventi](https://developer.mozilla.org/en-US/docs/Web/Events)

Il DOM propaga degli eventi che non sono altro che delle notifiche riguardanti tutto quello che accade (o quasi).
Infatti non riguardano solamente cosa succede nel documento, notificano riguardo la rete, caricamenti di media, downloads e molte altre cose. 

### [Interfaccia](https://developer.mozilla.org/en-US/docs/Web/API/Event)  

Gli eventi sono estensioni dell'interfaccia base *Event* che definisce le funzionalita di base che ogni evento deve avere (non è detto che siano tutte implementate).


### [Propagazione](https://dmitripavlutin.com/javascript-event-delegation/)  

Si parla di *propagazione* per indicare il ciclo di vita di un evento.  
La logica di questi routa attorno al concetto di **Emitter** (l'elemento che emette l'evento) e di **Listener** (il pezzo (o pezzi) di codice dedicato alla gestione dell'evento (handling)).
Entrambi sono registrati sul nodo di riferimento.


```html
<button id="bottone"></button>
```
```js
document.getElementById("bottone").addEventListener(
    "click",
    (event) => {
        console.log("Sono stato cliccato!");
    }
)
```

> Nell'esempio viene registrato un *listener* all'evento **click**, con la funzione di gestione dello stesso.

## Sintassi del linguaggio

Il linguaggio è **case-sensitive**, imperativo, event-driven e funzionale.
La tipizazione è debole (duck typing).  
Per il resto controllare [qui](https://en.wikipedia.org/wiki/JavaScript#Syntax).


### La parola chiave **this** 
Vedi [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

### strict-mode, come e perchè un must
Vedi [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)


