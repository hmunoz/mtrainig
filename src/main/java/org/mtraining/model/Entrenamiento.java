package org.mtraining.model;

import javax.persistence.Entity;
import java.io.Serializable;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Version;
import java.lang.Override;
import org.mtraining.model.Localidad;
import javax.persistence.ManyToOne;
import org.mtraining.model.Atleta;
import java.util.Set;
import java.util.HashSet;
import javax.persistence.OneToMany;
import org.mtraining.model.TipoEntrenamiento;
import org.mtraining.model.Dia;
import javax.xml.bind.annotation.XmlRootElement;

@Entity
@XmlRootElement
public class Entrenamiento implements Serializable
{

   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   @Column(name = "id", updatable = false, nullable = false)
   private Long id;

   @ManyToOne
   private Localidad localidad;

   @Version
   @Column(name = "version")
   private int version;

   @OneToMany
   private Set<Atleta> atletas = new HashSet<Atleta>();

   @OneToMany
   private Set<Dia> dias = new HashSet<Dia>();

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
      if (!(obj instanceof Entrenamiento))
      {
         return false;
      }
      Entrenamiento other = (Entrenamiento) obj;
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

   public Localidad getLocalidad()
   {
      return this.localidad;
   }

   public void setLocalidad(final Localidad localidad)
   {
      this.localidad = localidad;
   }

   public Set<Atleta> getAtletas()
   {
      return this.atletas;
   }

   public void setAtletas(final Set<Atleta> atletas)
   {
      this.atletas = atletas;
   }

   public Set<Dia> getDias()
   {
      return this.dias;
   }

   public void setDias(final Set<Dia> dias)
   {
      this.dias = dias;
   }
}