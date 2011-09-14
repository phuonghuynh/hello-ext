package com.me.hello.dto;

public class RestResponseDto {
   private boolean success;
   private Object result;

   public RestResponseDto(boolean success, Object results) {
      this.success = success;
      this.result = results;
   }

   public boolean getSuccess() {
      return success;
   }

   public void setSuccess(boolean success) {
      this.success = success;
   }

   public Object getResult() {
      return result;
   }

   public void setResult(Object result) {
      this.result = result;
   }

}
