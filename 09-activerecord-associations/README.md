# Active Record Associations

#### SWABTs:
1. Seed data
2. Implement one-to-many relationships using Active Record has_many and belongs_to
3. Implement many-to-many relationships using Active Record has_many, :through
4. Describe the methods that the relationship macros add to a model



game -< review >- player

game 
    - title
    - genre
    - price
review
    - comment
    - rating
    - player_id
    - game_id
player
    - name
    - age


### ActiveRecord Set Up Review
1. Create class 
2. Create migration file (`rake db:create_migration NAME=migration_name`)
3. Write the migration code
4. Run the migration and check the schema/status (`rake db:migrate` && `rake db:migrate:status`)
5. Test the Ruby class in rake console

#### Outline
- Seeding
    - seed.rb
    - Faker gem
- Review migrations
- Association methods
    - Before ActiveRecord, how did we write association methods?
    - What do has_many and belongs_to do for us?



##### Extra Resources
- [ActiveRecord Associations Documentation](https://guides.rubyonrails.org/association_basics.html)
- [Faker Gem](https://github.com/faker-ruby/faker)