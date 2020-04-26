using ASPNET_MVC_Samples.Models.Basic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Mocks
{
    public class MockMedicalServices
    {
        private List<MedicalServices> medicalServices = null;
        const int NO_CITIZENS = 100;
        Random rnd;

        public MockMedicalServices()
        {
            rnd = new Random();
        }

        public List<MedicalServices> Get()
        {
            if (medicalServices != null)
            {
                return medicalServices;
            }

            medicalServices = new List<MedicalServices>();

            for (int index = 0; index < NO_CITIZENS; index++)
            {
                var medicalServicesForOne = new MedicalServices();

                medicalServicesForOne.RequiredAccess = GetBool();

                if (medicalServicesForOne.RequiredAccess == true)
                {
                    medicalServicesForOne.FamilyDoctor = GetAccessLevel();
                    medicalServicesForOne.SpecialisedMedicatCare = GetAccessLevel();
                    medicalServicesForOne.RequiredEmergency = GetBool();
                    medicalServicesForOne.EmergencyMedicatCare = GetAccessLevel();
                    medicalServicesForOne.FinancialPerspective = GetCostLevel();
                }

                medicalServices.Add(medicalServicesForOne);
            }

            return medicalServices;
        }

        private CostLevel GetCostLevel()
        {
            int randInt = rnd.Next(0, 5);

            return (CostLevel)randInt;
        }

        private AccessLevel GetAccessLevel()
        {
            int randInt = rnd.Next(0, 4);

            return (AccessLevel)randInt;
        }

        private bool GetBool()
        {
            int randInt = rnd.Next(0, 1);

            return randInt == 0;
        }
    }
}