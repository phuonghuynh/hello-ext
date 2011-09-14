package com.me.hello;

import com.me.hello.dto.RestResponseDto;
import com.me.hello.dto.UserDto;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/users")
public class HomeController {

   @RequestMapping(method = RequestMethod.GET)
   @ResponseBody
   public RestResponseDto home(@RequestParam int page, @RequestParam int start, @RequestParam int limit) {
      System.out.println("HomeController: Passing through..." + page);
      List<UserDto> users = new ArrayList<UserDto>();
      UserDto userDto = new UserDto();
      userDto.setId("1");
      userDto.setName("Name A");
      userDto.setEmail("a.1@example.com");
      users.add(userDto);

      userDto = new UserDto();
      userDto.setId("2");
      userDto.setName("Name B");
      userDto.setEmail("a.1@example.com");
      users.add(userDto);

      userDto = new UserDto();
      userDto.setId("3");
      userDto.setName("Name C");
      userDto.setEmail("a.1@example.com");
      users.add(userDto);

      return ResponseFactory.fromList(true, users);
   }

   @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
   @ResponseBody
   public RestResponseDto updateUser(@RequestBody UserDto userDto) {
      System.out.println("id = " + userDto.getId());
      return ResponseFactory.fromUserDto(true, userDto);
   }

   @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
   @ResponseBody
   public RestResponseDto delete(@RequestBody UserDto userDto) {
      System.out.println("deleted id = " + userDto.getId());
//      throw new RuntimeException("aaa");
      return ResponseFactory.fromUserDto(true, userDto);
   }
}
