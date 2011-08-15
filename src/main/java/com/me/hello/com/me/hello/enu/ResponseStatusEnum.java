package com.me.hello.com.me.hello.enu;

import java.io.Serializable;

public enum ResponseStatusEnum implements Serializable {
   SUCCESSFUL("success");

   private String code;

   ResponseStatusEnum(String code) {
      this.code = code;
   }

   public String getCode() {
      return code;
   }

   public void setCode(String code) {
      this.code = code;
   }
}
