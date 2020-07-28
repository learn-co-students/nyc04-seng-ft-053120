Rails.application.routes.draw do
  resources :users
  resources :statements, only: [:new, :create, :index, :edit, :update, :destroy, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # index
  # get '/politicians', to: 'politicians#index'
  # show
  # get '/politicians/:id', to: 'politicians#show'
  # new
  # get '/politicians/new', to: 'politicians#new'
  # create
  # post '/politicians', to: 'politicians#create'
  # edit
  # get '/politicians/:id/edit, to 'politicians#edit'
  # update
  # patch '/politicians/:id', to: 'politicians#update'
  # destroy
  # delete '/politicians/:id', to: 'politicians#destroy'

  # resources :politicians, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  resources :politicians
  patch '/sessions/reset', to: 'sessions#reset_view_tracker'
  get '/signup', to: 'users#new', as: "signup"
  get '/login', to: 'sessions#new', as: 'login'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy', as: 'logout'
end
