CONTENTS OF THIS FILE
---------------------
 * Introduction
 * Requirements
 * Installation
 * Configuration

 INTRODUCTION
 ------------
Twitter Search Block is a module that displays twitter embedded timeline in a block.The module provides:

   - Easy Twitter OAuth Configuration with simple form
   - General Block that displays embedded timeline for given search query
   - Twitter Search Query as a Field Type that can be attached to content/node
   - Content specific Twitter Block to which twitter search query field is applied

REQUIREMENTS
------------
The module requires two modules:
   - block
   - field
 
INSTALLATION
------------
  - Go to the page:https://www.drupal.org/project/2742925/git-instructions and download and enable the module

OAUTH CONFIGURATION
-------------------
Twitter uses OAuth to provide authorized access to its API.To get Twitter Access keys, you need to create Twitter Application which is mandatory to access Twitter.
Before starting any configuration we need to generate access keys:
  - Go to https://dev.twitter.com/apps/new and log in, if necessary
  - Enter your Application Name, Description and your website address. You can leave the callback URL empty.
  - Submit the form by clicking the "Create your Twitter Application"
  - Copy the consumer key (API key) and consumer secret(API Secret) from the screen into your application.
  - Click on "Keys and Access Tokens" tab.At the bottom of the page you will get an option to generate "Your Access Token".
  - Generate the "Access Token" and use it in the configuration of module

CONFIGURATION
-------------

- CONFIGURATION FOR INDEPENDENT TWITTER BLOCK WITH EMBEDDED TIMELINE :

1. Install the module.
2. Go to admin/config/services/configuration
3. Fill the following values : OAuth Access Token,OAuth Access Token Secret,Consumer Key,Consumer Secret
4. Click on next tab "Twitter Block Configuration".Fill the following details:
    4.1 Number of Tweets: Fill the count of number of embedded tweets you want to get displayed in the block
    4.2 Twitter Search Value: fill the search keyword for embedded twitter
    4.3 Result Type: Filter the search as mixed,recent or popular
5. Save all the configuration changes
6. Go to admin/structure/block.Click on place block.Select "Twitter Block: General".
9. Assign the above Block to desired region

- CONFIGURATION FOR CONTENT/NODE SPECIFIC TWITTER BLOCK WITH EMBEDDED TIMELINE :

1. Go to Open admin/config/services/configuration
2. Fill the following values : OAuth Access Token,OAuth Access Token Secret,Consumer Key,Consumer Secret
3. Click on next tab "Twitter Block Configuration".Fill the following details:
    3.1 Number of Tweets: Fill the count of number of embedded tweets you want to get displayed in the block
    3.2 Result Type: Filter the search as mixed,recent or popular.Save configuration changes
4. Go to admin-->structure-->content type-->manage field(Content type you want eg. Test)
5. Click on "Add field"
6. Select "Twitter Hashtags field" from drop down and give desired "label" to the field.
7. You have successfully added twitter search query as a field to you content type(eg. Test).
8. Go to admin/structure/block.Click on place block.Select "Twitter Block: Node".
9. Assign the above Block to specific content type(eg. Test)

