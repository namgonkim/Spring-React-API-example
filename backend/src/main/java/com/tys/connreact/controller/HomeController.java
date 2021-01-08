package com.tys.connreact.controller;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tys.connreact.model.BoardParam;

@RestController
public class HomeController {
	
	private final Logger log = LoggerFactory.getLogger(HomeController.class);

	@GetMapping("/api/hello")
	public HashMap<String,String> hello() {
		HashMap<String, String> result = new HashMap<>();
		result.put("message", "안녕하세요");
		return result;
	}
	
	@GetMapping("/api/main")
	public HashMap<String, String> getMain() {
		HashMap<String, String> result = new HashMap<>();
		result.put("message", "Main 페이지 입니다." );
		return result;
	}
	
	@GetMapping("/api/dashboard")
	public HashMap<String, String> getDashBoard() {
		HashMap<String, String> result = new HashMap<>();
		result.put("message", "Dashboard 페이지 입니다." );
		return result;
	}
	
	@PostMapping("/api/dashboard")
	public void postDashBoard(@RequestBody BoardParam param) {
		System.out.println("!!");
		System.out.println("받은 데이터는 " + param.toString());
		
		log.debug(param.toString());
	}

}
