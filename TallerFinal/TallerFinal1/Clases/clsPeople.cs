using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using TallerFinal1.Models;

namespace TallerFinal1.Clases
{
    public class clsPeople
    {
        //Manipular datos a travez del entity framework haciendo un llamado del objeto

        Taller1Entities3 tallerEntities = new Taller1Entities3();

        //creo un objeto de propuiedad del tipo Cliente para poder usar sus cosas

        public Person person { get; set; }

        public string Insertar()
        {
            try
            {
                //Invocar los datos de la clase que quiero grabar y  uso metodo add

                tallerEntities.People.Add(person);
                tallerEntities.SaveChanges();
                return "Se grabo la persona" + person.ID + " " + person.Nombre;

            }
            catch (Exception e)
            {
                return e.Message;
            }


        }

        public string Actualizar()
        {
            //Para actualizar usamos metodo addorUpdate
            try
            {
                tallerEntities.People.AddOrUpdate(person);
                tallerEntities.SaveChanges();
                return "Se actualizó la persona" + person.ID + " " + person.Nombre;

            }
            catch (Exception e)
            {
                return e.Message;
            }
        }

        public Person Consultar(string ID)
        {
            //usamos variables lambda
            return tallerEntities.People.FirstOrDefault(c => c.ID == ID);



        }

        public string Eliminar()
        {
            //Primero consultamos si existe

            person = Consultar(person.ID);
            if (person == null)
            {
                return "El cliente no existe";
            }
            else
            {
                tallerEntities.People.Remove(person);
                tallerEntities.SaveChanges();
                return "Se elimino la persona" + person.ID + " " + person.Nombre;
            }

        }

    }
}