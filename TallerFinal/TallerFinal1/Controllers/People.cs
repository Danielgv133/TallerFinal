using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using TallerFinal1.Clases;
using TallerFinal1.Models;

namespace TallerFinal1.Controllers
{
    public class People : ApiController
    {
        //Post Insertar 
        //Put Actualizar
        //Delete Eliminar 
        //Get obtener



        [HttpPost]
        [Route("Insertar")]
        public string Insertar([FromBody] Person Person)
        {
            clsPeople people = new clsPeople();
            people.person = Person;
            return people.Insertar();
        }

        [HttpPut]
        [Route("Actualizar")]
        public string Actualizar([FromBody] Person Person)
        {
            clsPeople people = new clsPeople();
            people.person = Person;
            return people.Actualizar();
        }

        [HttpDelete]
        [Route("Eliminar")]
        public string Eliminar([FromBody] Person Person)
        {
            clsPeople people = new clsPeople();
            people.person = Person;
            return people.Eliminar();
        }

        [HttpGet]
        [Route("Consultar")]
        public Person Consultar(string ID)
        {
            clsPeople people = new clsPeople();
            return people.Consultar(ID);
        } 


    }
}