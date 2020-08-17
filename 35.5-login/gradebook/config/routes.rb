Rails.application.routes.draw do
  get "/teachers", to: "teachers#index"
  get "/teachers/:id", to: "teachers#show"
  post "/teachers/login", to: "teachers#login"
  # VERB "/url", to: "controllerName#methodName"
end
 