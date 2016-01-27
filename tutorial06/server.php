
<?php

//ini_set('always_populate_raw_post_data', '-1');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

print_r($request);