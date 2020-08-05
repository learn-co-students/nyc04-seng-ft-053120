Rails.application.routes.draw do
  get '/foxes/random', to: "foxes#random"
  resources :foxes, only: [:index, :show, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
