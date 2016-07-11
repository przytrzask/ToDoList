<?php
if (is_ajax()) {
if (isset($_POST["task"]) && !empty($_POST["task"])) { //Checks if action value exists
$action = $_POST["task"];
test_function();
}
}

//Function to check if the request is an AJAX request
function is_ajax() {
return isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest';
}
function test_function(){
$return = $_POST;
$return["json"] = json_encode($return);
echo json_encode($return);
}
?>