package org.mtraining.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import org.mtraining.model.Atleta;
import javax.persistence.ManyToOne;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class RegistroPeso implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @Column
   private float peso;

   @Column
   private float grasa;

   @Column
   private float musculo;

   @ManyToOne
   private Atleta atleta;

   @Column
   @Temporal(TemporalType.DATE)
   private Date fecha;

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
      if (!(obj instanceof RegistroPeso))
      {
         return false;
      }
      RegistroPeso other = (RegistroPeso) obj;
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

   public float getPeso()
   {
      return peso;
   }

   public void setPeso(float peso)
   {
      this.peso = peso;
   }

   public float getGrasa()
   {
      return grasa;
   }

   public void setGrasa(float grasa)
   {
      this.grasa = grasa;
   }

   public float getMusculo()
   {
      return musculo;
   }

   public void setMusculo(float musculo)
   {
      this.musculo = musculo;
   }

   public Atleta getAtleta()
   {
      return this.atleta;
   }

   public void setAtleta(final Atleta atleta)
   {
      this.atleta = atleta;
   }

   public Date getFecha()
   {
      return fecha;
   }

   public void setFecha(Date fecha)
   {
      this.fecha = fecha;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      result += "peso: " + peso;
      result += ", grasa: " + grasa;
      result += ", musculo: " + musculo;
      return result;
   }
}