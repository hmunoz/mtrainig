package org.mtraining.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import org.mtraining.model.Suplemento;
import javax.persistence.ManyToOne;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class SuplementoTipoEntrenamiento implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @ManyToOne
   private Suplemento suplemento;

   @ManyToOne
   private TipoEntrenamiento tipoEntrenamiento;

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
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      if (id != null)
         result += "id: " + id;
      return result;
   }

   @Override
   public boolean equals(Object obj)
   {
      if (this == obj)
      {
         return true;
      }
      if (!(obj instanceof SuplementoTipoEntrenamiento))
      {
         return false;
      }
      SuplementoTipoEntrenamiento other = (SuplementoTipoEntrenamiento) obj;
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

   public Suplemento getSuplemento()
   {
      return this.suplemento;
   }

   public void setSuplemento(final Suplemento suplemento)
   {
      this.suplemento = suplemento;
   }

   public TipoEntrenamiento getTipoEntrenamiento()
   {
      return tipoEntrenamiento;
   }

   public void setTipoEntrenamiento(TipoEntrenamiento tipoEntrenamiento)
   {
      this.tipoEntrenamiento = tipoEntrenamiento;
   }

}