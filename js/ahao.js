const serverUrl = "http://127.0.0.1:8099"


function convertNum(allDepartmentData) {
	var departMap = new Map();
	departMap.set(0,"公司");
	for(index in allDepartmentData) {
		departMap.set(allDepartmentData[index].did,allDepartmentData[index].dName);
	}
	for(index in allDepartmentData) {
		allDepartmentData[index].dParentId = departMap.get(allDepartmentData[index].dParentId);
	}
	
	return allDepartmentData;
}