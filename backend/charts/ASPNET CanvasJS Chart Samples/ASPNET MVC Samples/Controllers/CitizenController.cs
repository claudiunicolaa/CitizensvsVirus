using ASPNET_MVC_Samples.Models.ViewModels;
using ASPNET_MVC_Samples.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNET_MVC_Samples.Controllers
{
    public class CitizenController : Controller
    {
        // GET: Citizen
        public ActionResult Country()
        {
            ViewBag.DataPoints = JsonConvert.SerializeObject(CitizenServices.GetCitizensByCountryDataPoints());

            return View();
        }

        public ActionResult MedicalServices()
        {
            ViewBag.DataPointsRequiredServices = JsonConvert.SerializeObject(CitizenServices.GetCitizensRequiredServices());
            
            return View();
        }

        public ActionResult MedicalEmergency()
        {
            ViewBag.DataPointsRequiredEmergency = JsonConvert.SerializeObject(CitizenServices.GetCitizensRequiredEmergency());

            return View();
        }

        public ActionResult FamilyDoctor(string country)
        {
            var countries = Mocks.MockCountries.Get();
            var model = new CountryViewModel();
            model.Countries = GetSelectListItems(countries);

            if (country == null)
            {
                return View(model);
            }

            ViewBag.DataPointsFamilyDoctor = JsonConvert.SerializeObject(CitizenServices.GetMedicalServicesByCountry(country).FamilyDoctor);

            return View(model);
        }
        public ActionResult SpecialisedMedicalCare(string country)
        {
            var countries = Mocks.MockCountries.Get();
            var model = new CountryViewModel();
            model.Countries = GetSelectListItems(countries);

            if (country == null)
            {
                return View(model);
            }

            ViewBag.DataPointsSpecialisedMedicalCare = JsonConvert.SerializeObject(CitizenServices.GetMedicalServicesByCountry(country).SpecialisedMedicalCare);

            return View(model);
        }

        private IEnumerable<SelectListItem> GetSelectListItems(IEnumerable<string> elements)
        {
            // Create an empty list to hold result of the operation
            var selectList = new List<SelectListItem>();

            // For each string in the 'elements' variable, create a new SelectListItem object
            // that has both its Value and Text properties set to a particular value.
            // This will result in MVC rendering each item as:
            //     <option value="State Name">State Name</option>
            foreach (var element in elements)
            {
                selectList.Add(new SelectListItem
                {
                    Value = element,
                    Text = element
                });
            }

            return selectList;
        }
    }
}