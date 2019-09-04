class V1::HousesController < ApplicationController
    def index
        render json: { :houses => [
            {
                :name => 'Rupinder',
                :guid => 'ABCD'
            }
        ]}.to_json
    end
end