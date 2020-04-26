using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace ASPNET_MVC_Samples.Models.DataPoints
{
    //DataContract for Serializing Data - required to serve in JSON format
    [DataContract]
    public class BasicDataPoint
    {
        //Explicitly setting the name to be used while serializing to JSON. 
        [DataMember(Name = "label")]
        public string Label = null;

        //Explicitly setting the name to be used while serializing to JSON. 
        [DataMember(Name = "legendText")]
        public string LegendText = null;

        //Explicitly setting the name to be used while serializing to JSON.
        [DataMember(Name = "y")]
        public Nullable<double> Y = null;
    }
}