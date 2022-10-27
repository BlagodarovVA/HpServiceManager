//отправка уведомления координаторам запроса через JS
var assignment = new SCFile("assignment", SCFILE_READONLY);
var users = [];
var fAssignment = assignment.doSelect("name=\""+record.assignment+"\"");
if (assignment.doSelect("name=\""+record['assigned.group']+"\"")==RC_SUCCESS) {
	if (assignment['coordinator.request'] != null) {
		users.push(assignment.coordinator_request);
	}
	if (assignment['coordinator2.request'] != null) {
		users.push(assignment.coordinator2_request);
	}	
}