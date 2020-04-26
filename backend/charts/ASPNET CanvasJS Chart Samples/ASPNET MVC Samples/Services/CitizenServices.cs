using ASPNET_MVC_Samples.Mocks;
using ASPNET_MVC_Samples.Models;
using ASPNET_MVC_Samples.Models.Basic;
using ASPNET_MVC_Samples.Models.DataPoints;
using ASPNET_MVC_Samples.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Services
{
    public static class CitizenServices
    {
        private static List<BasicDataPoint> countryDataPoints;
        private static List<BasicDataPoint> requiredServicesDataPoints;
        private static List<BasicDataPoint> requiredEmergencyDataPoints;
        private static List<MedicalServicesDataPoint> medicalServicessDataPoint;
        private static Dictionary<string, MedicalServicesByCountry> medicalServicesByCountry = new Dictionary<string, MedicalServicesByCountry>();
        public static List<BasicDataPoint> GetCitizensByCountryDataPoints()
        {
            if (countryDataPoints != null)
            {
                return countryDataPoints;
            }

            var mockCitizens = new MockCitizenDetails();
            var citizens = mockCitizens.Get();
            var countries = MockCountries.Get();
            var citizensPerCountry = new Dictionary<string, int>();

            countryDataPoints = new List<BasicDataPoint>();
            foreach (var country in countries)
            {
                if (!citizensPerCountry.Keys.Contains(country))
                {
                    var citizensFromCountry = citizens.Where(c => c.Country == country).Count();
                    citizensPerCountry.Add(country, citizensFromCountry);
                    
                    if (citizensFromCountry > 0)
                    {
                        var countryDataPoint = new BasicDataPoint()
                        {
                            Label = country,
                            LegendText = country,
                            Y = (double)citizensFromCountry * 100/ (double)citizens.Count
                        };

                        countryDataPoints.Add(countryDataPoint);
                    }
                }
            }

            return countryDataPoints;
        }

        public static List<BasicDataPoint> GetCitizensRequiredServices()
        {
            if (requiredServicesDataPoints != null)
            {
                return requiredServicesDataPoints;
            }

            requiredServicesDataPoints = new List<BasicDataPoint>();
            var citizens = new MockCitizen().Get();
            var countries = MockCountries.Get();
            var citizensPerCountry = new Dictionary<string, int>();

            foreach (var country in countries)
            {
                if (!citizensPerCountry.Keys.Contains(country))
                {
                    var citizensFromCountry = citizens.Where(c => c.CitizenDetails.Country == country && c.MedicalServices.RequiredAccess).Count();
                    citizensPerCountry.Add(country, citizensFromCountry);

                    if (citizensFromCountry > 0)
                    {
                        var requiredServicesDataPoint = new BasicDataPoint()
                        {
                            Y = (double)citizensFromCountry ,
                            Label = country
                        };

                        requiredServicesDataPoints.Add(requiredServicesDataPoint);
                    }
                }
            }

            return requiredServicesDataPoints;
        }

        public static List<BasicDataPoint> GetCitizensRequiredEmergency()
        {
            if (requiredEmergencyDataPoints != null)
            {
                return requiredEmergencyDataPoints;
            }

            requiredEmergencyDataPoints = new List<BasicDataPoint>();
            var citizens = new MockCitizen().Get();
            var countries = MockCountries.Get();
            var citizensPerCountry = new Dictionary<string, int>();

            foreach (var country in countries)
            {
                if (!citizensPerCountry.Keys.Contains(country))
                {
                    var citizensFromCountry = citizens.Where(c => c.CitizenDetails.Country == country && c.MedicalServices.RequiredEmergency).Count();
                    citizensPerCountry.Add(country, citizensFromCountry);

                    if (citizensFromCountry > 0)
                    {
                        var requiredEmergencyDataPoint = new BasicDataPoint()
                        {
                            Y = (double)citizensFromCountry,
                            Label = country
                        };

                        requiredEmergencyDataPoints.Add(requiredEmergencyDataPoint);
                    }
                }
            }

            return requiredEmergencyDataPoints;
        }

        public static MedicalServicesByCountry GetMedicalServicesByCountry(string country)
        {
            if (medicalServicesByCountry.Keys.Contains(country))
            {
                return medicalServicesByCountry[country];
            }

            var mockCitizens = new MockCitizen();
            var citizens = mockCitizens.Get();
            var countries = MockCountries.Get();
            var citizensPerCountry = new Dictionary<string, int>();

            var medicalServicesByCountryOneCitizen = new MedicalServicesByCountry();

            var citizensFromCountry = citizens.Where(c => c.CitizenDetails.Country == country);
            if (citizensFromCountry.Count() > 0)
                {
                medicalServicesByCountryOneCitizen.FamilyDoctor = GetFamilyDoctorForCitizens(citizensFromCountry);
                medicalServicesByCountryOneCitizen.SpecialisedMedicalCare = GetSpecialisedMedicatCareForCitizens(citizensFromCountry);
                medicalServicesByCountryOneCitizen.AccessEmergencyMedicalCare = GetAccessEmergencyMedicalCare(citizensFromCountry);
                medicalServicesByCountryOneCitizen.FinancialPerspectiveAccess = GetFinancialPerspectiveAccess(citizensFromCountry);
            }

            return medicalServicesByCountryOneCitizen;
        }

        private static List<BasicDataPoint> GetFamilyDoctorForCitizens(IEnumerable<Citizen> citizensFromCountry)
        {
            var size = citizensFromCountry.Count();
            var veryGood = citizensFromCountry.Where(c => c.MedicalServices.FamilyDoctor == AccessLevel.VeryGood).Count();
            var good = citizensFromCountry.Where(c => c.MedicalServices.FamilyDoctor == AccessLevel.Good).Count();
            var fair = citizensFromCountry.Where(c => c.MedicalServices.FamilyDoctor == AccessLevel.Fair).Count();
            var bad = citizensFromCountry.Where(c => c.MedicalServices.FamilyDoctor == AccessLevel.Bad).Count();
            var veryBad = citizensFromCountry.Where(c => c.MedicalServices.FamilyDoctor == AccessLevel.VeryBad).Count();

            var countryDataPoints = new List<BasicDataPoint>()
            {
                new BasicDataPoint(){ Label = "Very good", LegendText = "Very good", Y = (double)veryGood * 100 / (double)size },
                new BasicDataPoint(){ Label = "Good", LegendText = "Good", Y = (double)good * 100 / (double)size },
                new BasicDataPoint(){ Label = "Fair", LegendText = "Fair", Y = (double)fair * 100 / (double)size  },
                new BasicDataPoint(){ Label = "Bad", LegendText = "Bad" , Y = (double)bad * 100 / (double)size },
                new BasicDataPoint(){ Label = "Very Bad", LegendText = "Very Bad" , Y = (double)veryBad * 100 / (double)size }
            };

            return countryDataPoints;
        }
        private static List<BasicDataPoint> GetSpecialisedMedicatCareForCitizens(IEnumerable<Citizen> citizensFromCountry)
        {
            var size = citizensFromCountry.Count();
            var veryGood = citizensFromCountry.Where(c => c.MedicalServices.SpecialisedMedicatCare == AccessLevel.VeryGood).Count();
            var good = citizensFromCountry.Where(c => c.MedicalServices.SpecialisedMedicatCare == AccessLevel.Good).Count();
            var fair = citizensFromCountry.Where(c => c.MedicalServices.SpecialisedMedicatCare == AccessLevel.Fair).Count();
            var bad = citizensFromCountry.Where(c => c.MedicalServices.SpecialisedMedicatCare == AccessLevel.Bad).Count();
            var veryBad = citizensFromCountry.Where(c => c.MedicalServices.SpecialisedMedicatCare == AccessLevel.VeryBad).Count();

            var countryDataPoints = new List<BasicDataPoint>()
            {
                new BasicDataPoint(){ Label = "Very good", LegendText = "Very good", Y = (double)veryGood * 100 / (double)size },
                new BasicDataPoint(){ Label = "Good", LegendText = "Good", Y = (double)good * 100 / (double)size },
                new BasicDataPoint(){ Label = "Fair", LegendText = "Fair", Y = (double)fair * 100 / (double)size  },
                new BasicDataPoint(){ Label = "Bad", LegendText = "Bad" , Y = (double)bad * 100 / (double)size },
                new BasicDataPoint(){ Label = "Very Bad", LegendText = "Very Bad" , Y = (double)veryBad * 100 / (double)size }
            };

            return countryDataPoints;
        }

        private static List<BasicDataPoint> GetAccessEmergencyMedicalCare(IEnumerable<Citizen> citizensFromCountry)
        {
            var size = citizensFromCountry.Count();
            var veryGood = citizensFromCountry.Where(c => c.MedicalServices.EmergencyMedicatCare == AccessLevel.VeryGood).Count();
            var good = citizensFromCountry.Where(c => c.MedicalServices.EmergencyMedicatCare == AccessLevel.Good).Count();
            var fair = citizensFromCountry.Where(c => c.MedicalServices.EmergencyMedicatCare == AccessLevel.Fair).Count();
            var bad = citizensFromCountry.Where(c => c.MedicalServices.EmergencyMedicatCare == AccessLevel.Bad).Count();
            var veryBad = citizensFromCountry.Where(c => c.MedicalServices.EmergencyMedicatCare == AccessLevel.VeryBad).Count();

            var countryDataPoints = new List<BasicDataPoint>()
            {
                new BasicDataPoint(){ Label = "Very good", LegendText = "Very good", Y = (double)veryGood * 100 / (double)size },
                new BasicDataPoint(){ Label = "Good", LegendText = "Good", Y = (double)good * 100 / (double)size },
                new BasicDataPoint(){ Label = "Fair", LegendText = "Fair", Y = (double)fair * 100 / (double)size  },
                new BasicDataPoint(){ Label = "Bad", LegendText = "Bad" , Y = (double)bad * 100 / (double)size },
                new BasicDataPoint(){ Label = "Very Bad", LegendText = "Very Bad" , Y = (double)veryBad * 100 / (double)size }
            };

            return countryDataPoints;
        }

        private static List<BasicDataPoint> GetFinancialPerspectiveAccess(IEnumerable<Citizen> citizensFromCountry)
        {
            var size = citizensFromCountry.Count();
            var high = citizensFromCountry.Where(c => c.MedicalServices.FinancialPerspective == CostLevel.HighCost).Count();
            var fair = citizensFromCountry.Where(c => c.MedicalServices.FinancialPerspective == CostLevel.FairCost).Count();
            var low = citizensFromCountry.Where(c => c.MedicalServices.FinancialPerspective == CostLevel.LowCost).Count();
            var noCost = citizensFromCountry.Where(c => c.MedicalServices.FinancialPerspective == CostLevel.NoCost).Count();
            var limitedAccess = citizensFromCountry.Where(c => c.MedicalServices.FinancialPerspective == CostLevel.LimitedAccess).Count();
            var noAccess = citizensFromCountry.Where(c => c.MedicalServices.FinancialPerspective == CostLevel.NoAccess).Count();

            var countryDataPoints = new List<BasicDataPoint>()
            {
                new BasicDataPoint(){ Label = "High Cost", LegendText = "High Cost", Y = (double)high * 100 / (double)size },
                new BasicDataPoint(){ Label = "Fair Cost", LegendText = "Fair Cost", Y = (double)fair * 100 / (double)size },
                new BasicDataPoint(){ Label = "Low Cost", LegendText = "Low Cost", Y = (double)low * 100 / (double)size  },
                new BasicDataPoint(){ Label = "No Cost", LegendText = "No Cost" , Y = (double)noCost * 100 / (double)size },
                new BasicDataPoint(){ Label = "Limited access due cost", LegendText = "Limited access" , Y = (double)limitedAccess * 100 / (double)size },
                new BasicDataPoint(){ Label = "No access due cost", LegendText = "No Access" , Y = (double)noAccess * 100 / (double)size }
            };

            return countryDataPoints;
        }
    }
}