Feature: Become our Patner
    As a user 
    I want to Become Partner with 21DONE

Scenario: Validate that user can not Join  by only filling Company Details
    Given I open the 21done english version
    When I click on "Become our partner" link
    And I click on "Join Us Now" button
    And I click on "Submit" button
    Then I should not able to sumbit the form
    