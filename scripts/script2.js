function currencyConventer(){
	var eurQ = prompt("Please, the quantity of cass in euros", 100);
	var dolQ = prompt("Please, the quantity of cass in dollars", 100);
	var eurRate = 30.65;
	var dolRate = 25.44;
	var eur_grn = eurQ * eurRate;
	var dol_grn = dolQ * dolRate;
	var eur_dol = eurRate / dolRate;
	alert(eurQ + ' euros are equal ' + eur_grn.toFixed(2) + ' gryvnias, ' + dolQ + ' dollars are equal ' + dol_grn.toFixed(2) + ' gryvnias, one euro is equal ' + eur_dol.toFixed(2) + ' dollars.');
}

// 30.65
// 25.44