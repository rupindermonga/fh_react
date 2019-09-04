Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    namespace :v1, defaults: { format: 'json'} do
      get 'houses', to: 'houses#index'
  end
  # Forward all requests to StaticController#index but requests
  # must be non-Ajax (!req.xhr?) and HTML Mime type (req.format.html?).
  # This doesn't include the root ("/") path.
    get '*page', to: 'static#index', contraints: ->(req) do
      !req.xhr? && req.format.html?
    end
    # Forward root to StaticController#index
    root 'static#index'
end

