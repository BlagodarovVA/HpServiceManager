//--------------------------------------АВТОРИЗАЦИЯ КЕ------------------------------------------
// переводим инциденты в работу 
var IM = new SCFile("probsummary");
var rc_IM = IM.doSelect("current.phase=\"Категоризация\" and contact.service=\"integrator_cm\" and affected.item=\"Сервис Деск (HPSM)\"");
while (rc_IM == RC_SUCCESS)
{
	print(IM.number);
	IM["assignee.name"] = 'falcon';
	IM["problem.status"] = 'Обрабатывается';
	IM.doAction("save");
	rc_IM = IM.getNext();
}


// переводим инциденты в Решено 
var IM = new SCFile("probsummary");
var rc_IM = IM.doSelect("current.phase=\"Исследование и восстановление\" and contact.service=\"integrator_cm\" and affected.item=\"Сервис Деск (HPSM)\"");
//var rc_IM = IM.doSelect("number=\"IM217205\"");
while (rc_IM == RC_SUCCESS)
{
	IM.assignment = 'Тестовая группа';
	IM.assignee_name = 'falcon';
	IM.bapb_cause = 'Сб3';
	IM.bapb_cause_type = 'Сб213';
	IM.resolution_code = 'Решено';
	IM.resolution[0]="Закрыто после авторизации КЕ";
	IM.problem_status = 'Ожидает проверки решения';
	IM.doAction("save");
	print(IM.number);
	rc_IM = IM.getNext();
}


//авторизация КЕ, по которым создан инцидент
    funcs.transaction_start()
    var deviceanalyze = new SCFile( "deviceanalyze");   
    var findKE = deviceanalyze.doSelect('AuthorizationStatus="3"');
		if ( findKE == RC_SUCCESS )
 				{
 				do {
					deviceanalyze.AuthorizationStatus = 2;
					deviceanalyze.Diff = ["Авторизовано"];
					deviceanalyze.AnalyzeDate=system.functions.tod();
					rc = deviceanalyze.doAction("save");
	
					var device = new SCFile( "device", SCFILE_READONLY );
				    var findDevice = device.doSelect('logical.name="'+deviceanalyze.logical_name+'"');
					if ( findDevice == RC_SUCCESS )
				 				{
				 				do {
				 				    try {
										lib.BvCiAnalyzeService.AutorizeNode(device.logical_name);
									}
									catch(e){
											print(e);
									}
								    } while(device.getNext()==RC_SUCCESS)
							    }				    
				    } while(deviceanalyze.getNext()==RC_SUCCESS)
			    }
			    print("Перенос в baseline завершён.");
			    			    
    funcs.transaction_end();

//--------------------------------------АВТОРИЗАЦИЯ КЕ------------------------------------------