# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :three_stars,
  ecto_repos: [ThreeStars.Repo]

# Configures the endpoint
config :three_stars, ThreeStarsWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "SfgZc1XvT9dCYxVIfO2PihYzFdmyei+9zPKqGc3X8Mq18vWsFToLyb5yq/+6DHtH",
  render_errors: [view: ThreeStarsWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: ThreeStars.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
