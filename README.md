## Inspiration
The COVID-19 pandemic makes us ask many questions and one of them is: how resilient are EU citizens during the pandemic crisis?

Our aim is to measure the EU citizens' resilience and their perception on the resilience of the health systems in the pandemic context based on 2 indicators (`Access To Medical Services`, `Access To Medication & Equipment`) while also gathering information about the impact of the pandemic of the above indicators on their `Trust levels` in the media, EU, national and local governments. The data will be available based on various `Demographic` variables online.

### The problem our project solves
EU and member states leadership don't have sufficient data on the citizens' perception regarding their resilience and the resilience of the health systems in the pandemic crisis. 

### The solution’s impact to the crisis
The present data gap could be covered at the EU level supporting the decision-making process in time of pandemic crises.


## What it does (The solution we bring to the table)
We built a [platform](https://euvsvirus-demo.web.app/) that incorporates a questionnaire consisting of 30 questions. All the answers are collected in a secure way and are open data. Also, the platform will generate a report (every other week) that will be sent to the European Commission officials. 

What we can use the data for:

* The data can be used to review leadership that has sufficient capacity and flexibility to effectively manage emergencies.

* The data can also reveal the perception of the public in terms of accessibility to healthcare, medication, and protective equipment together with any disruptions that might have been caused by the lack of it.

* Evaluation needs (disaster risk calculation), prior to any resilience specific policy design.

* Combining this data with pre-existent information available at both the EU level and OECD level (Income and Inequality, Poverty rates, GINI Index, Medical Capacity, Funding availability, and actions taken) we can correlate the information and find weak-points in policies and actions are taken. This can provide awareness and a basis for better policies moving forward.

* Review the levels of transparency and accountability from the perception of the public.

* Raise the levels of awareness and alertness of the public by promoting WHO information and identify new information needs. These will be highlighted in the report to the EU commission that the platform will generate.

### What we have done during the weekend

* Building the indicator system and based on 5 pillars: Medical Services Access, Medication & Equipment Access, Trust, Demographics, and Information

* Designing a questionnaire with 30 items with predetermined and open answers based on the 5 pillars:

    1. How is your health in general?
        * It is very good, Good, Fair, Bad, Very bad

    2. Since January, did you or your immediate family (spouse/partner, children, parents) required access to medical care?
        * Yes / No

    3. Since January, my and my immediate family’s access to our GP (Family Physician/Family Doctor) has been:
        * Very Good, Good, Fair, Bad, Very Bad

    4. Since January, my and my immediate family’s access to specialised medical care has been:
        * Very Good, Good, Fair, Bad, Very Bad

    5. Since January, me and my immediate family required emergency medical care:
        * Yes / No

    6. Since January, my an my immediate family’s access to urgency care has been:
        * Very Good, Good, Fair, Bad, Very Bad

    7. From a financial perspective, how would you rate your access to medical care:
        * I had no access to medical care due to the cost of it / I had limited access to medical care due to the cost of it / I had access to medical care at a very high cost for me and my family / I had access to medical care at a fair cost for me and my family / I had access to medical care at a low cost for me and my family / I had access to medical care at not cost for me and my family

    8. During this period of time, did you require access to any sort of medication/ treatment?
        * Yes / No

    9. Since January, my and my family’s access to our usual prescribed or over the counter medication has bee:
        * Very Good, Good, Normal, Bad, Very Bad

    10. Since January, my and my family’s access to other prescribed medication has been:
        * Very Good, Good, Normal, Bad, Very Bad

    11. How would you evaluate your accessibility to medication from a financial perspective:
        * It was more expensive / Prices were normal / Prices were lower / I couldn’t afford the medication

    12. How would you evaluate your access to sanitizing and protection equipment ever since January:
        * It was very easy for me to procure those / It was fairly easy for me to procure those / It was fairly difficult for me to procure those / It was very difficult for me to procure those / I didn’t have access to those

    13. How would you evaluate your access, FINANCIALLY, to sanitizing and protection equipment ever since January:
        * Very high costs for me and my family / High costs for me and my family / Fair costs for me and my family / Low costs for me and my family / Very low costs for me and my family

    14. In general, I would describe myself as trustful.
        * Strong agree, Agree, Neutral, Disagree, Strong disagree

    15. Please place the following item in order of how much you trust them, where item 1 is the most trustworthy and item 5 is the least
        * a. European Union; b. National Government; c. Local Government; d. The Media; e.The Church

    16. Which of the following have been your sources for information about the state of the world and the COVID-19 crisis? (Please check all that apply)
        * official websites, television networks, other people, social media, newspapers (electronic and printed versions), other (please specify)

    17. How often have you been using the checked sources to review the status of the crisis and actions taken? 
        * I haven’t followed the development / A couple of times a month / A couple of times a week / On a daily basis / Several times a day

    18. How would you rate your access to basic resources (food, water, shelter, clothing) during the COVID-19 pandemic?
        * Very Good, Good, Fair, Bad, Very Bad

    19. Have you and your immediate family stack on food reserves at the beginning of the COVID-19 crisis?
        * Yes / No

    20. Have you and your immediate family stack on medication at the beginning of the COVID-19 crisis?
        * Yes / No

    21. How much time have you spent helping the community during this crisis by volunteering (with or without a contract)? (shopping for vulnerable people, volunteering in an organisation)
        * None / 1-5 hours a week / 6-10 hours a week / 11-20 hours a week / 20+ hours a week

    22. How critical do you perceive to be the novel COVID-10 crisis?
        * The world as we know it will change / There will be long-lasting effect of the crisis / There will be some medium-term effect of the crisis / I believe we will go back to how things were by the end of next year / I believe we will go back to how things were by the end of this year

    23. How prepared do you consider yourself to have been to face the pandemic?
        * Very well prepared, Well prepared, I don’t know, Not prepared, Very badly prepared

    24. What is your Gender?
        * Male / Female / Others

    25. What is your age bracket?
        * 18-23 / 24-29 / 30-35 / 36-40 / 41-45 / 46-50 / 51-55 / 56-60 / 61-65 / 66-70 / >70

    26. What is your employment status?
        * Retired / Actively Working / Not in the workforce (unemployed) / Partly retired / Under technical unemployment

    27. Do you live in an urban or rural area?
        * Urban / Rural

    28. What is your latest completed educational level?
        * High-school / Professional school / Higher education (Bachelor Degree) / Graduate education (Master's Degree) / Doctoral Degree / Post-doctoral studies

    29. Your country of residence is:
        * list of all EU member countries

    30. Please specify what would you like to know about specific actions in times of COVID-19 pandemic?
        * Basic protective measures against the new coronavirus / Why should we maintain social distance? / How is coronavirus affecting people who get it?

* The platform where EU citizens can respond to the  questionnaire

* A back-office platform for data analyzes and generating the report

## What we learned
We've learned a lot about the high amount of data available to work with:

1. OECD DATA:
    * By country:
          * Income and Inequality ( Poorer households are more vulnerable to risks. Extensive research over the past 30 years shows that the poor suffer worst from disasters)
         * Equivalised disposable household income
         * Poverty rate
         * GINI Index (Social inequality translates into unequal access to services and opportunities. Furthermore, it may contribute to socially segregated urban development, which in turn generates new patterns of risk.)

2. Others:
    * Medical capacity:
        * Number of physicians per 100 000 people (ISO 37120)
        * Number of hospital beds per 100 000 people (ISO 37120)
        * Percentage of hospitals that have carried out disaster Flexible preparedness drills in the last year (adapted from UNISDR, 2008)

3. COVID-19 DATA
    * Funding availability and capacity

By corroborating our data with the above public information, we can create a basis for a strong evaluation of current policy impact and future improvements that can be brought to emergency management.

## What's next for Resilient EU Citizens (The necessities in order to continue the project)

* Enhance the UX of the platform

* Push the platform live in English

* Increase awareness around the platform and distribute it at the EU level (marketing)

* Build relationships with stakeholders interested in the data

* Share the data periodically with all stakeholders

* Review the data and publish our results

* Translate platform in all 23 EU official languages

## The value of our solution after the crisis

The platform can be used to measure resilience at citizens' level and increase information level and awareness for all emergency situations: earthquakes, floods, different types of epidemics, and others.  

### Team members (alphabetical order)

[Andrei Ardel](https://www.linkedin.com/in/andrei-ardel-5b829215b/)

[Claudiu Nicola](http://claudiunicola.xyz/)

[Mihai-Alexandru Chira](https://www.linkedin.com/in/machira)

[Marina Popa](https://www.linkedin.com/in/marina-popa-b2a566106/)

[Raluca Antonie](https://www.researchgate.net/profile/Raluca_Antonie)
