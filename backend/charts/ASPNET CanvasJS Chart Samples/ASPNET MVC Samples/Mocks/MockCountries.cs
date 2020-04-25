using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace ASPNET_MVC_Samples.Mocks
{
    public static class MockCountries
    {
        private static List<string> countries = null;
        public static List<string> Get()
        {
            if (countries != null)
            {
                return countries;
            }

            countries = new List<string>();

            using (var reader = new StreamReader(@"D:\Projects\Hackathon\ASPNET CanvasJS Chart Samples\ASPNET MVC Samples\CSVs\listofeucountries_csv.csv"))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();

                    countries.Add(line);
                }
            }

            return countries;
        }
    }
}