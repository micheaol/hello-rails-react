class Api::V1::GreetingsController < ApplicationController
    def index
        greetings = Regard.find(Regard.pluck(:id).sample)
        render json: greetings.to_json
    end
end