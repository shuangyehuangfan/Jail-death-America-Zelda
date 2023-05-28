window.addEventListener('DOMContentLoaded', (event) => {
    // Get the dropdown menu elements
    var parametersDropdown = document.getElementById('parameters-dropdown');
    var additionalDropdown = document.getElementById('additional-dropdown');

    // Define our text and image data
var textData = {
    'Suicide': {
        'baseText': 'Reuters obtained data of death rates in the United States biggest jails, which compiles data from 2008 to 2019 in 523 jails or jail systems, reveals an important picture of the causes of death, including suicide, which can be analyzed by comparing data on age, gender, and race. In this analysis we looked at data on suicide, which revealed insights into how age, gender, and race interact with this particular cause of death. Map represents the number of suicides in each location recorded in the study. Taking advantage of the heat map, it can be observed which location has the highest number of cases. The parameters shown in the map details are State, County, Jail, and number of suicides. A total of 2,070 suicides were registered during the given time period. The Philadelphia Prison System Facilities (PA, Philadelphia) recorded the highest number of cases, with 150 deaths. Not far behind is the Harris County Jail system (TX, Harris) with 143 recorded deaths. In contrast, Malheur County Jail (OR, Malheur), Davison County Jail (SD, Davison), Lawrence County Jail (SD, Lawrence) and Beaver County Jail (UT, Beaver) had the lowest suicide rates. In general, it can be observed on the map that this cause of death is widespread in several places mentioned above, but it cannot be observed in all states, there are places where no suicides have been recorded.',
        'baseImage': 'pic1.jpg',
        'Age': {
            'text': 'Initially, it should be pointed out that there were a lot of missing (null) fields in the data on age, which do not provide a good enough basis for research. The number of missing data was 1037 out of 2070.The data provided shows the following age distribution: the youngest age included in prison suicide rates is 15 years (1 case) and the oldest is 74 years (1 case). If we look at the distribution between male and female, we can see that the highest number of suicides related to female is in the age group from 25-34 with 40 cases, and the next is in the age group from 35-44 with 31 cases. Data related to male also show similar trend, where the highest number of suicides is in the age group of 25-34 with 287 cases, followed by the age group of 35-44 with 242 cases. Based on the given data on age, it should be said that it seems to be an important indicator for suicide as a cause of death. It is likely that younger inmates may face higher suicide risks due to factors such as mental health conditions, impulsive behaviors, and the challenges associated with adjusting to the prison environment. Different factors of jail environment, such as limited access to mental health services, especially in a situation where prisoners are uncertain about their future, can have a marked impact on individuals in different age groups.',
            'image': 'pic3.jpg'
        },
        'Gender': {
            'text': 'Analyzing the data, gender plays a role in suicide rate indicators - men have an obvious predominance. It must be said that when comparing the genders among prisoners, historically men show a higher suicide rate than women.Here we look at the gender breakdown for each year from 2008-2019. The data provided shows a large male predominance in each year, and only 69 cases could not be read. Various factors may contribute to such a disproportionate difference, for example, given the important indicators that the proportion of men in jail in general is higher than that of women. Another factor is that there may be a different approach to prisoners access to healthcare, for example for psychological and emotional health, as each gender appears to suffer differently.',
            'image': 'pic4.jpg'
        },
        'Race': {
            'text': 'It cannot be denied that racial disparities can also be observed when analyzing suicide rates in prisons. The distribution of the number of suicides is not precisely specified, because there is blank data without information and there is data in one case where it says, “State says W (white), county says B (black)”, which together represents 8%. More extensive research shows that certain racial as well as ethnic groups face a higher risk of suicide while being in jail, however, these data indicate that there is clearly a predominance of suicides in "White" indicators with 63%, however, a fair number is also represented with 14% "Black" and 12% "Hispanic". This could be influenced by factors such as existing systemic inequities, discrimination, cultural differences, and racially diverse mental health services. It is important to point out that the data collected by Reuters is relatively general in its focus on suicides in prisons, however, it does not go in-depth to allow for a more precise analysis of various root causes or specific risk factors, given that suicides are triggered by very different and individual causes, both long-term, both suddenly causing these tragic events. More in-depth case studies and analysis would be necessary to further analyze the complex interaction between age, gender, and race, thus taking mental health and other factors into account. It is very important to analyze such data to address systemic inequities, lack of mental health support, improve suicide prevention strategies to reduce the risk of suicide among prisoners, and possibly help prisoners before the causes that could initiate suicide appear.  ',
            'image': 'pic5.jpg'
        },
        'Rates': {
            'text': 'Deaths in Jails (Cause: S)-2009 to 2019',
            'image': 'pic9.jpg'
        }
    },
    'Drugs / Alcohol': {
        'baseText': 'In chosen data set from 523 United States jails from 2008 to 2019, which include 7398 records with deaths 618 or 8,35% are drug and alcohol overdose related deaths. In the data set DA marked data included death cases related with acute effects from drugs and alcohol. The most cases have been observed in the Los Angeles County Sheriff`s Department, 11 cases, the San Diego County Central Detention Facility, 10 cases and the Philadelphia Prison System Facilities, 9 deaths. The lowest death rates have been observed in several locations, like Naples Jail Center, Winnebago County Jail , and other locations. In this map, it can be observed that the cause of death is spread across all states in lesser amounts. ',
        'baseImage': 'pic2.jpg',
        'Age': {
            'text': 'Youngest age for males who died from drug and alcohol overdose was 18 (2 cases recorded), but oldest was 78 (1 case recorded). For female age with highest death rate from drug and alcohol overdose is 22 years (3 cases of death)  and 62 years (1 case). In age perspective the biggest number of deaths is registered for man in the age of 34 years (16 cases) and 52 (10 cases). For female this age is 28, 32 and 41, (6 cases in each age group).',
            'image': 'pic6.jpg'
        },
        'Gender': {
            'text': 'In total from 618 cases only 143 (23,13%) was related to female, but however 461(74,59%) cases were related to men. Only in 14 (2,2%) records data regarding gender are missing. This makes to conclude that men has been more affected by additions which can cause lethal consequences. ',
            'image': 'pic7.jpg'
        },
        'Race': {
            'text': 'Viewing records in data set about race it is visible that majority of those who died from drugs and alcohol overdosing was white people. The proportion of them was 57,11%. Other high percentage is with Black people, in total 22,17%. The least amount is with Hawaiian (1 case) and Pacific islanders (1 case). ',
            'image': 'pic8.jpg'
        },
        'Rates': {
            'text': 'Big picture, we can see that rates are growing. Rapid growth was between 2016 and 2017 and then a drop in 2018. Why is it like that? Opioid epidemic in the United States started in late 1990s and then it gradually grew. But in October 2017, President Donald Trump declared the opioid crisis a public health emergency, directing federal agencies to prioritize resources and efforts to address the issue. The administration also created the President`s Commission on Combating Drug Addiction and the Opioid Crisis which issued recommendations to address the crisis. So, this decision of the US president might be the cause of drop in deaths from drugs and alcohol in 2018. Another reason for a drop could be Prescription Drug Monitoring Programs which are electronic databases that track controlled substance prescriptions in a state. States started to enhance these programs and control overprescription very carefully in 2017.  ',
            'image': 'pic10.jpg'
        }
    }
};


    // Add an event listener for the first dropdown menu change
    parametersDropdown.addEventListener('change', function() {
        // Reset the second dropdown
        additionalDropdown.selectedIndex = 0;

        // Hide or show the second dropdown depending on the first selection
        additionalDropdown.style.display = this.value ? 'block' : 'none';

        // Get the content div
        var contentDiv = document.getElementById('parameter-content1');

        // Reset the content div
        contentDiv.innerHTML = '';

         // Display the first level of text and image if available
        if (textData[this.value]) {
        contentDiv.innerHTML = '<img src="' + textData[this.value].baseImage + '" alt=""><p>' + textData[this.value].baseText + '</p>';
        }
});

    // Add an event listener for the second dropdown menu change
    additionalDropdown.addEventListener('change', function() {
        // Get the second content div
        var contentDiv2 = document.getElementById('parameter-content2');

        // Replace the content div with the second level of text and image if available
        if (parametersDropdown.value && this.value) {
            var additionalText = textData[parametersDropdown.value][this.value].text;
            var additionalImage = textData[parametersDropdown.value][this.value].image;
            if (additionalText && additionalImage) {
                contentDiv2.innerHTML = '<img src="' + additionalImage + '" alt=""><p>' + additionalText + '</p>';
            }
        }
    });
                      

});
