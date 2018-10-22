defmodule ThreeStarsWeb.Router do
  use ThreeStarsWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ThreeStarsWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end
   
   scope "/api", ThreeStarsWeb do
    pipe_through :api

    resources "/currencies", CurrenciesController, except: [:new, :edit]
    resources "/cources", CourcesController, except: [:new, :edit]

    #options   "/currencies", CurrenciesController, :options

    #resources("/currencies", CurrenciesController)
  end
end
