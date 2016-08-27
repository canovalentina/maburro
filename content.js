walk(document.body);

function walk(node) 
{
    
    var child, next;
    console.log(node);
    console.log(node.classList);

    
    //if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea') {
    //     //!node.classList.contains('ace_editor')){
        //return;
    //}


    switch ( node.nodeType )  
    {
        case 1:  // Element
        case 9:  // Document
        case 11: // Document fragment
            child = node.firstChild;
            while ( child ) 
            {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

function handleText(textNode) 
{
    var v = textNode.nodeValue;
    
    var quotes = [
            "'Vamos a repartir gratuitamente 35 millones de libros y libras para los escolares'",
            "'Así como Cristo multiplicó los penes'",
            "'No dudé ni un milímetro de segundo'", 
            "'El millones y millonas de Bolívar'", 
            "'Las 35 horas del día'",
            "'Entregamos 35 millones de libro y libras'",
            "'Sería un autosuicidio colectivo de la economía del país'",
            "'¿No saben qué son los Gremlin? Un ‘moustrico’ que odia la Navidad'",
            "'Vos no S.O.S Venezuela'",
            "'Se quedó pegado en la Guerra Fría del año 1715'",
            "'Los capitalistas especulan y roban como nosotros'",
            "'Se descubrió una aguja en un panal'",
            "Simón Bolívar quedo huérfano de esposa",
            "'Demasiada coincidencia que maten a alguien y al día siguiente esté muerto'",
            "'A contrapelo de los encuestólogos'",
            "'Decidí crear el despacho del viceministerio para la Suprema Felicidad Social'",
            "'Cristo redentor se hizo carne, se hizo nervio, se hizo verdad en Chávez'",
            "'Se me apareció Chávez como un pajarito'",
    ];

    var quote = quotes[Math.floor(Math.random()*quotes.length)];
    var withQuote =  "Nicolás " + quote + " Maduro"
    v = v.replace(/\bNicolás Maduro\b/g, withQuote);
    v = v.replace(/\bnicolás maduro\b/g, withQuote);
    v = v.replace(/\bNicolas Maduro\b/g, withQuote);
    v = v.replace(/\bnicolas maduro\b/g, withQuote);

    textNode.nodeValue = v;
}
