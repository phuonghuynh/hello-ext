package com.me.hello.dto;

import java.io.Serializable;

public class UserDto implements Serializable {
   private static final long serialVersionUID = 6308169298817767559L;
   private String id;
   private String name, email;

   public String getId() {
      return id;
   }

   public void setId(String id) {
      this.id = id;
   }

   public String getName() {
      return name;
   }

   public void setName(String name) {
      this.name = name;
   }

   public String getEmail() {
      return email;
   }

   public void setEmail(String email) {
      this.email = email;
   }
}
