package com.me.hello;

import java.util.List;

import com.me.hello.dto.RestResponseDto;
import com.me.hello.dto.UserDto;

public class ResponseFactory {

   public static RestResponseDto fromList(boolean success, List<?> list) {
      return new RestResponseDto(success, list);
   }

   public static RestResponseDto fromUserDto(boolean success, UserDto userDto) {
      return new RestResponseDto(success, userDto);
   }

}
