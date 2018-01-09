var idx = lunr(function () {
  this.field('title', {boost: 10})
  this.field('excerpt')
  this.field('categories')
  this.field('tags')
  this.ref('id')
});



  
  
    idx.add({
      title: "Ageing well.",
      excerpt: "The county’s population age structure is older than the South East region and England as a whole. This presents challenges...",
      categories: [],
      tags: [],
      id: 0
    });
    
  
    idx.add({
      title: "Physical and mental health and wellbeing in later life",
      excerpt: "This section includes data and information about the physical and mental health of older people in West Sussex. Will use...",
      categories: [],
      tags: [],
      id: 1
    });
    
  

  
  
    idx.add({
      title: "Core Data Sets",
      excerpt: "This section includes the core datasets around population, illness and disability, for West Sussex. The population data section comprises annual...",
      categories: [],
      tags: [],
      id: 2
    });
    
  
    idx.add({
      title: "Population estimates",
      excerpt: "Population estimates Annual estimates of the population living in West Sussex are provided for a range of geographies (e.g. output...",
      categories: [],
      tags: [],
      id: 3
    });
    
  
    idx.add({
      title: "Population projections",
      excerpt: "Population projections The Office for National Statistics (ONS) produce population projections as an indication of the future size and age...",
      categories: [],
      tags: [],
      id: 4
    });
    
  
    idx.add({
      title: "Life expectancy",
      excerpt: "Life Expectancy Period expectation of life at a given age for an area, in a given time period, is an...",
      categories: [],
      tags: [],
      id: 5
    });
    
  

  
  
    idx.add({
      title: "Living & working well",
      excerpt: "This section contains key data and analyses on the working age population (usually classified as those aged 16-64) of West...",
      categories: [],
      tags: [],
      id: 6
    });
    
  
    idx.add({
      title: "Workforce Health and Disability",
      excerpt: "This section includes available data on the health and disability related demographics of the workforce in West Sussex. Please note:...",
      categories: [],
      tags: [],
      id: 7
    });
    
  
    idx.add({
      title: "Wider Determinants of Health",
      excerpt: "This section contains data sets, needs assessments and other documents which provide information on the wider determinants of health in...",
      categories: [],
      tags: [],
      id: 8
    });
    
  
    idx.add({
      title: "Environment",
      excerpt: "This section includes information about the environment including air quality and household waste. Downloads Local carbon dioxide (CO2) emissions estimates...",
      categories: [],
      tags: [],
      id: 9
    });
    
  
    idx.add({
      title: "Housing",
      excerpt: "This section contains information about housing, including, household composition, tenure, housing condition and homelessness. Downloads Housing Data Workbook December 2016...",
      categories: [],
      tags: [],
      id: 10
    });
    
  
    idx.add({
      title: "Neighbourhoods",
      excerpt: "This section contains information about infrastructure, community assets and behavioural data such as crime and deprivation. Downloads Crime rates Date...",
      categories: [],
      tags: [],
      id: 11
    });
    
  
    idx.add({
      title: "Health Behaviours",
      excerpt: "This section contains information about drugs and alcohol prevalence in West Sussex and the services supporting people to reduce their...",
      categories: [],
      tags: [],
      id: 12
    });
    
  
    idx.add({
      title: "Drugs and Alcohol",
      excerpt: "The following documents comprise data sets, needs assessments and maps providing an overview of specific health and wellbeing issues related...",
      categories: [],
      tags: [],
      id: 13
    });
    
  
    idx.add({
      title: "Physical activity and weight management",
      excerpt: "This section includes documents about physical activity, participation in sport, diet and nutrition and levels of obesity in the West...",
      categories: [],
      tags: [],
      id: 14
    });
    
  
    idx.add({
      title: "Sexual Health",
      excerpt: "This section contains documents about the sexual health of people living in West Sussex. Downloads West Sussex Sexual Health Needs...",
      categories: [],
      tags: [],
      id: 15
    });
    
  
    idx.add({
      title: "Smoking and Tobacco Use",
      excerpt: "This section contains data sets, needs assessments, briefings and other documents on the use of tobacco in West Sussex. Downloads...",
      categories: [],
      tags: [],
      id: 16
    });
    
  

  
  

  
  
    idx.add({
      title: "Ageing well.",
      excerpt: "The county’s population age structure is older than the South East region and England as a whole. This presents challenges...",
      categories: [],
      tags: [],
      id: 17
    });
    
  
    idx.add({
      title: "Physical and mental health and wellbeing in later life",
      excerpt: "This section includes data and information about the physical and mental health of older people in West Sussex. Will use...",
      categories: [],
      tags: [],
      id: 18
    });
    
  

  
  
    idx.add({
      title: "Starting & developing well",
      excerpt: "The health and wellbeing of children from conception to the age of two is a priority of the West Sussex...",
      categories: [],
      tags: [],
      id: 19
    });
    
  
    idx.add({
      title: "Maternity and Fertility",
      excerpt: "Downloads General fertility rates (GFR) total fertility rates (TFR) births 2001 - 2012 Date added: 30/07/2013 This file includes births...",
      categories: [],
      tags: [],
      id: 20
    });
    
  
    idx.add({
      title: "Birth and the newborn",
      excerpt: "Downloads Live births in hospital 2003 - 2007 Date added: 16/02/2012 Percentage of live births in hospital by local authority...",
      categories: [],
      tags: [],
      id: 21
    });
    
  
    idx.add({
      title: "0-4 years of age",
      excerpt: "Downloads Briefing - Child Disability Estimates Date added: 30/01/2017 This briefing incorporates work undertaken by the Institute of Public Care...",
      categories: [],
      tags: [],
      id: 22
    });
    
  
    idx.add({
      title: "School age children and education",
      excerpt: "This section contains data sets and information about school aged children and education services in West Sussex. Special Educational Needs...",
      categories: [],
      tags: [],
      id: 23
    });
    
  
    idx.add({
      title: "Young People",
      excerpt: "This section contains information and data sets about the young people living in West Sussex. The What About YOUth? survey...",
      categories: [],
      tags: [],
      id: 24
    });
    
  
    idx.add({
      title: "Child Health Profiles (formerly Children and Family Centre Profiles)",
      excerpt: "The West Sussex Public Health and Social Research Unit have been working on the production of a new Child Health...",
      categories: [],
      tags: ["child health","early years","under 5's"],
      id: 25
    });
    
  
    idx.add({
      title: "Child Health Profiles (formerly Children and Family Centre Profiles)",
      excerpt: "The West Sussex Public Health and Social Research Unit have been working on the production of a new Child Health...",
      categories: [],
      tags: ["child health","early years","under 5's"],
      id: 26
    });
    
  
    idx.add({
      title: "Children and Family Centre profiles (up to 2016)",
      excerpt: "The West Sussex Children’s Workforce Public Health data profile (2016) is an interactive dashboard that summarises a wide range of...",
      categories: [],
      tags: ["births","child health","early years","mother and child","under 5's"],
      id: 27
    });
    
  


console.log( jQuery.type(idx) );

var store = [
  
    
    
    
      
      {
        "title": "Ageing well.",
        "url": "http://localhost:4000/ageing-well/",
        "excerpt": "The county’s population age structure is older than the South East region and England as a whole. This presents challenges...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Physical and mental health and wellbeing in later life",
        "url": "http://localhost:4000/ageing-well/population-data/",
        "excerpt": "This section includes data and information about the physical and mental health of older people in West Sussex. Will use...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Core Data Sets",
        "url": "http://localhost:4000/core-datasets/",
        "excerpt": "This section includes the core datasets around population, illness and disability, for West Sussex. The population data section comprises annual...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Population estimates",
        "url": "http://localhost:4000/core-datasets/population-estimates/",
        "excerpt": "Population estimates Annual estimates of the population living in West Sussex are provided for a range of geographies (e.g. output...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Population projections",
        "url": "http://localhost:4000/core-datasets/population-projections/",
        "excerpt": "Population projections The Office for National Statistics (ONS) produce population projections as an indication of the future size and age...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Life expectancy",
        "url": "http://localhost:4000/core-datasets/life-expectancy/",
        "excerpt": "Life Expectancy Period expectation of life at a given age for an area, in a given time period, is an...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Living & working well",
        "url": "http://localhost:4000/living-well/",
        "excerpt": "This section contains key data and analyses on the working age population (usually classified as those aged 16-64) of West...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Workforce Health and Disability",
        "url": "http://localhost:4000/living-well/workforce-health/",
        "excerpt": "This section includes available data on the health and disability related demographics of the workforce in West Sussex. Please note:...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Wider Determinants of Health",
        "url": "http://localhost:4000/living-well/wider-determinants/",
        "excerpt": "This section contains data sets, needs assessments and other documents which provide information on the wider determinants of health in...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Environment",
        "url": "http://localhost:4000/living-well/environment/",
        "excerpt": "This section includes information about the environment including air quality and household waste. Downloads Local carbon dioxide (CO2) emissions estimates...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Housing",
        "url": "http://localhost:4000/living-well/housing/",
        "excerpt": "This section contains information about housing, including, household composition, tenure, housing condition and homelessness. Downloads Housing Data Workbook December 2016...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Neighbourhoods",
        "url": "http://localhost:4000/living-well/neighbourhoods/",
        "excerpt": "This section contains information about infrastructure, community assets and behavioural data such as crime and deprivation. Downloads Crime rates Date...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Health Behaviours",
        "url": "http://localhost:4000/living-well/health-behaviours/",
        "excerpt": "This section contains information about drugs and alcohol prevalence in West Sussex and the services supporting people to reduce their...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Drugs and Alcohol",
        "url": "http://localhost:4000/living-well/drugs-and-alcohol/",
        "excerpt": "The following documents comprise data sets, needs assessments and maps providing an overview of specific health and wellbeing issues related...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Physical activity and weight management",
        "url": "http://localhost:4000/living-well/weight-management/",
        "excerpt": "This section includes documents about physical activity, participation in sport, diet and nutrition and levels of obesity in the West...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Sexual Health",
        "url": "http://localhost:4000/living-well/sexual-health/",
        "excerpt": "This section contains documents about the sexual health of people living in West Sussex. Downloads West Sussex Sexual Health Needs...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Smoking and Tobacco Use",
        "url": "http://localhost:4000/living-well/smoking-and-tobacco/",
        "excerpt": "This section contains data sets, needs assessments, briefings and other documents on the use of tobacco in West Sussex. Downloads...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
  
    
    
    
      
      {
        "title": "Ageing well.",
        "url": "http://localhost:4000/ageing-well/",
        "excerpt": "The county’s population age structure is older than the South East region and England as a whole. This presents challenges...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Physical and mental health and wellbeing in later life",
        "url": "http://localhost:4000/ageing-well/population-data/",
        "excerpt": "This section includes data and information about the physical and mental health of older people in West Sussex. Will use...",
        "teaser":
          
            null
          
      },
    
  
    
    
    
      
      {
        "title": "Starting & developing well",
        "url": "http://localhost:4000/starting-well/",
        "excerpt": "The health and wellbeing of children from conception to the age of two is a priority of the West Sussex...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Maternity and Fertility",
        "url": "http://localhost:4000/starting-well/maternity-and-fertility/",
        "excerpt": "Downloads General fertility rates (GFR) total fertility rates (TFR) births 2001 - 2012 Date added: 30/07/2013 This file includes births...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Birth and the newborn",
        "url": "http://localhost:4000/starting-well/birth-newborn/",
        "excerpt": "Downloads Live births in hospital 2003 - 2007 Date added: 16/02/2012 Percentage of live births in hospital by local authority...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "0-4 years of age",
        "url": "http://localhost:4000/starting-well/early-years/",
        "excerpt": "Downloads Briefing - Child Disability Estimates Date added: 30/01/2017 This briefing incorporates work undertaken by the Institute of Public Care...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "School age children and education",
        "url": "http://localhost:4000/starting-well/education-children/",
        "excerpt": "This section contains data sets and information about school aged children and education services in West Sussex. Special Educational Needs...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Young People",
        "url": "http://localhost:4000/starting-well/young-people/",
        "excerpt": "This section contains information and data sets about the young people living in West Sussex. The What About YOUth? survey...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Child Health Profiles (formerly Children and Family Centre Profiles)",
        "url": "http://localhost:4000/starting-well/children-family-centre-profiles/",
        "excerpt": "The West Sussex Public Health and Social Research Unit have been working on the production of a new Child Health...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Child Health Profiles (formerly Children and Family Centre Profiles)",
        "url": "http://localhost:4000/starting-well/child-health-profiles-2017/",
        "excerpt": "The West Sussex Public Health and Social Research Unit have been working on the production of a new Child Health...",
        "teaser":
          
            null
          
      },
    
      
      {
        "title": "Children and Family Centre profiles (up to 2016)",
        "url": "http://localhost:4000/starting-well/child-health-profiles-2016/",
        "excerpt": "The West Sussex Children’s Workforce Public Health data profile (2016) is an interactive dashboard that summarises a wide range of...",
        "teaser":
          
            null
          
      }
    
  ]

$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    var query = $(this).val();
    var result = idx.search(query);
    resultdiv.empty();
    resultdiv.prepend('<p class="results__found">'+result.length+' Result(s) found</p>');
    for (var item in result) {
      var ref = result[item].ref;
      if(store[ref].teaser){
        var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<div class="archive__item-teaser">'+
                '<img src="'+store[ref].teaser+'" alt="">'+
              '</div>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      else{
    	  var searchitem =
          '<div class="list__item">'+
            '<article class="archive__item" itemscope itemtype="http://schema.org/CreativeWork">'+
              '<h2 class="archive__item-title" itemprop="headline">'+
                '<a href="'+store[ref].url+'" rel="permalink">'+store[ref].title+'</a>'+
              '</h2>'+
              '<p class="archive__item-excerpt" itemprop="description">'+store[ref].excerpt+'</p>'+
            '</article>'+
          '</div>';
      }
      resultdiv.append(searchitem);
    }
  });
});
