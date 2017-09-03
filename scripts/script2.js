function currencyConventer(){
	var eurQ = prompt("Please, enter the amount of cass in euros", 100);
	
	var dolQ = prompt("Please, enter the amount of cash in dollars", 100);

    if (isNaN(eurQ) || isNaN(dolQ) || eurQ.match(' ') || dolQ.match(' ') || eurQ.length < 1){
    	alert("Hey, buddy, take another chance. But this time you need to enter the numbers)")}
    	else{
    		theResult();
    	}

    // if (isFinite(eurQ) && isFinite(dolQ) && (eurQ||dolQ!=' ')){
    //     theResult();}
    //     else{
    //         alert("Hey, buddy, take another chance. But this time you need to enter the numbers)")
    //     }
    	
    function theResult(){
    	var eurRate = 30.65;
	    var dolRate = 25.44;
	    var eur_grn = eurQ * eurRate;
	    var dol_grn = dolQ * dolRate;
	    var eur_dol = eurRate / dolRate;
	    alert(eurQ + ' euros are equal ' + eur_grn.toFixed(2) + ' gryvnias, ' + dolQ + ' dollars are equal ' + dol_grn.toFixed(2) + ' gryvnias, one euro is equal ' + eur_dol.toFixed(2) + ' dollars.');
    }
}


// 30.65
// 25.44
