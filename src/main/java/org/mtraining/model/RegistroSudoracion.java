package org.mtraining.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class RegistroSudoracion implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @Column
   private float pesoInicial;

   @Column
   private float pesoFinal;

   @Column
   private float liquidoIngerido;

   @Column
   private float temperatura;

   @Column
   private float humedad;

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
      if (!(obj instanceof RegistroSudoracion))
      {
         return false;
      }
      RegistroSudoracion other = (RegistroSudoracion) obj;
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

   public float getPesoInicial()
   {
      return pesoInicial;
   }

   public void setPesoInicial(float pesoInicial)
   {
      this.pesoInicial = pesoInicial;
   }

   public float getPesoFinal()
   {
      return pesoFinal;
   }

   public void setPesoFinal(float pesoFinal)
   {
      this.pesoFinal = pesoFinal;
   }

   public float getLiquidoIngerido()
   {
      return liquidoIngerido;
   }

   public void setLiquidoIngerido(float liquidoIngerido)
   {
      this.liquidoIngerido = liquidoIngerido;
   }

   public float getTemperatura()
   {
      return temperatura;
   }

   public void setTemperatura(float temperatura)
   {
      this.temperatura = temperatura;
   }

   public float getHumedad()
   {
      return humedad;
   }

   public void setHumedad(float humedad)
   {
      this.humedad = humedad;
   }

   @Override
   public String toString()
   {
      String result = getClass().getSimpleName() + " ";
      result += "pesoInicial: " + pesoInicial;
      result += ", pesoFinal: " + pesoFinal;
      result += ", liquidoIngerido: " + liquidoIngerido;
      result += ", temperatura: " + temperatura;
      result += ", humedad: " + humedad;
      return result;
   }
}