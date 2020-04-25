using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ASPNET_MVC_Samples.Models.ViewModels
{
    public class CountryViewModel
    {
        public string Country { get; set; }
        public IEnumerable<SelectListItem> Countries { get; set; }
    }
}