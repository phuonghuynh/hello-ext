package com.me.hello;

import com.me.hello.dto.RestResponseDto;

import java.util.List;

public class ResponseFactory {

   public static RestResponseDto fromList(boolean success, List list) {
      return new RestResponseDto(success, list);
   }
}
