//удаление блокировки JS
unlock(vars['$L.file']);

function unlock(resource) {
	var rteReturnValue = new SCDatum();
	var rteNames = new SCDatum();
	rteNames.push("name");		
	var rteValues = new SCDatum();		
	rteValues.setType(8);
	rteValues=system.functions.insert(rteValues, 0, 1, resource);

	system.functions.rtecall("callrad",
									rteReturnValue, 
									"unlock",       //RAD app name
									rteNames, 
									rteValues,
									false);         //false to run in same thread, true to run in new thread		
	return 1;	
}