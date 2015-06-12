package org.mtraining.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import org.mtraining.model.Turno;
import javax.persistence.ManyToOne;
import java.util.Date;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Dia implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;
   @Version
   @Column(name = "version")
   private int version;

   @ManyToOne
   private Turno turnoManana;

   @ManyToOne
   private Turno turnoTarde;

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
      if (!(obj instanceof Dia))
      {
         return false;
      }
      Dia other = (Dia) obj;
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

   public Turno getTurnoManana()
   {
      return this.turnoManana;
   }

   public void setTurnoManana(final Turno turnoManana)
   {
      this.turnoManana = turnoManana;
   }

   public Turno getTurnoTarde()
   {
      return this.turnoTarde;
   }

   public void setTurnoTarde(final Turno turnoTarde)
   {
      this.turnoTarde = turnoTarde;
   }

   public Date getFecha()
   {
      return fecha;
   }

   public void setFecha(Date fecha)
   {
      this.fecha = fecha;
   }
}