Rails.application.routes.draw do
  root "static_pages#home"
  devise_for :users

  get "about", to: "static_pages#about"

  namespace :crm do
    get "dashboard", to: "dashboard#main"
  end
end
