var viewports = require('../Config/Viewports/viewports.json');
require('utils').dump(viewports);

var site = casper.cli.get('site');
require('utils').dump(site);


var basicConfig = require('../Config/Basic/basicConfig.json');
require('utils').dump(basicConfig);


var screenshot = '../Reports/screenshots/CGU_Careers_Block/';
var x = require('casper').selectXPath;
var mouse = require("mouse").create(casper);
var siteDomain = basicConfig.siteDomain;
var testingDomain = basicConfig.testingDomain;

var siteUrl = testingDomain+'/Personal';
var home_page_url = testingDomain+'/Personal';
var about_page_url = testingDomain+'/About-CGU';

casper.options.viewportSize = { width: 1024, height: 768 };
casper.each(viewports, function(casper, viewports){
 casper.options.viewportSize = { width: viewports.viewport.width, height: viewports.viewport.height };
 casper.test.begin('About_CGU',0,function suite(test){



            //Load the resource   
            casper.start(site, function () {
              //getting the page title for home page
              this.echo("+++++++++++++++" + site);
              this.echo('***'+viewports.name+'***');
              this.wait(6000, function(){
                this.echo('The url of home page is ' + casper.getCurrentUrl());
                this.echo('The home page title is ' + this.getTitle());
                this.test.assertUrlMatch(site+'/Personal','URL matched');
                this.test.assertTitle('Personal Insurance | Online Quotes | CGU Insurance','Assertion-1: Title of the home page is as expected');
              });
              this.viewport(viewports.viewport.width, viewports.viewport.height);
              this.capture(screenshot+viewports.name+'/' + 'HomePage.png');
            });
            

                //clicking on about CGU tab
                casper.then(function(){
                  this.clickLabel('About CGU','a');
                  this.wait(2000, function(){
                    this.echo('The url of about CGU page is ' + this.getCurrentUrl());
                    this.echo('The about CGU page title is ' + this.getTitle());
                    this.test.assertUrlMatch(site+'/About-CGU','URL matched');
                    this.test.assertTitle('About CGU | CGU Insurance','Assertion-2: Title of the about us page is as expected');
                  });
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'about_CGU.png');
                });
                

                //clicking on the different links present in the CGU-Careers block which is present on the landing page of About_CGU and verifying their page url and title
                //clicking on CGU Careers link
                casper.then(function(){
                //  this.waitUntilVisible(x('//a[text()="Visit our Careers section"]'),function onSuccess(){
                  this.wait(2000, function(){
                   this.clickLabel('Visit our Careers section','a');
                   this.wait(2000, function(){
                     this.echo('The url of Visit our careers section - CGU Careers page is ' + this.getCurrentUrl());
                     this.echo('The Visit our careers section - CGU Careers page title is ' + this.getTitle());
                     this.test.assertUrlMatch(site+'/About-CGU/careers','URL matched');
                     this.test.assertTitle('CGU Careers - Employment Benefits, Culture & More | CGU Insurance','Assertion-3: Title of the Visit our Careers section - CGU Careers page is as expected');
                   }); 
                 });
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'CGU-Career_Section.png');
          // },function onFailure(){
          //   console.log('Did not click on Visit our Careers section');
          // },10000);
        });

   //clicking on the different links present in the Find out more block which is present on the CGU Careers and verifying their page url and title
     //clicking on Join CGU page in Find out more block
     casper.then(function(){
      this.wait(2000, function(){
       this.click(x('//div[@class="inline-nav-block"]//a[text()="Join CGU"]'));
       this.wait(2000, function(){
         this.echo('The url of Join CGU page is ' + this.getCurrentUrl());
         this.echo('The Join CGU page title is ' + this.getTitle());
         this.test.assertUrlMatch(site+'/About-CGU/Careers/Join-CGU','URL matched');
         this.test.assertTitle('Join CGU - CGU Careers | CGU Insurance','Assertion-4: Title of Join CGU page is as expected');
       }); 
     });
      this.viewport(viewports.viewport.width, viewports.viewport.height);
      this.capture(screenshot+viewports.name+'/' + 'Join-CGU.png');

    });

     //clicking on Culture and Values link in Find out more block
     casper.then(function(){
       this.wait(2000, function(){
        this.clickLabel('Careers','a');
        this.wait(2000, function(){
          this.click(x('//div[@class="inline-nav-block"]//a[text()="Culture and values"]'));
          this.wait(2000, function(){
           this.echo('The url of Culture and Value page is ' + this.getCurrentUrl());
           this.echo('The Culture and Value page title is ' + this.getTitle());
           this.test.assertUrlMatch(site+'/About-CGU/Careers/Culture-and-values','URL matched');
           this.test.assertTitle('Culture and Values - CGU Careers | CGU Insurance','Assertion-5: Title of Culture and Value page is as expected');
         }); 
        });
      });
       this.viewport(viewports.viewport.width, viewports.viewport.height);
       this.capture(screenshot+viewports.name+'/' + 'Culture_and_Value.png');
     });

   //clicking on Diversity link in Find out more block
   casper.then(function(){
    this.wait(2000, function(){
      this.clickLabel('Careers','a');
      this.wait(2000, function(){
       this.click(x('//div[@class="inline-nav-block"]//a[text()="Diversity, inclusion and flexibility"]'));
       this.wait(2000, function(){
         this.echo('The url of Diversity page is ' + this.getCurrentUrl());
         this.echo('The Diversity page title is ' + this.getTitle());
         this.test.assertUrlMatch(site+'/About-CGU/Careers/Diversity,-inclusion-and-flexibility','URL matched');
         this.test.assertTitle('Diversity, Inclusion and Flexibility - CGU Careers | CGU Insurance','Assertion-6: Title of diversity page is as expected');
       }); 
     });
    });
    this.viewport(viewports.viewport.width, viewports.viewport.height);
    this.capture(screenshot+viewports.name+'/' + 'Diversity.png');
  });

     //clicking on Our Business Areas link in Find out more block
     casper.then(function(){
       this.wait(2000, function(){
        this.clickLabel('Careers','a');
        this.wait(2000, function(){
         this.click(x('//div[@class="inline-nav-block"]//a[text()="Our business areas"]'));
         this.wait(2000, function(){
           this.echo('The url of Our Business Areas page is ' + this.getCurrentUrl());
           this.echo('The Our Business Areas page title is ' + this.getTitle());
           this.test.assertUrlMatch(site+'/About-CGU/Careers/Our-business-areas','URL matched');
           this.test.assertTitle('Our Business - CGU Careers | CGU Insurance','Assertion-7: Title of Our Business Areas page is as expected');
         }); 
       });
      });
       this.viewport(viewports.viewport.width, viewports.viewport.height);
       this.capture(screenshot+viewports.name+'/' + 'Our_Business_Areas.png');
     });

   //clicking on Career development link in Find out more block
   casper.then(function(){
    this.wait(2000, function(){
      this.clickLabel('Careers','a');
      this.wait(2000, function(){
       this.click(x('//div[@class="inline-nav-block"]//a[text()="Career development"]'));
       this.wait(2000, function(){
         this.echo('The url of Career development page is ' + this.getCurrentUrl());
         this.echo('The Career development page title is ' + this.getTitle());
         this.test.assertUrlMatch(site+'/About-CGU/Careers/Career-development','URL matched');
         this.test.assertTitle('Career Development - CGU Careers | CGU Insurance','Assertion-8: Title of Career development page is as expected');
       }); 
     });
    });
    this.viewport(viewports.viewport.width, viewports.viewport.height);
    this.capture(screenshot+viewports.name+'/' + 'Career_development.png');
  });

     //clicking on Rewards link in Find out more block
     casper.then(function(){
      this.wait(2000, function(){
        this.clickLabel('Careers','a');
        this.wait(2000, function(){
         this.click(x('//div[@class="inline-nav-block"]//a[text()="Reward"]'));        
         this.wait(2000, function(){
           this.echo('The url of Rewards page is ' + this.getCurrentUrl());
           this.echo('The Rewards page title is ' + this.getTitle());
           this.test.assertUrlMatch(site+'/About-CGU/Careers/Reward','URL matched');
           this.test.assertTitle('Reward & Recognition - CGU Careers | CGU Insurance','Assertion-9: Title of Rewards page is as expected');
         }); 
       });
      });
      this.viewport(viewports.viewport.width, viewports.viewport.height);
      this.capture(screenshot+viewports.name+'/' + 'Rewards.png');
    });



   //clicking on Community engagement link in Find out more block
   casper.then(function(){
    this.wait(2000, function(){
      this.clickLabel('Careers','a');
      this.wait(2000, function(){
       this.click(x('//div[@class="inline-nav-block"]//a[text()="Community engagement"]'));        
       this.wait(2000, function(){
         this.echo('The url of Rewards page is ' + this.getCurrentUrl());
         this.echo('The Rewards page title is ' + this.getTitle());
         this.test.assertUrlMatch(site+'/About-CGU/Careers/Community-engagement','URL matched');
         this.test.assertTitle('Community Engagement - CGU Careers | CGU Insurance','Assertion-10: Title of Community-engagement page is as expected');
       }); 
     });
    });
    this.viewport(viewports.viewport.width, viewports.viewport.height);
    this.capture(screenshot+viewports.name+'/' + 'Community-engagement.png');
  });

  //clicking on Search for A role link present on top right at Career page of CGU under Search a role block
  casper.then(function(){
    this.wait(2000, function(){
      this.clickLabel('Careers','a');
      this.wait(4000, function(){
       this.click(x('//div[@class="call-to-action"]//a[text()="Job search"]'));        
       this.wait(2000, function(){
         this.echo('The url of Job search page is ' + this.getCurrentUrl());
         this.echo('The job search page title is ' + this.getTitle());
         this.test.assertUrlMatch('https://www.iagcareers.com.au/jobtools/JnCustomLogin.Login?in_organid=15941','URL matched');
         this.test.assertTitle('Insurance Australia Group Limited (IAG)','Assertion-11: Title of job search page is as expected');
       }); 
     });
    });
    this.viewport(viewports.viewport.width, viewports.viewport.height);
    this.capture(screenshot+viewports.name+'/' + 'Job_Search.png');
  });

     //  //clicking on Search for A role link present on top right at Career page of CGU under Search a role block
     //  //need to handle new tab as the link opens in new tab
     //  casper.then(function(){
     //   this.back();
     //   this.wait(2000, function(){
     //     this.click(x('//div[@class="widget-supplemental"]//a[text()="Find out more about IAG"]'));        
     //     this.wait(2000, function(){
     //       this.echo('The url of Find out more about IAG page is ' + this.getCurrentUrl());
     //       this.echo('The Find out more about IAG page title is ' + this.getTitle());
     //       this.test.assertUrlMatch('https://www.iagcareers.com.au/jobtools/JnCustomLogin.Login?in_organid=15941','URL matched');
     //     }); 
     //   });
     //   this.viewport(viewports.viewport.width, viewports.viewport.height);
     //   this.capture(screenshot+viewports.name+'/' + 'Job_Search.png');
     // });


  //clicking on Our People link present in the CGU-Careers block which is present on the landing page of About_CGU
  casper.then(function(){
   this.back();
   this.wait(2000, function(){
    this.clickLabel('About CGU','a');
    this.wait(2000, function(){
     this.click(x('//div[@class="about-landing-grid-item about-landing-who-we-are"]//a[text()="Our People"]'));        
     this.wait(2000, function(){
       this.echo('The url of Our People page is ' + this.getCurrentUrl());
       this.echo('The Our People page title is ' + this.getTitle());
       this.test.assertUrlMatch(site+'/About-CGU/careers/our-business-areas','URL matched');
       this.test.assertTitle('Our Business - CGU Careers | CGU Insurance','Assertion-13: Title of Our People page is as expected');
     }); 
   });
  });
   this.viewport(viewports.viewport.width, viewports.viewport.height);
   this.capture(screenshot+viewports.name+'/' + 'Our_People.png');
 });


 //Finish execution of casper after the test run
 casper.run(function(){
   test.done();
 });
});
});