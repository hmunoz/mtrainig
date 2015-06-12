package org.mtraining.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import javax.persistence.Enumerated;
import org.mtraining.model.Role;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Usuario implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;

   @Column(name = "username", nullable = false)
   private String username;
   
   

   @Enumerated
   private Role role;

   @Version
   @Column(name = "version")
   private int version;

   public Long getId()
   {
      return this.id;
   }

   public void setId(final Long id)
   {
      this.id = id;
   }

   public int getVersion()
   {
      return this.version;
   }

   public void setVersion(final int version)
   {
      this.version = version;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof Usuario))
      {
         return false;
      }
      Usuario other = (Usuario) obj;
      if (id != null)
      {
         if (!id.equals(other.id))
         {
            return false;
         }
      }
      return true;
   }

   @Override
   public int hashCode()
   {
      final int prime = 31;
      int result = 1;
      result = prime * result + ((id == null) ? 0 : id.hashCode());
      return result;
   }

   public Role getRole()
   {
      return role;
   }

   public void setRole(Role role)
   {
      this.role = role;
   }

   
   
   public String getUsername() {
	return username;
}

public void setUsername(String username) {
	this.username = username;
}

@Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      result += "username: " + username;
      return result;
   }
}