Rails.application.routes.draw do
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
end
