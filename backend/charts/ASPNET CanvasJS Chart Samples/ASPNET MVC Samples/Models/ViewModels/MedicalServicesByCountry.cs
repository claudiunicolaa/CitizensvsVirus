using ASPNET_MVC_Samples.Models.DataPoints;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Models.ViewModels
{
    public class MedicalServicesByCountry
    {
        public List<BasicDataPoint> FamilyDoctor { get; set; }
        public List<BasicDataPoint> SpecialisedMedicalCare { get; set; }
        public List<BasicDataPoint> AccessEmergencyMedicalCare { get; internal set; }
        public List<BasicDataPoint> FinancialPerspectiveAccess { get; internal set; }
    }
}