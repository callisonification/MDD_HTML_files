<?php
	
	//url to retrieve json data
	$url = 'http://www.iheartquotes.com/api/v1/random?format=json&';
	$url .= 'max_characters=140&';
	$url .= 'source=prog_style+macintosh+osp_rules+hitchhiker+starwars&';
	$url .= 'show_permalink=false&';
	$url .= 'show_source=false';
	
	//initialize curl
	$ch = curl_init();
	
	//set curl options ( curl, option, url )
	curl_setopt($ch, CURLOPT_URL, $url);
	
	//execute curl and return result
	$result = curl_exec($ch);
	
	//close curl session
	curl_close($ch);
	
	//echo results
	echo($result);