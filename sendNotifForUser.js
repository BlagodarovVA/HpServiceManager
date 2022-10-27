//отправка нотификации, если проставлена галка - показать пользователю
if (record["cust.visible"] && vars["$cm.activity"] != "" && vars["$cm.update"] != "") {
	vars.$G_update_for_user = true;
	var screlation = new SCFile("screlation");
	var screlation_rc = screlation.doSelect('source="'+record["number"]+'"');
	while(screlation_rc == RC_SUCCESS) {
		var depend_record = new SCFile("cm3r");
		var depend_record_rc = depend_record.doSelect('number="'+screlation["depend"]+'"');
		
		if (depend_record_rc == RC_SUCCESS && depend_record["category"] == "Предложение") {
			var activitycm3r = new SCFile("activitycm3r");
			activitycm3r["number"] = depend_record["number"];
			activitycm3r["datestamp"] = system.functions.tod();
			activitycm3r["operator"] = vars["$lo.operator"]["name"];
			activitycm3r["type"] = vars["$cm.activity"];
			activitycm3r["description"] = vars["$cm.update"];
			activitycm3r.doInsert();
			vars.$G_successfully_delivered = true;
		}
		screlation_rc = screlation.getNext();
	}
}