Feature: Angular Application Test

@second
Scenario:  Customer Login
Given I am on "AngularHomePage" search page
When I click customerlogin button
Then validate "customer" in currenturl
Then select the "Hermoine Granger" in the customerList
Then validate the "Hermoine Granger" is logged in