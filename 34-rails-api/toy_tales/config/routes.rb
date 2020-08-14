Rails.application.routes.draw do
    # HTTPVERB "/URL", to: "nameOfController#methodName"
    get "/toys", to: "toys#index"
    post "/toys", to: "toys#create"
    patch "/toys/:id", to: "toys#update"
    delete "/toys/:id", to: "toys#destroy"

    patch "/toys/:id/increase", to: 'toys#increase'
end
