Feature: Class schedules
  As a gym member
  I want to open the class schedules and reservations page
  So I can see available classes

  Scenario: Open Class Schedules and Reservations
    Given I am on the club page
    When I click "Class Schedules and Reservations"
    Then I should be taken to the class schedule or reservations page
