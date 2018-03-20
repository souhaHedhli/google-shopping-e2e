Feature: Google shopping filters
  In order to find the products that I want
  As a user on google shopping
  I want to be able to filter my results

  Scenario: I can find items less than $40
    Given I am on the google shopping page
    And I search for "Marmite"
    Then I get "Marmite" results
    When I click on up to $40
    Then None of the results are more than $40

  Scenario: I can find only books
    Given I am on the google shopping page
    And I search for "Marmite"
    Then I get "Marmite" results
    When I click on books
    Then the results are all books

  Scenario: I can find products sold by BritishCornerShop.co.uk
    Given I am on the google shopping page
    And I search for "Marmite"
    Then I get "Marmite" results
    When I click on BritishCornerShop.co.uk
    Then the results are for BritishCornerShop.co.uk

  Scenario: I can find products sold by Wayfair.ca
    Given I am on the google shopping page
    And I search for "Marmite"
    Then I get "Marmite" results
    When I click more
    And I click on Wayfair.ca
    Then the results are for Wayfair.ca

  Scenario: I can find products between $20 and $30
    Given I am on the google shopping page
    And I search for "Marmite"
    Then I get "Marmite" results
    When I enter $20
    And I enter $30
    And I click go
    Then the results are all between $20 and $30
