
/**
 * @author ahao
 * @type {string}
 */

const serverUrl = "http://127.0.0.1:8099";
//token 前端处理业务
//保存token
function savaToken(token) {
    if (! window.localStorage) {
        alert("浏览器不支持 请更换浏览器");

    }else {
        let storage = window.localStorage;
        storage["token"] = token;
    }
}

//删除token
function deleteToken() {
    if (! window.localStorage) {
        alert("浏览器不支持 请更换浏览器");

    }else {
        let storage = window.localStorage;
        storage.removeItem("token");
    }
}

//更新token
function updateToken(newToken) {
    if (! window.localStorage) {
        alert("浏览器不支持 请更换浏览器");
        return false;
    }else {
        let storage = window.localStorage;
        storage["token"] = newToken;
    }
}
//查询token
function selectToken(){
    if (! window.localStorage) {
        alert("浏览器不支持 请更换浏览器");
        return false;
    }else {
        let storage = window.localStorage;
        return storage["token"];
    }
}

function myAjax(url,param,requestMethod,successFun) {
    $.ajax({
        url:serverUrl+url,
        contentType: "application/json",
        headers:{
            'Token': selectToken()
        },
        data: param,
        dataType: "json",
        method: requestMethod,
        success:successFun
    })
}
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
