using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Models
{
    public class CitizenDetails
    {
        public Gender Gender { get; set; }
        public string Country { get; set; }
        public string AgeInterval { get; set; }
        public Environment Environment { get; set; }
        public EducationLevel EducationLevel { get; set; }
        public GeneralHealthStatus GeneralHealthStatus { get; set; }
    }

    public enum Gender
    {
        Male,
        Female
    }

    public enum Environment
    {
        Rural,
        Urban
    }

    public enum GeneralHealthStatus
    {
        VeryGood,
        Good,
        Fair,
        Bad,
        VeryBad
    }

    public enum EducationLevel
    {
        School,
        HighSchool,
        University
    }
}