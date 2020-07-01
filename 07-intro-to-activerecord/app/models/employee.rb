class Employee < ActiveRecord::Base

    # Create
    # Employee.new -> create a ruby instance
    # Employee#save -> save the ruby instance to the database
    # Employee.create -> new + save

    # Read
    # Employee.all -> returns all the rows from the table in the db
    # Employee.first/last -> returns first/last row from the table in db
    # Employee.find(id) -> returns row with that specified id
    # Employee.find_by(hash) -> returns the instance/row that meets the specified attributes
    # Employee.where(hash) -> returns all rows/instance that meet specified attributes

    # Update
    # Employee.save  -> update the row if there's an id
    # Employee#update(hash) -> updates the instance's/row's attributes that we specify

    # Delete
    # Employee#destroy -> destroys row from table in db
    # Employee.destroy_all -> destroys all rows from the table in the db

end