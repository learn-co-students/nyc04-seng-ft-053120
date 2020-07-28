# Auth in Rails

![](https://media.giphy.com/media/y0s36prnnGb5u/giphy.gif)

## Objectives

1. Understand, theoretically, how authentication and authorization work
    - Understand the _difference_ between authentication and authorization and how they fit under the umbrella topic
    _auth_
2. Discuss different encryption and hashing schemes, and `bcrypt` specifically
    - Do we want to ever store plaintext user passwords? (no)
3. Augment a user model in rails using `bcrypt`, `password_digest`, and `has_secure_password`
4. Expose this information in a rails app
5. Review sessions and cookies, as well as implement sign up, log in, and log out

## Part I

### Discussion

<p>
<details>
<summary> What's the difference between authentication & authorization?</summary>

<pre>
<ul>
<li>Authentication - verifying someone is who they say they are; identify</li>
<li>Authorization - what a user has permission to do; permit</li>
</ul>

<h3>An analogy:</h3>

<li>Authentication is like showing your ID at the club. Does your ID match your face & who you say you are?</li>

<li>Authorization is like the wrist band you're given - based on who you are, can you enter the club? Can you go to the VIP area?</li>
</pre>
</details>
</p>
<p>
<details>
<summary> Why can't we just store users' plaintext passwords?</summary>
<pre>
In our application, we're going to have a user table in our database with a username column and a password column. You should <strong>never</strong> store the passwords in plaintext in your database!

<h4>Here are several reasons why!</h4>
<ul>
<li>Someone with bad intentions could get access to the database! Who, you say?</li>
    <ul>
        <li>A disgruntled employee</li>
        <li>A hacker</li>
    </ul>
<li><a href="https://en.wikipedia.org/wiki/List_of_the_most_common_passwords">Some users reuse their passwords (terrible practice)</a> and if their password is compromised from our website, a hacker potentially gains access to other really important accounts of those users</li>
<li>Each & everyone of us has a responsibiility & duty as developers to protect our users' data</li>
</ul>
</pre>
</details>
</p>
<p>
<details>
<summary> What is hashing & how does it make password storage more secure? </summary>
<pre>
You can think of hashing as a digital fingerprint of different kinds of data. When a string has been “hashed” it means it has been turned into a scrambled representation of itself. Everytime we pass in a certain string through a hashing algorithm, we'll get the same output. 

"password123456" -> "fdjkfdhkjsfhdksjfdasd"
"password123456" -> "fdjkfdhkjsfhdksjfdasd"
"password321" -> "fdamniwewqq9320932"

<strong>There are two important notes to know about hashing:</strong>
<li>One is that it's irreversible; it's a one way operation. An analogy is that it's like a meat grinder. Once you grind the meat, you can't feed the meat back through the meat grinder and get the original state back. </li>

<li>The second note is that the algorithm for hashing doesn't change. Given the same input will produce the same output.</li>

</pre>
</details>
</p>
<p>
<details>
<summary> What are rainbow tables & how can they defeat a password hasing strategy? </summary>
<pre>
Rainbow tables are tables hackers make that consist of plain text passwords that match to their hashed equivalent. They give hackers an easy way to comapre an encrypted password with a plain text password. 

It's not enough to have just the plain text password and the hashed value because hackers can use rainbow tables to figure out how to get into users' accounts. We need something more to protect our passwords.
</pre>
</details>
</p>
<p>
<details>
<summary>What is salting? What is a salt? How can they defeat rainbow table attacks?</summary>
<pre>
A way to defeat rainbow table attacks is by adding additional information to the plain text password before it gets encrypted. We call this additional information a "salt". 

A new salt gets randonmly generated with every password. Typically, that salt value is appended to the plain text password and then the result is hashed. The hashed value and the salt are stored in the database.

"password1234" + "rieskfnsd" -> "rieskfnsdfsafsdfdsfbromtkgew"
"password1234" + "vnms,nkjg" -> "vnms,nkjgfdsaiqopqp2321;pokew"

</pre>
</details>
</p>

### Implementation 
- Create a `username` and `password_digest` field for authentication
- BCrypt: [`create` vs `new`, `==`](https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb)

## Part II
- Sign Up vs Login 
- When to use a "SessionsController" and when to use ApplicationController
- Locking down parts of our application
- Using information about our signed in user
- Logout

politician -< statement
user



politician -< statement
user -< statement

## Steps

### How does auth work in theory?

##### What is the difference between sign-in and sign up?

Sign-up happens once, and afterwards the information that is used to authenticate a user exists in the system for
sign-in.

Sign-up corresponds to _creating_ a new user. Sign-in is authenticating an already existing user with some identifying
piece of information.

##### What is authentication?

It boils down to a really interesting question: _Are you who you say you are?_ And we use the username/password as a
proxy for that. This is called [multi-factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication):
a method for confirming a user's identity via multiple pieces (factors) of identification, such as a username/password
that only the user has. Ideally, our users provide unique passwords for each site they sign up for and don't use
[common passwords](https://www.huffingtonpost.com/entry/2016-most-common-passwords_us_587f9663e4b0c147f0bc299d), but
that's not always the case.

##### What is the difference between Authentication and Authorization?

Authorization happens after authentication. It's about scope, and specific information. _What is the user allowed to
see/interact with?_; what is the user **authorized** to see? Simply proving your identity does not mean you have
unlimited power or authority; providing my driver's license to the TSA may prove my identity but it doesn't mean I'm
**authorized** to fly the plane.

![POWER! UNLIMITED POWER](https://media.giphy.com/media/xUA7ba9aksCuKR9dgA/giphy.gif)

---

##### How do passwords work?

Do websites save our passwords? And if they do, how are they stored? Should a plaintext password ever be stored?

##### What is the difference between hashing and encrypting?

Encryption lets us turn some string of information into another, random-looking string. That's it - it just garbles the information. 'Good' encryption has two key properties.

1. No one can tell what was in the original message. (No one without the secret key, that is!)
2. No one can change the information in the encrypted message.

These are called security against _eavesdropping_ and _tampering_, respectively.

Hashing is a little different: the ultimate goal of one-way hashing is that it cannot be feasibly reversed. Like putting something through a meat grinder or a paper shredder, we cannot reverse the process. This means that no one, not even those doing the hashing, are able to reverse the process.
Hiding this information from ourselves is good. Having access to the actual passwords is a dangerous liability! If someone had access to our database, then they would have the passwords associated with lots of email addresses, which would mean they could steal a ton of people's identities. People are bad at using new passwords for each website, so your password database likely contains people's gmail passwords!

![](https://media.giphy.com/media/fcaN0b9yGcwbm/giphy.gif)

---

#### Creating Users in our Rails App

- Run

  - `rails g resource User username password_digest avatar`
  - `rails db:migrate`

- Add `has_secure_password` to `app/models/user.rb`. `has_secure_password` comes from
  [`ActiveModel` and adds methods to set and authenticate against a BCrypt password](https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password):

```ruby
class User < ApplicationRecord
  has_secure_password
end
```

- You might also want to add some [validations](https://guides.rubyonrails.org/active_record_validations.html) to your
  users:

```ruby
class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: { case_sensitive: false }
end
```

---

#### Deep Dive into BCrypt and `has_secure_password`

- `BCrypt` allows us to [salt](<https://en.wikipedia.org/wiki/Salt_(cryptography)>) users' plaintext passwords before
  running them through a [hashing function](https://en.wikipedia.org/wiki/Cryptographic_hash_function). A hashing
  function is, basically, a _one way_ function. Similar to putting something in a meat grinder; we cannot _feasibly_
  reconstruct something that's been ground up by a meat grinder. We then store these passwords that have been 'digested'
  by `BCrypt` in our database.
  **[Never ever ever store your users' plaintext passwords in your database](https://blog.mozilla.org/webdev/2012/06/08/lets-talk-about-password-storage/).
  It's bad form and should be avoided at all costs.**

- Let's take a look at some of the functionality provided by `BCrypt`:

```ruby
# in rails console
> BCrypt::Password.create('P@ssw0rd')
 => "$2a$10$D0iXNNy/5r2YC5GC4ArGB.dNL6IpUzxH3WjCewb3FM8ciwsHBt0cq"
```

- `BCrypt::Password`
  [inherits from the Ruby `String` class](https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb#L23)
  and has its own [== instance method](https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb#L65)
  that allows us to run a plaintext password through `BCrypt` _using the same salt_ and compare it against an already
  digested password:

```ruby
# in rails console
> salted_pw = BCrypt::Password.create('P@ssw0rd')
  => "$2a$10$YQvJPemUzm8IdCCaHxiOOes6HMEHda/.Hl60cUoYb4X4fncgT8ubG"

> salted_pw.class
  => BCrypt::Password

> salted_pw == 'P@ssw0rd'
  => true
```

- `BCrypt` also provides a method that will take a stringified `password_digest` and turn it into an instance of
  `BCrypt::Password`, allowing us to call the over-written `==` method.

```ruby
# in rails console
> sample_digest = User.last.password_digest
  => "$2a$10$SJiIJnmQJ/A4z4fFG5EuE.aOoCjacFuQMVpVzQnhPSJKYLFCoqmWy"

> sample_digest.class
  => String

> sample_digest == 'P@ssword'
 => false

> bcrypt_sample_digest = BCrypt::Password.new(sample_digest)
  => "$2a$10$dw4sYcbLXc8XRX6YGc7ve.ot6LbYevMbSpFQZUaa8tm5NI8cxBPwa"

> bcrypt_sample_digest.class
  => BCrypt::Password

> bcrypt_sample_digest == 'P@ssw0rd'
  => true
```

![mind blown](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

- We have no way of storing instances of `BCrypt::Password` in our database. Instead, we're storing users' password
  digests **as strings**. Luckily, `has_secure_password` provides a way for us to compare a user's plaintext password to
  the `password_digest` we have in our database. If we were to build our own `User#authenticate` method using `BCrypt`,
  it might look something like this:

```ruby
class User < ApplicationRecord
  attr_accessor :password

  def authenticate(plaintext_password)
    if BCrypt::Password.new(self.password_digest) == plaintext_password
      self
    else
      false
    end
  end
end
```

```ruby
# in rails console
> User.last.authenticate('not my password')
  => false

> User.last.authenticate('P@ssw0rd')
  => #<User id: 21, username: "Guy", password_digest: "$2a$10$dw4sYcbLXc8XRX6YGc7ve.ot6LbYevMbSpFQZUaa8tm...", avatar: nil, created_at: "2018-08-31 02:11:15", updated_at: "2018-08-31 02:11:15", bio: "I love flavortown, USA">
```

- Instead of creating our own `User#authenticate` method, we can use
  [`ActiveModel#has_secure_password`](https://api.rubyonrails.org/classes/ActiveModel/SecurePassword/ClassMethods.html#method-i-has_secure_password):

```ruby
class User < ApplicationRecord
  has_secure_password
end
```

![salt bae](https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif)

#### End of BCrypt Deep Dive

---

### Using `bcrypt` to create passwords in Rails

What's cool about `bcrypt`? By design, it's slow. This means that anyone who wants to crack it has to take a long time
to brute-force passwords. It also allows you to define a column called `password_digest` and it will do the rest of the
work.

_Remember, convention over configuration._ And especially in this case, we generally don't have the time or energy to
build our own encryption that surpasses what already exists.

After installing the `bcrypt` gem, you can use a macro in your `user` model called `has_secure_password`, which does a
lot of the integration for you. Go in and test this in the console. You can show how the `user` model ends up with a
`password_digest` attribute even though you send in `password` through the `create`. Do it again, this time with a
`password_confirmation` in the initialization hash. You can show how rails rejects the transaction.

Now that you've created a user with a password, you can do `user.authenticate("password")`

---

### Exposing user authentication in the UI

![](https://media.giphy.com/media/12OIWdzFhisgww/giphy.gif)

You can set up routes to work with users in the app.

```ruby
resources :users, only: [:new, :create, :show]
```

Now you can build a `form_for` for the `new` action:

```erb
<%= form_for @user do |f| %>
  <%= f.label :username %>
  <%= f.text_field :username %>
  <%= f.label :password %>
  <%= f.text_field :password %>
  <%= f.label :password_confirmation %>
  <%= f.text_field :password_confirmation %>
  <%= f.submit %>
<% end %>
```

Go through making the `create` controller:

```ruby
@user = User.new(user_params)
if @user.valid?
  @user.save
  redirect_to @user
else
  redirect_to new_user_path
end
```

Our form doesn't hide the password in the `input`, so change the text field to `f.password_field`.

So, to recap the necessary steps:

1.  `password_digest` as an attribute in our `users` table
2.  `bcrypt` installed in `Gemfile`
3.  `has_secure_password` in the `User` model

---

### Sessions and cookies

How does an application keep you logged in between requests? Remember, requests are stateless, so sessions allow us to
provide a user a sense of continuity as the interact with the website.

How do cookies fit into this? Ultimately, they're just key-value pairs. Each website has it's own cookies. Cookies
aren't secure, because they're not necessarily encrypted. We want to limit the amount and type of information stored in
cookies. Rails automatically stores and encrypts the session id in our cookie.

What information do we want to store in the cookie?

Sessions aren't really stored in the database, so we don't use a model for them. However, they still need routes, a
controller and views.

`routes.rb`

```ruby
get "signup", to: "users#new", as: "signup"
get "login", to: "sessions#new", as: "login"
post "sessions", to: "sessions#create", as: "sessions"
```

`sessions_controller.rb`

```ruby
def new
  # don't need anything in here, cause we're not setting up a
  # blank model to couple with the form
end

def create
  # no strong params cause there is no mass assignment
  @user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    redirect_to @user
  else
    redirect_to login_path
  end
end
```

- A few things to keep in mind about the code above:
  - `User.find_by({ username: 'Chandler Bing' })` will either return a user instance if that user can be found **OR** it will return `nil` if that user is not found.
  - In the event that the user is not found, `@user = User.find_by(username: params[:username])` will evaluate to `nil`.
  - Can we call `.authenticate` on `nil`? NO!! `NoMethodError (undefined method 'authenticate' for nil:NilClass)`
  - Ruby, however, is **lazy**. If Ruby encounters `&&`, both statements in the expression must evaluate to true. If the statement on the left side evaluates to false, Ruby will **not even look at the statement on the right**. Let's see an example:

```ruby
# in irb or a rails console
> true && true
  => true

> true && false
  => false


> true && not_a_variable
  NameError (undefined local variable or method `not_a_variable` for main:Object)

> false && not_a_variable
  => false
```

- Let's take another look at our previous example:

```ruby
@user = User.find_by(username: params[:username])
if @user && @user.authenticate(params[:password])
  redirect_to @user
end
```
---

- If `@user` is `nil`, which is falsey, **ruby will not even attempt to call `@user.authenticate`**. Without this catch, we'd get a `NoMethodError (undefined method 'authenticate' for nil:NilClass)`.


In certain cases, it's more secure to offer _less_ feedback to the user. This is why we both authenticate on the
existence of the username, and the password match. Still, it's helpful to use `flash[:error]` here.

`sessions/new.html.erb`

Use a `form_tag` instead of a `form_for` here, since we don't have a model to couple the form with.

_All forms need an action and a method, and here the action is `/sessions`._

```erb
<%= form_tag sessions_path do %>
  <%= label_tag "Username" %>
  <%= text_field_tag :username %>
  <%= label_tag "Password" %>
  <%= password_field_tag :password %>
  <%= submit_tag "Sign In" %>
<% end %>
```

#### Authorization and User-specific content

```ruby
session[:user_id] = @user.id
```

This allows us to save the user_id in the session cookie. `session` persists across the entire usage of the application,
and `flash` works just between 2 requests.

Show how this works and filter's the song by user (when logged in). However, you don't want to do this work over and
over again. Where can you do this? `ApplicationController`! Recall that all controllers inherit from
`ApplicationController`:

```ruby
class UsersController < ApplicationController
end
```

`application_controller.rb`

```ruby
def current_user
  if session[:user_id]
    @user = User.find_by(id: session[:user_id])
  else
  end
end

def logged_in?
  !!current_user
end
```

This is still not perfect. We want to be able to redirect to the login page if the user isn't logged in yet.

Add the following to `ApplicationController`:

```ruby
def authorized
  redirect_to login_path unless logged_in?
end
```

Now, in each controller/action that needs to do this redirect, you can add:

```ruby
before_action :authorized
```

Make sure not to use this for the login path. Instead, you should use:

```ruby
skip_before_action :authorized, only: [:new, :create] # or whatever onlys you need
```

#### Logging out

So how do you log out? By destroying the session.

`routes.rb`

```ruby
delete "sessions", to: "sessions#destroy"
```

`sessions_controller.rb`

```ruby
def destroy
  session.delete(:user_id) # or session[:user_id] = nil
end
```

We can have a button that shows a "Log Out" button if logged in, and a "Log In" button otherwise.

The best place to do this is in `application.html.erb`, but to expose our controller's method here, we must use the
`helper_method :logged_in?` macro in our `ApplicationController`

Finally, in `application.html.erb`:

```erb
<% if logged_in? %>
  <%= link_to "Logout", sessions_path, method: :delete %>
<% else %>
  <%= link_to "Login", login_path %>
<% end %>
```

---

## External Resources:

- [Multi-factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication)
- [Huffington Post List of Common Passwords](https://www.huffingtonpost.com/entry/2016-most-common-passwords_us_587f9663e4b0c147f0bc299d)
- [BCrypt gem on github](https://github.com/codahale/bcrypt-ruby#why-you-should-use-bcrypt)
- [BCrypt Password class source code](https://github.com/codahale/bcrypt-ruby/blob/master/lib/bcrypt/password.rb#L23)
- [Rails Docs on security](https://guides.rubyonrails.org/security.html#sessions)
- [Rails Docs on has_and_belongs_to_many](https://guides.rubyonrails.org/association_basics.html#the-has-and-belongs-to-many-association)
