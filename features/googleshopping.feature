Feature: Google shopping filters
  In order to find the products that I want
  As a user on google shopping
  I want to be able to filter my results

  Scenario: I can find items less than $25
    Given I am on the google shopping page
    When I search for "Marmite"
    Then I get "Marmite" results
    When I click on up to $25
    Then None of the results are more than $25

  Scenario: I can find only books
    Given I am on the google shopping page
    When I search for "Marmite"
    Then I get "Marmite" results
    When I click on books
    Then the results are all books

  Scenario: I can find products sold by BritishCornerShop.co.uk
    Given I am on the google shopping page
    When I search for "Marmite"
    Then I get "Marmite" results
    When I click on BritishCornerShop.co.uk
    Then the results are for BritishCornerShop.co.uk

  Scenario: I can find products sold by Wayfair.ca
    Given I am on the google shopping page
    When I search for "Marmite"
    Then I get "Marmite" results
    When I click more
    When I click on Wayfair.ca
    Then the results are for Wayfair.ca

  Scenario: I can find products between $20 and $30
    Given I am on the google shopping page
    When I search for "Marmite"
    Then I get "Marmite" results
    When I enter $20
    When I enter $30
    When I click go
    Then the results are all between $20 and $30
