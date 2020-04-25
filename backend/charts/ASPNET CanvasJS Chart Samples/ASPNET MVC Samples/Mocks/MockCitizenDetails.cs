using ASPNET_MVC_Samples.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Mocks
{
    public class MockCitizenDetails
    {
        private List<CitizenDetails> citizens = null;
        const int NO_CITIZENS = 100;
        List<string> countries;
        Random rnd;

        public MockCitizenDetails()
        {
            rnd = new Random();
            countries = MockCountries.Get();
        }

        public List<CitizenDetails> Get()
        {
            if (citizens != null)
            {
                return citizens;
            }

            citizens = new List<CitizenDetails>();

            for (int index = 0; index < NO_CITIZENS; index++)
            {
                var citizen = new CitizenDetails()
                {
                    AgeInterval = "a",
                    Country = GetCountry(),
                    EducationLevel = GetEducationLevel(),
                    Environment = GetEnvironment(),
                    Gender = GetGender(),
                    GeneralHealthStatus = GetGeneralHealthStatus()
                };

                citizens.Add(citizen);
            }

            return citizens;
        }

        private string GetCountry()
        {
            int randInt = rnd.Next(0, countries.Count - 1);

            return countries[randInt];
        }

        private GeneralHealthStatus GetGeneralHealthStatus()
        {
            int randInt = rnd.Next(0, 4);

            return (GeneralHealthStatus)randInt;
        }

        private Gender GetGender()
        {
            int randInt = rnd.Next(0, 1);

            return (Gender)randInt;
        }

        private Models.Environment GetEnvironment()
        {
            int randInt = rnd.Next(0, 1);

            return (Models.Environment)randInt;
        }

        private EducationLevel GetEducationLevel()
        {
            int randInt = rnd.Next(0, 2);

            return (EducationLevel)randInt;
        }
    }
}