//функция записи лога в файл
//в начале кода добавляется строка:
log("\t"+new Date);

//в коде логируем нужные параметры:
	log("before getLastRC: "+rc);

//в конце кода функция:
function log(txt) {
	if (lib.settings.getSettingValue("RequestEnv", "logroutedestination")==="1") {
		system.functions.rtecall("log", vars.$L_void, txt);
	} else {
		logfilepath = "C:\\logs\\FILENAME.log";
		makeDir("C:\\logs\\"); 
		writeFile(logfilepath, 'a', txt+"\n");
	}
}