Rails.application.routes.draw do
  
  namespace :api do
  namespace :v1, defaults: { format: 'json'} do
    resources :greetings
  end
end
  
  get '*page', to: 'home#index', constraints: ->(reg) do
    !reg.xhr? && reg.format.html?
  end
  root "home#index"
end
