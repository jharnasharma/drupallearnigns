        var viewports = require('../Config/Viewports/viewports.json');
        require('utils').dump(viewports);

        var site = casper.cli.get('site');
      require('utils').dump(site);

        var basicConfig = require('../Config/Basic/basicConfig.json');
        require('utils').dump(basicConfig);

        var screenshot = '../Reports/screenshots/';
        var x = require('casper').selectXPath;
        var siteDomain = basicConfig.siteDomain;

        // sample code from Paul - read the SITEBASE that Jenkins injects
        var SITEBASE = casper.cli.options.SITEBASE;
        require('utils').dump("Injected SITEBASE is "+SITEBASE);

        site = SITEBASE;

        var siteUrl = siteDomain+'/insurance/Personal';
        var home_page_url = siteDomain+'/insurance/Personal';
        var about_page_url = siteDomain+'/insurance/About-CGU';
        var who_we_are_page_url = siteDomain+'/insurance/About-CGU/Who-we-are';
        
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
            
                //we can also capture screenshot by passing the resolutions in the method parameter
                //this.capture(screenshot+viewports.name+'/' + 'about_CGU.png', {top:0, left:0, width: viewports.viewport.width, height: viewports.viewport.height}

                //clicking on about CGU tab
                casper.then(function(){
                    this.clickLabel('About CGU','a');
                    this.wait(2000, function(){
                    this.echo('The url of about CGU page is ' + this.getCurrentUrl());
                    this.echo('The about CGU page title is ' + this.getTitle());
                     this.test.assertUrlMatch(site+'/About-CGU','URL matched');
                    this.test.assertTitle('About CGU | CGU Insurance','Assertion-2: Title of the about us page is as expected');
                    this.viewport(viewports.viewport.width, viewports.viewport.height);
                    this.capture(screenshot+viewports.name+'/' + 'about_CGU.png');
                    });
                });

                //clicking on first link under Who we Are block
                casper.then(function(){
                    this.clickLabel('Read all about who we are','a');
                    this.wait(2000, function(){
                    this.echo('The url of about CGU - who we are page is ' + this.getCurrentUrl());
                    this.echo('The about CGU - who we are page title is ' + this.getTitle());
                    this.test.assertUrlMatch(site+'/About-CGU/Who-we-are','URL matched');
                    this.test.assertTitle('CGU - Who We Are | CGU Insurance','Assertion-3: Title of the about CGU - who we are page is as expected');
                    this.viewport(viewports.viewport.width, viewports.viewport.height);
                    this.capture(screenshot+viewports.name+'/' + 'about_CGU_who_we_are.png');
                   });
                });

                //clicking on backed-by-IAG link present in Who we are page
                casper.then(function(){
                    this.clickLabel('backed by IAG','a');
                    this.wait(2000, function(){
                    this.echo('The url of backed by IAG link is ' + this.getCurrentUrl());
                    this.echo('Backed by IAG page title is ' + this.getTitle());
                    this.test.assertUrlMatch(site+'/about-cgu/Who-we-are/About-IAG','URL matched');
                    this.test.assertTitle('CGU - Who We Are | CGU Insurance','Assertion-4: Title of backed by IAG page is as expected');
                    this.viewport(viewports.viewport.width, viewports.viewport.height);
                    this.capture(screenshot+viewports.name+'/' + 'backed_by_IAG.png');
                  });
                });

                //clicking on who-are breadcrumb item present on the top to go back to previous page
                casper.then(function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.echo('The url of previous page is ' + this.getCurrentUrl());
                  this.echo('The page title of previous page who we are is  ' + this.getTitle());
                   this.test.assertUrlMatch(site+'/About-CGU/Who-we-are','URL matched');
                  this.test.assertTitle('CGU - Who We Are | CGU Insurance','Assertion-5: Title of backed by IAG page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Previous_page_who_we_are.png');
                  });
                });


                //clicking on first option - 'Our Vision' under Find out more about CGU block present on who we are page
                casper.then(function(){
                  this.clickLabel('Our vision','a');
                  this.wait(2000, function(){
                  this.echo('The url of Our Vision page is ' + this.getCurrentUrl());
                  this.echo('The page title of Our Vision page who we are is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/Our-Vision','URL matched');
                  this.test.assertTitle('Our Purpose, Ambition & Vision - Who We Are | CGU Insurance','Assertion-6: Title of Our Vision page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Our_Vision.png');
                   });
                });

                //clicking on who-we-are breadcrumb item and then moving on to next option 'customer commitment' under Find out more about CGU block
               casper.then(function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('Customer commitment','a');
                  this.wait(2000, function(){
                  this.echo('The url of Customer commitment page is ' + this.getCurrentUrl());
                  this.echo('The page title of customer commitment is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/Customer-Commitment',"URL matched");
                  this.test.assertTitle('Customer Commitment - Who We Are | CGU Insurance','Assertion-7: Title of Customer commitment page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Customer_Commitment.png');
       //@TODO - Write code to  check the elements on customer commitment page
                   });
               });
               });

    //clicking on who-we-are breadcrumb item and then moving on to next option 'Our sponsorships' under Find out more about CGU block
              casper.then(function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('Our sponsorships','a');
                  this.wait(2000, function(){
                  this.echo('The url of Our sponsorships page is ' + this.getCurrentUrl());
                  this.echo('The page title of Our sponsorships page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/Our-Sponsorships',"URL matched");
                  this.test.assertTitle('Our Sponsorships - Who We Are | CGU Insurance','Assertion-8: Title of Our sponsorships page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Our_Sponsorships.png');
                });
                   });
                      });

      // //clicking on the link present under About the NSW Waratahs block on Sponsorships page
              casper.then(function(){
                  this.wait(4000,function(){
                  this.clickLabel('Official NSW Waratahs website','a');     
                  this.wait(4000,function(){
                  this.echo('The url of NSW Waratahs page is ' + this.getCurrentUrl());
                  this.echo('The page title of NSW Waratahs page is  ' + this.getTitle());
                  this.test.assertUrlMatch('http://www.waratahs.com.au/',"URL matched");
                  this.test.assertTitle('Official Website NSW Waratahs Rugby - waratahs.com.au','Assertion-9: Title of NSW Waratahs page is as expected');
                  this.wait(4000,function(){
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'NSW_Waratahs.png');
                  });
                     });
                        });
                           });

      //clicking on the link present under About Collingwood Football Club block on Sponsorships page
               //casper.thenOpen('https://www.cgu.com.au/insurance/About-CGU/Who-we-are/Our-Sponsorships', function(){  
                casper.then(function(){
                  this.back();
                  this.wait(4000,function(){
                  this.clickLabel('Collingwood Football Club website','a');
                  this.wait(4000,function(){
                  this.echo('The url of Collingwood Football Club page is ' + this.getCurrentUrl());
                  this.echo('The page title of Collingwood Football Club page is  ' + this.getTitle());
                  this.test.assertUrlMatch('http://www.collingwoodfc.com.au/',"URL matched");
                  this.test.assertTitle('Official AFL Website of the Collingwood Football Club','Assertion-10: Title of Collingwood Football Club page is as expected');
                  this.wait(4000,function(){
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Collingwood_Football_Club.png');
                  });   
                     });
                        });
                           });

      //clicking on collingwoodFC link present on the bottom of the Our Sponsorships Page
                casper.then(function(){
                  this.back();
                  this.wait(4000,function(){
                  this.clickLabel('www.collingwoodfc.com.au/cgu','a');
                  this.wait(4000,function(){
                  this.echo('The url of Collingwood FC page is ' + this.getCurrentUrl());
                  this.wait(4000,function(){
                  this.echo('The page title of Collingwood FC page is  ' + this.getTitle());
                  this.test.assertUrlMatch('http://www.collingwoodfc.com.au/cgu',"URL matched");
                  this.test.assertTitle('CGU Insurance - collingwoodfc.com.au','Assertion-11: Title of Collingwood FC page is as expected');
                  this.wait(4000,function(){
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Collingwood_FC.png'); 
                  });   
                     });
                        });
                           });  
                              });   

      // //clicking on Competition terms & Conditions link present on the bottom of the Our Sponsorships Page
      // //@TODO - Look into the xpath as I am not able to click on Competition terms and conditions link
      //           casper.then(function(){
      //            // this.back();
      //             this.wait(6000,function(){
      //               this.test.assertExists(
      //   {
      //       type: 'xpath',
      //       path: '//a[@href="/insurance/documents/competitions/Terms-Conditions-CGU-win-a-signed-Waratahs-jersey.aspx"]',
      //   }, 'The element for clicking on the T&C exists');
      //               this.click(x("//a[text()='Competition terms and conditions.']"));
      //            // this.clickLabel('Competition terms and conditions.','a');
      //             this.echo('I have clicked on terms and conditions');
      //             this.wait(8000,function(){
      //             this.echo('The url of Terms & Conditions page is ' + this.getCurrentUrl());
      //             this.echo('The page title of Terms & Conditions page is  ' + this.getTitle());
      //             this.test.assertUrlMatch('http://www.cgu.com.au/insurance/cgu/files/52/52aae57c-75da-4d4c-a93a-96e6bf730545.pdf',"URL matched");
      //             this.test.assertTitle('Microsoft Word - Win a signed Waratahs jersey 04 06 15 FINAL - 52aae57c-75da-4d4c-a93a-96e6bf730545.pdf','Assertion-12: Title of Terms & Conditions page is as expected');
      //             this.wait(4000,function(){
      //             this.viewport(viewports.viewport.width, viewports.viewport.height);
      //             this.capture(screenshot+viewports.name+'/' + 'Terms_&_Conditions.png'); 
      //             });   
      //                });
      //                   });
      //                      });  

      //clicking on watch the stories under 'Collingwood and CGU block' present on the right side of the Our Sponsorships Page
                casper.then(function(){
                  this.back();
                  this.wait(4000,function(){
                  this.clickLabel('Watch the stories here','a');
                  this.wait(4000,function(){
                  this.echo('The url of Collingwood and CGU block page is ' + this.getCurrentUrl());
                  this.echo('The page title of Collingwood and CGU block page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/about-cgu/who-we-are/Collingwood','URL matched');
                  this.test.assertTitle('CGU - Who We Are | CGU Insurance','Assertion-13: Title of Collingwood and CGU block page is as expected');
                  this.wait(4000,function(){
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Collingwood_&_CGU block.png'); 
                  });   
                     });
                        });
                           });   

      //going back to previous page and then clicking on who-we-are breadcrumb item and then moving on to next option 'Shareholders' under Find out more about CGU block                                
                casper.then(function(){
                  this.back();
                  this.wait(2000,function(){
              //    this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('Shareholders','a');
                  this.wait(2000, function(){
                  this.echo('The url of Shareholders page is ' + this.getCurrentUrl());
                  this.echo('The page title of shareholder page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/shareholders','URL matched');
                  this.test.assertTitle('Shareholders - Who We Are | CGU Insurance','Assertion-14: Title of Shareholder page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Shareholder.png');
                });
                   });
                      });
                         });

      //clicking on the 'Go to IAG's shareholder centre' option present on Shareholder page
                casper.then(function(){
                  this.wait(4000, function(){
                  this.clickLabel("Go to IAG's shareholder centre", 'a');
                  this.wait(6000, function(){
                  this.echo('The url of Shareholder Centre page is ' + this.getCurrentUrl());
                  this.echo('The page title of shareholder centre page is  ' + this.getTitle());
                  this.test.assertUrlMatch('http://www.iag.com.au/','URL matched');
                  this.test.assertTitle('IAG Limited','Assertion-15: Title of Go to IAG shareholder centre page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Shareholder_Centre_Page.png');
                });
                   });
                      });
                         

      //going back to previous page and then clicking on who-we-are breadcrumb item and then moving on to next option 'About IAG' under Find out more about CGU block                                
                casper.then(function(){
                  this.back();
                  this.wait(2000,function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('About IAG','a');
                  this.wait(2000, function(){
                  this.echo('The url of About IAG page is ' + this.getCurrentUrl());
                  this.echo('The page title of About IAG page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/About-IAG','URL matched');
                  this.test.assertTitle('CGU - Who We Are | CGU Insurance','Assertion-16: Title of About IAG page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'About_IAG.png');
                });
                   });
                      });
                });

                //  //clicking on www.iag.com.au link present at the bottom of About IAG page   
                //  //@TODO - Handle moving scope to new tab as clicking in the link opens up in new tab.                             
                // casper.then(function(){
                //   this.wait(4000, function(){
                //   this.clickLabel('www.iag.com.au','a');
                //   this.wait(4000, function(){
                //   this.echo('The url of link on the IAG page is ' + this.getCurrentUrl());
                //   this.echo('The page title of link on the IAG page is  ' + this.getTitle());
                //   this.test.assertUrlMatch('www.iag.com.au','URL matched');
                //   this.test.assertTitle('IAG Limited','Assertion-17: Title of link on About IAG page is as expected');
                //   this.viewport(viewports.viewport.width, viewports.viewport.height);
                //   this.capture(screenshot+viewports.name+'/' + 'About_IAG_link.png');
                // });
                //    });
                //       });
                
                //clicking on who-we-are breadcrumb item and then moving on to next option 'Our Leadership' under Find out more about CGU block                                
                casper.then(function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('Our leadership','a');
                  this.wait(2000, function(){
                  this.echo('The url of Our Leadership page is ' + this.getCurrentUrl());
                  this.echo('The page title of Our Leadership page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/Our-Leadership','URL matched');
                  this.test.assertTitle('Our Leadership - Who We Are | CGU Insurance','Assertion-18: Title of Our Leadership page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Our_Leadership.png');
                });
                   });
                      });

                //clicking on who-we-are breadcrumb item and then moving on to next option 'Our Partners' under Find out more about CGU block                                
                casper.then(function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('Our partners','a');
                  this.wait(2000, function(){
                  this.echo('The url of Our Partners page is ' + this.getCurrentUrl());
                  this.echo('The page title of Our Partners page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/Our-Partners','URL matched');
                  this.test.assertTitle('Our Partners - Our Partners | CGU Insurance','Assertion-19: Title of Our Partners page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Our_Partners.png');
                });
                   });
                      });

                // //clicking on who-we-are breadcrumb item and then moving on to next option 'Community engagement' under Find out more about CGU block                                
                //@TODO - write the correct xpath for the clicking on community engagement
                // casper.then(function(){
                //   this.clickLabel('Who we are','a');
                //   this.wait(2000, function(){
                //   this.clickLabel('Community engagement','a');
                //   this.wait(2000, function(){
                //   this.echo('The url of Community engagement page is ' + this.getCurrentUrl());
                //   this.echo('The page title of Community engagement page is  ' + this.getTitle());
                //   this.test.assertUrlMatch(site+'/About-CGU/Who-we-are/Community-Engagement','URL matched');
                //   this.test.assertTitle('Community Engagement & CGU Foundation - Who We Are | CGU Insurance','Assertion-20: Title of Our Partners page is as expected');
                //   this.viewport(viewports.viewport.width, viewports.viewport.height);
                //   this.capture(screenshot+viewports.name+'/' + 'Community_Engagement.png');
                // });
                //    });
                //       });


                //@TODO - Handle the elements present on community engagement page as they open up in new tab

                //clicking on who-we-are breadcrumb item and then moving on to next option 'Our Rewards' under Find out more about CGU block                                
                casper.then(function(){
                  this.clickLabel('Who we are','a');
                  this.wait(2000, function(){
                  this.clickLabel('Our awards','a');
                  this.wait(2000, function(){
                  this.echo('The url of Our Rewards page is ' + this.getCurrentUrl());
                  this.echo('The page title of Our Rewards page is  ' + this.getTitle());
                  this.test.assertUrlMatch(site+'/about-cgu/who-we-are/our-awards','URL matched');
                  this.test.assertTitle('CGU - Who We Are | CGU Insurance','Assertion-21: Title of Our Rewards page is as expected');
                  this.viewport(viewports.viewport.width, viewports.viewport.height);
                  this.capture(screenshot+viewports.name+'/' + 'Our_Rewards.png');
                });
                   });
                      });
                         
                //Finish execution of casper after the test run
                casper.run(function(){
                   test.done();
            });
              });
      });
     