using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Models.Basic
{
    public class Citizen
    {
        public CitizenDetails CitizenDetails { get; set; }

        public MedicalServices MedicalServices { get; set; }
    }
}