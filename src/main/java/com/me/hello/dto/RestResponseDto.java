package com.me.hello.dto;


public class RestResponseDto {
   private boolean success;
   private Object results;

   public RestResponseDto(boolean success, Object results) {
      this.success = success;
      this.results = results;
   }

   public boolean getSuccess() {
      return success;
   }

   public void setSuccess(boolean success) {
      this.success = success;
   }

   public Object getResults() {
      return results;
   }

   public void setResults(Object results) {
      this.results = results;
   }
}
