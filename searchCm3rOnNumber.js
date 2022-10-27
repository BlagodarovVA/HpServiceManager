// поиск изменения по номеру
var Change=new SCFile("cm3r", SCFILE_READONLY);
var sChange = Change.doSelect("number=\"C313997\"");
checkTasks(Change);