using ASPNET_MVC_Samples.Models;
using ASPNET_MVC_Samples.Models.Basic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Mocks
{
    public class MockCitizen
    {
        List<Citizen> citizens;
        const int NO_CITIZENS = 100;
        Random rnd;

        public MockCitizen()
        {
            rnd = new Random();
        }

        public List<Citizen> Get()
        {
            if (citizens != null)
            {
                return citizens;
            }

            citizens = new List<Citizen>();
            for (int index = 0; index < NO_CITIZENS; index++)
            {
                var citizenDetails = new MockCitizenDetails().Get();
                var medicalServices = new MockMedicalServices().Get();

                var citizen = new Citizen()
                {
                    CitizenDetails = citizenDetails[index],
                    MedicalServices = medicalServices[index]
                };

                citizens.Add(citizen);
            }

            return citizens;
        }

    }
}