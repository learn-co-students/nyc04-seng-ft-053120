# Backend Models
Teacher -< Classrooms -< Assignment

* Teacher:
    - Name
    - Subject 

* Classroom:
    - Name
    - Teacher_id

* Assignment:
    - Name
    - Classroom_id

1. Generate resources
2. Migrate
3. AR macros in the Model
4. Seed your database
5. Uncomment rack-cors
6. `config/initializers/cors` uncomment and "*" (restart server if necessary)

<!-- RINSE AND REPEAT THE FOLLOWING STEPS -->
7. Make sure that you have the routes built out (Ruby)
8. Make the fetch request (JS)
9. Send back a response (Ruby)
10. Handle the response (JS)


# SERIALIZERS: 
Structure a response
- `gem "active_model_serializers"` in our Gemfile
- `bundle install`
- `spring stop`
- `rails g serializer Model`
- In `config/initializers/ams.rb`, write:
 `ActiveModelSerializers.config.default_includes = '**'`
 
    - This allows you to call multiple serializers: (A -> B -> C -> D -> ...)
- Without the line above: (A -> B)
- Serializers shouldn't go backwards (A -> B -> A -> B -> ...) 🙅‍♂️🙅‍♀️