Feature: Sitio web
    Scenario: As a user, I can log into rhe secure area

    Given I am the "login" page
    When I login with "<username>" and "<password>"
    Then I should see a message saying "<message>"

    Example:
    | username  | password              | message                           |
    | tomsmith  | SuperSecretPassword!  | You logged into a secure area!    |
    | foobar    | barfoo                | Your username is invalid!         |

